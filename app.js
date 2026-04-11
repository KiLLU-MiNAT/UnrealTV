
/* UnrealTV v6 */
(() => {
  const defaults = window.UNREAL_DATA || { accounts: [], featured: {}, liveChannels: [], movies: [], series: [] };
  const STORAGE = {
    profile: 'unrealtv_profile',
    live: 'unrealtv_live_channels',
    movies: 'unrealtv_movies',
    series: 'unrealtv_series',
    epg: 'unrealtv_epg_store',
    myList: 'unrealtv_my_list',
    profileData: 'unrealtv_profile_data',
    chat: 'unrealtv_chat_demo',
    accounts: 'unrealtv_accounts',
    texts: 'unrealtv_text_overrides',
    quickAccessSettings: 'unrealtv_quickaccess_settings'
  };

  const state = {
    selectedAccount: null,
    activeProfile: readJson(STORAGE.profile, null),
    accounts: readJson(STORAGE.accounts, defaults.accounts || []),
    liveChannels: readJson(STORAGE.live, defaults.liveChannels || []),
    movies: readJson(STORAGE.movies, defaults.movies || []),
    series: readJson(STORAGE.series, defaults.series || []),
    epgStore: readJson(STORAGE.epg, {}),
    myList: readJson(STORAGE.myList, []),
    profileData: readJson(STORAGE.profileData, {}),
    watchHistory: [],
    continueWatching: [],
    recommendations: [],
    textOverrides: readJson(STORAGE.texts, defaults.textOverrides || {}),
    quickAccessSettings: readJson(STORAGE.quickAccessSettings, defaults.quickAccessSettings || { limit: 4 }),
    currentView: 'home',
    currentLive: null,
    currentLiveSourceIndex: 0,
    currentDetails: null,
    currentDetailsSourceIndex: 0,
    currentEpisodesSeries: null,
    heroIndex: 0,
    heroTimer: null,
    heroPaused: false,
    currentChatRoom: { live: null, details: null },
    chat: { mode: 'demo', firestore: null, unsubscribers: { live: null, details: null }, reason: 'Demo-Modus aktiv.' },
    siteSync: { enabled: false, firestore: null, unsub: null, applyingRemote: false, lastRemoteHash: '' },
    localSync: { dataFileHandle: null, lastWriteAt: 0, supported: !!window.showSaveFilePicker },
    genreBrowser: { type: 'Film', genre: '' },
    adminTab: 'overview',
    adminSelections: { contentType: 'live', contentId: null, streamType: 'live', streamId: null, chatRoom: null },
    livePlaybackWatch: { interval: null, cleanup: null, switching: false, lastAdvanceAt: 0, lastTime: -1 }
  };

  const $ = (id) => document.getElementById(id);
  const els = {
    introSplash: $('introSplash'), loginScreen: $('loginScreen'), appScreen: $('appScreen'), profileGrid: $('profileGrid'),
    passwordOverlay: $('passwordOverlay'), closePasswordOverlay: $('closePasswordOverlay'),
    selectedProfileAvatar: $('selectedProfileAvatar'), selectedProfileName: $('selectedProfileName'),
    passwordInput: $('passwordInput'), enterAppBtn: $('enterAppBtn'), loginMessage: $('loginMessage'),
    profileMenuBtn: $('profileMenuBtn'), activeProfileAvatar: $('activeProfileAvatar'), activeProfileName: $('activeProfileName'),
    logoutAllBtn: $('logoutAllBtn'), mobileMenuToggle: $('mobileMenuToggle'), mobileMenuClose: $('mobileMenuClose'), mobileMenu: $('mobileMenu'), mobileMenuBackdrop: $('mobileMenuBackdrop'), mobileSearchToggle: $('mobileSearchToggle'), mobileConfigToggle: $('mobileConfigToggle'), mobileProfileBtn: $('mobileProfileBtn'), mobileActiveProfileAvatar: $('mobileActiveProfileAvatar'), mobileActiveProfileName: $('mobileActiveProfileName'), heroSection: $('heroSection'), homeView: $('homeView'), liveView: $('liveView'),
    seriesView: $('seriesView'), moviesView: $('moviesView'), mylistView: $('mylistView'), seriesGrid: $('seriesGrid'),
    seriesMobileShelves: $('seriesMobileShelves'), moviesMobileShelves: $('moviesMobileShelves'),
    moviesGrid: $('moviesGrid'), myListGrid: $('myListGrid'), genreBrowserModal: $('genreBrowserModal'), closeGenreBrowserModal: $('closeGenreBrowserModal'), genreBrowserType: $('genreBrowserType'), genreBrowserTitle: $('genreBrowserTitle'), genreBrowserGrid: $('genreBrowserGrid'), channelList: $('channelList'), channelCount: $('channelCount'),
    livePlayerHost: $('livePlayerHost'), livePlayer: $('livePlayer'), liveChannelTitle: $('liveChannelTitle'), liveChannelGroup: $('liveChannelGroup'),
    liveChannelNow: $('liveChannelNow'), epgNowNext: $('epgNowNext'), liveSourceSwitcher: $('liveSourceSwitcher'), liveSourceLabel: $('liveSourceLabel'), liveSourceButtons: $('liveSourceButtons'), searchToggle: $('searchToggle'), searchBar: $('searchBar'),
    globalSearchInput: $('globalSearchInput'), detailsModal: $('detailsModal'), closeDetailsModal: $('closeDetailsModal'),
    detailsBackdrop: $('detailsBackdrop'), detailsType: $('detailsType'), detailsTitle: $('detailsTitle'), detailsMeta: $('detailsMeta'),
    detailsDescription: $('detailsDescription'), detailsTags: $('detailsTags'), detailsPlayBtn: $('detailsPlayBtn'),
    detailsSaveBtn: $('detailsSaveBtn'), detailsEpisodesBtn: $('detailsEpisodesBtn'), detailsPlayerWrap: $('detailsPlayerWrap'), detailsPlayerHost: $('detailsPlayerHost'), detailsPlayer: $('detailsPlayer'), detailsSourceSwitcher: $('detailsSourceSwitcher'), detailsSourceLabel: $('detailsSourceLabel'), detailsSourceButtons: $('detailsSourceButtons'), detailsPoster: $('detailsPoster'), episodesModal: $('episodesModal'), closeEpisodesModal: $('closeEpisodesModal'), episodesSeriesTitle: $('episodesSeriesTitle'), episodesSeasonSelect: $('episodesSeasonSelect'), episodesList: $('episodesList'), configToggle: $('configToggle'), configDrawer: $('configDrawer'),
    closeConfigDrawer: $('closeConfigDrawer'), importStatus: $('importStatus'), liveImportCount: $('liveImportCount'),
    movieImportCount: $('movieImportCount'), seriesImportCount: $('seriesImportCount'), m3uUrlInput: $('m3uUrlInput'),
    loadM3uUrlBtn: $('loadM3uUrlBtn'), epgUrlInput: $('epgUrlInput'), loadEpgUrlBtn: $('loadEpgUrlBtn'),
    m3uFileInput: $('m3uFileInput'), epgFileInput: $('epgFileInput'), moviesUrlInput: $('moviesUrlInput'),
    loadMoviesUrlBtn: $('loadMoviesUrlBtn'), moviesFileInput: $('moviesFileInput'), seriesUrlInput: $('seriesUrlInput'),
    loadSeriesUrlBtn: $('loadSeriesUrlBtn'), seriesFileInput: $('seriesFileInput'), resetLibraryBtn: $('resetLibraryBtn'),
    liveChatRoomLabel: $('liveChatRoomLabel'), liveChatStatus: $('liveChatStatus'), liveChatMessages: $('liveChatMessages'),
    liveChatForm: $('liveChatForm'), liveChatInput: $('liveChatInput'), liveEmojiToggle: $('liveEmojiToggle'), liveEmojiPicker: $('liveEmojiPicker'), detailsChatRoomLabel: $('detailsChatRoomLabel'),
    detailsChatStatus: $('detailsChatStatus'), detailsChatMessages: $('detailsChatMessages'), detailsChatForm: $('detailsChatForm'),
    detailsChatInput: $('detailsChatInput'), detailsEmojiToggle: $('detailsEmojiToggle'), detailsEmojiPicker: $('detailsEmojiPicker'),
    adminToggle: $('adminToggle'), mobileAdminToggle: $('mobileAdminToggle'), adminPanel: $('adminPanel'), adminPanelBackdrop: $('adminPanelBackdrop'), closeAdminPanel: $('closeAdminPanel'), adminPanelBody: $('adminPanelBody')
  };

  function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }
  const saveJson = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  const persistAll = () => {
    saveJson(STORAGE.live, state.liveChannels);
    saveJson(STORAGE.movies, state.movies);
    saveJson(STORAGE.series, state.series);
    saveJson(STORAGE.epg, state.epgStore);
    saveJson(STORAGE.myList, state.myList);
    saveJson(STORAGE.profileData, state.profileData);
    updateImportCounts();
  };
  const persistAccounts = () => saveJson(STORAGE.accounts, state.accounts);
  const persistTextOverrides = () => saveJson(STORAGE.texts, state.textOverrides);
  const normalizeKey = (v) => String(v || '').toLowerCase().trim().replace(/\.[a-z0-9]{2,4}$/i, '').replace(/[^a-z0-9äöüß]+/gi, '-').replace(/^-+|-+$/g, '');
  const slug = (v) => normalizeKey(v).replace(/-+/g, '-');
  const initials = (v) => String(v || 'TV').split(/\s+/).filter(Boolean).slice(0, 2).map(s => s[0]).join('').toUpperCase() || 'TV';
  const uniqueId = (prefix) => `${prefix}-${Math.random().toString(36).slice(2,8)}-${Date.now().toString(36)}`;
  const safeArr = (a) => Array.isArray(a) ? a : [];

  
  function activeProfileKey() {
    return state.activeProfile?.username || '';
  }

  function ensureProfileBucket(profileKey = activeProfileKey()) {
    if (!profileKey) return { watchlist: [], history: [], continueWatching: [], recommendations: [] };
    if (!state.profileData || typeof state.profileData !== 'object') state.profileData = {};
    if (!state.profileData[profileKey]) {
      state.profileData[profileKey] = { watchlist: [], history: [], continueWatching: [], recommendations: [] };
    }
    const bucket = state.profileData[profileKey];
    if (!Array.isArray(bucket.watchlist)) bucket.watchlist = [];
    if (!Array.isArray(bucket.history)) bucket.history = [];
    if (!Array.isArray(bucket.continueWatching)) bucket.continueWatching = [];
    if (!Array.isArray(bucket.recommendations)) bucket.recommendations = [];
    return bucket;
  }

  function saveProfileState(profileKey = activeProfileKey()) {
    if (!profileKey) return;
    const bucket = ensureProfileBucket(profileKey);
    bucket.watchlist = [...state.myList];
    bucket.history = [...state.watchHistory];
    bucket.continueWatching = [...state.continueWatching];
    bucket.recommendations = [...state.recommendations];
    saveJson(STORAGE.myList, state.myList);
    saveJson(STORAGE.profileData, state.profileData);
  }

  function loadProfileState(profileKey = activeProfileKey()) {
    const bucket = ensureProfileBucket(profileKey);
    state.myList = [...bucket.watchlist];
    state.watchHistory = [...bucket.history];
    state.continueWatching = [...bucket.continueWatching];
    state.recommendations = [...bucket.recommendations];
    saveJson(STORAGE.myList, state.myList);
  }

  function resolveItemsByIds(ids = []) {
    const pool = [...state.movies, ...state.series];
    const wanted = new Set(ids);
    return pool.filter(item => wanted.has(item.id));
  }

  function getContinueWatchingItems() {
    return resolveItemsByIds(safeArr(state.continueWatching).map(entry => entry.id)).slice(0, 6);
  }

  function getRecommendationItems() {
    return resolveItemsByIds(safeArr(state.recommendations)).slice(0, 6);
  }

  function scheduleProfileSync() {
    if (!state.siteSync?.enabled) return;
    Promise.resolve(saveRemoteSiteState()).catch(err => console.error('Profil-Sync Fehler:', err));
  }

  function computeRecommendations(profileKey = activeProfileKey()) {
    const bucket = ensureProfileBucket(profileKey);
    const baseIds = [...safeArr(bucket.watchlist), ...safeArr(bucket.history).map(entry => entry.id)];
    const baseItems = resolveItemsByIds(baseIds);
    const genreScores = {};
    baseItems.forEach(item => safeArr(item.genre).forEach(genre => {
      genreScores[genre] = (genreScores[genre] || 0) + 1;
    }));
    const blocked = new Set(baseIds);
    const suggestions = [...state.movies, ...state.series]
      .filter(item => !blocked.has(item.id))
      .map(item => ({
        id: item.id,
        score: safeArr(item.genre).reduce((sum, genre) => sum + (genreScores[genre] || 0), 0)
      }))
      .filter(entry => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12)
      .map(entry => entry.id);

    bucket.recommendations = suggestions;
    state.recommendations = [...suggestions];
    saveProfileState(profileKey);
  }

  function markItemWatched(item) {
    if (!item?.id) return;
    const profileKey = activeProfileKey();
    if (!profileKey) return;
    const now = Date.now();
    state.watchHistory = [{ id: item.id, type: item.type, watchedAt: now }, ...safeArr(state.watchHistory).filter(entry => entry.id !== item.id)].slice(0, 40);
    state.continueWatching = [{ id: item.id, type: item.type, watchedAt: now }, ...safeArr(state.continueWatching).filter(entry => entry.id !== item.id)].slice(0, 20);
    saveProfileState(profileKey);
    computeRecommendations(profileKey);
    scheduleProfileSync();
  }

function createPlaceholderLiveChannels(count = 50) {
    const source = safeArr(window.UNREAL_PLACEHOLDER_DATA?.liveChannels);
    return source.slice(0, count).map((item, i) => ({
      ...item,
      id: item.id || `plive-${i + 1}`
    }));
  }

  function createPlaceholderMovies(count = 50) {
    const source = safeArr(window.UNREAL_PLACEHOLDER_DATA?.movies);
    return source.slice(0, count).map((item, i) => ({
      ...item,
      id: item.id || `pmovie-${i + 1}`
    }));
  }

  function createPlaceholderSeries(count = 25) {
    const source = safeArr(window.UNREAL_PLACEHOLDER_DATA?.series);
    return source.slice(0, count).map((item, i) => ({
      ...item,
      id: item.id || `pseries-${i + 1}`
    }));
  }


  function ensurePlaceholderContent() {
    if (safeArr(state.liveChannels).length < 54) {
      state.liveChannels = [...state.liveChannels, ...createPlaceholderLiveChannels(54 - safeArr(state.liveChannels).length)];
    }
    if (safeArr(state.movies).length < 53) {
      state.movies = [...state.movies, ...createPlaceholderMovies(53 - safeArr(state.movies).length)];
    }
    if (safeArr(state.series).length < 28) {
      state.series = [...state.series, ...createPlaceholderSeries(28 - safeArr(state.series).length)];
    }
  }



  function normalizeLiveSource(source, fallbackIndex = 0) {
    if (!source) return null;
    if (typeof source === 'string') {
      const trimmed = source.trim();
      if (!trimmed) return null;
      return { id: `source-${fallbackIndex + 1}`, label: `Stream ${fallbackIndex + 1}`, streamUrl: trimmed };
    }
    const streamUrl = String(source.streamUrl || source.url || '').trim();
    const embed = String(source.embed || source.embedCode || source.iframe || '').trim();
    if (!streamUrl && !embed) return null;
    return {
      id: source.id || `source-${fallbackIndex + 1}`,
      label: source.label || source.name || `Stream ${fallbackIndex + 1}`,
      streamUrl,
      embed,
      embedCode: source.embedCode || '',
      iframe: source.iframe || '',
      type: source.type || (embed || source.embedCode || source.iframe ? 'embed' : 'stream')
    };
  }

  function normalizeLiveSources(channel) {
    const explicit = safeArr(channel.sources).map((src, index) => normalizeLiveSource(src, index)).filter(Boolean);
    if (explicit.length) return explicit;
    const fallback = normalizeLiveSource({
      id: channel.id ? `${channel.id}-source-1` : 'source-1',
      label: channel.sourceLabel || channel.name || 'Stream 1',
      streamUrl: channel.streamUrl || '',
      embed: channel.embed || '',
      embedCode: channel.embedCode || '',
      iframe: channel.iframe || ''
    }, 0);
    return fallback ? [fallback] : [];
  }

  function getActiveLiveSource(channel) {
    const sources = safeArr(channel?.sources);
    if (!sources.length) return null;
    const index = Math.min(Math.max(Number(state.currentLiveSourceIndex) || 0, 0), sources.length - 1);
    return sources[index] || sources[0] || null;
  }

  function renderLiveSourceButtons(channel) {
    if (!els.liveSourceSwitcher || !els.liveSourceButtons || !els.liveSourceLabel) return;
    const sources = safeArr(channel?.sources);
    if (!channel || !sources.length) {
      els.liveSourceSwitcher.classList.add('hidden');
      els.liveSourceLabel.textContent = 'Keine Streamquelle gewählt';
      els.liveSourceButtons.innerHTML = '';
      return;
    }
    els.liveSourceSwitcher.classList.toggle('hidden', sources.length <= 1);
    const activeIndex = Math.min(Math.max(Number(state.currentLiveSourceIndex) || 0, 0), sources.length - 1);
    const activeSource = sources[activeIndex] || sources[0];
    els.liveSourceLabel.textContent = `Aktive Quelle: ${activeSource?.label || `Stream ${activeIndex + 1}`}`;
    els.liveSourceButtons.innerHTML = sources.map((source, index) => `
      <button class="source-chip ${index === activeIndex ? 'active' : ''}" type="button" data-index="${index}">${escapeHtml(source.label || `Stream ${index + 1}`)}</button>
    `).join('');
    els.liveSourceButtons.querySelectorAll('.source-chip').forEach(btn => btn.addEventListener('click', () => {
      const nextIndex = Number(btn.dataset.index);
      if (Number.isNaN(nextIndex) || nextIndex === state.currentLiveSourceIndex) return;
      state.currentLiveSourceIndex = nextIndex;
      renderLiveSourceButtons(channel);
      const source = getActiveLiveSource(channel);
      playVideo(source?.streamUrl || '', channel, source);
    }));
  }

  
  function normalizeMediaSources(item) {
    const explicit = safeArr(item.sources).map((src, index) => normalizeLiveSource(src, index)).filter(Boolean);
    if (explicit.length) return explicit.slice(0, 3);
    const fallback = normalizeLiveSource({
      id: item.id ? `${item.id}-source-1` : 'source-1',
      label: item.sourceLabel || item.title || 'Stream 1',
      streamUrl: item.streamUrl || '',
      embed: item.embed || '',
      embedCode: item.embedCode || '',
      iframe: item.iframe || ''
    }, 0);
    return fallback ? [fallback] : [];
  }

  function renderDetailsSourceButtons(item) {
    if (!els.detailsSourceSwitcher || !els.detailsSourceButtons || !els.detailsSourceLabel) return;
    const sources = safeArr(item?.sources || []).slice(0, 3);
    if (!sources.length) {
      els.detailsSourceSwitcher.classList.add('hidden');
      els.detailsSourceButtons.innerHTML = '';
      els.detailsSourceLabel.textContent = 'Keine Streamquelle gewählt';
      return;
    }
    const activeIndex = Math.max(0, Math.min(state.currentDetailsSourceIndex || 0, sources.length - 1));
    state.currentDetailsSourceIndex = activeIndex;
    const active = sources[activeIndex];
    els.detailsSourceSwitcher.classList.remove('hidden');
    els.detailsSourceLabel.textContent = active?.label || `Stream ${activeIndex + 1}`;
    els.detailsSourceButtons.innerHTML = sources.map((source, index) => `
      <button type="button" class="source-chip ${index === activeIndex ? 'active' : ''}" data-details-source-index="${index}">
        ${escapeHtml(source.label || `Stream ${index + 1}`)}
      </button>
    `).join('');

    els.detailsSourceButtons.querySelectorAll('.source-chip').forEach(btn => btn.addEventListener('click', () => {
      const nextIndex = Number(btn.dataset.detailsSourceIndex);
      if (Number.isNaN(nextIndex) || nextIndex === state.currentDetailsSourceIndex || !state.currentDetails) return;
      state.currentDetailsSourceIndex = nextIndex;
      playSelectedDetailsSource(state.currentDetails, nextIndex);
    }));
  }

  function playSelectedDetailsSource(item, sourceIndex = 0) {
    const sources = safeArr(item?.sources || []).slice(0, 3);
    const selected = sources[sourceIndex] || sources[0] || null;
    state.currentDetailsSourceIndex = selected ? Math.max(0, sources.indexOf(selected)) : 0;
    if (els.detailsPlayerWrap) els.detailsPlayerWrap.classList.remove('hidden');
    if (selected) {
      playDetailsVideo(selected.streamUrl || item.streamUrl || '', { ...item, embed: selected.embed || '', embedCode: selected.embedCode || '', iframe: selected.iframe || '' });
    } else {
      playDetailsVideo(item.streamUrl || '', item);
    }
    renderDetailsSourceButtons(item);
  }

function syncBuiltinLiveChannels() {
    let changed = false;
    const builtinById = new Map(safeArr(defaults.liveChannels).map(ch => [ch.id, ch]));
    state.liveChannels = safeArr(state.liveChannels).map(ch => {
      if (ch.source !== 'builtin') return ch;
      const fresh = builtinById.get(ch.id);
      if (!fresh) return ch;
      changed = true;
      return { ...fresh, ...ch, source: 'builtin', chatEnabled: ch.chatEnabled ?? true, sources: safeArr(ch.sources).length ? ch.sources : normalizeLiveSources(fresh) };
    });
    if (changed) persistAll();
  }



  function buildSeasonData(series) {
    if (Array.isArray(series.seasonData) && series.seasonData.length) {
      return series.seasonData.map((season, sIndex) => ({
        season: Number(season.season) || sIndex + 1,
        episodes: safeArr(season.episodes).map((ep, eIndex) => ({
          number: Number(ep.number) || eIndex + 1,
          title: ep.title || `Episode ${eIndex + 1}`,
          duration: ep.duration || '24m',
          description: ep.description || `${series.title || 'Serie'} – Episode ${eIndex + 1}.`,
          thumbnail: ep.thumbnail || series.logo || series.backdrop || 'assets/series-1.svg',
          streamUrl: ep.streamUrl || series.streamUrl || ''
        }))
      }));
    }
    const seasonCount = Math.max(1, Number(series.seasons) || 1);
    const totalEpisodes = Math.max(1, Number(series.episodes) || seasonCount);
    const base = Math.floor(totalEpisodes / seasonCount);
    const remainder = totalEpisodes % seasonCount;
    let counter = 1;
    const out = [];
    for (let s = 1; s <= seasonCount; s++) {
      const count = base + (s <= remainder ? 1 : 0) || 1;
      const episodes = [];
      for (let e = 1; e <= count; e++) {
        episodes.push({
          number: e,
          title: `${series.title || 'Serie'} – Episode ${counter}`,
          duration: '24m',
          description: `Staffel ${s}, Folge ${e} von ${series.title || 'dieser Serie'}.`,
          thumbnail: series.logo || series.backdrop || 'assets/series-1.svg',
          streamUrl: series.streamUrl || ''
        });
        counter++;
      }
      out.push({ season: s, episodes });
    }
    return out;
  }

  function enrich() {
    ensurePlaceholderContent();
    state.accounts = safeArr(state.accounts).map((account, i) => {
      const username = account?.username || `Profil ${i+1}`;
      return {
        ...account,
        username,
        password: account?.password || '',
        avatar: account?.avatar || 'assets/avatar-admin.svg',
        color: account?.color || '#e50914',
        isAdmin: account?.isAdmin === true || String(username).toLowerCase() === 'admin'
      };
    });
    persistAccounts();
    state.liveChannels = safeArr(state.liveChannels).map((ch, i) => {
      const normalizedSources = normalizeLiveSources(ch);
      const firstSource = normalizedSources[0] || null;
      return ({
        id: ch.id || `ch-${i+1}`,
        name: ch.name || `Sender ${i+1}`,
        group: ch.group || 'Live TV',
        logo: ch.logo || initials(ch.name),
        logoUrl: ch.logoUrl || ch.logo || '',
        streamUrl: ch.streamUrl || firstSource?.streamUrl || '',
        embed: ch.embed || firstSource?.embed || '',
        embedCode: ch.embedCode || firstSource?.embedCode || '',
        iframe: ch.iframe || firstSource?.iframe || '',
        sources: normalizedSources,
        artwork: ch.artwork || 'assets/live-poster.svg',
        epg: safeArr(ch.epg),
        epgId: ch.epgId || ch.tvgId || slug(ch.name),
        source: ch.source || 'builtin',
        chatEnabled: ch.chatEnabled ?? ((ch.source || 'builtin') === 'builtin'),
        quickAccess: !!ch.quickAccess,
        heroInclude: !!ch.heroInclude,
        heroDescription: ch.heroDescription || ch.description || '',
        heroTitle: ch.heroTitle || ch.name || '',
        heroBackdrop: ch.heroBackdrop || ch.backdrop || ch.artwork || ''
      });
    });
    const qaLimit = Number(state.quickAccessSettings?.limit || 4);
    state.quickAccessSettings = { limit: Math.max(1, Math.min(20, qaLimit || 4)) };
    state.movies = safeArr(state.movies).map((m, i) => {
      const normalizedSources = normalizeMediaSources(m);
      const firstSource = normalizedSources[0] || null;
      return ({
        id: m.id || `movie-${i+1}`,
        type: 'Film',
        title: m.title || `Film ${i+1}`,
        year: m.year || new Date().getFullYear(),
        duration: m.duration || '—',
        rating: m.rating || '—',
        quality: m.quality || 'HD',
        genre: Array.isArray(m.genre) ? m.genre : splitTags(m.genre || 'Drama'),
        description: m.description || 'Importierter Film.',
        backdrop: m.backdrop || m.logo || 'assets/movie-1.svg',
        logo: m.logo || m.backdrop || 'assets/movie-1.svg',
        streamUrl: m.streamUrl || firstSource?.streamUrl || '',
        embed: m.embed || firstSource?.embed || '',
        embedCode: m.embedCode || firstSource?.embedCode || '',
        iframe: m.iframe || firstSource?.iframe || '',
        sources: normalizedSources,
        source: m.source || 'builtin',
        chatEnabled: m.chatEnabled ?? ((m.source || 'builtin') === 'builtin'),
        heroInclude: m.heroInclude !== false,
        heroDescription: m.heroDescription || m.description || '',
        heroTitle: m.heroTitle || m.title || '',
        heroBackdrop: m.heroBackdrop || m.backdrop || '',
        
      });
    });
    state.series = safeArr(state.series).map((s, i) => {
      const normalizedSources = normalizeMediaSources(s);
      const firstSource = normalizedSources[0] || null;
      return ({
        id: s.id || `series-${i+1}`,
        type: 'Serie',
        title: s.title || `Serie ${i+1}`,
        year: s.year || new Date().getFullYear(),
        seasons: Number(s.seasons) || 1,
        episodes: Number(s.episodes) || 1,
        rating: s.rating || '—',
        quality: s.quality || 'HD',
        genre: Array.isArray(s.genre) ? s.genre : splitTags(s.genre || 'Drama'),
        description: s.description || 'Importierte Serie.',
        backdrop: s.backdrop || s.logo || 'assets/series-1.svg',
        logo: s.logo || s.backdrop || 'assets/series-1.svg',
        streamUrl: s.streamUrl || firstSource?.streamUrl || '',
        embed: s.embed || firstSource?.embed || '',
        embedCode: s.embedCode || firstSource?.embedCode || '',
        iframe: s.iframe || firstSource?.iframe || '',
        sources: normalizedSources,
        seasonData: buildSeasonData(s),
        source: s.source || 'builtin',
        chatEnabled: s.chatEnabled ?? ((s.source || 'builtin') === 'builtin'),
        heroInclude: s.heroInclude !== false,
        heroDescription: s.heroDescription || s.description || '',
        heroTitle: s.heroTitle || s.title || '',
        heroBackdrop: s.heroBackdrop || s.backdrop || '',
        
      });
    });
    persistAll();
  }

  function splitTags(v) { return String(v || '').split(/[|,;/]/).map(s => s.trim()).filter(Boolean).slice(0,4); }
  function updateImportCounts() {
    if (els.liveImportCount) els.liveImportCount.textContent = String(state.liveChannels.length);
    if (els.movieImportCount) els.movieImportCount.textContent = String(state.movies.length);
    if (els.seriesImportCount) els.seriesImportCount.textContent = String(state.series.length);
    if (els.channelCount) els.channelCount.textContent = `${state.liveChannels.length} Sender`;
  }
  function setStatus(msg, tone='info') { if (els.importStatus) { els.importStatus.textContent = msg; els.importStatus.className = `import-status ${tone}`; } }
  function escapeHtml(value='') { return String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }

  function playIntroSplash() {
    const splash = els.introSplash;
    if (!splash) return;
    document.body.classList.add('intro-active');
    window.setTimeout(() => splash.classList.add('is-animating'), 40);
    window.setTimeout(() => splash.classList.add('is-fading'), 1500);
    window.setTimeout(() => {
      splash.classList.add('hidden');
      document.body.classList.remove('intro-active');
    }, 2050);
  }

  function formatTime(dt) {
    try { return new Intl.DateTimeFormat('de-DE',{hour:'2-digit',minute:'2-digit'}).format(dt instanceof Date ? dt : new Date(dt)); }
    catch { return '--:--'; }
  }

  function renderProfiles() {
    els.profileGrid.innerHTML = state.accounts.map(acc => `
      <button class="profile-card" data-user="${escapeHtml(acc.username)}">
        <img src="${escapeHtml(acc.avatar)}" alt="${escapeHtml(acc.username)}" />
        <span>${escapeHtml(acc.username)}</span>
      </button>`).join('');
    els.profileGrid.querySelectorAll('.profile-card').forEach(btn => btn.addEventListener('click', () => {
      const account = state.accounts.find(a => a.username === btn.dataset.user);
      if (!account) return;
      state.selectedAccount = account;
      els.selectedProfileAvatar.src = account.avatar;
      els.selectedProfileName.textContent = account.username;
      els.passwordInput.value = '';
      els.loginMessage.textContent = '';
      els.passwordOverlay.classList.remove('hidden');
      els.passwordOverlay.setAttribute('aria-hidden', 'false');
      els.passwordInput.focus();
    }));
    if (localStorage.getItem(STORAGE.profile)) els.logoutAllBtn.classList.remove('hidden');
  }

  function updateActiveProfileUI() {
    if (!state.activeProfile) return;
    els.activeProfileAvatar.src = state.activeProfile.avatar;
    els.activeProfileName.textContent = state.activeProfile.username;
    if (els.mobileActiveProfileAvatar) els.mobileActiveProfileAvatar.src = state.activeProfile.avatar;
    if (els.mobileActiveProfileName) els.mobileActiveProfileName.textContent = state.activeProfile.username;
    updateAdminAccess();
  }

  function isAdminProfile(profile = state.activeProfile) {
    return !!(profile && (profile.isAdmin === true || String(profile.username || '').toLowerCase() === 'admin'));
  }

  function updateAdminAccess() {
    const visible = isAdminProfile();
    els.adminToggle?.classList.toggle('hidden', !visible);
    els.mobileAdminToggle?.classList.toggle('hidden', !visible);
    if (!visible) closeAdminPanel();
  }

  function setTextIfFound(selector, value) {
    const node = document.querySelector(selector);
    if (!node || value == null || value === '') return;
    node.textContent = value;
  }

  function applyTextOverrides() {
    const text = state.textOverrides || {};
    if (text.appTitle) document.title = text.appTitle;
    document.querySelectorAll('.brand').forEach(node => { if (text.brandText) node.setAttribute('aria-label', text.brandText); });
    const navMap = { home: text.navHome, live: text.navLive, series: text.navSeries, movies: text.navMovies, mylist: text.navMyList };
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(btn => {
      const key = String(btn.dataset.view || '').toLowerCase();
      if (navMap[key]) btn.textContent = navMap[key];
    });
    setTextIfFound('#liveView .section-header h2', text.liveHeading);
    setTextIfFound('#seriesView .section-header h2', text.seriesHeading);
    setTextIfFound('#moviesView .section-header h2', text.moviesHeading);
    setTextIfFound('#mylistView .section-header h2', text.myListHeading);
    setTextIfFound('.live-chat-panel h3', text.liveChatTitle);
    setTextIfFound('.details-chat-panel h3', text.detailsChatTitle);
    const importTitle = document.querySelector('#configDrawer .config-header h3');
    if (importTitle && text.importTitle) importTitle.textContent = text.importTitle;
  }

  function doLogin() {
    if (!state.selectedAccount) return;
    const latestAccount = state.accounts.find(acc => acc.username === state.selectedAccount.username) || state.selectedAccount;
    state.selectedAccount = latestAccount;
    const pw = els.passwordInput.value.trim();
    if (pw !== state.selectedAccount.password) {
      els.loginMessage.textContent = 'Falsches Passwort. Bitte erneut versuchen.';
      return;
    }
    state.activeProfile = state.selectedAccount;
    saveJson(STORAGE.profile, state.activeProfile);
    loadProfileState(state.activeProfile.username);
    computeRecommendations(state.activeProfile.username);
    els.passwordOverlay.classList.add('hidden');
    enterApp().catch(err => console.error('Login/EnterApp Fehler:', err));
  }

  function logout() {
    localStorage.removeItem(STORAGE.profile);
    location.reload();
  }

  async function enterApp() {
    syncBuiltinLiveChannels();
    initChatBackend();
    await initSiteSync();
    els.loginScreen.classList.add('hidden');
    els.appScreen.classList.remove('hidden');
    updateActiveProfileUI();
    renderHero();
    renderHome();
    renderCatalogs();
    renderMyList();
    renderHero();
    resetLivePanel();
    renderChannels('');
    switchView('home');
    applyTextOverrides();
    updateAdminAccess();
  }


  function resetLivePanel() {
    if (els.livePlayer) {
      resetVideoElement(els.livePlayer);
      try { els.livePlayer.currentTime = 0; } catch {}
      els.livePlayer.poster = 'assets/live-poster.svg';
    }
    state.currentLive = null;
    if (els.liveChannelTitle) els.liveChannelTitle.textContent = 'Wähle einen Sender';
    if (els.liveChannelGroup) els.liveChannelGroup.textContent = 'Kategorie: Noch nichts ausgewählt';
    if (els.liveChannelNow) els.liveChannelNow.textContent = 'Startet erst nach Klick auf einen Sender';
    if (els.epgNowNext) els.epgNowNext.innerHTML = '<div class="chat-empty">Wähle links einen Sender aus, um Stream und EPG zu sehen.</div>';
    if (els.liveSourceSwitcher) els.liveSourceSwitcher.classList.add('hidden');
    if (els.liveSourceLabel) els.liveSourceLabel.textContent = 'Keine Streamquelle gewählt';
    if (els.liveSourceButtons) els.liveSourceButtons.innerHTML = '';
    if (els.liveChatRoomLabel) els.liveChatRoomLabel.textContent = 'Raum: —';
    if (els.liveChatStatus) {
      els.liveChatStatus.className = 'chat-status info';
      els.liveChatStatus.textContent = 'Der Live-Chat wird aktiv, sobald ein Sender ausgewählt wurde.';
    }
    if (els.liveChatMessages) els.liveChatMessages.innerHTML = '<div class="chat-empty">Noch kein Live-Sender ausgewählt.</div>';
    updateChatFormState('live', false, 'Erst einen Live-Sender auswählen');
  }


  function getHeroItems() {
    const titles = [
      ...state.liveChannels.map(item => ({ ...item, type: 'Live TV', title: item.name, _heroEnabled: item.heroInclude === true })),
      ...state.movies.map(item => ({ ...item, _heroEnabled: item.heroInclude !== false })),
      ...state.series.map(item => ({ ...item, _heroEnabled: item.heroInclude !== false }))
    ].filter(item => item && item._heroEnabled);
    return titles.length ? titles.slice(0, 12) : [];
  }

  function clearHeroTimer() {
    if (state.heroTimer) {
      clearInterval(state.heroTimer);
      state.heroTimer = null;
    }
  }

  function setHeroPaused(paused) {
    state.heroPaused = !!paused;
    document.body.classList.toggle('hero-slideshow-paused', state.heroPaused);
    renderHero();
  }

  function heroMeta(item) {
    if (!item) return [];
    return item.type === 'Film'
      ? [item.type, item.year, item.duration, item.rating, item.quality]
      : [item.type, item.year, `${item.seasons} Staffeln`, `${item.episodes} Episoden`, item.rating, item.quality];
  }

  function playDetailsItem(item) {
    if (!item) return;
    openDetails(item);
    if (els.detailsPlayerWrap) els.detailsPlayerWrap.classList.remove('hidden');
    playSelectedDetailsSource(item, state.currentDetailsSourceIndex || 0);
    markItemWatched(item);
    renderHome();
    subscribeToRoom('details', item);
  }

  function renderHeroSlide(index = 0) {
    const items = getHeroItems();
    if (!items.length) {
      const f = defaults.featured || {};
      els.heroSection.style.backgroundImage = f.backdrop ? `url('${f.backdrop}')` : 'none';
      els.heroSection.innerHTML = `
        <div class="hero-content">
          <div class="hero-logo">UNREALTV ORIGINAL</div>
          <h1 class="hero-title">${escapeHtml(f.title || 'UNREALTV')}</h1>
          <div class="hero-metadata">
            <span>${escapeHtml(f.type || 'Streaming')}</span>
            <span>${escapeHtml(f.year || '')}</span>
            <span>${escapeHtml(f.rating || '')}</span>
            <span>${escapeHtml(f.runtime || '')}</span>
          </div>
          <p class="hero-description">${escapeHtml(f.subtitle || '')}</p>
          <p class="hero-description">${escapeHtml(f.description || '')}</p>
          <div class="hero-actions"></div>
        </div>`;
      return;
    }

    state.heroIndex = ((index % items.length) + items.length) % items.length;
    const item = items[state.heroIndex];
    const inList = state.myList.includes(item.id);
    els.heroSection.style.backgroundImage = (item.heroBackdrop || item.backdrop || item.artwork) ? `url('${item.heroBackdrop || item.backdrop || item.artwork}')` : 'none';
    els.heroSection.innerHTML = `
      <div class="hero-content">
        <div class="hero-logo">${escapeHtml(item.type || 'Titel')}</div>
        <h1 class="hero-title">${escapeHtml(item.heroTitle || item.title || item.name || 'UnrealTV')}</h1>
        <div class="hero-metadata">
          ${heroMeta(item).map(v => `<span>${escapeHtml(v)}</span>`).join('')}
        </div>
        <p class="hero-description">${escapeHtml(item.heroDescription || item.description || '')}</p>
        <div class="hero-actions">
          <button class="primary-btn" id="heroPlayTitle">Abspielen</button>
          <button class="ghost-btn" id="heroSaveTitle">${inList ? 'Aus meiner Liste entfernen' : 'Zu meiner Liste'}</button>
        </div>
        <div class="hero-slider-controls">
          <button class="hero-nav-btn" id="heroPrevBtn" aria-label="Vorheriger Titel">‹</button>
          <div class="hero-dots-wrap">
            <div class="hero-dots hero-dots-left">
              ${items.slice(0, Math.ceil(items.length / 2)).map((_, i) => `<button class="hero-dot ${i === state.heroIndex ? 'active' : ''}" data-hero-index="${i}" aria-label="Slide ${i+1}"></button>`).join('')}
            </div>
            <button class="ghost-btn hero-icon-btn hero-pause-inline" id="heroPauseBtn" aria-label="${state.heroPaused ? 'Slideshow starten' : 'Slideshow pausieren'}" title="${state.heroPaused ? 'Slideshow starten' : 'Slideshow pausieren'}"><span aria-hidden="true">${state.heroPaused ? '▶' : '❚❚'}</span></button>
            <div class="hero-dots hero-dots-right">
              ${items.slice(Math.ceil(items.length / 2)).map((_, offset) => {
                const i = offset + Math.ceil(items.length / 2);
                return `<button class="hero-dot ${i === state.heroIndex ? 'active' : ''}" data-hero-index="${i}" aria-label="Slide ${i+1}"></button>`;
              }).join('')}
            </div>
          </div>
          <button class="hero-nav-btn" id="heroNextBtn" aria-label="Nächster Titel">›</button>
        </div>
      </div>`;

    document.getElementById('heroPlayTitle')?.addEventListener('click', () => {
      if (item.type === 'Live TV') {
        switchView('live');
        selectLiveChannel(item.id);
      } else {
        playDetailsItem(item);
      }
    });
    document.getElementById('heroSaveTitle')?.addEventListener('click', () => {
      toggleMyList(item);
      renderHeroSlide(state.heroIndex);
    });
    document.getElementById('heroPauseBtn')?.addEventListener('click', () => setHeroPaused(!state.heroPaused));
    document.getElementById('heroPrevBtn')?.addEventListener('click', () => renderHeroSlide(state.heroIndex - 1));
    document.getElementById('heroNextBtn')?.addEventListener('click', () => renderHeroSlide(state.heroIndex + 1));
    els.heroSection.querySelectorAll('[data-hero-index]').forEach(btn => btn.addEventListener('click', () => renderHeroSlide(Number(btn.dataset.heroIndex))));
  }

  function renderHero() {
    clearHeroTimer();
    renderHeroSlide(state.heroIndex || 0);
    const items = getHeroItems();
    if (items.length > 1 && !state.heroPaused) {
      state.heroTimer = setInterval(() => renderHeroSlide(state.heroIndex + 1), 7000);
    }
  }

  function cardMeta(item) {
    if (item.type === 'Film') return [item.year, item.duration, item.rating, item.quality];
    return [item.year, `${item.seasons} Staffeln`, `${item.episodes} Episoden`, item.rating, item.quality];
  }
  function cardTemplate(item) {
    const episodesBtn = item.type === 'Serie'
      ? `<button class="card-expand-btn" type="button" data-episodes-id="${escapeHtml(item.id)}" aria-label="Staffeln und Episoden öffnen">⌄</button>`
      : '';
    return `
      <article class="card" data-id="${escapeHtml(item.id)}" data-type="${escapeHtml(item.type)}">
        <div class="card-poster" style="background-image:url('${escapeHtml(item.backdrop)}')">${episodesBtn}</div>
        <div class="card-body">
          <h3>${escapeHtml(item.title)}</h3>
          <div class="card-metadata">${cardMeta(item).map(m => `<span>${escapeHtml(m)}</span>`).join('')}</div>
          <div class="card-tags">${safeArr(item.genre).map(g => `<span class="tag">${escapeHtml(g)}</span>`).join('')}</div>
          <p>${escapeHtml(item.description)}</p>
        </div>
      </article>`;
  }

  function attachCardEvents(root) {
    root.querySelectorAll('.card').forEach(card => card.addEventListener('click', () => {
      const type = card.dataset.type;
      const id = card.dataset.id;
      const item = (type === 'Film' ? state.movies : state.series).find(x => x.id === id);
      if (item) openDetails(item);
    }));
    root.querySelectorAll('[data-episodes-id]').forEach(btn => btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = state.series.find(x => x.id === btn.dataset.episodesId);
      if (item) {
        openDetails(item);
        openEpisodesModal(item);
      }
    }));
  }

  function renderHome() {
    const quickAccessChannels = state.liveChannels.filter(ch => ch.quickAccess);
    const quickAccessLimit = Math.max(1, Math.min(20, Number(state.quickAccessSettings?.limit || 4)));
    const homeChannels = (quickAccessChannels.length ? quickAccessChannels : state.liveChannels).slice(0, quickAccessLimit);
    const continueItems = getContinueWatchingItems();
    const recommendationItems = getRecommendationItems();

    const livePreview = homeChannels.map(ch => `
      <article class="channel-card" data-live-id="${escapeHtml(ch.id)}">
        <div class="channel-card-top"><span class="badge live">LIVE</span><span>${escapeHtml(ch.group)}</span></div>
        <div class="channel-card-main">
          ${ch.logoUrl ? `<img class="channel-card-logo" src="${escapeHtml(ch.logoUrl)}" alt="${escapeHtml(ch.name)} Logo" loading="lazy" />` : `<div class="channel-card-logo fallback">${escapeHtml(ch.logo || initials(ch.name || '?'))}</div>`}
          <div class="channel-card-copy">
            <h3>${escapeHtml(ch.name)}</h3>
            <p>${escapeHtml((ch.epg[0] && ch.epg[0].title) || 'Kein EPG')}</p>
          </div>
        </div>
      </article>`).join('');

    els.homeView.innerHTML = `
      <section class="content-row mobile-friendly-row">
        <div class="section-header"><div><p class="eyebrow">Jetzt live</p><h2>Schnellzugriff</h2></div></div>
        <div class="channel-row">${livePreview}</div>
      </section>

      <section class="content-row mobile-friendly-row">
        <div class="section-header"><div><p class="eyebrow">Für ${escapeHtml(activeProfileKey() || 'dich')}</p><h2>Weiter schauen</h2></div></div>
        <div class="catalog-grid home-mobile-grid" id="continueWatchingGrid">${continueItems.length ? continueItems.map(cardTemplate).join('') : '<div class="chat-empty">Sobald du einen Film oder eine Serie startest, erscheint sie hier.</div>'}</div>
      </section>

      <section class="content-row mobile-friendly-row">
        <div class="section-header"><div><p class="eyebrow">Smart Empfehlungen</p><h2>Empfohlen für dich</h2></div></div>
        <div class="catalog-grid home-mobile-grid" id="recommendationsGrid">${recommendationItems.length ? recommendationItems.map(cardTemplate).join('') : '<div class="chat-empty">Lege Titel in deine Liste oder starte etwas, damit Empfehlungen entstehen.</div>'}</div>
      </section>

      <section class="content-row mobile-friendly-row">
        <div class="section-header"><div><p class="eyebrow">Filme</p><h2>Platzhalter & Bibliothek</h2></div></div>
        <div class="catalog-grid home-mobile-grid" id="homeMoviesGrid">${state.movies.slice(0,6).map(cardTemplate).join('')}</div>
      </section>

      <section class="content-row mobile-friendly-row">
        <div class="section-header"><div><p class="eyebrow">Serien</p><h2>Deine Serien</h2></div></div>
        <div class="catalog-grid home-mobile-grid" id="homeSeriesGrid">${state.series.slice(0,6).map(cardTemplate).join('')}</div>
      </section>`;
    els.homeView.querySelectorAll('[data-live-id]').forEach(el => el.addEventListener('click', () => {
      const item = state.liveChannels.find(ch => ch.id === el.dataset.liveId);
      switchView('live');
      if (item) selectLiveChannel(item.id);
    }));
    attachCardEvents(els.homeView);
  }

  function renderCatalogs() {
    els.moviesGrid.innerHTML = state.movies.map(cardTemplate).join('');
    els.seriesGrid.innerHTML = state.series.map(cardTemplate).join('');
    renderMobileGenreShelves('Film', state.movies, els.moviesMobileShelves);
    renderMobileGenreShelves('Serie', state.series, els.seriesMobileShelves);
    attachCardEvents(els.moviesGrid);
    attachCardEvents(els.seriesGrid);
    attachCardEvents(els.moviesMobileShelves);
    attachCardEvents(els.seriesMobileShelves);
  }

  function renderMyList() {
    const ids = new Set(state.myList);
    const items = [...state.movies, ...state.series].filter(item => ids.has(item.id));
    els.myListGrid.innerHTML = items.length ? items.map(cardTemplate).join('') : '<div class="chat-empty">Noch nichts gespeichert.</div>';
    attachCardEvents(els.myListGrid);
  }

  function openMobileMenu() {
    if (!els.mobileMenu || !els.mobileMenuBackdrop) return;
    els.mobileMenu.classList.remove('hidden');
    els.mobileMenuBackdrop.classList.remove('hidden');
    requestAnimationFrame(() => {
      els.mobileMenu.classList.add('active');
      els.mobileMenuBackdrop.classList.add('active');
    });
    els.mobileMenu.setAttribute('aria-hidden', 'false');
    if (els.mobileMenuToggle) els.mobileMenuToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('mobile-menu-open');
  }

  function closeMobileMenu() {
    if (!els.mobileMenu || !els.mobileMenuBackdrop) return;
    els.mobileMenu.classList.remove('active');
    els.mobileMenuBackdrop.classList.remove('active');
    els.mobileMenu.setAttribute('aria-hidden', 'true');
    if (els.mobileMenuToggle) els.mobileMenuToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('mobile-menu-open');
    setTimeout(() => {
      els.mobileMenu?.classList.add('hidden');
      els.mobileMenuBackdrop?.classList.add('hidden');
    }, 220);
  }

  
  function groupItemsByGenre(items) {
    const map = new Map();
    safeArr(items).forEach(item => {
      const genres = safeArr(item.genre).length ? safeArr(item.genre) : ['Weitere'];
      genres.forEach(genre => {
        const key = String(genre || 'Weitere').trim() || 'Weitere';
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(item);
      });
    });
    return [...map.entries()].map(([genre, entries]) => ({ genre, entries }));
  }

  function miniCardTemplate(item) {
    return `
      <article class="card card-mini" data-id="${escapeHtml(item.id)}" data-type="${escapeHtml(item.type)}">
        <div class="card-poster" style="background-image:url('${escapeHtml(item.backdrop)}')"></div>
        <div class="card-body">
          <h3>${escapeHtml(item.title)}</h3>
        </div>
      </article>`;
  }

  function renderMobileGenreShelves(type, items, container) {
    if (!container) return;
    const groups = groupItemsByGenre(items);
    container.innerHTML = groups.map(group => `
      <section class="mobile-genre-row">
        <div class="mobile-genre-row__head">
          <div>
            <p class="eyebrow">${type === 'Film' ? 'Filme' : 'Serien'}</p>
            <h3>${escapeHtml(group.genre)}</h3>
          </div>
          <button type="button" class="mobile-genre-more" data-genre-more="${escapeHtml(group.genre)}" data-genre-type="${escapeHtml(type)}">Mehr</button>
        </div>
        <div class="mobile-genre-track">
          ${group.entries.map(miniCardTemplate).join('')}
        </div>
      </section>
    `).join('');
  }

  function openGenreBrowser(type, genre) {
    if (!els.genreBrowserModal || !els.genreBrowserGrid) return;
    state.genreBrowser = { type, genre };
    const pool = type === 'Film' ? state.movies : state.series;
    const filtered = pool.filter(item => safeArr(item.genre).map(String).includes(genre));
    els.genreBrowserType.textContent = type === 'Film' ? 'Filme' : 'Serien';
    els.genreBrowserTitle.textContent = genre || 'Genre';
    els.genreBrowserGrid.innerHTML = filtered.length ? filtered.map(cardTemplate).join('') : '<div class="chat-empty">Keine Titel in diesem Genre.</div>';
    attachCardEvents(els.genreBrowserGrid);
    els.genreBrowserModal.classList.remove('hidden');
    els.genreBrowserModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeGenreBrowser() {
    if (!els.genreBrowserModal) return;
    els.genreBrowserModal.classList.add('hidden');
    els.genreBrowserModal.setAttribute('aria-hidden', 'true');
    if ((!els.detailsModal || els.detailsModal.classList.contains('hidden')) && (!els.episodesModal || els.episodesModal.classList.contains('hidden'))) {
      document.body.style.overflow = '';
    }
  }

function stopBackgroundPlayback() {
    if (state.currentLive) resetLivePanel();
    if (!els.detailsModal?.classList.contains('hidden')) closeDetails();
  }

  function switchView(view) {
    if (state.currentView === 'live' && view !== 'live') resetLivePanel();
    if (view !== 'live') {
      // Live TV darf nicht im Hintergrund weiterlaufen
      if (state.currentLive) resetLivePanel();
    }
    if (view !== state.currentView && !els.detailsModal?.classList.contains('hidden')) {
      closeDetails();
    }
    state.currentView = view;
    document.querySelectorAll('.nav-link').forEach(btn => btn.classList.toggle('active', btn.dataset.view === view));
    document.querySelectorAll('.mobile-nav-link').forEach(btn => btn.classList.toggle('active', btn.dataset.view === view));
    [els.homeView, els.liveView, els.seriesView, els.moviesView, els.mylistView].forEach(v => v.classList.add('hidden'));
    ({ home: els.homeView, live: els.liveView, series: els.seriesView, movies: els.moviesView, mylist: els.mylistView }[view] || els.homeView).classList.remove('hidden');

    if (els.heroSection) {
      const showHero = view === 'home' || view === 'mylist';
      els.heroSection.classList.toggle('hidden', !showHero);
    }
    closeMobileMenu();
  }


  function clearLivePlaybackWatchdog() {
    const watch = state.livePlaybackWatch || {};
    if (watch.interval) { try { clearInterval(watch.interval); } catch {} }
    if (typeof watch.cleanup === 'function') { try { watch.cleanup(); } catch {} }
    state.livePlaybackWatch = { interval: null, cleanup: null, switching: false, lastAdvanceAt: 0, lastTime: -1 };
  }

  function switchToNextLiveSource(reason = 'stall') {
    const channel = state.currentLive;
    const sources = safeArr(channel?.sources);
    const currentIndex = Math.max(0, Number(state.currentLiveSourceIndex) || 0);
    if (!channel || sources.length <= 1 || currentIndex >= sources.length - 1 || state.livePlaybackWatch?.switching) return false;
    state.livePlaybackWatch.switching = true;
    setStatus(`Quelle ${(sources[currentIndex]?.label || `Stream ${currentIndex + 1}`)} reagiert nicht stabil – wechsle zu ${sources[currentIndex + 1]?.label || `Stream ${currentIndex + 2}`}.`, 'warn');
    setTimeout(() => {
      state.livePlaybackWatch.switching = false;
      selectLiveChannel(channel.id, currentIndex + 1);
    }, 80);
    return true;
  }

  function setupLivePlaybackWatchdog(video, channel) {
    clearLivePlaybackWatchdog();
    if (!video || !channel) return;
    const sources = safeArr(channel.sources);
    if (sources.length <= 1) return;

    const watch = state.livePlaybackWatch;
    watch.lastTime = Number(video.currentTime) || 0;
    watch.lastAdvanceAt = Date.now();

    const markAdvance = () => {
      watch.lastTime = Number(video.currentTime) || 0;
      watch.lastAdvanceAt = Date.now();
    };

    const onWaiting = () => {
      if (!video.paused && !video.ended) {
        watch.lastAdvanceAt = Math.min(watch.lastAdvanceAt || Date.now(), Date.now() - 3100);
      }
    };

    const onError = () => switchToNextLiveSource('error');

    ['playing', 'canplay', 'timeupdate', 'loadeddata'].forEach(evt => video.addEventListener(evt, markAdvance));
    ['waiting', 'stalled', 'suspend'].forEach(evt => video.addEventListener(evt, onWaiting));
    video.addEventListener('error', onError);

    watch.cleanup = () => {
      ['playing', 'canplay', 'timeupdate', 'loadeddata'].forEach(evt => video.removeEventListener(evt, markAdvance));
      ['waiting', 'stalled', 'suspend'].forEach(evt => video.removeEventListener(evt, onWaiting));
      video.removeEventListener('error', onError);
    };

    watch.interval = setInterval(() => {
      if (state.currentView !== 'live' || state.currentLive?.id !== channel.id || state.livePlaybackWatch?.switching) return;
      if (video.paused || video.ended || video.seeking) return;

      const currentTime = Number(video.currentTime) || 0;
      const advanced = currentTime > (watch.lastTime + 0.08);

      if (advanced) {
        watch.lastTime = currentTime;
        watch.lastAdvanceAt = Date.now();
        return;
      }

      const readyState = Number(video.readyState || 0);
      const elapsed = Date.now() - (watch.lastAdvanceAt || Date.now());

      if ((readyState <= 2 || video.networkState === 2 || video.networkState === 3) && elapsed >= 3000) {
        switchToNextLiveSource('stall');
      }
    }, 500);
  }

  function resetVideoElement(video) {
    if (!video) return;
    if (video === els.livePlayer) clearLivePlaybackWatchdog();
    if (video._hls) { try { video._hls.destroy(); } catch {} video._hls = null; }
    if (video._mpegts) { try { video._mpegts.destroy(); } catch {} video._mpegts = null; }
    try { video.pause(); } catch {}
    video.removeAttribute('src');
    try { video.load(); } catch {}
  }

  function resetLivePlayerHost() {
    if (!els.livePlayerHost) return;
    const existingVideo = els.livePlayerHost.querySelector('video');
    const existingIframe = els.livePlayerHost.querySelector('iframe');
    if (existingVideo) resetVideoElement(existingVideo);
    if (existingIframe) existingIframe.remove();
    if (!existingVideo) {
      const video = document.createElement('video');
      video.id = 'livePlayer';
      video.controls = true;
      video.playsInline = true;
      video.setAttribute('playsinline', '');
      video.preload = 'auto';
      video.poster = 'assets/live-poster.svg';
      video.preload = 'auto';
      els.livePlayerHost.innerHTML = '';
      els.livePlayerHost.appendChild(video);
      els.livePlayer = video;
    } else {
      els.livePlayer = existingVideo;
      existingVideo.classList.remove('hidden');
    }
  }


  function resetDetailsPlayerHost() {
    if (!els.detailsPlayerHost) return;
    const existingVideo = els.detailsPlayerHost.querySelector('video');
    const existingIframe = els.detailsPlayerHost.querySelector('iframe');
    if (existingVideo) resetVideoElement(existingVideo);
    if (existingIframe) existingIframe.remove();
    if (!existingVideo) {
      const video = document.createElement('video');
      video.id = 'detailsPlayer';
      video.controls = true;
      video.playsInline = true;
      video.setAttribute('playsinline', '');
      video.preload = 'auto';
      els.detailsPlayerHost.innerHTML = '';
      els.detailsPlayerHost.appendChild(video);
      els.detailsPlayer = video;
    } else {
      els.detailsPlayer = existingVideo;
      existingVideo.classList.remove('hidden');
    }
  }

  function extractIframeSrc(raw) {
    const value = String(raw || '').trim();
    if (!value) return '';
    const iframeMatch = value.match(/<iframe[^>]+src=["']([^"']+)["']/i);
    return iframeMatch ? iframeMatch[1] : value;
  }

  function showEmbeddedLiveStream(embedValue) {
    if (!els.livePlayerHost) return;
    resetLivePlayerHost();
    if (els.livePlayer) {
      resetVideoElement(els.livePlayer);
      els.livePlayer.remove();
      els.livePlayer = null;
    }
    const iframeSrc = extractIframeSrc(embedValue);
    if (!iframeSrc) return;
    const iframe = document.createElement('iframe');
    iframe.src = iframeSrc;
    iframe.className = 'embed-frame';
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
    els.livePlayerHost.innerHTML = '';
    els.livePlayerHost.appendChild(iframe);
  }


  function playMedia(video, url) {
    if (!video) return;
    resetVideoElement(video);
    if (!url) return;
    const normalizedUrl = String(url || '').trim();
    const looksLikeHls = /\.m3u8($|\?)/i.test(normalizedUrl)
      || /\/hls\//i.test(normalizedUrl)
      || /urlset/i.test(normalizedUrl)
      || /master(\.m3u8)?($|\?)/i.test(normalizedUrl)
      || /index[-_a-z0-9]*(\.m3u8)?($|\?)/i.test(normalizedUrl);
    const looksLikeTs = /(?:\.ts)($|\?)/i.test(normalizedUrl)
      || /(?:extension=ts)(&|$)/i.test(normalizedUrl)
      || /(?:format=mpegts|format=ts)(&|$)/i.test(normalizedUrl);

    if (window.Hls && window.Hls.isSupported() && looksLikeHls) {
      const hls = new Hls();
      hls.loadSource(normalizedUrl);
      hls.attachMedia(video);
      video._hls = hls;
      hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}));
      return;
    }

    if (window.mpegts && window.mpegts.getFeatureList?.().mseLivePlayback && window.mpegts.isSupported() && looksLikeTs) {
      const player = window.mpegts.createPlayer({
        type: 'mpegts',
        isLive: true,
        url: normalizedUrl
      }, {
        enableWorker: true,
        lazyLoad: false,
        liveBufferLatencyChasing: true,
        liveBufferLatencyMaxLatency: 5,
        liveBufferLatencyMinRemain: 1,
        autoCleanupSourceBuffer: true,
        autoCleanupMaxBackwardDuration: 60,
        autoCleanupMinBackwardDuration: 30,
        stashInitialSize: 768,
        deferLoadAfterSourceOpen: false
      });
      player.attachMediaElement(video);
      player.load();
      video._mpegts = player;
      try {
        video.preload = 'auto';
        video.muted = false;
      } catch {}
      video.play().catch(() => {});

      try {
        player.on(window.mpegts.Events.ERROR, () => {});
        player.on(window.mpegts.Events.STATISTICS_INFO, (stats) => {
          const decoded = Number(stats?.decodedFrames || 0);
          const dropped = Number(stats?.droppedFrames || 0);
          if (decoded > 0 && dropped > decoded * 0.08) {
            try { player.unload(); } catch {}
            try { player.load(); } catch {}
            video.play().catch(() => {});
          }
        });
      } catch {}

      return;
    }

    video.src = normalizedUrl;
    video.load?.();
    video.play().catch(() => {});
  }

  function playVideo(url, channel = null, source = null) {
    clearLivePlaybackWatchdog();
    const embedValue = source?.embedCode || source?.embed || source?.iframe || channel?.embedCode || channel?.embed || channel?.iframe || '';
    if (embedValue) {
      showEmbeddedLiveStream(embedValue);
      return;
    }
    resetLivePlayerHost();
    playMedia(els.livePlayer, url);
    setupLivePlaybackWatchdog(els.livePlayer, channel);
  }

  function showEmbeddedDetailsStream(embedValue) {
    if (!els.detailsPlayerHost) return;
    resetDetailsPlayerHost();
    if (els.detailsPlayer) {
      resetVideoElement(els.detailsPlayer);
      els.detailsPlayer.remove();
      els.detailsPlayer = null;
    }
    const iframeSrc = extractIframeSrc(embedValue);
    if (!iframeSrc) return;
    const iframe = document.createElement('iframe');
    iframe.src = iframeSrc;
    iframe.className = 'embed-frame details-embed-frame';
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
    els.detailsPlayerHost.innerHTML = '';
    els.detailsPlayerHost.appendChild(iframe);
  }

  function playDetailsVideo(url, item = null) {
    const embedValue = item?.embedCode || item?.embed || item?.iframe || '';
    if (embedValue) {
      showEmbeddedDetailsStream(embedValue);
      return;
    }
    resetDetailsPlayerHost();
    playMedia(els.detailsPlayer, url);
  }

  function currentEpg(ch) {
    return safeArr(ch.epg)[0] || null;
  }

  
  const LIVE_CATEGORY_ORDER = ['TV', 'Kinder', 'Sport', 'Filme', 'Anderes'];

  function normalizeLiveMainCategory(value = '', channelName = '') {
    const hay = `${value} ${channelName}`.toLowerCase();
    if (/(kids?|kinder|cartoon|toons?|junior|nick|disney|boomerang|family)/i.test(hay)) return 'Kinder';
    if (/(sport|sports|bundesliga|fussball|football|soccer|nba|nfl|ufc|wwe|boxing|fight|tennis|golf|motorsport|racing|formula|sky sport|dazn|espn)/i.test(hay)) return 'Sport';
    if (/(movie|movies|film|filme|cinema|kino|action|drama|thriller|horror|comedy|romance)/i.test(hay)) return 'Filme';
    if (/(tv|unterhaltung|entertainment|series|serie|news|music|doku|documentary|wissen|show|reality|general|live)/i.test(hay)) return 'TV';
    return 'Anderes';
  }

  function buildLiveCategoryMap(channels = []) {
    const map = {};
    LIVE_CATEGORY_ORDER.forEach(cat => { map[cat] = []; });
    channels.forEach(channel => {
      const mainCategory = normalizeLiveMainCategory(channel.group || '', channel.name || '');
      map[mainCategory].push(channel);
    });
    return map;
  }

  function ensureLiveCategoryState() {
    if (!state.liveCategoryOpen || typeof state.liveCategoryOpen !== 'object') {
      state.liveCategoryOpen = { TV: true, Kinder: false, Sport: false, Filme: false, Anderes: false };
    }
    LIVE_CATEGORY_ORDER.forEach(cat => {
      if (typeof state.liveCategoryOpen[cat] !== 'boolean') state.liveCategoryOpen[cat] = false;
    });
  }

  function ensureActiveLiveCategoryVisible(channel = state.currentLive) {
    ensureLiveCategoryState();
    const activeCategory = normalizeLiveMainCategory(channel?.group || '', channel?.name || '');
    // Nur die aktive Kategorie öffnen, aber den manuellen Zustand der anderen Kategorien nicht überschreiben.
    // So kann der Nutzer Kategorien frei öffnen und wieder schließen.
    if (activeCategory) state.liveCategoryOpen[activeCategory] = true;
  }

  function renderChannelListMarkup(channels = []) {
    ensureLiveCategoryState();
    const categoryMap = buildLiveCategoryMap(channels);
    return LIVE_CATEGORY_ORDER.map(category => {
      const items = categoryMap[category] || [];
      const isOpen = !!state.liveCategoryOpen[category];
      return `
        <section class="channel-category ${isOpen ? 'open' : ''}">
          <button type="button" class="channel-category-toggle" data-channel-category="${escapeHtml(category)}" aria-expanded="${isOpen ? 'true' : 'false'}">
            <span>${escapeHtml(category)}</span>
            <strong>${items.length}</strong>
          </button>
          <div class="channel-category-body" ${isOpen ? '' : 'hidden'}>
            ${items.length ? items.map(ch => `
              <button class="channel-item ${state.currentLive && state.currentLive.id === ch.id ? 'active' : ''}" data-id="${escapeHtml(ch.id)}">
                <div class="channel-logo">${ch.logoUrl ? `<img src="${escapeHtml(ch.logoUrl)}" alt="${escapeHtml(ch.name)}" />` : escapeHtml(ch.logo)}</div>
                <div class="channel-info">
                  <strong>${escapeHtml(ch.name)}</strong>
                  <span>${escapeHtml(ch.group || category)}</span>
                </div>
              </button>`).join('') : '<div class="channel-empty">Keine Sender in dieser Kategorie.</div>'}
          </div>
        </section>`;
    }).join('');
  }

  function injectChannelCategoryStyles() {
    if (document.getElementById('liveCategoryStyles')) return;
    const style = document.createElement('style');
    style.id = 'liveCategoryStyles';
    style.textContent = `
      .channel-category { border: 1px solid rgba(255,255,255,0.06); border-radius: 18px; background: rgba(255,255,255,0.025); overflow: hidden; margin-bottom: 10px; }
      .channel-category-toggle { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 12px; background: rgba(255,255,255,0.03); color: #fff; border: 0; padding: 14px 16px; cursor: pointer; font: inherit; font-weight: 700; }
      .channel-category-toggle span { display: inline-flex; align-items: center; gap: 10px; }
      .channel-category-toggle span::before { content: '▸'; display: inline-block; transition: transform .18s ease; opacity: .9; }
      .channel-category.open .channel-category-toggle span::before { transform: rotate(90deg); }
      .channel-category-toggle strong { font-size: 12px; line-height: 1; padding: 7px 9px; border-radius: 999px; background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.88); }
      .channel-category-body { padding: 10px; display: grid; gap: 10px; }
      .channel-category-body[hidden] { display: none !important; }
      .channel-empty { padding: 12px; border-radius: 14px; background: rgba(255,255,255,0.03); color: rgba(255,255,255,0.66); font-size: 14px; }
    `;
    document.head.appendChild(style);
  }

  function serializeDataJs() {
    const payload = {
      accounts: state.accounts,
      featured: defaults.featured || {},
      liveChannels: state.liveChannels,
      movies: state.movies,
      series: state.series,
      textOverrides: state.textOverrides,
      quickAccessSettings: state.quickAccessSettings
    };
    return `window.UNREAL_DATA = ${JSON.stringify(payload, null, 2)};\n`;
  }

  async function connectLocalDataFile() {
    if (!window.showSaveFilePicker) {
      alert('Direktes Schreiben in data.js wird von diesem Browser hier nicht unterstützt. Nutze Chrome oder Edge über http://localhost.');
      return;
    }
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: 'data.js',
        types: [{ description: 'JavaScript', accept: { 'text/javascript': ['.js'] } }]
      });
      state.localSync.dataFileHandle = handle;
      setStatus('data.js verbunden. Künftige Admin-Änderungen können direkt lokal geschrieben werden.', 'success');
      await writeLocalDataFile(false);
    } catch (err) {
      if (err && err.name === 'AbortError') return;
      console.error('Lokale data.js Verbindung fehlgeschlagen:', err);
      setStatus(`data.js konnte nicht verbunden werden: ${err.message || 'Unbekannter Fehler'}`, 'warn');
    }
  }

  async function writeLocalDataFile(showSuccess = true) {
    const handle = state.localSync?.dataFileHandle;
    if (!handle) {
      if (showSuccess) setStatus('Noch keine data.js verbunden. Nutze zuerst „data.js verbinden“.', 'warn');
      return false;
    }
    try {
      const writable = await handle.createWritable();
      await writable.write(serializeDataJs());
      await writable.close();
      state.localSync.lastWriteAt = Date.now();
      if (showSuccess) setStatus('data.js lokal aktualisiert.', 'success');
      return true;
    } catch (err) {
      console.error('Lokales Schreiben von data.js fehlgeschlagen:', err);
      setStatus(`data.js konnte nicht geschrieben werden: ${err.message || 'Unbekannter Fehler'}`, 'warn');
      return false;
    }
  }

