
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
    chat: 'unrealtv_chat_demo'
  };

  const state = {
    selectedAccount: null,
    activeProfile: readJson(STORAGE.profile, null),
    liveChannels: readJson(STORAGE.live, defaults.liveChannels || []),
    movies: readJson(STORAGE.movies, defaults.movies || []),
    series: readJson(STORAGE.series, defaults.series || []),
    epgStore: readJson(STORAGE.epg, {}),
    myList: readJson(STORAGE.myList, []),
    currentView: 'home',
    currentLive: null,
    currentLiveSourceIndex: 0,
    currentDetails: null,
    currentEpisodesSeries: null,
    heroIndex: 0,
    heroTimer: null,
    heroPaused: false,
    currentChatRoom: { live: null, details: null },
    chat: { mode: 'demo', firestore: null, unsubscribers: { live: null, details: null }, reason: 'Demo-Modus aktiv.' }
  };

  const $ = (id) => document.getElementById(id);
  const els = {
    loginScreen: $('loginScreen'), appScreen: $('appScreen'), profileGrid: $('profileGrid'),
    passwordOverlay: $('passwordOverlay'), closePasswordOverlay: $('closePasswordOverlay'),
    selectedProfileAvatar: $('selectedProfileAvatar'), selectedProfileName: $('selectedProfileName'),
    passwordInput: $('passwordInput'), enterAppBtn: $('enterAppBtn'), loginMessage: $('loginMessage'),
    profileMenuBtn: $('profileMenuBtn'), activeProfileAvatar: $('activeProfileAvatar'), activeProfileName: $('activeProfileName'),
    logoutAllBtn: $('logoutAllBtn'), heroSection: $('heroSection'), homeView: $('homeView'), liveView: $('liveView'),
    seriesView: $('seriesView'), moviesView: $('moviesView'), mylistView: $('mylistView'), seriesGrid: $('seriesGrid'),
    moviesGrid: $('moviesGrid'), myListGrid: $('myListGrid'), channelList: $('channelList'), channelCount: $('channelCount'),
    livePlayerHost: $('livePlayerHost'), livePlayer: $('livePlayer'), liveChannelTitle: $('liveChannelTitle'), liveChannelGroup: $('liveChannelGroup'),
    liveChannelNow: $('liveChannelNow'), epgNowNext: $('epgNowNext'), liveSourceSwitcher: $('liveSourceSwitcher'), liveSourceLabel: $('liveSourceLabel'), liveSourceButtons: $('liveSourceButtons'), searchToggle: $('searchToggle'), searchBar: $('searchBar'),
    globalSearchInput: $('globalSearchInput'), detailsModal: $('detailsModal'), closeDetailsModal: $('closeDetailsModal'),
    detailsBackdrop: $('detailsBackdrop'), detailsType: $('detailsType'), detailsTitle: $('detailsTitle'), detailsMeta: $('detailsMeta'),
    detailsDescription: $('detailsDescription'), detailsTags: $('detailsTags'), detailsPlayBtn: $('detailsPlayBtn'),
    detailsSaveBtn: $('detailsSaveBtn'), detailsEpisodesBtn: $('detailsEpisodesBtn'), detailsPlayerWrap: $('detailsPlayerWrap'), detailsPlayer: $('detailsPlayer'), detailsPoster: $('detailsPoster'), episodesModal: $('episodesModal'), closeEpisodesModal: $('closeEpisodesModal'), episodesSeriesTitle: $('episodesSeriesTitle'), episodesSeasonSelect: $('episodesSeasonSelect'), episodesList: $('episodesList'), configToggle: $('configToggle'), configDrawer: $('configDrawer'),
    closeConfigDrawer: $('closeConfigDrawer'), importStatus: $('importStatus'), liveImportCount: $('liveImportCount'),
    movieImportCount: $('movieImportCount'), seriesImportCount: $('seriesImportCount'), m3uUrlInput: $('m3uUrlInput'),
    loadM3uUrlBtn: $('loadM3uUrlBtn'), epgUrlInput: $('epgUrlInput'), loadEpgUrlBtn: $('loadEpgUrlBtn'),
    m3uFileInput: $('m3uFileInput'), epgFileInput: $('epgFileInput'), moviesUrlInput: $('moviesUrlInput'),
    loadMoviesUrlBtn: $('loadMoviesUrlBtn'), moviesFileInput: $('moviesFileInput'), seriesUrlInput: $('seriesUrlInput'),
    loadSeriesUrlBtn: $('loadSeriesUrlBtn'), seriesFileInput: $('seriesFileInput'), resetLibraryBtn: $('resetLibraryBtn'),
    liveChatRoomLabel: $('liveChatRoomLabel'), liveChatStatus: $('liveChatStatus'), liveChatMessages: $('liveChatMessages'),
    liveChatForm: $('liveChatForm'), liveChatInput: $('liveChatInput'), detailsChatRoomLabel: $('detailsChatRoomLabel'),
    detailsChatStatus: $('detailsChatStatus'), detailsChatMessages: $('detailsChatMessages'), detailsChatForm: $('detailsChatForm'),
    detailsChatInput: $('detailsChatInput')
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
    updateImportCounts();
  };
  const normalizeKey = (v) => String(v || '').toLowerCase().trim().replace(/\.[a-z0-9]{2,4}$/i, '').replace(/[^a-z0-9äöüß]+/gi, '-').replace(/^-+|-+$/g, '');
  const slug = (v) => normalizeKey(v).replace(/-+/g, '-');
  const initials = (v) => String(v || 'TV').split(/\s+/).filter(Boolean).slice(0, 2).map(s => s[0]).join('').toUpperCase() || 'TV';
  const uniqueId = (prefix) => `${prefix}-${Math.random().toString(36).slice(2,8)}-${Date.now().toString(36)}`;
  const safeArr = (a) => Array.isArray(a) ? a : [];

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

  function syncBuiltinLiveChannels() {
    let changed = false;
    const builtinById = new Map(safeArr(defaults.liveChannels).map(ch => [ch.id, ch]));
    state.liveChannels = safeArr(state.liveChannels).map(ch => {
      if (ch.source !== 'builtin') return ch;
      const fresh = builtinById.get(ch.id);
      if (!fresh) return ch;
      changed = true;
      return { ...ch, ...fresh, source: 'builtin', chatEnabled: true };
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
        chatEnabled: ch.chatEnabled ?? ((ch.source || 'builtin') === 'builtin')
      });
    });
    state.movies = safeArr(state.movies).map((m, i) => ({
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
      streamUrl: m.streamUrl || '',
      source: m.source || 'builtin',
      chatEnabled: m.chatEnabled ?? ((m.source || 'builtin') === 'builtin')
    }));
    state.series = safeArr(state.series).map((s, i) => ({
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
      streamUrl: s.streamUrl || '',
      seasonData: buildSeasonData(s),
      source: s.source || 'builtin',
      chatEnabled: s.chatEnabled ?? ((s.source || 'builtin') === 'builtin')
    }));
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
  function formatTime(dt) {
    try { return new Intl.DateTimeFormat('de-DE',{hour:'2-digit',minute:'2-digit'}).format(dt instanceof Date ? dt : new Date(dt)); }
    catch { return '--:--'; }
  }

  function renderProfiles() {
    els.profileGrid.innerHTML = defaults.accounts.map(acc => `
      <button class="profile-card" data-user="${escapeHtml(acc.username)}">
        <img src="${escapeHtml(acc.avatar)}" alt="${escapeHtml(acc.username)}" />
        <span>${escapeHtml(acc.username)}</span>
      </button>`).join('');
    els.profileGrid.querySelectorAll('.profile-card').forEach(btn => btn.addEventListener('click', () => {
      const account = defaults.accounts.find(a => a.username === btn.dataset.user);
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
  }

  function doLogin() {
    if (!state.selectedAccount) return;
    const pw = els.passwordInput.value.trim();
    if (pw !== state.selectedAccount.password) {
      els.loginMessage.textContent = 'Falsches Passwort. Bitte erneut versuchen.';
      return;
    }
    state.activeProfile = state.selectedAccount;
    saveJson(STORAGE.profile, state.activeProfile);
    els.passwordOverlay.classList.add('hidden');
    enterApp();
  }

  function logout() {
    localStorage.removeItem(STORAGE.profile);
    location.reload();
  }

  function enterApp() {
    syncBuiltinLiveChannels();
    initChatBackend();
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
    const titles = [...state.movies, ...state.series].filter(Boolean);
    return titles.length ? titles.slice(0, 10) : [];
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
    playDetailsVideo(item.streamUrl || '');
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
          <div class="hero-actions">
            <button class="primary-btn" id="heroOpenImport">Listen importieren</button>
          </div>
        </div>`;
      document.getElementById('heroOpenImport')?.addEventListener('click', openConfigDrawer);
      return;
    }

    state.heroIndex = ((index % items.length) + items.length) % items.length;
    const item = items[state.heroIndex];
    const inList = state.myList.includes(item.id);
    els.heroSection.style.backgroundImage = item.backdrop ? `url('${item.backdrop}')` : 'none';
    els.heroSection.innerHTML = `
      <div class="hero-content">
        <div class="hero-logo">${escapeHtml(item.type || 'Titel')}</div>
        <h1 class="hero-title">${escapeHtml(item.title || 'UnrealTV')}</h1>
        <div class="hero-metadata">
          ${heroMeta(item).map(v => `<span>${escapeHtml(v)}</span>`).join('')}
        </div>
        <p class="hero-description">${escapeHtml(item.description || '')}</p>
        <div class="hero-actions">
          <button class="primary-btn" id="heroPlayTitle">Abspielen</button>
          <button class="ghost-btn" id="heroSaveTitle">${inList ? 'Aus meiner Liste entfernen' : 'Zu meiner Liste'}</button>
          <button class="ghost-btn" id="heroPauseBtn">${state.heroPaused ? 'Slideshow starten' : 'Slideshow pausieren'}</button>
          <button class="ghost-btn" id="heroOpenImport">Listen importieren</button>
        </div>
        <div class="hero-slider-controls">
          <button class="hero-nav-btn" id="heroPrevBtn" aria-label="Vorheriger Titel">‹</button>
          <div class="hero-dots">
            ${items.map((_, i) => `<button class="hero-dot ${i === state.heroIndex ? 'active' : ''}" data-hero-index="${i}" aria-label="Slide ${i+1}"></button>`).join('')}
          </div>
          <button class="hero-nav-btn" id="heroNextBtn" aria-label="Nächster Titel">›</button>
        </div>
      </div>`;

    document.getElementById('heroPlayTitle')?.addEventListener('click', () => playDetailsItem(item));
    document.getElementById('heroSaveTitle')?.addEventListener('click', () => {
      toggleMyList(item);
      renderHeroSlide(state.heroIndex);
    });
    document.getElementById('heroPauseBtn')?.addEventListener('click', () => setHeroPaused(!state.heroPaused));
    document.getElementById('heroOpenImport')?.addEventListener('click', openConfigDrawer);
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
    const livePreview = state.liveChannels.slice(0,4).map(ch => `
      <article class="channel-card" data-live-id="${escapeHtml(ch.id)}">
        <div class="channel-card-top"><span class="badge live">LIVE</span><span>${escapeHtml(ch.group)}</span></div>
        <h3>${escapeHtml(ch.name)}</h3>
        <p>${escapeHtml((ch.epg[0] && ch.epg[0].title) || 'Kein EPG')}</p>
      </article>`).join('');
    els.homeView.innerHTML = `
      <section class="content-row">
        <div class="section-header"><div><p class="eyebrow">Jetzt live</p><h2>Schnellzugriff</h2></div></div>
        <div class="channel-row">${livePreview}</div>
      </section>
      <section class="content-row">
        <div class="section-header"><div><p class="eyebrow">Filme</p><h2>Platzhalter & Bibliothek</h2></div></div>
        <div class="catalog-grid" id="homeMoviesGrid">${state.movies.slice(0,6).map(cardTemplate).join('')}</div>
      </section>
      <section class="content-row">
        <div class="section-header"><div><p class="eyebrow">Serien</p><h2>Deine Serien</h2></div></div>
        <div class="catalog-grid" id="homeSeriesGrid">${state.series.slice(0,6).map(cardTemplate).join('')}</div>
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
    attachCardEvents(els.moviesGrid);
    attachCardEvents(els.seriesGrid);
  }

  function renderMyList() {
    const ids = new Set(state.myList);
    const items = [...state.movies, ...state.series].filter(item => ids.has(item.id));
    els.myListGrid.innerHTML = items.length ? items.map(cardTemplate).join('') : '<div class="chat-empty">Noch nichts gespeichert.</div>';
    attachCardEvents(els.myListGrid);
  }

  function switchView(view) {
    state.currentView = view;
    document.querySelectorAll('.nav-link').forEach(btn => btn.classList.toggle('active', btn.dataset.view === view));
    [els.homeView, els.liveView, els.seriesView, els.moviesView, els.mylistView].forEach(v => v.classList.add('hidden'));
    ({ home: els.homeView, live: els.liveView, series: els.seriesView, movies: els.moviesView, mylist: els.mylistView }[view] || els.homeView).classList.remove('hidden');
  }

  function resetVideoElement(video) {
    if (!video) return;
    if (video._hls) { try { video._hls.destroy(); } catch {} video._hls = null; }
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
      video.poster = 'assets/live-poster.svg';
      els.livePlayerHost.innerHTML = '';
      els.livePlayerHost.appendChild(video);
      els.livePlayer = video;
    } else {
      els.livePlayer = existingVideo;
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
    if (window.Hls && window.Hls.isSupported() && /\.m3u8($|\?)/i.test(url)) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
      video._hls = hls;
      hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}));
    } else {
      video.src = url;
      video.play().catch(() => {});
    }
  }

  function playVideo(url, channel = null, source = null) {
    const embedValue = source?.embedCode || source?.embed || source?.iframe || channel?.embedCode || channel?.embed || channel?.iframe || '';
    if (embedValue) {
      showEmbeddedLiveStream(embedValue);
      return;
    }
    resetLivePlayerHost();
    playMedia(els.livePlayer, url);
  }

  function playDetailsVideo(url) {
    playMedia(els.detailsPlayer, url);
  }

  function currentEpg(ch) {
    return safeArr(ch.epg)[0] || null;
  }

  function renderChannels(filter='') {
    const q = String(filter || '').trim().toLowerCase();
    const channels = state.liveChannels.filter(ch => !q || `${ch.name} ${ch.group}`.toLowerCase().includes(q));
    els.channelList.innerHTML = channels.map(ch => `
      <button class="channel-item ${state.currentLive && state.currentLive.id === ch.id ? 'active' : ''}" data-id="${escapeHtml(ch.id)}">
        <div class="channel-logo">${ch.logoUrl ? `<img src="${escapeHtml(ch.logoUrl)}" alt="${escapeHtml(ch.name)}" />` : escapeHtml(ch.logo)}</div>
        <div class="channel-info">
          <strong>${escapeHtml(ch.name)}</strong>
          <span>${escapeHtml(ch.group)}</span>
        </div>
      </button>`).join('');
    els.channelCount.textContent = `${channels.length} Sender`;
    els.channelList.querySelectorAll('.channel-item').forEach(btn => btn.addEventListener('click', () => selectLiveChannel(btn.dataset.id)));
  }

  function selectLiveChannel(id, sourceIndex = 0) {
    const channel = state.liveChannels.find(ch => ch.id === id) || state.liveChannels[0];
    if (!channel) return;
    state.currentLive = channel;
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
      playDetailsVideo(ep.streamUrl || series.streamUrl || '');
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
    if (els.detailsPlayer) resetVideoElement(els.detailsPlayer);
    els.detailsModal.classList.remove('hidden');
    els.detailsModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    subscribeToRoom('details', item);
  }

  function closeDetails() {
    els.detailsModal.classList.add('hidden');
    els.detailsModal.setAttribute('aria-hidden', 'true');
    if (els.detailsPlayerWrap) els.detailsPlayerWrap.classList.add('hidden');
    if (els.detailsPlayer) resetVideoElement(els.detailsPlayer);
    teardownChat('details');
    state.currentDetails = null;
    document.body.style.overflow = '';
    const scroller = els.detailsModal?.querySelector('.details-card');
    if (scroller) scroller.scrollTop = 0;
    if (!state.heroPaused) renderHero();
  }

  function toggleMyList(item) {
    const set = new Set(state.myList);
    if (set.has(item.id)) set.delete(item.id); else set.add(item.id);
    state.myList = [...set];
    saveJson(STORAGE.myList, state.myList);
    renderMyList();
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
    setStatus(`${imported.length} Live-TV-Sender importiert.`, 'success');
  }
  function applyMovieImport(text) {
    const imported = parseM3U(text, 'movies');
    state.movies = [...defaults.movies.map(x => ({...x, source:'builtin', chatEnabled:true})), ...imported];
    enrich();
    renderHome(); renderCatalogs(); renderMyList();
    setStatus(`${imported.length} Filme importiert.`, 'success');
  }
  function applySeriesImport(text) {
    const imported = parseM3U(text, 'series');
    state.series = [...defaults.series.map(x => ({...x, source:'builtin', chatEnabled:true})), ...imported];
    enrich();
    renderHome(); renderCatalogs(); renderMyList();
    setStatus(`${imported.length} Serien importiert.`, 'success');
  }
  function applyEpgImport(text) {
    const store = parseEpg(text);
    state.epgStore = store;
    state.liveChannels = state.liveChannels.map(ch => ({ ...ch, epg: store[ch.epgId] || store[slug(ch.name)] || ch.epg || [] }));
    persistAll();
    renderChannels();
    if (state.currentLive) selectLiveChannel(state.currentLive.id);
    setStatus('EPG/XMLTV erfolgreich geladen.', 'success');
  }
  function resetLibrary() {
    state.liveChannels = defaults.liveChannels.map(ch => ({...ch, source:'builtin', chatEnabled:true}));
    state.movies = defaults.movies.map(x => ({...x, source:'builtin', chatEnabled:true}));
    state.series = defaults.series.map(x => ({...x, source:'builtin', chatEnabled:true}));
    state.epgStore = {};
    persistAll();
    renderHome(); renderCatalogs(); renderMyList(); renderChannels();
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
  function updateChatFormState(scope, enabled, placeholder) {
    const input = scope === 'live' ? els.liveChatInput : els.detailsChatInput;
    const form = scope === 'live' ? els.liveChatForm : els.detailsChatForm;
    input.disabled = !enabled;
    form.querySelector('button').disabled = !enabled;
    input.placeholder = placeholder;
  }
  function renderChatMessages(target, messages, emptyText) {
    target.innerHTML = messages.length ? messages.map(m => `
      <div class="chat-message">
        <img class="chat-avatar" src="${escapeHtml(m.avatar || 'assets/avatar-admin.svg')}" alt="${escapeHtml(m.author || 'Profil')}" />
        <div class="chat-bubble">
          <div class="chat-bubble-head"><strong>${escapeHtml(m.author || 'Profil')}</strong><span>${escapeHtml(formatTime(m.createdAt || Date.now()))}</span></div>
          <p>${escapeHtml(m.text || '')}</p>
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
      renderChatMessages(target, [], 'Für diesen Inhalt ist aktuell kein Chat aktiv.');
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
            return { author: d.author, avatar: d.avatar, text: d.text, createdAt: d.createdAt?.toDate ? d.createdAt.toDate() : d.createdAt || Date.now() };
          });
          renderChatMessages(target, messages, 'Noch keine Nachrichten in diesem Raum.');
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
    renderChatMessages(target, store[roomId] || [], 'Noch keine Nachrichten in diesem Raum.');
    const refresh = () => renderChatMessages(target, getDemoStore()[roomId] || [], 'Noch keine Nachrichten in diesem Raum.');
    window.addEventListener('storage', refresh);
    state.chat.unsubscribers[scope] = () => window.removeEventListener('storage', refresh);
  }
  async function sendChatMessage(scope, text) {
    const item = state.currentChatRoom[scope];
    if (!chatEnabledForItem(item) || !state.activeProfile) return;
    const clean = String(text || '').trim();
    if (!clean) return;
    const message = { author: state.activeProfile.username, avatar: state.activeProfile.avatar, text: clean, createdAt: new Date() };
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
    renderChatMessages(target, store[roomId], 'Noch keine Nachrichten in diesem Raum.');
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
    els.episodesSeasonSelect?.addEventListener('change', () => state.currentEpisodesSeries && renderEpisodesList(state.currentEpisodesSeries, els.episodesSeasonSelect.value));
    els.detailsEpisodesBtn?.addEventListener('click', () => state.currentDetails && state.currentDetails.type === 'Serie' && openEpisodesModal(state.currentDetails));
    els.detailsPlayBtn.addEventListener('click', () => {
      if (!state.currentDetails) return;
      const item = state.currentDetails;
      if (els.detailsPlayerWrap) els.detailsPlayerWrap.classList.remove('hidden');
      playDetailsVideo(item.streamUrl || '');
      subscribeToRoom('details', item);
    });
    els.detailsSaveBtn.addEventListener('click', () => state.currentDetails && toggleMyList(state.currentDetails));
    els.profileMenuBtn.addEventListener('click', logout);
    els.logoutAllBtn.addEventListener('click', () => { localStorage.removeItem(STORAGE.profile); localStorage.removeItem(STORAGE.myList); location.reload(); });
    document.querySelectorAll('.nav-link').forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.view)));
    els.searchToggle.addEventListener('click', () => { els.searchBar.classList.toggle('hidden'); if (!els.searchBar.classList.contains('hidden')) els.globalSearchInput.focus(); });
    els.globalSearchInput.addEventListener('input', (e) => searchEverything(e.target.value));
    els.configToggle.addEventListener('click', openConfigDrawer);
    els.closeConfigDrawer.addEventListener('click', closeConfigDrawer);
    els.resetLibraryBtn.addEventListener('click', resetLibrary);
    els.liveChatForm.addEventListener('submit', async (e) => { e.preventDefault(); try { await sendChatMessage('live', els.liveChatInput.value); els.liveChatInput.value=''; } catch (err) { setChatStatus('live', `Nachricht konnte nicht gesendet werden: ${err.message}`, 'warn'); } });
    els.detailsChatForm.addEventListener('submit', async (e) => { e.preventDefault(); try { await sendChatMessage('details', els.detailsChatInput.value); els.detailsChatInput.value=''; } catch (err) { setChatStatus('details', `Nachricht konnte nicht gesendet werden: ${err.message}`, 'warn'); } });
    els.loadM3uUrlBtn.addEventListener('click', () => importFromUrl(els.m3uUrlInput.value.trim(), applyLiveImport));
    els.loadEpgUrlBtn.addEventListener('click', () => importFromUrl(els.epgUrlInput.value.trim(), applyEpgImport));
    els.loadMoviesUrlBtn.addEventListener('click', () => importFromUrl(els.moviesUrlInput.value.trim(), applyMovieImport));
    els.loadSeriesUrlBtn.addEventListener('click', () => importFromUrl(els.seriesUrlInput.value.trim(), applySeriesImport));
    els.m3uFileInput.addEventListener('change', (e) => importFromFile(e.target.files[0], applyLiveImport));
    els.epgFileInput.addEventListener('change', (e) => importFromFile(e.target.files[0], applyEpgImport));
    els.moviesFileInput.addEventListener('change', (e) => importFromFile(e.target.files[0], applyMovieImport));
    els.seriesFileInput.addEventListener('change', (e) => importFromFile(e.target.files[0], applySeriesImport));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { if (!els.episodesModal?.classList.contains('hidden')) closeEpisodesModal(); else closeDetails(); els.passwordOverlay.classList.add('hidden'); closeConfigDrawer(); }
    });
  }

  window.addEventListener('beforeunload', clearHeroTimer);
  enrich();
  renderProfiles();
  bindEvents();
  if (state.activeProfile) enterApp();
})();