function renderChannels(filter='') {
    injectChannelCategoryStyles();
    const q = String(filter || '').trim().toLowerCase();
    const channels = state.liveChannels.filter(ch => !q || `${ch.name} ${ch.group}`.toLowerCase().includes(q));
    els.channelList.innerHTML = renderChannelListMarkup(channels);
    els.channelCount.textContent = `${channels.length} Sender`;
    els.channelList.querySelectorAll('.channel-item').forEach(btn => btn.addEventListener('click', () => selectLiveChannel(btn.dataset.id)));
    els.channelList.querySelectorAll('[data-channel-category]').forEach(btn => btn.addEventListener('click', () => {
      const category = btn.dataset.channelCategory;
      state.liveCategoryOpen[category] = !state.liveCategoryOpen[category];
      renderChannels(q);
    }));
  }

  function selectLiveChannel(id, sourceIndex = 0) {
    const channel = state.liveChannels.find(ch => ch.id === id) || state.liveChannels[0];
    if (!channel) return;
    state.currentLive = channel;
    ensureActiveLiveCategoryVisible(channel);
    const sources = safeArr(channel.sources);
    state.currentLiveSourceIndex = Math.min(Math.max(Number(sourceIndex) || 0, 0), Math.max(sources.length - 1, 0));
    const activeSource = getActiveLiveSource(channel);
    els.liveChannelTitle.textContent = channel.name;
    els.liveChannelGroup.textContent = `Kategorie: ${channel.group}`;
    const now = currentEpg(channel);
    els.liveChannelNow.textContent = `Jetzt: ${now ? now.title : 'Kein EPG'}`;
    els.epgNowNext.innerHTML = safeArr(channel.epg).slice(0,3).map(item => `<div class="epg-entry"><strong>${escapeHtml(item.start || '--:--')} – ${escapeHtml(item.end || '--:--')}</strong><span>${escapeHtml(item.title || 'Unbekannt')}</span></div>`).join('') || '<div class="chat-empty">Kein EPG vorhanden.</div>';
    renderLiveSourceButtons(channel);
    playVideo(activeSource?.streamUrl || channel.streamUrl, channel, activeSource);
    renderChannels(els.globalSearchInput.value && state.currentView === 'live' ? els.globalSearchInput.value : '');
    subscribeToRoom('live', channel);
  }

  function metaTemplate(item) {
    return cardMeta(item).map(v => `<span>${escapeHtml(v)}</span>`).join('');
  }

  function renderEpisodesList(series, seasonNumber) {
    if (!series || !els.episodesList) return;
    const season = safeArr(series.seasonData).find(s => Number(s.season) === Number(seasonNumber)) || safeArr(series.seasonData)[0];
    const episodes = safeArr(season?.episodes);
    els.episodesList.innerHTML = episodes.length ? episodes.map((ep, idx) => `
      <button class="episode-row" type="button" data-episode-index="${idx}">
        <div class="episode-number">${escapeHtml(ep.number || idx + 1)}</div>
        <img class="episode-thumb" src="${escapeHtml(ep.thumbnail || series.logo || series.backdrop || '')}" alt="${escapeHtml(ep.title || 'Episode')}" />
        <div class="episode-copy">
          <div class="episode-topline">
            <strong>${escapeHtml(ep.title || `Episode ${idx + 1}`)}</strong>
            <span>${escapeHtml(ep.duration || '24m')}</span>
          </div>
          <p>${escapeHtml(ep.description || '')}</p>
        </div>
      </button>
    `).join('') : '<div class="chat-empty">Keine Episoden für diese Staffel vorhanden.</div>';

    els.episodesList.querySelectorAll('[data-episode-index]').forEach(btn => btn.addEventListener('click', () => {
      const ep = episodes[Number(btn.dataset.episodeIndex)];
      if (!ep) return;
      if (!state.currentDetails || state.currentDetails.id !== series.id) openDetails(series);
      if (els.detailsPlayerWrap) els.detailsPlayerWrap.classList.remove('hidden');
      playDetailsVideo(ep.streamUrl || series.streamUrl || '', ep.streamUrl ? ep : series);
      subscribeToRoom('details', series);
      closeEpisodesModal();
    }));
  }

  function openEpisodesModal(series) {
    if (!series || !els.episodesModal) return;
    clearHeroTimer();
    state.currentEpisodesSeries = series;
    els.episodesSeriesTitle.textContent = series.title || 'Episoden';
    els.episodesSeasonSelect.innerHTML = safeArr(series.seasonData).map(season => `<option value="${escapeHtml(season.season)}">Season ${escapeHtml(season.season)}</option>`).join('');
    const firstSeason = safeArr(series.seasonData)[0]?.season || 1;
    els.episodesSeasonSelect.value = String(firstSeason);
    renderEpisodesList(series, firstSeason);
    els.episodesModal.classList.remove('hidden');
    els.episodesModal.setAttribute('aria-hidden', 'false');
  }

  function closeEpisodesModal() {
    if (!els.episodesModal) return;
    els.episodesModal.classList.add('hidden');
    els.episodesModal.setAttribute('aria-hidden', 'true');
    state.currentEpisodesSeries = null;
    if (!state.heroPaused && els.detailsModal?.classList.contains('hidden')) renderHero();
  }

  function openDetails(item) {
    state.currentDetails = item;
    clearHeroTimer();
    els.detailsType.textContent = item.type;
    els.detailsTitle.textContent = item.title;
    els.detailsMeta.innerHTML = metaTemplate(item);
    els.detailsDescription.textContent = item.description;
    els.detailsTags.innerHTML = safeArr(item.genre).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
    els.detailsBackdrop.style.backgroundImage = `url('${item.backdrop}')`;
    if (els.detailsPoster) {
      els.detailsPoster.src = item.logo || item.backdrop || '';
      els.detailsPoster.alt = item.title || 'Poster';
    }
    if (els.detailsEpisodesBtn) els.detailsEpisodesBtn.classList.toggle('hidden', item.type !== 'Serie');
    closeEpisodesModal();
    if (els.detailsPlayerWrap) els.detailsPlayerWrap.classList.add('hidden');
    resetDetailsPlayerHost();
    if (els.detailsPlayer) resetVideoElement(els.detailsPlayer);
    state.currentDetailsSourceIndex = 0;
    renderDetailsSourceButtons(item);
    els.detailsModal.classList.remove('hidden');
    els.detailsModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    subscribeToRoom('details', item);
  }

  function closeDetails() {
    els.detailsModal.classList.add('hidden');
    els.detailsModal.setAttribute('aria-hidden', 'true');
    if (els.detailsPlayerWrap) els.detailsPlayerWrap.classList.add('hidden');
    resetDetailsPlayerHost();
    if (els.detailsPlayer) resetVideoElement(els.detailsPlayer);
    teardownChat('details');
    state.currentDetails = null;
    if (!els.adminPanel || els.adminPanel.classList.contains('hidden')) document.body.style.overflow = '';
    const scroller = els.detailsModal?.querySelector('.details-card');
    if (scroller) scroller.scrollTop = 0;
    if (!state.heroPaused) renderHero();
  }

  function toggleMyList(item) {
    const set = new Set(state.myList);
    if (set.has(item.id)) set.delete(item.id); else set.add(item.id);
    state.myList = [...set];
    saveProfileState();
    computeRecommendations();
    scheduleProfileSync();
    renderMyList();
    renderHome();
    renderHeroSlide(state.heroIndex || 0);
  }

  function openConfigDrawer() { els.configDrawer.classList.remove('hidden'); els.configDrawer.setAttribute('aria-hidden', 'false'); }
  function closeConfigDrawer() { els.configDrawer.classList.add('hidden'); els.configDrawer.setAttribute('aria-hidden', 'true'); }

  async function fetchText(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  }
  async function importFromUrl(url, handler) {
    if (!url) return;
    try {
      setStatus('Lade Daten von der URL …', 'info');
      const text = await fetchText(url);
      handler(text);
    } catch (e) {
      setStatus(`Import fehlgeschlagen: ${e.message}`, 'warn');
    }
  }
  async function importFromFile(file, handler) {
    if (!file) return;
    try {
      setStatus(`Lese Datei „${file.name}“ …`, 'info');
      const text = await file.text();
      handler(text);
    } catch (e) {
      setStatus(`Datei konnte nicht gelesen werden: ${e.message}`, 'warn');
    }
  }

  function parseM3U(text, kind) {
    const lines = String(text || '').split(/\r?\n/);
    const items = [];
    let pending = null;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      if (line.startsWith('#EXTINF')) {
        const attrsPart = line.split(',')[0];
        const title = (line.split(',').slice(1).join(',') || 'Unbekannt').trim();
        const attr = (name) => {
          const m = attrsPart.match(new RegExp(name + '="([^"]*)"', 'i'));
          return m ? m[1] : '';
        };
        pending = {
          title,
          group: attr('group-title') || kind,
          tvgId: attr('tvg-id'),
          logoUrl: attr('tvg-logo'),
          plot: attr('plot'),
          year: attr('year'),
          rating: attr('rating'),
          quality: attr('quality') || attr('resolution') || 'HD',
          typeHint: attr('type')
        };
      } else if (!line.startsWith('#')) {
        if (!pending) continue;
        const meta = pending; pending = null;
        if (kind === 'live') {
          items.push({
            id: uniqueId('live'), name: meta.title, group: meta.group || 'Live TV', logo: initials(meta.title), logoUrl: meta.logoUrl,
            streamUrl: line, epgId: meta.tvgId || slug(meta.title), source: 'imported', chatEnabled: false, epg: []
          });
        } else if (kind === 'movies') {
          items.push({
            id: uniqueId('movie'), type: 'Film', title: meta.title, year: Number(meta.year) || new Date().getFullYear(), duration: '—',
            rating: meta.rating || '—', quality: meta.quality || 'HD', genre: splitTags(meta.group || 'Imported'), description: meta.plot || 'Importierter Film.',
            backdrop: 'assets/movie-1.svg', logo: 'assets/movie-1.svg', streamUrl: line, source: 'imported', chatEnabled: false
          });
        } else if (kind === 'series') {
          items.push({
            id: uniqueId('series'), type: 'Serie', title: meta.title, year: Number(meta.year) || new Date().getFullYear(), seasons: 1, episodes: 1,
            rating: meta.rating || '—', quality: meta.quality || 'HD', genre: splitTags(meta.group || 'Imported'), description: meta.plot || 'Importierte Serie.',
            backdrop: 'assets/series-1.svg', logo: 'assets/series-1.svg', streamUrl: line, source: 'imported', chatEnabled: false
          });
        }
      }
    }
    return items;
  }

  function parseEpg(xmlText) {
    const xml = new DOMParser().parseFromString(xmlText, 'application/xml');
    const programs = Array.from(xml.getElementsByTagName('programme'));
    const grouped = {};
    programs.forEach(node => {
      const channel = slug(node.getAttribute('channel') || '');
      if (!channel) return;
      const title = node.getElementsByTagName('title')[0]?.textContent || 'Programm';
      const startRaw = node.getAttribute('start') || '';
      const stopRaw = node.getAttribute('stop') || '';
      const start = startRaw ? startRaw.slice(8,10)+':'+startRaw.slice(10,12) : '--:--';
      const end = stopRaw ? stopRaw.slice(8,10)+':'+stopRaw.slice(10,12) : '--:--';
      (grouped[channel] ||= []).push({ start, end, title });
    });
    return grouped;
  }

  function applyLiveImport(text) {
    const imported = parseM3U(text, 'live');
    state.liveChannels = [...defaults.liveChannels.map(ch => ({...ch, source:'builtin', chatEnabled:true})), ...imported];
    enrich();
    renderHome();
    renderChannels();
    saveRemoteSiteState();
    setStatus(`${imported.length} Live-TV-Sender importiert.`, 'success');
  }
  function applyMovieImport(text) {
    const imported = parseM3U(text, 'movies');
    state.movies = [...defaults.movies.map(x => ({...x, source:'builtin', chatEnabled:true})), ...imported];
    enrich();
    renderHome(); renderCatalogs(); renderMyList();
    saveRemoteSiteState();
    setStatus(`${imported.length} Filme importiert.`, 'success');
  }
  function applySeriesImport(text) {
    const imported = parseM3U(text, 'series');
    state.series = [...defaults.series.map(x => ({...x, source:'builtin', chatEnabled:true})), ...imported];
    enrich();
    renderHome(); renderCatalogs(); renderMyList();
    saveRemoteSiteState();
    setStatus(`${imported.length} Serien importiert.`, 'success');
  }
  function applyEpgImport(text) {
    const store = parseEpg(text);
    state.epgStore = store;
    state.liveChannels = state.liveChannels.map(ch => ({ ...ch, epg: store[ch.epgId] || store[slug(ch.name)] || ch.epg || [] }));
    persistAll();
    renderChannels();
    if (state.currentLive) selectLiveChannel(state.currentLive.id);
    saveRemoteSiteState();
    setStatus('EPG/XMLTV erfolgreich geladen.', 'success');
  }
  function resetLibrary() {
    state.liveChannels = defaults.liveChannels.map(ch => ({...ch, source:'builtin', chatEnabled:true}));
    state.movies = defaults.movies.map(x => ({...x, source:'builtin', chatEnabled:true}));
    state.series = defaults.series.map(x => ({...x, source:'builtin', chatEnabled:true}));
    state.epgStore = {};
    persistAll();
    renderHome(); renderCatalogs(); renderMyList(); renderChannels();
    saveRemoteSiteState();
    setStatus('Alle importierten Listen wurden zurückgesetzt.', 'info');
  }

  function searchEverything(query) {
    const q = query.trim().toLowerCase();
    if (state.currentView === 'live') return renderChannels(q);
    const matches = (item) => !q || `${item.title} ${safeArr(item.genre).join(' ')} ${item.description}`.toLowerCase().includes(q);
    els.moviesGrid.innerHTML = state.movies.filter(matches).map(cardTemplate).join('');
    els.seriesGrid.innerHTML = state.series.filter(matches).map(cardTemplate).join('');
    attachCardEvents(els.moviesGrid); attachCardEvents(els.seriesGrid);
    renderHome();
  }

  function getRoomId(item, scope) {
    if (!item) return null;
    if (scope === 'live') return `live_${slug(item.id || item.name || 'default')}`;
    return `${item.type === 'Film' ? 'movie' : 'series'}_${slug(item.id || item.title || 'default')}`;
  }
  function chatEnabledForItem(item) { return !!(item && item.chatEnabled && item.source === 'builtin'); }
  function getDemoStore() { return readJson(STORAGE.chat, {}); }
  function saveDemoStore(v) { saveJson(STORAGE.chat, v); }
  function setChatStatus(scope, message, tone='info') {
    const el = scope === 'live' ? els.liveChatStatus : els.detailsChatStatus;
    el.className = `chat-status ${tone}`;
    el.textContent = message;
  }
  function getChatEls(scope) {
    return scope === 'live'
      ? { input: els.liveChatInput, form: els.liveChatForm, target: els.liveChatMessages, picker: els.liveEmojiPicker, toggle: els.liveEmojiToggle }
      : { input: els.detailsChatInput, form: els.detailsChatForm, target: els.detailsChatMessages, picker: els.detailsEmojiPicker, toggle: els.detailsEmojiToggle };
  }
  function updateChatFormState(scope, enabled, placeholder) {
    const { input, form, toggle } = getChatEls(scope);
    const submitBtn = form?.querySelector('button[type="submit"]');
    if (input) input.disabled = !enabled;
    if (submitBtn) submitBtn.disabled = !enabled;
    if (toggle) toggle.disabled = !enabled;
    if (input) input.placeholder = placeholder;
  }

  const CHAT_EMOJIS = ['😀','😂','😍','😎','🔥','👏','🙌','👍','❤️','🎬','📺','🍿','🤩','🥳','😮','😢','😡','🤔','👀','✅','🚀','💯','⭐','🎉'];

  function closeEmojiPickers(exceptScope = null) {
    [['live', els.liveEmojiPicker], ['details', els.detailsEmojiPicker]].forEach(([scope, picker]) => {
      if (!picker || scope === exceptScope) return;
      picker.classList.add('hidden');
    });
  }

  function renderEmojiPicker(scope) {
    const { picker } = getChatEls(scope);
    if (!picker) return;
    picker.innerHTML = CHAT_EMOJIS.map(emoji => `<button type="button" class="emoji-option" data-emoji="${emoji}" data-scope="${scope}">${emoji}</button>`).join('');
  }

  function insertEmoji(scope, emoji) {
    const { input } = getChatEls(scope);
    if (!input || input.disabled) return;
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    input.value = `${input.value.slice(0, start)}${emoji}${input.value.slice(end)}`;
    const nextPos = start + emoji.length;
    input.setSelectionRange?.(nextPos, nextPos);
    input.focus();
  }

  function toggleEmojiPicker(scope) {
    const { picker } = getChatEls(scope);
    if (!picker) return;
    const isHidden = picker.classList.contains('hidden');
    closeEmojiPickers(scope);
    picker.classList.toggle('hidden', !isHidden);
  }

  function canModerateMessage(message) {
    if (isAdminProfile()) return true;
    return !!(state.activeProfile && message && String(message.author || '') === String(state.activeProfile.username || ''));
  }

  function renderChatMessages(target, messages, emptyText, scope) {
    target.innerHTML = messages.length ? messages.map((m, index) => `
      <div class="chat-message" data-msg-id="${escapeHtml(m.id || String(index))}" data-scope="${escapeHtml(scope)}">
        <img class="chat-avatar" src="${escapeHtml(m.avatar || 'assets/avatar-admin.svg')}" alt="${escapeHtml(m.author || 'Profil')}" />
        <div class="chat-bubble">
          <div class="chat-bubble-head"><strong>${escapeHtml(m.author || 'Profil')}</strong><span>${escapeHtml(formatTime(m.createdAt || Date.now()))}${m.editedAt ? '<span class="chat-edited-label">bearbeitet</span>' : ''}</span></div>
          <p>${escapeHtml(m.text || '')}</p>
          ${canModerateMessage(m) ? `<div class="chat-message-actions"><button type="button" class="chat-action-btn" data-chat-action="edit" data-msg-id="${escapeHtml(m.id || String(index))}" data-scope="${escapeHtml(scope)}">Bearbeiten</button><button type="button" class="chat-action-btn" data-chat-action="delete" data-msg-id="${escapeHtml(m.id || String(index))}" data-scope="${escapeHtml(scope)}">Löschen</button></div>` : ''}
        </div>
      </div>`).join('') : `<div class="chat-empty">${escapeHtml(emptyText)}</div>`;
    target.scrollTop = target.scrollHeight;
  }
  function teardownChat(scope) {
    const unsub = state.chat.unsubscribers[scope];
    if (typeof unsub === 'function') { try { unsub(); } catch {} }
    state.chat.unsubscribers[scope] = null;
  }
  function subscribeToRoom(scope, item) {
    teardownChat(scope);
    state.currentChatRoom[scope] = item;
    const label = scope === 'live' ? els.liveChatRoomLabel : els.detailsChatRoomLabel;
    const target = scope === 'live' ? els.liveChatMessages : els.detailsChatMessages;

    if (!chatEnabledForItem(item)) {
      label.textContent = 'Chat: deaktiviert';
      setChatStatus(scope, 'Chat ist aktuell nur für fest eingebaute UnrealTV-Inhalte aktiv.', 'warn');
      renderChatMessages(target, [], 'Für diesen Inhalt ist aktuell kein Chat aktiv.', scope);
      updateChatFormState(scope, false, 'Chat für importierte Inhalte deaktiviert');
      return;
    }

    const roomId = getRoomId(item, scope);
    label.textContent = `Raum: ${roomId}`;
    updateChatFormState(scope, true, 'Schreibe eine Nachricht …');

    if (state.chat.mode === 'firebase' && state.chat.firestore) {
      setChatStatus(scope, state.chat.reason || 'Realtime-Chat aktiv.', 'success');
      state.chat.unsubscribers[scope] = state.chat.firestore.collection('unrealtv_chat_rooms').doc(roomId).collection('messages').orderBy('createdAt', 'asc').limit(100)
        .onSnapshot(snapshot => {
          const messages = snapshot.docs.map(doc => {
            const d = doc.data() || {};
            return {
              id: doc.id,
              author: d.author,
              avatar: d.avatar,
              text: d.text,
              editedAt: d.editedAt?.toDate ? d.editedAt.toDate() : d.editedAt || null,
              createdAt: d.createdAt?.toDate ? d.createdAt.toDate() : d.createdAt || Date.now()
            };
          });
          renderChatMessages(target, messages, 'Noch keine Nachrichten in diesem Raum.', scope);
        }, err => {
          console.error('Chat subscribe error', err);
          setChatStatus(scope, 'Firebase-Chat konnte nicht geladen werden. Demo-Modus aktiv.', 'warn');
          state.chat.mode = 'demo';
          state.chat.firestore = null;
          subscribeToRoom(scope, item);
        });
      return;
    }

    setChatStatus(scope, state.chat.reason || 'Demo-Chat aktiv.', 'info');
    const store = getDemoStore();
    renderChatMessages(target, store[roomId] || [], 'Noch keine Nachrichten in diesem Raum.', scope);
    const refresh = () => renderChatMessages(target, getDemoStore()[roomId] || [], 'Noch keine Nachrichten in diesem Raum.', scope);
    window.addEventListener('storage', refresh);
    state.chat.unsubscribers[scope] = () => window.removeEventListener('storage', refresh);
  }
  async function sendChatMessage(scope, text) {
    const item = state.currentChatRoom[scope];
    if (!chatEnabledForItem(item) || !state.activeProfile) return;
    const clean = String(text || '').trim();
    if (!clean) return;
    const message = { id: uniqueId('msg'), author: state.activeProfile.username, avatar: state.activeProfile.avatar, text: clean, createdAt: new Date() };
    const roomId = getRoomId(item, scope);

    if (state.chat.mode === 'firebase' && state.chat.firestore) {
      await state.chat.firestore.collection('unrealtv_chat_rooms').doc(roomId).collection('messages').add({
        author: message.author, avatar: message.avatar, text: message.text,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      return;
    }

    const store = getDemoStore();
    const list = store[roomId] || [];
    list.push(message);
    store[roomId] = list.slice(-100);
    saveDemoStore(store);
    const target = scope === 'live' ? els.liveChatMessages : els.detailsChatMessages;
    renderChatMessages(target, store[roomId], 'Noch keine Nachrichten in diesem Raum.', scope);
  }

  async function editChatMessage(scope, messageId) {
    const item = state.currentChatRoom[scope];
    if (!item) return;
    const roomId = getRoomId(item, scope);
    let message = null;
    if (state.chat.mode === 'firebase' && state.chat.firestore) {
      const snap = await state.chat.firestore.collection('unrealtv_chat_rooms').doc(roomId).collection('messages').doc(messageId).get();
      if (snap.exists) message = { id: snap.id, ...(snap.data() || {}) };
    } else {
      const store = getDemoStore();
      message = safeArr(store[roomId]).find(entry => entry.id === messageId) || null;
    }
    if (!message || !canModerateMessage(message)) return;
    const nextText = prompt('Nachricht bearbeiten:', message.text || '');
    if (nextText == null) return;
    const clean = String(nextText || '').trim();
    if (!clean) return;

    if (state.chat.mode === 'firebase' && state.chat.firestore) {
      await state.chat.firestore.collection('unrealtv_chat_rooms').doc(roomId).collection('messages').doc(messageId).update({
        text: clean,
        editedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      return;
    }

    const store = getDemoStore();
    store[roomId] = safeArr(store[roomId]).map(entry => entry.id === messageId ? { ...entry, text: clean, editedAt: new Date() } : entry);
    saveDemoStore(store);
    const target = scope === 'live' ? els.liveChatMessages : els.detailsChatMessages;
    renderChatMessages(target, store[roomId], 'Noch keine Nachrichten in diesem Raum.', scope);
  }

  async function deleteChatMessage(scope, messageId) {
    const item = state.currentChatRoom[scope];
    if (!item || !confirm('Diese Nachricht wirklich löschen?')) return;
    const roomId = getRoomId(item, scope);

    if (state.chat.mode === 'firebase' && state.chat.firestore) {
      const snap = await state.chat.firestore.collection('unrealtv_chat_rooms').doc(roomId).collection('messages').doc(messageId).get();
      const message = snap.exists ? { id: snap.id, ...(snap.data() || {}) } : null;
      if (!message || !canModerateMessage(message)) return;
      await state.chat.firestore.collection('unrealtv_chat_rooms').doc(roomId).collection('messages').doc(messageId).delete();
      return;
    }

    const store = getDemoStore();
    const message = safeArr(store[roomId]).find(entry => entry.id === messageId) || null;
    if (!message || !canModerateMessage(message)) return;
    store[roomId] = safeArr(store[roomId]).filter(entry => entry.id !== messageId);
    saveDemoStore(store);
    const target = scope === 'live' ? els.liveChatMessages : els.detailsChatMessages;
    renderChatMessages(target, store[roomId], 'Noch keine Nachrichten in diesem Raum.', scope);
  }

  function getCollectionByType(type) {
    if (type === 'live') return state.liveChannels;
    if (type === 'movies') return state.movies;
    return state.series;
  }

  function setCollectionByType(type, value) {
    if (type === 'live') state.liveChannels = value;
    else if (type === 'movies') state.movies = value;
    else state.series = value;
  }

  function getTypeLabel(type) {
    return type === 'live' ? 'Live TV' : type === 'movies' ? 'Filme' : 'Serien';
  }

  function getItemLabel(item, type) {
    return type === 'live' ? (item?.name || 'Sender') : (item?.title || 'Titel');
  }

  
  function getSlideshowCandidates() {
    return [
      ...state.liveChannels.map(item => ({ ...item, _adminType: 'live' })),
      ...state.movies.map(item => ({ ...item, _adminType: 'movies' })),
      ...state.series.map(item => ({ ...item, _adminType: 'series' }))
    ];
  }

  function slideshowItemLabel(item) {
    const prefix = item._adminType === 'live' ? 'Live TV' : item._adminType === 'movies' ? 'Film' : 'Serie';
    return `${prefix}: ${item.name || item.title || 'Eintrag'}`;
  }

  function renderAdminSlideshowTab() {
    const items = getSlideshowCandidates();
    return `
      <form id="adminSlideshowForm" class="admin-form">
        <h3>Home-Slideshow verwalten</h3>
        <div class="admin-help">Lege fest, welche Live-TV-Sender, Filme und Serien im großen Header auf der Home-Seite erscheinen. Für jeden Eintrag kannst du eine eigene Beschreibung und ein eigenes Backdrop-Bild für die Slideshow setzen.</div>
        <div class="admin-slideshow-list">
          ${items.map(item => {
            const itemId = item.id;
            const type = item._adminType;
            const title = item.name || item.title || 'Eintrag';
            const include = item.heroInclude === true;
            const desc = item.heroDescription || item.description || '';
            const backdrop = item.heroBackdrop || item.backdrop || item.artwork || '';
            return `
              <div class="admin-slideshow-card">
                <div class="admin-slideshow-top">
                  <label class="admin-check">
                    <input type="checkbox" data-hero-item="${escapeHtml(itemId)}" data-hero-type="${escapeHtml(type)}" ${include ? 'checked' : ''} />
                    <span><strong>${escapeHtml(slideshowItemLabel(item))}</strong></span>
                  </label>
                </div>
                ${item._adminType === 'live' ? `
                <label>Slideshow Titel (eigener Name)</label>
                <input data-hero-title="${escapeHtml(itemId)}" data-hero-type="${escapeHtml(type)}" value="${escapeHtml(item.heroTitle || item.name || '')}" placeholder="Eigener Name für Slideshow" />
              ` : ``}
                <label>Beschreibung in der Slideshow</label>
                <textarea data-hero-desc="${escapeHtml(itemId)}" data-hero-type="${escapeHtml(type)}" placeholder="Beschreibung unter dem Titel">${escapeHtml(desc)}</textarea>
                <label>Backdrop Bild für Slideshow</label>
                <input data-hero-backdrop="${escapeHtml(itemId)}" data-hero-type="${escapeHtml(type)}" value="${escapeHtml(backdrop)}" placeholder="https://...jpg oder data:image/..." />
              </div>
            `;
          }).join('')}
        </div>
        <div class="admin-actions">
          <button type="submit" class="primary-btn">Slideshow speichern</button>
        </div>
      </form>`;
  }

  function saveAdminSlideshow() {
    const flags = [...document.querySelectorAll('[data-hero-item]')].map(el => ({
      id: el.dataset.heroItem,
      type: el.dataset.heroType,
      include: !!el.checked
    }));
    const descriptions = [...document.querySelectorAll('[data-hero-desc]')].map(el => ({
      id: el.dataset.heroDesc,
      type: el.dataset.heroType,
      description: el.value.trim()
    }));
    const titles = [...document.querySelectorAll('[data-hero-title]')].map(el => ({
      id: el.dataset.heroTitle,
      type: el.dataset.heroType,
      title: el.value.trim()
    }));

    const backdrops = [...document.querySelectorAll('[data-hero-backdrop]')].map(el => ({
      id: el.dataset.heroBackdrop,
      type: el.dataset.heroType,
      backdrop: el.value.trim()
    }));

    const applyToCollection = (list, type) => list.map(item => {
      const flag = flags.find(entry => entry.id === item.id && entry.type === type);
      const desc = descriptions.find(entry => entry.id === item.id && entry.type === type);
      const back = backdrops.find(entry => entry.id === item.id && entry.type === type);
      const titleOverride = titles.find(entry => entry.id === item.id && entry.type === type);
      return {
        ...item,
        heroInclude: flag ? flag.include : !!item.heroInclude,
        heroDescription: desc ? desc.description : (item.heroDescription || item.description || ''),
        heroBackdrop: back ? (back.backdrop || item.heroBackdrop || item.backdrop || item.artwork || '') : (item.heroBackdrop || item.backdrop || item.artwork || ''),
        heroTitle: titleOverride ? titleOverride.title : (item.heroTitle || item.name || item.title || '')
      };
    });

    state.liveChannels = applyToCollection(state.liveChannels, 'live');
    state.movies = applyToCollection(state.movies, 'movies');
    state.series = applyToCollection(state.series, 'series');
    commitSiteChanges({ message: 'Slideshow gespeichert.' });
  }

function ensureAdminSelection(typeKey, idKey) {
    const type = state.adminSelections[typeKey] || 'live';
    const list = getCollectionByType(type);
    if (!list.length) {
      state.adminSelections[idKey] = null;
      return { type, item: null };
    }
    const currentId = state.adminSelections[idKey];
    const current = list.find(entry => entry.id === currentId) || list[0];
    state.adminSelections[idKey] = current.id;
    return { type, item: current };
  }

  function countChatMessages() {
    const store = getDemoStore();
    return Object.values(store).reduce((sum, list) => sum + safeArr(list).length, 0);
  }

  function getChatAuthorStats() {
    const stats = {};
    Object.values(getDemoStore()).forEach(list => safeArr(list).forEach(message => {
      const key = message.author || 'Unbekannt';
      stats[key] = (stats[key] || 0) + 1;
    }));
    return Object.entries(stats).sort((a,b) => b[1]-a[1]);
  }

  function getAdminRooms() {
    const store = getDemoStore();
    return Object.keys(store).sort().map(roomId => ({ roomId, count: safeArr(store[roomId]).length }));
  }

  function refreshAllViews({ preserveLive = true } = {}) {
    enrich();
    renderHome();
    renderCatalogs();
    renderMyList();
    renderHero();
    applyTextOverrides();
    renderChannels(state.currentView === 'live' ? (els.globalSearchInput?.value || '') : '');
    if (preserveLive && state.currentLive) {
      const live = state.liveChannels.find(ch => ch.id === state.currentLive.id);
      if (live) selectLiveChannel(live.id, state.currentLiveSourceIndex || 0); else resetLivePanel();
    }
    if (state.currentDetails) {
      const pool = state.currentDetails.type === 'Film' ? state.movies : state.series;
      const found = pool.find(entry => entry.id === state.currentDetails.id);
      if (found) openDetails(found); else closeDetails();
    }
    if (!state.currentDetails && !state.heroPaused) renderHero();
    if (!els.adminPanel?.classList.contains('hidden')) renderAdminPanel();
  }

  function adminTextValue(key, fallback='') {
    return state.textOverrides?.[key] ?? fallback;
  }

  function renderAdminOverviewTab() {
    const authorStats = getChatAuthorStats();
    return `
      <div class="admin-grid">
        <div class="admin-card"><div class="admin-stat-label">Profile</div><div class="admin-stat-value">${state.accounts.length}</div><div class="admin-help">Aktive Benutzerprofile in UnrealTV</div></div>
        <div class="admin-card"><div class="admin-stat-label">Live TV</div><div class="admin-stat-value">${state.liveChannels.length}</div><div class="admin-help">Sender im aktuellen Katalog</div></div>
        <div class="admin-card"><div class="admin-stat-label">Filme</div><div class="admin-stat-value">${state.movies.length}</div><div class="admin-help">Film-Einträge lokal gespeichert</div></div>
        <div class="admin-card"><div class="admin-stat-label">Serien</div><div class="admin-stat-value">${state.series.length}</div><div class="admin-help">Serien-Einträge lokal gespeichert</div></div>
        <div class="admin-card"><div class="admin-stat-label">Chat-Nachrichten</div><div class="admin-stat-value">${countChatMessages()}</div><div class="admin-help">Demo-Chat Nachrichten in localStorage</div></div>
        <div class="admin-card"><div class="admin-stat-label">Meine Liste</div><div class="admin-stat-value">${state.myList.length}</div><div class="admin-help">Gespeicherte Titel des aktuellen Browsers</div></div>
      </div>
      <div class="admin-two-col" style="margin-top:16px;">
        <div class="admin-list-card">
          <h3>Top Chat-Autoren</h3>
          <div class="admin-list">
            ${authorStats.length ? authorStats.slice(0, 8).map(([name, count]) => `<div class="admin-list-item"><strong>${escapeHtml(name)}</strong><span class="admin-list-meta">${count} Nachrichten</span></div>`).join('') : '<div class="admin-empty">Noch keine Chat-Aktivität vorhanden.</div>'}
          </div>
        </div>
        <div class="admin-list-card">
          <h3>Schnellzugriff</h3>
          <div class="admin-help">Hier kannst du sofort Inhalte ergänzen, URLs anpassen und Texte umbenennen – ohne die Website optisch umzubauen.</div>
          <div class="admin-actions">
            <button type="button" class="ghost-btn" data-admin-jump="quickaccess">Schnellzugriff bearbeiten</button>
            <button type="button" class="ghost-btn" data-admin-jump="content">Inhalt bearbeiten</button>
            <button type="button" class="ghost-btn" data-admin-jump="streams">Stream URLs ändern</button>
            <button type="button" class="ghost-btn" data-admin-jump="texts">Website-Texte ändern</button>
          </div>
          <div class="admin-help" style="margin-top:14px;">Lokales data.js Schreiben funktioniert in Chrome/Edge über <code>http://localhost</code>. Einmal verbinden, danach werden Admin-Änderungen zusätzlich direkt in deine <code>data/data.js</code> geschrieben.</div>
          <div class="admin-actions" style="margin-top:12px;">
            <button type="button" class="ghost-btn" id="adminConnectLocalDataBtn">data.js verbinden</button>
            <button type="button" class="ghost-btn" id="adminWriteLocalDataBtn">data.js jetzt schreiben</button>
          </div>
        </div>
      </div>`;
  }

  
  function renderAdminQuickAccessTab() {
    const quickLimit = Math.max(1, Math.min(20, Number(state.quickAccessSettings?.limit || 4)));
    const rows = state.liveChannels.map((channel, index) => `
      <label class="admin-qa-row">
        <div class="admin-qa-meta">
          ${channel.logoUrl ? `<img class="admin-qa-logo" src="${escapeHtml(channel.logoUrl)}" alt="${escapeHtml(channel.name)} Logo" loading="lazy" />` : `<div class="admin-qa-logo fallback">${escapeHtml(channel.logo || initials(channel.name || '?'))}</div>`}
          <div class="admin-qa-copy">
            <strong>${escapeHtml(channel.name)}</strong>
            <span>${escapeHtml(channel.group || 'Live TV')}</span>
          </div>
        </div>
        <input type="checkbox" class="admin-qa-checkbox" data-qa-id="${escapeHtml(channel.id)}" ${channel.quickAccess ? 'checked' : ''} />
      </label>
    `).join('');

    return `
      <form id="adminQuickAccessForm" class="admin-form admin-form-wide">
        <h3>Schnellzugriff auf der Home-Seite</h3>
        <div class="admin-help">Hier bestimmst du direkt im Admin Panel, welche Sender auf der Home-Seite unter „Schnellzugriff“ erscheinen und wie viele davon gezeigt werden.</div>

        <label for="adminQuickAccessLimit">Wie viele Sender anzeigen?</label>
        <input id="adminQuickAccessLimit" type="number" min="1" max="20" value="${quickLimit}" />

        <div class="admin-help">Aktuell markierte Sender werden in der Reihenfolge deiner Live-TV-Liste angezeigt.</div>

        <div class="admin-qa-list">
          ${rows || '<div class="admin-empty">Keine Live-TV-Sender vorhanden.</div>'}
        </div>

        <div class="admin-actions">
          <button type="submit" class="primary-btn">Schnellzugriff speichern</button>
          <button type="button" class="ghost-btn" id="adminQuickAccessSelectTopBtn">Erste Sender markieren</button>
          <button type="button" class="ghost-btn" id="adminQuickAccessClearBtn">Alle entfernen</button>
        </div>
      </form>
    `;
  }

function renderAdminContentTab() {
    const { type, item } = ensureAdminSelection('contentType', 'contentId');
    const list = getCollectionByType(type);
    const options = list.map(entry => `<option value="${escapeHtml(entry.id)}" ${item && entry.id === item.id ? 'selected' : ''}>${escapeHtml(getItemLabel(entry, type))}</option>`).join('');
    const isLive = type === 'live';
    return `
      <div class="admin-two-col">
        <form id="adminEditContentForm" class="admin-form">
          <h3>Bestehenden Inhalt bearbeiten</h3>
          <label for="adminContentType">Bereich</label>
          <select id="adminContentType"><option value="live" ${type === 'live' ? 'selected' : ''}>Live TV</option><option value="movies" ${type === 'movies' ? 'selected' : ''}>Filme</option><option value="series" ${type === 'series' ? 'selected' : ''}>Serien</option></select>
          <label for="adminContentItem">Eintrag</label>
          <select id="adminContentItem">${options}</select>
          ${item ? `
            <label>${isLive ? 'Sendername' : 'Titel'}</label>
            <input id="adminEditTitle" value="${escapeHtml(isLive ? item.name : item.title)}" />
            <label>${isLive ? 'Kategorie' : 'Beschreibung'}</label>
            ${isLive ? `<input id="adminEditPrimary" value="${escapeHtml(item.group || '')}" />` : `<textarea id="adminEditPrimary">${escapeHtml(item.description || '')}</textarea>`}
            <label>${isLive ? 'Logo Text' : 'Genres (mit Komma)'}</label>
            <input id="adminEditSecondary" value="${escapeHtml(isLive ? (item.logo || '') : safeArr(item.genre).join(', '))}" />
            <label>${isLive ? 'Logo URL' : 'Jahr'}</label>
            <input id="adminEditTertiary" value="${escapeHtml(isLive ? (item.logoUrl || '') : (item.year || ''))}" />
            ${isLive ? `<label class="admin-check"><input id="adminEditQuickAccess" type="checkbox" ${item.quickAccess ? 'checked' : ''} /> <span>Im Schnellzugriff auf der Home-Seite anzeigen</span></label>` : ''}
            ${type === 'movies' ? `<label>Dauer</label><input id="adminEditDuration" value="${escapeHtml(item.duration || '')}" />` : ''}
            ${type === 'series' ? `<label>Staffeln</label><input id="adminEditSeasons" type="number" min="1" value="${escapeHtml(item.seasons || 1)}" /><label>Episoden</label><input id="adminEditEpisodes" type="number" min="1" value="${escapeHtml(item.episodes || 1)}" />` : ''}
            ${!isLive ? `<label>Rating</label><input id="adminEditRating" value="${escapeHtml(item.rating || '')}" /><label>Qualität</label><input id="adminEditQuality" value="${escapeHtml(item.quality || '')}" /><label>Cover / Poster URL</label><input id="adminEditPoster" value="${escapeHtml(item.logo || '')}" placeholder="https://...jpg" /><input type="file" id="adminEditPosterUpload" data-target-input="adminEditPoster" accept="image/*" /><label>Backdrop URL</label><input id="adminEditBackdrop" value="${escapeHtml(item.backdrop || '')}" placeholder="https://...jpg" /><input type="file" id="adminEditBackdropUpload" data-target-input="adminEditBackdrop" accept="image/*" />` : ''}
            <div class="admin-actions">
              <button type="submit" class="primary-btn">Änderungen speichern</button>
              <button type="button" class="ghost-btn admin-danger" id="adminDeleteContentBtn">Eintrag löschen</button>
            </div>
          ` : '<div class="admin-empty">Kein Eintrag vorhanden.</div>'}
        </form>
        <form id="adminAddContentForm" class="admin-form">
          <h3>Neuen Inhalt hinzufügen</h3>
          <label for="adminAddType">Bereich</label>
          <select id="adminAddType"><option value="live">Live TV</option><option value="movies">Film</option><option value="series">Serie</option></select>
          <label for="adminAddTitle">Titel / Sendername</label>
          <input id="adminAddTitle" placeholder="z. B. Kino Plus HD" required />
          <label for="adminAddDescription">Beschreibung</label>
          <textarea id="adminAddDescription" placeholder="Kurze Beschreibung"></textarea>
          <label for="adminAddStream">Stream URL</label>
          <input id="adminAddStream" placeholder="https://...m3u8" required />
          <label for="adminAddPoster">Poster / Logo URL</label>
          <input id="adminAddPoster" placeholder="https://...jpg" />
          <input type="file" id="adminAddPosterUpload" data-target-input="adminAddPoster" accept="image/*" />
          <label for="adminAddBackdrop">Backdrop URL</label>
          <input id="adminAddBackdrop" placeholder="https://...jpg" />
          <input type="file" id="adminAddBackdropUpload" data-target-input="adminAddBackdrop" accept="image/*" />
          <label for="adminAddExtra">Genre / Kategorie</label>
          <input id="adminAddExtra" placeholder="Action, Drama oder Entertainment" />
          <label class="admin-check"><input id="adminAddQuickAccess" type="checkbox" /> <span>Bei Live TV im Schnellzugriff anzeigen</span></label>
          
          <div class="admin-actions"><button type="submit" class="primary-btn">Neuen Eintrag anlegen</button></div>
          <div class="admin-upload-note">Tipp: Du kannst Poster und Backdrops direkt als lokale Datei auswählen. Sie werden lokal im Browser gespeichert.</div>
        </form>
      </div>`;
  }

  function renderAdminStreamsTab() {
    const { type, item } = ensureAdminSelection('streamType', 'streamId');
    const list = getCollectionByType(type);
    const options = list.map(entry => `<option value="${escapeHtml(entry.id)}" ${item && entry.id === item.id ? 'selected' : ''}>${escapeHtml(getItemLabel(entry, type))}</option>`).join('');
    const epgText = type === 'live' ? safeArr(item?.epg).map(entry => `${entry.start || ''}|${entry.end || ''}|${entry.title || ''}`).join('\n') : '';
    const mediaSources = safeArr(item?.sources).slice(0, 3);
    return `
      <form id="adminStreamsForm" class="admin-form">
        <h3>Streams & Media Assets</h3>
        <label for="adminStreamType">Bereich</label>
        <select id="adminStreamType"><option value="live" ${type === 'live' ? 'selected' : ''}>Live TV</option><option value="movies" ${type === 'movies' ? 'selected' : ''}>Filme</option><option value="series" ${type === 'series' ? 'selected' : ''}>Serien</option></select>
        <label for="adminStreamItem">Eintrag</label>
        <select id="adminStreamItem">${options}</select>
        ${item ? `
          <label for="adminStreamUrl">Primäre Stream URL</label>
          <input id="adminStreamUrl" value="${escapeHtml(item.streamUrl || '')}" placeholder="https://...m3u8" />
          <label for="adminStreamEmbed">Embed / Iframe Code oder URL</label>
          <textarea id="adminStreamEmbed" placeholder="Optionaler Embed Code">${escapeHtml(item.embed || item.embedCode || item.iframe || '')}</textarea>
          <label for="adminLogoUrl">Poster / Logo URL</label>
          <input id="adminLogoUrl" value="${escapeHtml(item.logo || item.logoUrl || '')}" />
          <input type="file" id="adminLogoUpload" data-target-input="adminLogoUrl" accept="image/*" />
          <label for="adminBackdropUrl">Backdrop URL</label>
          <input id="adminBackdropUrl" value="${escapeHtml(item.backdrop || item.artwork || '')}" />
          <input type="file" id="adminBackdropUpload" data-target-input="adminBackdropUrl" accept="image/*" />
          ${type === 'live' ? `<label for="adminLiveGroup">Sender-Kategorie</label><input id="adminLiveGroup" value="${escapeHtml(item.group || '')}" /><label for="adminLiveLogoUrl">Sender-Logo URL</label><input id="adminLiveLogoUrl" value="${escapeHtml(item.logoUrl || '')}" /><label class="admin-check"><input id="adminLiveQuickAccess" type="checkbox" ${item.quickAccess ? 'checked' : ''} /> <span>Im Schnellzugriff auf der Home-Seite anzeigen</span></label><label for="adminLiveEpg">EPG (eine Zeile: Start|Ende|Titel)</label><textarea id="adminLiveEpg">${escapeHtml(epgText)}</textarea>` : ''}
          <div class="admin-source-grid">
            ${Array.from({ length: 3 }, (_, index) => {
              const source = mediaSources[index] || {};
              return `
                <div class="admin-source-card">
                  <h4>Streamquelle ${index + 1}</h4>
                  <label for="adminMediaSourceLabel${index + 1}">Label</label>
                  <input id="adminMediaSourceLabel${index + 1}" value="${escapeHtml(source.label || `Stream ${index + 1}`)}" />
                  <label for="adminMediaSourceUrl${index + 1}">Stream URL</label>
                  <input id="adminMediaSourceUrl${index + 1}" value="${escapeHtml(source.streamUrl || '')}" placeholder="${type === 'live' ? 'https://...m3u8, ts oder mpd' : 'https://...m3u8 oder mp4'}" />
                  <label for="adminMediaSourceEmbed${index + 1}">Embed / Iframe</label>
                  <textarea id="adminMediaSourceEmbed${index + 1}" placeholder="Optionaler Embed Code">${escapeHtml(source.embed || source.embedCode || source.iframe || '')}</textarea>
                </div>
              `;
            }).join('')}
          </div>
          <div class="admin-actions"><button type="submit" class="primary-btn">Streams speichern</button></div>
        ` : '<div class="admin-empty">Kein Eintrag vorhanden.</div>'}
      </form>`;
  }

  function renderAdminTextsTab() {
    return `
      <form id="adminTextsForm" class="admin-form">
        <h3>Website-Texte bearbeiten</h3>
        <div class="admin-grid">
          <div>
            <label>App Titel (Browser Tab)</label>
            <input id="adminTextAppTitle" value="${escapeHtml(adminTextValue('appTitle', 'UnrealTV'))}" />
          </div>
          <div>
            <label>Brand Text</label>
            <input id="adminTextBrand" value="${escapeHtml(adminTextValue('brandText', 'UNREALTV'))}" />
          </div>
          <div><label>Navigation Home</label><input id="adminTextNavHome" value="${escapeHtml(adminTextValue('navHome', 'Home'))}" /></div>
          <div><label>Navigation Live TV</label><input id="adminTextNavLive" value="${escapeHtml(adminTextValue('navLive', 'Live TV'))}" /></div>
          <div><label>Navigation Serien</label><input id="adminTextNavSeries" value="${escapeHtml(adminTextValue('navSeries', 'Serien'))}" /></div>
          <div><label>Navigation Filme</label><input id="adminTextNavMovies" value="${escapeHtml(adminTextValue('navMovies', 'Filme'))}" /></div>
          <div><label>Navigation Meine Liste</label><input id="adminTextNavMyList" value="${escapeHtml(adminTextValue('navMyList', 'Meine Liste'))}" /></div>
          <div><label>Import Drawer Titel</label><input id="adminTextImportTitle" value="${escapeHtml(adminTextValue('importTitle', 'Listen importieren'))}" /></div>
          <div><label>Live TV Überschrift</label><input id="adminTextLiveHeading" value="${escapeHtml(adminTextValue('liveHeading', 'Sender, Streams & EPG'))}" /></div>
          <div><label>Serien Überschrift</label><input id="adminTextSeriesHeading" value="${escapeHtml(adminTextValue('seriesHeading', 'Serien-Bibliothek'))}" /></div>
          <div><label>Filme Überschrift</label><input id="adminTextMoviesHeading" value="${escapeHtml(adminTextValue('moviesHeading', 'Film-Bibliothek'))}" /></div>
          <div><label>Meine Liste Überschrift</label><input id="adminTextMyListHeading" value="${escapeHtml(adminTextValue('myListHeading', 'Gespeicherte Titel'))}" /></div>
          <div><label>Live Chat Titel</label><input id="adminTextLiveChatTitle" value="${escapeHtml(adminTextValue('liveChatTitle', 'Live Chat'))}" /></div>
          <div><label>Titel Chat Titel</label><input id="adminTextDetailsChatTitle" value="${escapeHtml(adminTextValue('detailsChatTitle', 'Titel-Chat'))}" /></div>
        </div>
        <div class="admin-actions">
          <button type="submit" class="primary-btn">Texte speichern</button>
          <button type="button" id="adminResetTextsBtn" class="ghost-btn">Texte zurücksetzen</button>
        </div>
      </form>`;
  }

  function renderAdminUsersTab() {
    return `
      <div class="admin-two-col">
        <div class="admin-list-card">
          <h3>Profile & Nutzer</h3>
          <div class="admin-list">
            ${state.accounts.map(account => {
              const fixedAdmin = String(account.username).toLowerCase() === 'admin';
              const hasAdmin = account.isAdmin === true || fixedAdmin;
              return `<div class="admin-list-item"><div class="admin-user-chip"><img src="${escapeHtml(account.avatar || 'assets/avatar-admin.svg')}" alt="${escapeHtml(account.username)}" /><div><strong>${escapeHtml(account.username)}</strong><div class="admin-list-meta">Passwort: ${escapeHtml(account.password || '—')}</div></div></div><div class="admin-user-actions">${hasAdmin ? '<span class="badge">Admin</span>' : ''}${!fixedAdmin ? `<button type="button" class="ghost-btn" data-toggle-admin="${escapeHtml(account.username)}">${hasAdmin ? 'Admin entfernen' : 'Als Admin setzen'}</button><button type="button" class="ghost-btn admin-danger" data-delete-user="${escapeHtml(account.username)}">Löschen</button>` : ''}</div></div>`;
            }).join('')}
          </div>
        </div>
        <form id="adminAddUserForm" class="admin-form">
          <h3>Neues Profil anlegen</h3>
          <label>Benutzername</label>
          <input id="adminNewUsername" required />
          <label>Passwort</label>
          <input id="adminNewPassword" required />
          <label>Avatar URL</label>
          <input id="adminNewAvatar" placeholder="assets/avatar-admin.svg oder https://..." />
          <label>Farbe</label>
          <input id="adminNewColor" placeholder="#e50914" />
          <div class="admin-actions"><button type="submit" class="primary-btn">Profil hinzufügen</button></div>
          <div class="admin-upload-note">Diese Profile werden lokal im Browser gespeichert und erscheinen direkt im Login-Screen.</div>
        </form>
      </div>`;
  }

  function renderAdminChatTab() {
    const rooms = getAdminRooms();
    return `
      <div class="admin-list-card">
        <h3>Chat Moderation</h3>
        <div class="admin-help">Als Admin kannst du Nachrichten direkt im Live-Chat oder Titel-Chat bearbeiten und löschen. Hier siehst du zusätzlich die Räume im lokalen Demo-Chat.</div>
        <div class="admin-list" style="margin-top:16px;">
          ${rooms.length ? rooms.map(room => `<div class="admin-room-row"><div><strong>${escapeHtml(room.roomId)}</strong><div class="admin-list-meta">${room.count} Nachrichten</div></div><button type="button" class="ghost-btn admin-danger" data-clear-room="${escapeHtml(room.roomId)}">Raum leeren</button></div>`).join('') : '<div class="admin-empty">Noch keine lokalen Chat-Räume vorhanden.</div>'}
        </div>
      </div>`;
  }

  
  function saveAdminQuickAccess() {
    const limit = Math.max(1, Math.min(20, Number(document.getElementById('adminQuickAccessLimit')?.value || 4)));
    const selectedIds = [...document.querySelectorAll('[data-qa-id]:checked')].map(el => el.dataset.qaId);
    state.quickAccessSettings = { limit };
    state.liveChannels = state.liveChannels.map(channel => ({ ...channel, quickAccess: selectedIds.includes(channel.id) }));
    commitSiteChanges({ message: 'Schnellzugriff gespeichert.', alertUser: true });
  }

  function setAdminQuickAccessTop() {
    const limit = Math.max(1, Math.min(20, Number(document.getElementById('adminQuickAccessLimit')?.value || 4)));
    state.liveChannels = state.liveChannels.map((channel, index) => ({ ...channel, quickAccess: index < limit }));
    commitSiteChanges({ message: 'Schnellzugriff aktualisiert.', alertUser: false });
  }

  function clearAdminQuickAccess() {
    state.liveChannels = state.liveChannels.map(channel => ({ ...channel, quickAccess: false }));
    commitSiteChanges({ message: 'Schnellzugriff aktualisiert.', alertUser: false });
  }

function renderAdminPanel() {
    if (!els.adminPanelBody) return;
    document.querySelectorAll('.admin-tab').forEach(btn => btn.classList.toggle('active', btn.dataset.adminTab === state.adminTab));
    if (state.adminTab === 'quickaccess') els.adminPanelBody.innerHTML = renderAdminQuickAccessTab();
    else if (state.adminTab === 'slideshow') els.adminPanelBody.innerHTML = renderAdminSlideshowTab();
    else if (state.adminTab === 'content') els.adminPanelBody.innerHTML = renderAdminContentTab();
    else if (state.adminTab === 'streams') els.adminPanelBody.innerHTML = renderAdminStreamsTab();
    else if (state.adminTab === 'texts') els.adminPanelBody.innerHTML = renderAdminTextsTab();
    else if (state.adminTab === 'users') els.adminPanelBody.innerHTML = renderAdminUsersTab();
    else if (state.adminTab === 'chat') els.adminPanelBody.innerHTML = renderAdminChatTab();
    else els.adminPanelBody.innerHTML = renderAdminOverviewTab();
    els.adminPanel?.setAttribute('aria-hidden', 'false');
  }

  function openAdminPanel(tab = state.adminTab || 'overview') {
    if (!isAdminProfile()) return;
    state.adminTab = tab;
    els.adminPanelBackdrop?.classList.remove('hidden');
    els.adminPanel?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    renderAdminPanel();
  }

  function closeAdminPanel() {
    els.adminPanelBackdrop?.classList.add('hidden');
    els.adminPanel?.classList.add('hidden');
    els.adminPanel?.setAttribute('aria-hidden', 'true');
    if (!els.detailsModal || els.detailsModal.classList.contains('hidden')) document.body.style.overflow = '';
  }

  function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ''));
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function handleAdminFileUpload(input) {
    const targetId = input?.dataset?.targetInput;
    const file = input?.files?.[0];
    if (!targetId || !file) return;
    const target = document.getElementById(targetId);
    if (!target) return;
    target.value = await readFileAsDataUrl(file);
  }

  function saveEditedAdminContent() {
    const type = state.adminSelections.contentType;
    const id = state.adminSelections.contentId;
    const list = getCollectionByType(type).map(entry => {
      if (entry.id !== id) return entry;
      if (type === 'live') {
        return { ...entry, name: document.getElementById('adminEditTitle')?.value.trim() || entry.name, group: document.getElementById('adminEditPrimary')?.value.trim() || '', logo: document.getElementById('adminEditSecondary')?.value.trim() || entry.logo, logoUrl: document.getElementById('adminEditTertiary')?.value.trim() || entry.logoUrl, quickAccess: !!document.getElementById('adminEditQuickAccess')?.checked, heroInclude: !!entry.heroInclude, heroDescription: entry.heroDescription || entry.description || '', heroBackdrop: entry.heroBackdrop || entry.backdrop || entry.artwork || '' };
      }
      const base = { ...entry, title: document.getElementById('adminEditTitle')?.value.trim() || entry.title, description: document.getElementById('adminEditPrimary')?.value.trim() || entry.description, genre: splitTags(document.getElementById('adminEditSecondary')?.value.trim() || entry.genre), year: document.getElementById('adminEditTertiary')?.value.trim() || entry.year, rating: document.getElementById('adminEditRating')?.value.trim() || entry.rating, quality: document.getElementById('adminEditQuality')?.value.trim() || entry.quality, heroInclude: !!entry.heroInclude, heroDescription: entry.heroDescription || entry.description || '', heroBackdrop: entry.heroBackdrop || entry.backdrop || '', logo: document.getElementById('adminEditPoster')?.value.trim() || entry.logo, backdrop: document.getElementById('adminEditBackdrop')?.value.trim() || entry.backdrop };
      if (type === 'movies') base.duration = document.getElementById('adminEditDuration')?.value.trim() || entry.duration;
      if (type === 'series') {
        base.seasons = Number(document.getElementById('adminEditSeasons')?.value || entry.seasons || 1);
        base.episodes = Number(document.getElementById('adminEditEpisodes')?.value || entry.episodes || 1);
      }
      return base;
    });
    setCollectionByType(type, list);
    commitSiteChanges({ message: 'Inhalt gespeichert.' });
  }

  function addAdminContent() {
    const type = document.getElementById('adminAddType')?.value || 'live';
    const title = document.getElementById('adminAddTitle')?.value.trim();
    const description = document.getElementById('adminAddDescription')?.value.trim();
    const streamUrl = document.getElementById('adminAddStream')?.value.trim();
    const poster = document.getElementById('adminAddPoster')?.value.trim();
    const backdrop = document.getElementById('adminAddBackdrop')?.value.trim();
    const extra = document.getElementById('adminAddExtra')?.value.trim();
    if (!title || !streamUrl) return alert('Bitte mindestens Titel und Stream URL eintragen.');
    let item;
    if (type === 'live') {
      item = { id: uniqueId('ch'), name: title, group: extra || 'Entertainment', logo: initials(title), logoUrl: poster || '', streamUrl, heroInclude: false, heroDescription: description || '', heroBackdrop: backdrop || 'assets/live-poster.svg', backdrop: backdrop || 'assets/live-poster.svg', artwork: backdrop || 'assets/live-poster.svg', epg: [], source: 'builtin', chatEnabled: true, quickAccess: !!document.getElementById('adminAddQuickAccess')?.checked, sources: [{ id: 'source-1', label: 'Stream 1', streamUrl }] };
    } else if (type === 'movies') {
      item = { id: uniqueId('movie'), type: 'Film', title, year: new Date().getFullYear(), duration: '—', rating: '—', quality: 'HD', genre: splitTags(extra || 'Drama'), description: description || 'Neuer Film.', heroInclude: true, heroDescription: description || 'Neuer Film.', heroBackdrop: backdrop || poster || 'assets/movie-1.svg', backdrop: backdrop || poster || 'assets/movie-1.svg', logo: poster || backdrop || 'assets/movie-1.svg', streamUrl, source: 'builtin', chatEnabled: true, sources: [{ id: 'source-1', label: 'Stream 1', streamUrl }] };
    } else {
      item = { id: uniqueId('series'), type: 'Serie', title, year: new Date().getFullYear(), seasons: 1, episodes: 8, rating: '—', quality: 'HD', genre: splitTags(extra || 'Drama'), description: description || 'Neue Serie.', heroInclude: true, heroDescription: description || 'Neue Serie.', heroBackdrop: backdrop || poster || 'assets/series-1.svg', backdrop: backdrop || poster || 'assets/series-1.svg', logo: poster || backdrop || 'assets/series-1.svg', streamUrl, source: 'builtin', chatEnabled: true, sources: [{ id: 'source-1', label: 'Stream 1', streamUrl }] };
    }
    setCollectionByType(type, [item, ...getCollectionByType(type)]);
    state.adminSelections.contentType = type;
    state.adminSelections.contentId = item.id;
    state.adminSelections.streamType = type;
    state.adminSelections.streamId = item.id;
    commitSiteChanges({ message: 'Neuer Eintrag angelegt.', openLiveId: type === 'live' ? item.id : null, preserveLive: type !== 'live' });
  }

  function deleteSelectedAdminContent() {
    const type = state.adminSelections.contentType;
    const id = state.adminSelections.contentId;
    if (!id || !confirm('Diesen Eintrag wirklich löschen?')) return;
    setCollectionByType(type, getCollectionByType(type).filter(entry => entry.id !== id));
    state.adminSelections.contentId = null;
    commitSiteChanges({ message: 'Eintrag gelöscht.', alertUser: false });
  }

  function saveAdminStreams() {
    const type = state.adminSelections.streamType;
    const id = state.adminSelections.streamId;
    const list = getCollectionByType(type).map(entry => {
      if (entry.id !== id) return entry;
      const base = { ...entry, streamUrl: document.getElementById('adminStreamUrl')?.value.trim() || '', embed: document.getElementById('adminStreamEmbed')?.value.trim() || '', embedCode: document.getElementById('adminStreamEmbed')?.value.trim() || '', logo: document.getElementById('adminLogoUrl')?.value.trim() || entry.logo, backdrop: document.getElementById('adminBackdropUrl')?.value.trim() || entry.backdrop };
      const mediaSources = Array.from({ length: 3 }, (_, index) => {
        const label = document.getElementById(`adminMediaSourceLabel${index + 1}`)?.value.trim() || `Stream ${index + 1}`;
        const streamUrl = document.getElementById(`adminMediaSourceUrl${index + 1}`)?.value.trim() || '';
        const embed = document.getElementById(`adminMediaSourceEmbed${index + 1}`)?.value.trim() || '';
        if (!streamUrl && !embed) return null;
        return { id: `${entry.id}-source-${index + 1}`, label, streamUrl, embed, embedCode: embed, iframe: embed };
      }).filter(Boolean);

      if (mediaSources.length) {
        base.sources = mediaSources;
        const firstSource = mediaSources[0] || null;
        base.streamUrl = firstSource?.streamUrl || '';
        base.embed = firstSource?.embed || '';
        base.embedCode = firstSource?.embedCode || '';
        base.iframe = firstSource?.iframe || '';
      } else {
        base.sources = [];
      }

      if (type === 'live') {
        base.artwork = document.getElementById('adminBackdropUrl')?.value.trim() || entry.artwork || entry.backdrop;
        base.group = document.getElementById('adminLiveGroup')?.value.trim() || entry.group;
        base.logoUrl = document.getElementById('adminLiveLogoUrl')?.value.trim() || entry.logoUrl;
        base.quickAccess = !!document.getElementById('adminLiveQuickAccess')?.checked;
        base.epg = String(document.getElementById('adminLiveEpg')?.value || '').split('\n').map(line => line.trim()).filter(Boolean).map(line => {
          const [start, end, ...title] = line.split('|');
          return { start: (start || '').trim(), end: (end || '').trim(), title: title.join('|').trim() || 'Programm' };
        });
        base.sources = normalizeLiveSources(base);
        const firstSource = base.sources[0] || null;
        base.streamUrl = firstSource?.streamUrl || '';
        base.embed = firstSource?.embed || '';
        base.embedCode = firstSource?.embedCode || '';
        base.iframe = firstSource?.iframe || '';
      }
      return base;
    });
    setCollectionByType(type, list);
    commitSiteChanges({ message: 'Streams gespeichert.', openLiveId: type === 'live' ? id : null, preserveLive: type !== 'live' });
  }

  function saveAdminTexts() {
    state.textOverrides = {
      appTitle: document.getElementById('adminTextAppTitle')?.value.trim() || 'UnrealTV',
      brandText: document.getElementById('adminTextBrand')?.value.trim() || 'UNREALTV',
      navHome: document.getElementById('adminTextNavHome')?.value.trim() || 'Home',
      navLive: document.getElementById('adminTextNavLive')?.value.trim() || 'Live TV',
      navSeries: document.getElementById('adminTextNavSeries')?.value.trim() || 'Serien',
      navMovies: document.getElementById('adminTextNavMovies')?.value.trim() || 'Filme',
      navMyList: document.getElementById('adminTextNavMyList')?.value.trim() || 'Meine Liste',
      importTitle: document.getElementById('adminTextImportTitle')?.value.trim() || 'Listen importieren',
      liveHeading: document.getElementById('adminTextLiveHeading')?.value.trim() || 'Sender, Streams & EPG',
      seriesHeading: document.getElementById('adminTextSeriesHeading')?.value.trim() || 'Serien-Bibliothek',
      moviesHeading: document.getElementById('adminTextMoviesHeading')?.value.trim() || 'Film-Bibliothek',
      myListHeading: document.getElementById('adminTextMyListHeading')?.value.trim() || 'Gespeicherte Titel',
      liveChatTitle: document.getElementById('adminTextLiveChatTitle')?.value.trim() || 'Live Chat',
      detailsChatTitle: document.getElementById('adminTextDetailsChatTitle')?.value.trim() || 'Titel-Chat'
    };
    persistTextOverrides();
    applyTextOverrides();
    renderAdminPanel();
    saveRemoteSiteState();
    alert('Texte gespeichert.');
  }

  function resetAdminTexts() {
    state.textOverrides = {};
    localStorage.removeItem(STORAGE.texts);
    applyTextOverrides();
    renderAdminPanel();
  }

  function addAdminUser() {
    const username = document.getElementById('adminNewUsername')?.value.trim();
    const password = document.getElementById('adminNewPassword')?.value.trim();
    const avatar = document.getElementById('adminNewAvatar')?.value.trim() || 'assets/avatar-admin.svg';
    const color = document.getElementById('adminNewColor')?.value.trim() || '#e50914';
    if (!username || !password) return alert('Bitte Benutzername und Passwort angeben.');
    if (state.accounts.some(account => String(account.username).toLowerCase() === username.toLowerCase())) return alert('Dieser Benutzer existiert bereits.');
    state.accounts = [...state.accounts, { username, password, avatar, color, isAdmin: false }];
    persistAccounts();
    renderProfiles();
    renderAdminPanel();
    saveRemoteSiteState();
    saveRemoteSiteState();
    alert('Profil hinzugefügt.');
  }

  function deleteAdminUser(username) {
    if (!username || String(username).toLowerCase() === 'admin') return;
    if (!confirm(`Profil ${username} löschen?`)) return;
    state.accounts = state.accounts.filter(account => account.username !== username);
    persistAccounts();
    renderProfiles();
    renderAdminPanel();
    saveRemoteSiteState();
  }

  function toggleAdminUser(username) {
    if (!username || String(username).toLowerCase() === 'admin') return;
    state.accounts = state.accounts.map(account => {
      if (account.username !== username) return account;
      return { ...account, isAdmin: !(account.isAdmin === true) };
    });
    persistAccounts();
    if (state.activeProfile?.username === username) {
      const refreshed = state.accounts.find(account => account.username === username);
      if (refreshed) {
        state.activeProfile = refreshed;
        saveJson(STORAGE.profile, state.activeProfile);
        updateActiveProfileUI();
      }
    }
    renderProfiles();
    renderAdminPanel();
    saveRemoteSiteState();
  }

  function clearAdminRoom(roomId) {
    if (!roomId || !confirm(`Alle Nachrichten aus ${roomId} löschen?`)) return;
    const store = getDemoStore();
    delete store[roomId];
    saveDemoStore(store);
    ['live', 'details'].forEach(scope => {
      const current = state.currentChatRoom[scope];
      if (current && getRoomId(current, scope) === roomId) subscribeToRoom(scope, current);
    });
    renderAdminPanel();
  }
  
  function getSiteStateRef() {
    const db = state.siteSync.firestore || state.chat.firestore;
    return db ? db.collection('unrealtv_site_state').doc('main') : null;
  }

  function buildRemoteSitePayload() {
    return {
      liveChannels: state.liveChannels,
      movies: state.movies,
      series: state.series,
      accounts: state.accounts,
      profileData: state.profileData,
      textOverrides: state.textOverrides,
      quickAccessSettings: state.quickAccessSettings,
      updatedAt: firebase?.firestore?.FieldValue?.serverTimestamp ? firebase.firestore.FieldValue.serverTimestamp() : new Date()
    };
  }

  function stableSitePayloadHash(payload) {
    try {
      return JSON.stringify({
        liveChannels: payload.liveChannels || [],
        movies: payload.movies || [],
        series: payload.series || [],
        accounts: payload.accounts || [],
        profileData: payload.profileData || {},
        textOverrides: payload.textOverrides || {},
        quickAccessSettings: payload.quickAccessSettings || {}
      });
    } catch {
      return '';
    }
  }

  function applyRemoteSitePayload(data) {
    if (!data || typeof data !== 'object') return;
    state.siteSync.applyingRemote = true;
    try {
      if (Array.isArray(data.liveChannels)) state.liveChannels = data.liveChannels;
      if (Array.isArray(data.movies)) state.movies = data.movies;
      if (Array.isArray(data.series)) state.series = data.series;
      if (Array.isArray(data.accounts) && data.accounts.length) state.accounts = data.accounts;
      if (data.profileData && typeof data.profileData === 'object') state.profileData = data.profileData;
      if (data.textOverrides && typeof data.textOverrides === 'object') state.textOverrides = data.textOverrides;
      if (data.quickAccessSettings && typeof data.quickAccessSettings === 'object') state.quickAccessSettings = data.quickAccessSettings;
      enrich();
      renderProfiles();
      refreshAllViews();
      applyTextOverrides();
      if (state.activeProfile) {
        const refreshedProfile = state.accounts.find(acc => acc.username === state.activeProfile.username);
        if (refreshedProfile) state.activeProfile = refreshedProfile;
        loadProfileState(state.activeProfile.username);
        computeRecommendations(state.activeProfile.username);
        updateActiveProfileUI();
      }
    } finally {
      state.siteSync.applyingRemote = false;
    }
  }

  async function saveRemoteSiteState() {
    const ref = getSiteStateRef();
    if (!ref) {
      setStatus('Änderungen lokal gespeichert. Firebase-Sync ist nicht verfügbar.', 'warn');
      return false;
    }
    try {
      const payload = buildRemoteSitePayload();
      const hash = stableSitePayloadHash(payload);
      state.siteSync.lastRemoteHash = hash;
      await ref.set(payload, { merge: true });
      setStatus('Änderungen wurden lokal und online gespeichert.', 'success');
      return true;
    } catch (err) {
      console.error('Remote Site Save Fehler:', err);
      setStatus(`Änderungen lokal gespeichert. Online-Sync fehlgeschlagen: ${err.message || 'Unbekannter Fehler'}`, 'warn');
      return false;
    }
  }

  async function initSiteSync() {
    const ref = getSiteStateRef();
    if (!ref || state.siteSync.unsub) return;
    state.siteSync.enabled = true;
    try {
      const firstSnap = await ref.get();
      if (firstSnap.exists) {
        const data = firstSnap.data() || {};
        const hash = stableSitePayloadHash(data);
        if (hash && hash !== state.siteSync.lastRemoteHash) {
          state.siteSync.lastRemoteHash = hash;
          applyRemoteSitePayload(data);
        }
      }
      state.siteSync.unsub = ref.onSnapshot(snap => {
        if (!snap.exists) return;
        const data = snap.data() || {};
        const hash = stableSitePayloadHash(data);
        if (!hash || hash === state.siteSync.lastRemoteHash || state.siteSync.applyingRemote) return;
        state.siteSync.lastRemoteHash = hash;
        applyRemoteSitePayload(data);
      });
    } catch (err) {
      console.error('Site Sync Init Fehler:', err);
      setStatus(`Online-Sync nicht verfügbar: ${err.message || 'Unbekannter Fehler'}`, 'warn');
    }
  }

  async function commitSiteChanges({ message = '', openLiveId = null, preserveLive = true, alertUser = true } = {}) {
    renderProfiles();
    refreshAllViews({ preserveLive });
    if (openLiveId) {
      switchView('live');
      renderChannels('');
      selectLiveChannel(openLiveId);
    }
    await saveRemoteSiteState();
    if (state.localSync?.dataFileHandle) await writeLocalDataFile(false);
    if (message && alertUser) alert(message);
  }

function initChatBackend() {
    state.chat.mode = 'demo';
    state.chat.firestore = null;
    state.chat.reason = 'Demo-Chat aktiv. Nachrichten sind nur lokal sichtbar.';

    try {
      if (location.protocol === 'file:') {
        state.chat.reason = 'Datei-Modus erkannt. Realtime-Firebase-Chat braucht http://localhost oder Hosting.';
        return;
      }
      if (!window.UNREAL_FIREBASE_CONFIG) {
        state.chat.reason = 'Keine Firebase-Konfiguration gefunden. Demo-Chat aktiv.';
        return;
      }
      if (!window.firebase || !firebase.initializeApp || !firebase.firestore) {
        state.chat.reason = 'Firebase SDK nicht geladen. Demo-Chat aktiv.';
        return;
      }
      if (!firebase.apps.length) firebase.initializeApp(window.UNREAL_FIREBASE_CONFIG);
      state.chat.firestore = firebase.firestore();
      state.siteSync.firestore = state.chat.firestore;
      state.chat.mode = 'firebase';
      state.chat.reason = 'Realtime-Chat über Firebase aktiv.';
      console.log('Firebase Chat bereit.');
    } catch (err) {
      console.error('Firebase Init Fehler:', err);
      state.chat.mode = 'demo';
      state.chat.firestore = null;
      state.chat.reason = `Firebase nicht verfügbar (${err.message || 'Unbekannter Fehler'}). Demo-Chat aktiv.`;
    }
  }

  function bindEvents() {
    els.enterAppBtn.addEventListener('click', doLogin);
    els.passwordInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') doLogin(); });
    els.closePasswordOverlay.addEventListener('click', () => els.passwordOverlay.classList.add('hidden'));
    els.closeDetailsModal.addEventListener('click', closeDetails);
    els.closeEpisodesModal?.addEventListener('click', closeEpisodesModal);
    els.closeGenreBrowserModal?.addEventListener('click', closeGenreBrowser);
    els.genreBrowserModal?.addEventListener('click', (e) => { if (e.target === els.genreBrowserModal) closeGenreBrowser(); });
    els.closeAdminPanel?.addEventListener('click', closeAdminPanel);
    els.adminPanelBackdrop?.addEventListener('click', closeAdminPanel);
    els.adminToggle?.addEventListener('click', () => openAdminPanel());
    els.mobileAdminToggle?.addEventListener('click', () => { closeMobileMenu(); openAdminPanel(); });
    document.querySelectorAll('.admin-tab').forEach(btn => btn.addEventListener('click', () => { state.adminTab = btn.dataset.adminTab; renderAdminPanel(); }));
    els.episodesSeasonSelect?.addEventListener('change', () => state.currentEpisodesSeries && renderEpisodesList(state.currentEpisodesSeries, els.episodesSeasonSelect.value));
    els.detailsEpisodesBtn?.addEventListener('click', () => state.currentDetails && state.currentDetails.type === 'Serie' && openEpisodesModal(state.currentDetails));
    els.detailsPlayBtn.addEventListener('click', () => {
      if (!state.currentDetails) return;
      const item = state.currentDetails;
      playSelectedDetailsSource(item, state.currentDetailsSourceIndex || 0);
      markItemWatched(item);
      renderHome();
      subscribeToRoom('details', item);
    });
    els.detailsSaveBtn.addEventListener('click', () => state.currentDetails && toggleMyList(state.currentDetails));
    els.profileMenuBtn.addEventListener('click', logout);
    els.mobileProfileBtn?.addEventListener('click', () => { closeMobileMenu(); logout(); });
    els.mobileMenuToggle?.addEventListener('click', openMobileMenu);
    els.mobileMenuClose?.addEventListener('click', closeMobileMenu);
    els.mobileMenuBackdrop?.addEventListener('click', closeMobileMenu);
    els.mobileSearchToggle?.addEventListener('click', () => {
      closeMobileMenu();
      els.searchBar.classList.remove('hidden');
      els.globalSearchInput.focus();
    });
    els.mobileConfigToggle?.addEventListener('click', () => { closeMobileMenu(); openConfigDrawer(); });
    document.querySelectorAll('.mobile-nav-link').forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.view)));
    [els.moviesView, els.seriesView].forEach(view => view?.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-genre-more]');
      if (!btn) return;
      openGenreBrowser(btn.dataset.genreType, btn.dataset.genreMore);
    }));
    els.logoutAllBtn.addEventListener('click', () => { localStorage.removeItem(STORAGE.profile); localStorage.removeItem(STORAGE.myList); localStorage.removeItem(STORAGE.profileData); location.reload(); });
    document.querySelectorAll('.nav-link').forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.view)));
    document.querySelector('.brand')?.addEventListener('click', (e) => { e.preventDefault(); stopBackgroundPlayback(); switchView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); });
    els.searchToggle.addEventListener('click', () => { els.searchBar.classList.toggle('hidden'); if (!els.searchBar.classList.contains('hidden')) els.globalSearchInput.focus(); });
    els.globalSearchInput.addEventListener('input', (e) => searchEverything(e.target.value));
    els.configToggle.addEventListener('click', openConfigDrawer);
    els.closeConfigDrawer.addEventListener('click', closeConfigDrawer);
    els.resetLibraryBtn.addEventListener('click', resetLibrary);
    renderEmojiPicker('live');
    renderEmojiPicker('details');
    els.liveEmojiToggle?.addEventListener('click', () => toggleEmojiPicker('live'));
    els.detailsEmojiToggle?.addEventListener('click', () => toggleEmojiPicker('details'));
    els.liveChatForm.addEventListener('submit', async (e) => { e.preventDefault(); try { await sendChatMessage('live', els.liveChatInput.value); els.liveChatInput.value=''; } catch (err) { setChatStatus('live', `Nachricht konnte nicht gesendet werden: ${err.message}`, 'warn'); } });
    els.detailsChatForm.addEventListener('submit', async (e) => { e.preventDefault(); try { await sendChatMessage('details', els.detailsChatInput.value); els.detailsChatInput.value=''; } catch (err) { setChatStatus('details', `Nachricht konnte nicht gesendet werden: ${err.message}`, 'warn'); } });
    [els.liveEmojiPicker, els.detailsEmojiPicker].forEach(picker => picker?.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-emoji]');
      if (!btn) return;
      insertEmoji(btn.dataset.scope, btn.dataset.emoji);
      closeEmojiPickers();
    }));
    [els.liveChatMessages, els.detailsChatMessages].forEach(target => target?.addEventListener('click', async (e) => {
      const btn = e.target.closest('[data-chat-action]');
      if (!btn) return;
      if (btn.dataset.chatAction === 'edit') await editChatMessage(btn.dataset.scope, btn.dataset.msgId);
      if (btn.dataset.chatAction === 'delete') await deleteChatMessage(btn.dataset.scope, btn.dataset.msgId);
    }));
    els.adminPanelBody?.addEventListener('change', async (e) => {
      const target = e.target;
      if (target.id === 'adminContentType') { state.adminSelections.contentType = target.value; state.adminSelections.contentId = null; renderAdminPanel(); }
      else if (target.id === 'adminContentItem') { state.adminSelections.contentId = target.value; renderAdminPanel(); }
      else if (target.id === 'adminStreamType') { state.adminSelections.streamType = target.value; state.adminSelections.streamId = null; renderAdminPanel(); }
      else if (target.id === 'adminStreamItem') { state.adminSelections.streamId = target.value; renderAdminPanel(); }
      else if (target.matches('input[type="file"][data-target-input]')) { await handleAdminFileUpload(target); }
    });
    els.adminPanelBody?.addEventListener('click', (e) => {
      const jump = e.target.closest('[data-admin-jump]');
      if (jump) { state.adminTab = jump.dataset.adminJump; renderAdminPanel(); return; }
      const deleteUserBtn = e.target.closest('[data-delete-user]');
      if (deleteUserBtn) { deleteAdminUser(deleteUserBtn.dataset.deleteUser); return; }
      const toggleAdminBtn = e.target.closest('[data-toggle-admin]');
      if (toggleAdminBtn) { toggleAdminUser(toggleAdminBtn.dataset.toggleAdmin); return; }
      const clearRoomBtn = e.target.closest('[data-clear-room]');
      if (clearRoomBtn) { clearAdminRoom(clearRoomBtn.dataset.clearRoom); return; }
      if (e.target.id === 'adminDeleteContentBtn') { deleteSelectedAdminContent(); return; }
      if (e.target.id === 'adminResetTextsBtn') { resetAdminTexts(); return; }
      if (e.target.id === 'adminQuickAccessSelectTopBtn') { setAdminQuickAccessTop(); return; }
      if (e.target.id === 'adminQuickAccessClearBtn') { clearAdminQuickAccess(); return; }
      if (e.target.id === 'adminConnectLocalDataBtn') { connectLocalDataFile(); return; }
      if (e.target.id === 'adminWriteLocalDataBtn') { writeLocalDataFile(true); return; }
    });
    els.adminPanelBody?.addEventListener('submit', (e) => {
      e.preventDefault();
      if (e.target.id === 'adminEditContentForm') saveEditedAdminContent();
      else if (e.target.id === 'adminAddContentForm') addAdminContent();
      else if (e.target.id === 'adminSlideshowForm') saveAdminSlideshow();
      else if (e.target.id === 'adminStreamsForm') saveAdminStreams();
      else if (e.target.id === 'adminTextsForm') saveAdminTexts();
      else if (e.target.id === 'adminQuickAccessForm') saveAdminQuickAccess();
      else if (e.target.id === 'adminAddUserForm') addAdminUser();
    });
    els.loadM3uUrlBtn.addEventListener('click', () => importFromUrl(els.m3uUrlInput.value.trim(), applyLiveImport));
    els.loadEpgUrlBtn.addEventListener('click', () => importFromUrl(els.epgUrlInput.value.trim(), applyEpgImport));
    els.loadMoviesUrlBtn.addEventListener('click', () => importFromUrl(els.moviesUrlInput.value.trim(), applyMovieImport));
    els.loadSeriesUrlBtn.addEventListener('click', () => importFromUrl(els.seriesUrlInput.value.trim(), applySeriesImport));
    els.m3uFileInput.addEventListener('change', (e) => importFromFile(e.target.files[0], applyLiveImport));
    els.epgFileInput.addEventListener('change', (e) => importFromFile(e.target.files[0], applyEpgImport));
    els.moviesFileInput.addEventListener('change', (e) => importFromFile(e.target.files[0], applyMovieImport));
    els.seriesFileInput.addEventListener('change', (e) => importFromFile(e.target.files[0], applySeriesImport));
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.chat-form')) closeEmojiPickers();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { if (!els.genreBrowserModal?.classList.contains('hidden')) closeGenreBrowser(); if (!els.episodesModal?.classList.contains('hidden')) closeEpisodesModal(); else closeDetails(); els.passwordOverlay.classList.add('hidden'); closeConfigDrawer(); closeMobileMenu(); closeAdminPanel(); closeEmojiPickers(); }
    });
  }

  window.addEventListener('beforeunload', clearHeroTimer);
  enrich();
  renderProfiles();
  playIntroSplash();
  bindEvents();
  if (state.activeProfile) enterApp().catch(err => console.error('EnterApp Fehler:', err));
})();
