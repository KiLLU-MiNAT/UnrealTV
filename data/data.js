window.UNREAL_DATA = {
  accounts: [
    { username: 'Admin', password: '63450', avatar: 'assets/avatar-admin.svg', color: '#d62828' },
    { username: 'Amur', password: '63450', avatar: 'assets/avatar-amur.svg', color: '#2a9d8f' },
    { username: 'Aviano', password: '63450', avatar: 'assets/avatar-aviano.svg', color: '#577590' },
    { username: 'Alessia', password: '63450', avatar: 'assets/avatar-alessia.svg', color: '#b5179e' },
    { username: 'Volkan', password: '63450', avatar: 'assets/avatar-volkan.svg', color: '#f4a261' },
    { username: 'Gesu', password: '63450', avatar: 'assets/avatar-gesu.png', color: '#fc2be4' },
    { username: 'Mano', password: 'Anissa100', avatar: 'assets/avatar-mano.svg', color: '#6a4c93' },
    { username: 'Janina', password: 'Anissa100', avatar: 'assets/avatar-janina.svg', color: '#6500f2' },
    { username: 'Anissa', password: 'Anissa100', avatar: 'assets/avatar-anissa.svg', color: '#dd78ff' },
  ],

    // =========================================================
    // FEATURED / HERO BANNER
    // =========================================================
  featured: {
    id: 'featured-1',
    type: 'Serie',
    title: 'UNREALTV ORIGINALS',
    subtitle: 'Die Oberfläche für deine Streams, Sender und Mediathek',
    description: 'Netflix-inspirierte Startseite für Live TV, Serien und Filme. Deine legalen M3U- und M3U8-Streams können später direkt eingebunden werden. EPG, Metadaten und Profil-Login sind bereits vorbereitet.',
    year: '2026',
    rating: 'Demo',
    runtime: 'Responsive UI',
    genres: ['Live TV', 'Serien', 'Filme', 'M3U ready'],
    backdrop: 'assets/hero-unrealtv.png'
  },

// =========================================================
// LIVE TV / SENDER
// =========================================================
liveChannels: [
  {
    id: 'ch-1',
    name: 'Das Erste HD',
    group: 'Entertainment',
    logo: 'DAS',
    logoUrl: 'https://epg.pw/media/images/epg/2025/04/08/20250408022937912681_77.png',
    streamUrl: 'https://s6.hopslan.com/ardX/index.m3u8',
    sources: [
      {
        id: 'ch-1-source-1',
        label: 'Stream 1',
        streamUrl: 'https://s6.hopslan.com/ardX/index.m3u8'
      },
      {
        id: 'ch-1-source-2',
        label: 'Stream 2',
        streamUrl: 'https://s3.hdtvizlecanli.com/live/ard1.m3u8?md5=jv9_l9rwa7k5WoWYpK5bEw&expires=1775678326'
      },
      {
        id: 'ch-1-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '19:30', title: 'Evening Showcase' },
      { start: '19:30', end: '21:00', title: 'Action Night Special' },
      { start: '21:00', end: '22:30', title: 'Late Prime Selection' }
    ],
    quickAccess: true
  },
  {
    id: 'ch-2',
    name: 'ZDF HD',
    group: 'Movies',
    logo: 'ZDF',
    logoUrl: 'https://epg.pw/media/images/epg/2024/06/08/20240608020543483840_77.png',
    streamUrl: 'https://s6.hopslan.com/zdfX1/tracks-v1a1/mono.m3u8',
    sources: [
      {
        id: 'ch-2-source-1',
        label: 'Stream 1',
        streamUrl: 'https://s6.hopslan.com/zdfX1/tracks-v1a1/mono.m3u8'
      },
      {
        id: 'ch-2-source-2',
        label: 'Stream 2',
        streamUrl: 'https://s3.hdtvizlecanli.com/live/zdf.m3u8?md5=sBo-oq-V0HDYMaf-pyLqsw&expires=1775678498'
      },
      {
        id: 'ch-2-source-3',
        label: 'Stream 3',
        embed: 'https://shouurvki7jtfax.ngolpdkyoctjcddxshli469r.org/sunshine/BMv-NdUcoI-eDrAzq-fuj5w_AW3cq_vzTBz6B-_is29ZFvWhsg2YghX-SHiiA552cHYXESpc3QgqM2roTBZ5apAkN1mDZdzlRPi-hT-YxGpuh_NB69MfSqkgPOjQGgY6sarqX6YiOCVhnr3gVBViw-uXzyoVng6oyZBcO8fKxh4usmLY5JSSNn96hXIB-DLP7cMXxsEKfJ7RD2WzZjLoMWY3_uczsiqNy-iJOmRFcb4491W_C98b5frPu6BkX_lmTrv5zPjUrf_ctqyBL_vO6A/hls/index.m3u8'
      }
    ],
    epg: [
      { start: '18:15', end: '20:00', title: 'Coming Soon Highlights' },
      { start: '20:00', end: '22:00', title: 'Premiere Window' },
      { start: '22:00', end: '23:30', title: 'Night Trailer Loop' }
    ],
    quickAccess: true
  },
  {
    id: 'ch-3',
    name: 'RTL HD',
    group: 'Series',
    logo: 'RTL',
    logoUrl: 'https://epg.pw/media/images/epg/2024/06/08/20240608031854459341_82.png',
    streamUrl: 'https://s6.hopslan.com/rtla/tracks-v1a1/mono.m3u8',
    sources: [
      {
        id: 'ch-3-source-1',
        label: 'Stream 1',
        streamUrl: 'https://s6.hopslan.com/rtla/tracks-v1a1/mono.m3u8'
      },
      {
        id: 'ch-3-source-2',
        label: 'Stream 2',
        streamUrl: ''
      },
      {
        id: 'ch-3-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '17:45', end: '19:00', title: 'Binge Starter' },
      { start: '19:00', end: '20:45', title: 'Weekly Spotlight' },
      { start: '20:45', end: '22:15', title: 'After Hours Episodes' }
    ],
    quickAccess: true
  },
  {
    id: 'ch-4',
    name: 'RTL II HD',
    group: 'News',
    logo: 'RT2',
    logoUrl: 'https://i.ibb.co/N2JMzmt2/rtl2.png',
    streamUrl: 'https://s6.hopslan.com/rtl2q/tracks-v1a1/mono.m3u8',
    sources: [
      {
        id: 'ch-4-source-1',
        label: 'Stream 1',
        streamUrl: 'https://s6.hopslan.com/rtl2q/tracks-v1a1/mono.m3u8'
      },
      {
        id: 'ch-4-source-2',
        label: 'Stream 2',
        streamUrl: ''
      },
      {
        id: 'ch-4-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ],
    quickAccess: true
  },
  {
    id: 'ch-5',
    name: 'Pro7 HD',
    group: 'News',
    logo: 'PRO7',
    logoUrl: 'https://epg.pw/media/images/epg/2024/06/08/20240608033457284178_30.png',
    streamUrl: 'https://s6.hopslan.com/pro7z/tracks-v1a1/mono.m3u8',
    sources: [
      {
        id: 'ch-5-source-1',
        label: 'Stream 1',
        streamUrl: 'https://s6.hopslan.com/pro7z/tracks-v1a1/mono.m3u8'
      },
      {
        id: 'ch-5-source-2',
        label: 'Stream 2',
        streamUrl: 'https://s3.hdtvizlecanli.com/live/pro7.m3u8?md5=hj_qIq60lSzhcy9vURzhFw&expires=1775678410'
      },
      {
        id: 'ch-5-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-6',
    name: 'Pro7 MAXX HD',
    group: 'Entertainment',
    logo: 'MAX',
    logoUrl: 'https://epg.pw/media/images/epg/2025/04/08/20250408022503266598_81.png',
    streamUrl: 'https://s6.hopslan.com/pro7maxxX/tracks-v1a1/mono.m3u8',
    sources: [
      {
        id: 'ch-6-source-1',
        label: 'Stream 1',
        streamUrl: 'https://s6.hopslan.com/pro7maxxX/tracks-v1a1/mono.m3u8'
      },
      {
        id: 'ch-6-source-2',
        label: 'Stream 2',
        streamUrl: 'https://s3.hdtvizlecanli.com/live/pro7max.m3u8?md5=J6HAUezI-mkqw5dI4X2n4w&expires=1775678658'
      },
      {
        id: 'ch-6-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-7',
    name: 'VOX HD',
    group: 'Entertainment',
    logo: 'VOX',
    logoUrl: 'https://epg.pw/media/images/epg/2024/06/08/20240608032515397466_18.png',
    streamUrl: 'https://s6.hopslan.com/voxz/tracks-v1a1/mono.m3u8',
    sources: [
      {
        id: 'ch-7-source-1',
        label: 'Stream 1',
        streamUrl: 'https://s6.hopslan.com/voxz/tracks-v1a1/mono.m3u8'
      },
      {
        id: 'ch-7-source-2',
        label: 'Stream 2',
        streamUrl: ''
      },
      {
        id: 'ch-7-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-8',
    name: 'Kabel1 HD',
    group: 'Entertainment',
    logo: 'KA1',
    logoUrl: 'https://epg.pw/media/images/epg/2024/06/08/20240608024205572079_90.png',
    streamUrl: 'https://s6.hopslan.com/kabel1z/tracks-v1a1/mono.m3u8',
    sources: [
      {
        id: 'ch-8-source-1',
        label: 'Stream 1',
        streamUrl: 'https://s6.hopslan.com/kabel1z/tracks-v1a1/mono.m3u8'
      },
      {
        id: 'ch-8-source-2',
        label: 'Stream 2',
        streamUrl: 'https://s3.hdtvizlecanli.com/live/kabel1.m3u8?md5=RlBNfM77Hkiy9MZOa-TxDw&expires=1775678544'
      },
      {
        id: 'ch-8-source-3',
        label: 'Stream 3',
        embed: 'https://qmaalhy7acgxwhm.ngolpdkyoctjcddxshli469r.org/sunshine/UBJQSRyddhrLFVH3IKZeJtC9c1nwjeloESTgg23LNuBO4PAJqR2sLjYESMTP1g-b0Oqsx8Cdol_vPo-CN6MKAF2Ywsx55wvrdNx9SvBeozbnlj8yFR5PP99Ev81o2P0y-QABVBz6x5d33LgGCmWUZ2OQhOdkmaPScgqCzfFNBLTVn0rDADRWA6eeYTjtIn85yk-esycSaxUJPLJK1mKqicvOgeKn9f4QqtJn4rEhcNEqBYg7oQIMRbssTG0LuiV8O3KPrBf53khmyRRGhOYOfg/hls/index.m3u8'
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-9',
    name: 'Kabel1 Doku HD',
    group: 'Dokumentation',
    logo: 'KAB',
    logoUrl: 'https://epg.pw/media/images/epg/2025/04/08/20250408022212559585_67.png',
    streamUrl: 'https://s6.hopslan.com/dokuX/tracks-v1a1/mono.m3u8',
    sources: [
      {
        id: 'ch-9-source-1',
        label: 'Stream 1',
        streamUrl: 'https://s6.hopslan.com/dokuX/tracks-v1a1/mono.m3u8'
      },
      {
        id: 'ch-9-source-2',
        label: 'Stream 2',
        streamUrl: 'https://s3.hdtvizlecanli.com/live/kabel1doku.m3u8?md5=p8S1xi1fZ2X-53W3SSyisg&expires=1775678620'
      },
      {
        id: 'ch-9-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-10',
    name: 'Sat1 HD',
    group: 'Entertainment',
    logo: 'SAT',
    logoUrl: 'https://www.2ix2.com/wp-content/uploads/2018/09/sat1-logo.png',
    streamUrl: 'https://s6.hopslan.com/sat1z/tracks-v1a1/mono.m3u8',
    sources: [
      {
        id: 'ch-10-source-1',
        label: 'Stream 1',
        streamUrl: 'https://s6.hopslan.com/sat1z/tracks-v1a1/mono.m3u8'
      },
      {
        id: 'ch-10-source-2',
        label: 'Stream 2',
        streamUrl: 'https://s3.hdtvizlecanli.com/live/sat1.m3u8?md5=-NFU4cHDqWFTatOdR6CkJg&expires=1775678521'
      },
      {
        id: 'ch-10-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-11',
    name: 'Sixx HD',
    group: 'Entertainment',
    logo: 'SIX',
    logoUrl: 'https://epg.pw/media/images/epg/2025/04/23/20250423021918365296_80.png',
    streamUrl: 'https://s6.hopslan.com/sixX/tracks-v1a1/mono.m3u8',
    sources: [
      {
        id: 'ch-11-source-1',
        label: 'Stream 1',
        streamUrl: 'https://s6.hopslan.com/sixX/tracks-v1a1/mono.m3u8'
      },
      {
        id: 'ch-11-source-2',
        label: 'Stream 2',
        streamUrl: 'https://s3.hdtvizlecanli.com/live/six.m3u8?md5=LsS0wAvrutM6Nf8ZZNLnNw&expires=1775678637'
      },
      {
        id: 'ch-11-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-12',
    name: 'DMAX HD',
    group: 'Dokumentation',
    logo: 'DMA',
    logoUrl: 'https://www.2ix2.com/wp-content/uploads/2018/09/dmax-logo.png',
    streamUrl: 'https://s6.hopslan.com/dmaxX/tracks-v1a1/mono.m3u8',
    sources: [
      {
        id: 'ch-12-source-1',
        label: 'Stream 1',
        streamUrl: 'https://s6.hopslan.com/dmaxX/tracks-v1a1/mono.m3u8'
      },
      {
        id: 'ch-12-source-2',
        label: 'Stream 2',
        streamUrl: ''
      },
      {
        id: 'ch-12-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-13',
    name: 'TLC HD',
    group: 'Entertainment',
    logo: 'TLC',
    logoUrl: 'https://epg.pw/media/images/epg/2024/06/08/20240608035127764832_59.png',
    streamUrl: 'https://s6.hopslan.com/tlcX/tracks-v1a1/mono.m3u8',
    sources: [
      {
        id: 'ch-13-source-1',
        label: 'Stream 1',
        streamUrl: 'https://s6.hopslan.com/tlcX/tracks-v1a1/mono.m3u8'
      },
      {
        id: 'ch-13-source-2',
        label: 'Stream 2',
        streamUrl: ''
      },
      {
        id: 'ch-13-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-14',
    name: 'Tele5 HD',
    group: 'Entertainment',
    logo: 'TEL',
    logoUrl: 'https://epg.pw/media/images/epg/2024/06/08/20240608035430328578_13.png',
    streamUrl: 'https://s6.hopslan.com/tele5X/tracks-v1a1/mono.m3u8',
    sources: [
      {
        id: 'ch-14-source-1',
        label: 'Stream 1',
        streamUrl: 'https://s6.hopslan.com/tele5X/tracks-v1a1/mono.m3u8'
      },
      {
        id: 'ch-14-source-2',
        label: 'Stream 2',
        streamUrl: 'https://s3.hdtvizlecanli.com/live/tele5.m3u8?md5=hUhF8Mdi3csoJtAxc0XTuQ&expires=1775678572'
      },
      {
        id: 'ch-14-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-15',
    name: 'N-TV HD',
    group: 'News',
    logo: 'NTV',
    logoUrl: 'https://epg.pw/media/images/epg/2025/04/08/20250408021508001642_78.png',
    streamUrl: 'https://s6.hopslan.com/ntvX/tracks-v1a1/mono.m3u8',
    sources: [
      {
        id: 'ch-15-source-1',
        label: 'Stream 1',
        streamUrl: 'https://s6.hopslan.com/ntvX/tracks-v1a1/mono.m3u8'
      },
      {
        id: 'ch-15-source-2',
        label: 'Stream 2',
        streamUrl: ''
      },
      {
        id: 'ch-15-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-16',
    name: 'WELT HD',
    group: 'News',
    logo: 'WEL',
    logoUrl: 'https://2ix2.com/wp-content/uploads/2020/06/13.png',
    streamUrl: 'https://s6.hopslan.com/n24X/tracks-v1a1/mono.m3u8',
    sources: [
      {
        id: 'ch-16-source-1',
        label: 'Stream 1',
        streamUrl: 'https://s6.hopslan.com/n24X/tracks-v1a1/mono.m3u8'
      },
      {
        id: 'ch-16-source-2',
        label: 'Stream 2',
        streamUrl: 'https://s3.hdtvizlecanli.com/live/n24.m3u8?md5=KZf4ijLf757c2s4nPO7Y0A&expires=1775678595'
      },
      {
        id: 'ch-16-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-17',
    name: '´Super RTL HD',
    group: 'Kids',
    logo: 'SUP',
    logoUrl: 'https://epg.pw/media/images/epg/2024/06/08/20240608034904479203_33.png',
    streamUrl: 'https://cachehsi1b.netplus.ch/tok_eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIxNzc1NjA1NTA2Iiwic2lwIjoiIiwicGF0aCI6Ii9saXZlL2Vkcy9zdXBlcnJ0bC9icm93c2VyLUhMUzgvIiwic2Vzc2lvbl9jZG5faWQiOiIzNTU5NjM2NjQ4MDQ0OTQwIiwic2Vzc2lvbl9pZCI6IiIsImNsaWVudF9pZCI6IiIsImRldmljZV9pZCI6IiIsIm1heF9zZXNzaW9ucyI6MCwic2Vzc2lvbl9kdXJhdGlvbiI6MCwidXJsIjoiaHR0cHM6Ly8xMC4wLjIyOS4xOCIsInNlc3Npb25fdGltZW91dCI6MCwiYXVkIjoiMTEiLCJzb3VyY2VzIjpbMTAwXX0=.ZClGB6mHLw7_EhuOxOmMxwTIZBwp-cHkNDEMl_hT_9Sn74IxT63ogwwZ66iTd2Iwi48pw5h1r6psqOxAURbKRw==/live/eds/superrtl/browser-HLS8/superrtl.m3u8',
    sources: [
      {
        id: 'ch-17-source-1',
        label: 'Stream 1',
        streamUrl: 'https://cachehsi1b.netplus.ch/tok_eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIxNzc1NjA1NTA2Iiwic2lwIjoiIiwicGF0aCI6Ii9saXZlL2Vkcy9zdXBlcnJ0bC9icm93c2VyLUhMUzgvIiwic2Vzc2lvbl9jZG5faWQiOiIzNTU5NjM2NjQ4MDQ0OTQwIiwic2Vzc2lvbl9pZCI6IiIsImNsaWVudF9pZCI6IiIsImRldmljZV9pZCI6IiIsIm1heF9zZXNzaW9ucyI6MCwic2Vzc2lvbl9kdXJhdGlvbiI6MCwidXJsIjoiaHR0cHM6Ly8xMC4wLjIyOS4xOCIsInNlc3Npb25fdGltZW91dCI6MCwiYXVkIjoiMTEiLCJzb3VyY2VzIjpbMTAwXX0=.ZClGB6mHLw7_EhuOxOmMxwTIZBwp-cHkNDEMl_hT_9Sn74IxT63ogwwZ66iTd2Iwi48pw5h1r6psqOxAURbKRw==/live/eds/superrtl/browser-HLS8/superrtl.m3u8'
      },
      {
        id: 'ch-17-source-2',
        label: 'Stream 2',
        streamUrl: ''
      },
      {
        id: 'ch-17-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-18',
    name: 'Disney Channel HD',
    group: 'Kids',
    logo: 'DIS',
    logoUrl: 'https://www.2ix2.com/wp-content/uploads/2018/02/9.png',
    streamUrl: 'https://s6.hopslan.com/disneyX/tracks-v1a1/mono.m3u8',
    sources: [
      {
        id: 'ch-18-source-1',
        label: 'Stream 1',
        streamUrl: 'https://s6.hopslan.com/disneyX/tracks-v1a1/mono.m3u8'
      },
      {
        id: 'ch-18-source-2',
        label: 'Stream 2',
        streamUrl: ''
      },
      {
        id: 'ch-18-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-19',
    name: 'Kika HD',
    group: 'Kinder',
    logo: 'KIK',
    logoUrl: 'https://www.nettv.live/uploads/25/1-250Q20101454B.png',
    streamUrl: 'https://kikahls.akamaized.net/hls/live/2022690/livetvkika_ww/master.m3u8',
    sources: [
      {
        id: 'ch-19-source-1',
        label: 'Stream 1',
        streamUrl: 'https://kikahls.akamaized.net/hls/live/2022690/livetvkika_ww/master.m3u8'
      },
      {
        id: 'ch-19-source-2',
        label: 'Stream 2',
        streamUrl: ''
      },
      {
        id: 'ch-19-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-20',
    name: 'TEST HD',
    group: 'TEST',
    logo: 'TEST',
    logoUrl: 'https://www.2ix2.com/wp-content/uploads/2018/09/pro7maxx-logo.png',
    streamUrl: 'https://s6.hopslan.com/pro7maxxX/tracks-v1a1/mono.m3u8',
    sources: [
      {
        id: 'ch-20-source-1',
        label: 'Stream 1',
        streamUrl: 'https://s6.hopslan.com/pro7maxxX/tracks-v1a1/mono.m3u8'
      },
      {
        id: 'ch-20-source-2',
        label: 'Stream 2',
        streamUrl: ''
      },
      {
        id: 'ch-20-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-21',
    name: 'Sky Action HD',
    group: 'Entertainment',
    logo: 'SKY',
    logoUrl: 'https://www.2ix2.com/wp-content/uploads/2018/09/pro7maxx-logo.png',
    streamUrl: 'https://qmaalhy7acgxwhm.ngolpdkyoctjcddxshli469r.org/sunshine/_o8wkqR-A1PjZUFlA4tLUAe6MiyGfjfbtrRO-4AZBec2aQffvIGtjVv7a17DHmNUjF6tCrQhZiF1oWmzJlW8hw2ViH9STcMof8q6raglKcsOByAWUk-wmeaGvRE6O_wf91fFVR0wNa2KB0rO9O0FaEK2XXeD94Gmkx0NAmBsma_Nm1Nw3tPQ5qb5u-5C-xURRdQLQ3NRw_3X20l1AgcsjcjWMDN6ePSoe4EJ5tPF0T8100OO2QEP8mWK-OEHSE_NXsTJj6g6DtP02pqSmBcpQA/hls/index.m3u8',
    sources: [
      {
        id: 'ch-21-source-1',
        label: 'Stream 1',
        streamUrl: 'https://qmaalhy7acgxwhm.ngolpdkyoctjcddxshli469r.org/sunshine/_o8wkqR-A1PjZUFlA4tLUAe6MiyGfjfbtrRO-4AZBec2aQffvIGtjVv7a17DHmNUjF6tCrQhZiF1oWmzJlW8hw2ViH9STcMof8q6raglKcsOByAWUk-wmeaGvRE6O_wf91fFVR0wNa2KB0rO9O0FaEK2XXeD94Gmkx0NAmBsma_Nm1Nw3tPQ5qb5u-5C-xURRdQLQ3NRw_3X20l1AgcsjcjWMDN6ePSoe4EJ5tPF0T8100OO2QEP8mWK-OEHSE_NXsTJj6g6DtP02pqSmBcpQA/hls/index.m3u8'
      },
      {
        id: 'ch-21-source-2',
        label: 'Stream 2',
        streamUrl: 'https://shouurvki7jtfax.ngolpdkyoctjcddxshli469r.org/sunshine/voQ1rg8PPU8bweJOADRWDTG1OdpsRRDPbo_wJEOGM8DIolP7oh7sNtpSUFISqKdZ7LcfZ8wdf5H1ZWaEtsQfQXx-vb_RUjF7e8fvmGReyxxf3UUKOWIVf0splgXTyGSZg3U_2QJwMpknXWZy0YsGXrxZaWzzBRAazL_zTtYSbNrgzWjCFOhMjTkjAOIvbX6AQ8Vv0nr1kQVS8sCwE9lar95qWSFYHOpcK5IQrysDJwvJ3TwJWflKWsrcZeOF6VDeBOPkedQ8H5TCpFsAhDSjdw/hls/index.m3u8'
      },
      {
        id: 'ch-21-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-22',
    name: 'Sky Krimi HD',
    group: 'Entertainment',
    logo: 'SKY',
    logoUrl: 'https://www.2ix2.com/wp-content/uploads/2018/09/pro7maxx-logo.png',
    streamUrl: 'https://qmaalhy7acgxwhm.ngolpdkyoctjcddxshli469r.org/sunshine/_o8wkqR-A1PjZUFlA4tLUAe6MiyGfjfbtrRO-4AZBec2aQffvIGtjVv7a17DHmNUjF6tCrQhZiF1oWmzJlW8hw2ViH9STcMof8q6raglKcsOByAWUk-wmeaGvRE6O_wf91fFVR0wNa2KB0rO9O0FaEK2XXeD94Gmkx0NAmBsma_Nm1Nw3tPQ5qb5u-5C-xURRdQLQ3NRw_3X20l1AgcsjcjWMDN6ePSoe4EJ5tPF0T8100OO2QEP8mWK-OEHSE_NXsTJj6g6DtP02pqSmBcpQA/hls/index.m3u8',
    sources: [
      {
        id: 'ch-22-source-1',
        label: 'Stream 1',
        streamUrl: 'https://qmaalhy7acgxwhm.ngolpdkyoctjcddxshli469r.org/sunshine/_o8wkqR-A1PjZUFlA4tLUAe6MiyGfjfbtrRO-4AZBec2aQffvIGtjVv7a17DHmNUjF6tCrQhZiF1oWmzJlW8hw2ViH9STcMof8q6raglKcsOByAWUk-wmeaGvRE6O_wf91fFVR0wNa2KB0rO9O0FaEK2XXeD94Gmkx0NAmBsma_Nm1Nw3tPQ5qb5u-5C-xURRdQLQ3NRw_3X20l1AgcsjcjWMDN6ePSoe4EJ5tPF0T8100OO2QEP8mWK-OEHSE_NXsTJj6g6DtP02pqSmBcpQA/hls/index.m3u8'
      },
      {
        id: 'ch-22-source-2',
        label: 'Stream 2',
        streamUrl: 'https://td3wb1bchdvsahp.ngolpdkyoctjcddxshli469r.org/sunshine/uPRrrZ-q1HL5KojbydYBhFVJoKCC5liizCIhXBLbd_gEO06SZTNgHouUee2slxvuXCHGfHpn_0sutlsw-bmGqTcnDtElZYhXeCgW7bZM_CjjIYGsIZ6d37XssdGKZ-65xy5gxDJl0XdseEtJBO0_ig9if505a3VrycT1o9DzXoEcGjJi5ygq4TcPX9x4VoCVM4UjSlUqyDZ3es1u9GE-vRRUMhfhsvY-QdNamWgmyjix4mS4gBEjPS1MdneBShicfwZWh38bhLE1MPJ-UcTwZg/hls/index.m3u8'
      },
      {
        id: 'ch-22-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-23',
    name: 'Sky Atlantic HD',
    group: 'Entertainment',
    logo: 'SKY',
    logoUrl: 'https://www.2ix2.com/wp-content/uploads/2018/09/pro7maxx-logo.png',
    streamUrl: 'https://shouurvki7jtfax.ngolpdkyoctjcddxshli469r.org/sunshine/dPGH_53Fv9s7mRWxzwzGjf55s75NspbcjQP5Xgg97NTxlGi_A82k_Mk7LsNOCoGae4OW6m0fPqxe8aue3KfF2L2MMKhtbWlwFMUGgncAa94z0OW__yhy9Lr5gHTsBP2eWn7yNc5MDqVtvSe90M4YTBFQ6Tl8wtHJ2aiJsHDGYT6FP3LIsYqhAf3J5_QfV7wrPGvE-fJ-vr3vdtMel2cMVQ-xHTqMyxwVoUGLxbi7IUtsoottpNpm6DiuLqN7AVyg53adFs8y8IxHd-g7gcpp1w/hls/index.m3u8',
    sources: [
      {
        id: 'ch-23-source-1',
        label: 'Stream 1',
        streamUrl: 'https://shouurvki7jtfax.ngolpdkyoctjcddxshli469r.org/sunshine/dPGH_53Fv9s7mRWxzwzGjf55s75NspbcjQP5Xgg97NTxlGi_A82k_Mk7LsNOCoGae4OW6m0fPqxe8aue3KfF2L2MMKhtbWlwFMUGgncAa94z0OW__yhy9Lr5gHTsBP2eWn7yNc5MDqVtvSe90M4YTBFQ6Tl8wtHJ2aiJsHDGYT6FP3LIsYqhAf3J5_QfV7wrPGvE-fJ-vr3vdtMel2cMVQ-xHTqMyxwVoUGLxbi7IUtsoottpNpm6DiuLqN7AVyg53adFs8y8IxHd-g7gcpp1w/hls/index.m3u8'
      },
      {
        id: 'ch-23-source-2',
        label: 'Stream 2',
        streamUrl: 'https://qmaalhy7acgxwhm.ngolpdkyoctjcddxshli469r.org/sunshine/u4v-FM68T6BVuSD3b8z61_LC2g8HYkWUkhCVJCxZXIYMIlgc2pa2Ac--44n-FYu9Hn5jygtbGAst97dLsUlLh6RqNLQFM5iNfCbKctjkoqrE7rCuTSnEwcbbojYLKMPqTX6B95ugKGg5k_62ByKsArLLNwv9cXIJ21qLIrtDDYozhUZpLVbSI6Ik-aMePv0-_twKtrmtDd43QDXaB9gv4apGT-iM54829pi4Uw2sdZLXHa8Mh9lo-WxzsEmQEyP2qyvOQ0sM69sJu8QEK30V7A/hls/index.m3u8'
      },
      {
        id: 'ch-23-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-24',
    name: 'Sky Nature HD',
    group: 'Entertainment',
    logo: 'SKY',
    logoUrl: 'https://www.2ix2.com/wp-content/uploads/2018/09/pro7maxx-logo.png',
    streamUrl: 'https://shouurvki7jtfax.ngolpdkyoctjcddxshli469r.org/sunshine/riDJN2B8ovGC3Y6FBAWYr4PhDMwT2cAF5kkQIkswN3bAfhLu4ZRUz22pzwCt1GavlF_A-gNDsgWM6MQ0GqHITc8T8ecKPERCN9djQcbRt8R4GoWWcH98aJG-rLrL8-Z1q50cnDyT__pt5yL7e-_fkwQIkwpxQyd-9ZJ9P0kPJlf6UomqrsZTGP5RlEerBzk_DenBsWKgcJNOFOxxXe4ndbga_YPkb3-fsTtpJT2nVV-uk6itEjLE6D2ViFwJURocrOX0bMkQE_R70aju2zwngw/hls/index.m3u8',
    sources: [
      {
        id: 'ch-24-source-1',
        label: 'Stream 1',
        streamUrl: 'https://shouurvki7jtfax.ngolpdkyoctjcddxshli469r.org/sunshine/riDJN2B8ovGC3Y6FBAWYr4PhDMwT2cAF5kkQIkswN3bAfhLu4ZRUz22pzwCt1GavlF_A-gNDsgWM6MQ0GqHITc8T8ecKPERCN9djQcbRt8R4GoWWcH98aJG-rLrL8-Z1q50cnDyT__pt5yL7e-_fkwQIkwpxQyd-9ZJ9P0kPJlf6UomqrsZTGP5RlEerBzk_DenBsWKgcJNOFOxxXe4ndbga_YPkb3-fsTtpJT2nVV-uk6itEjLE6D2ViFwJURocrOX0bMkQE_R70aju2zwngw/hls/index.m3u8'
      },
      {
        id: 'ch-24-source-2',
        label: 'Stream 2',
        streamUrl: 'https://mjkskdvpfpb1fbv.ngolpdkyoctjcddxshli469r.org/sunshine/NieoPQ2Tl8tvxNqJw8AVGJev-oc8nZacxurFGpjyL5ZrYk6I1HQVFFSYggn5e8kAq7nOLxe3pHLyed-8ZWUTXrfMjH7HUfT5WZ2L0DpR367ZY6nbqGwuDL4JqmMzXvj_1bhUHmrLKw4SafSn-b2-aFo4ZtcBUZ8MYR72p8xJ91UhG9Vj31utZpk_7Sx4yUYPT9lL7NwqWAdeOGEGQo3Vgce8enoWfuGjPBHlgVmev9YHCxd6KjepD-ImFiuKIO-maOT2Fg9ScD_RVzewxJy7wQ/hls/index.m3u8'
      },
      {
        id: 'ch-24-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-25',
    name: 'Sky Select HD',
    group: 'Entertainment',
    logo: 'SKY',
    logoUrl: 'https://www.2ix2.com/wp-content/uploads/2018/09/pro7maxx-logo.png',
    streamUrl: 'https://qmaalhy7acgxwhm.ngolpdkyoctjcddxshli469r.org/sunshine/EzYRYRXk8ddWc-UG2O25z3t8IraLORWen3OzI-41INTBNeEfPhpcwh6MYvJXUFAckYDt21wWxqY2xC9fOpTnmyrAGku4A19Iriksb3cJwI46rGAGQLdit0f5l1DTa2m0ZQPIQlkswYmr3lr0HFDnC3tmfW54Gs__EuFZm_ArPKJjQWvl1q1mu_ioWENomVk9eS5xBE7o6Iic5EB2YAME6Wry-PdnPiIGx0p2UXXNA6MRzuJKgR_oGJXbam9fGaReyO8DYeSwagHtYuopNG2Aug/hls/index.m3u8',
    sources: [
      {
        id: 'ch-25-source-1',
        label: 'Stream 1',
        streamUrl: 'https://qmaalhy7acgxwhm.ngolpdkyoctjcddxshli469r.org/sunshine/EzYRYRXk8ddWc-UG2O25z3t8IraLORWen3OzI-41INTBNeEfPhpcwh6MYvJXUFAckYDt21wWxqY2xC9fOpTnmyrAGku4A19Iriksb3cJwI46rGAGQLdit0f5l1DTa2m0ZQPIQlkswYmr3lr0HFDnC3tmfW54Gs__EuFZm_ArPKJjQWvl1q1mu_ioWENomVk9eS5xBE7o6Iic5EB2YAME6Wry-PdnPiIGx0p2UXXNA6MRzuJKgR_oGJXbam9fGaReyO8DYeSwagHtYuopNG2Aug/hls/index.m3u8'
      },
      {
        id: 'ch-25-source-2',
        label: 'Stream 2',
        streamUrl: ''
      },
      {
        id: 'ch-25-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },

  {
    id: 'ch-sport-1',
    name: 'DAZN 1 HD',
    group: 'Sport',
    logo: 'EMB',
    logoUrl: 'https://epg.pw/media/images/epg/2024/12/16/20241216021430919637_94.png',
    sources: [
      {
        id: 'stream-1',
        label: 'Stream 1',
        streamUrl: 'https://shouurvki7jtfax.ngolpdkyoctjcddxshli469r.org/sunshine/6PGUajrSasF6imdDFQHTU46Nb7landma9tJzI_DlIj4TkH1y-eeapAzG9XAwpcHQIxQNXJTiA6kKeb5hcV0Qh9blVEs9ucIcVwf8cptstUzt40BqJ6xB76hMvCdgO41ppkFp_GriCz5OZ2Zy2ZJhV4_7kR4rR955Bi0Wgp9dBfSh96v-5fgMgARqJg5dRkrkXcTPaD7Nh80Vi0K9tfLM3Fwtyr5yvxa-l7Q9XHUnll5jwRpx1OlhK4n-ubKQFNRjwx0FnX1q6JCdGMDA8aXyjA/hls/index.m3u8'
      },
      {
        id: 'stream-2',
        label: 'Stream 2',
        embed: 'https://dlstreams.top/plus/stream-426.php'
      },
      {
        id: 'stream-1',
        label: 'Stream 3',
        iframe: '<iframe src="https://dlstreams.top/stream/stream-426.php" width="100%" height="100%" style="border:0;" allowfullscreen></iframe>'
      }
    ],
    epg: [
      { start: '18:00', end: '19:00', title: 'Live Stream' }
    ]
  },
  {
    id: 'ch-sport-2',
    name: 'DAZN 2 HD',
    group: 'Sport',
    logo: 'DZN',
    logoUrl: 'https://epg.pw/media/images/epg/2024/12/16/20241216021935231312_54.png',
    sources: [
      {
        id: 'stream-1',
        label: 'Stream 1',
        embed: 'https://dlstreams.top/plus/stream-427.php'
      },
      {
          id: 'stream-2',
        label: 'Stream 2',
        embed: 'https://dlstreams.top/stream/stream-559.php'
      },
      {
        id: 'stream-3',
        label: 'Stream 3',
        embed: 'https://dlstreams.top/cast/stream-559.php'
      }
    ],
    epg: [
      { start: '18:00', end: '19:00', title: 'Live Stream' }
    ]
  },
  {
    id: 'ch-sport-3',
    name: 'Sky Sport Austria HD',
    group: 'Sport',
    logo: 'DZN',
    logoUrl: 'https://epg.pw/media/images/epg/2025/04/23/20250423020644574176_45.png',
    sources: [
      {
        id: 'stream-1',
        label: 'Stream 1',
        embed: 'https://dlstreams.top/stream/stream-559.php'
      },
      {
        id: 'stream-2',
        label: 'Stream 2',
        embed: 'https://dlstreams.top/stream/stream-559.php'
      },
      {
        id: 'stream-3',
        label: 'Stream 3',
        embed: 'https://dlstreams.top/watch/stream-559.php'
      }
    ],
    epg: [
      { start: '18:00', end: '19:00', title: 'Live Stream' }
    ]
  },
  {
    id: 'ch-sport-4',
    name: 'Sky Sport Top Event',
    group: 'Sport',
    logo: 'SKY',
    logoUrl: 'https://play-lh.googleusercontent.com/-kP0io9_T-LULzdpmtb4E-nFYFwDIKW7cwBhOSRwjn6T2ri0hKhz112s-ksI26NFCKOg',
    sources: [
      {
        id: 'stream-1',
        label: 'Stream 1',
        embed: 'https://dlstreams.top/stream/stream-556.php'
      },
      {
        id: 'stream-2',
        label: 'Stream 2',
        embed: 'https://dlstreams.top/cast/stream-556.php'
      },
      {
        id: 'stream-3',
        label: 'Stream 3',
        embed: 'https://dlstreams.top/plus/stream-556.php'
      }
    ],
    epg: [
      { start: '18:00', end: '19:00', title: 'Live Stream' }
    ]
  },
  {
    id: 'ch-sport-5',
    name: 'Sky Sport Bundesliga 1 HD',
    group: 'Sport',
    logo: 'SKY',
    logoUrl: 'https://epg.pw/media/images/epg/2025/02/14/20250214021117684221_98.png',
    streamUrl: 'https://planetary.lovetier.bz/SkySportsBundesliga/index.m3u8?token=U2t5U3BvcnRzQnVuZGVzbGlnYXxub19jaGVja19pcHwxNzc1Njc4Njk3.92072fa1f86b515008af0bec1bcd26b843e3e970f63438efa3f3cb8aed55aa2b',
    sources: [
      {
        id: 'stream-1',
        label: 'Stream 1',
        streamUrl: 'https://planetary.lovetier.bz/SkySportsBundesliga/index.m3u8?token=U2t5U3BvcnRzQnVuZGVzbGlnYXxub19jaGVja19pcHwxNzc1Njc4Njk3.92072fa1f86b515008af0bec1bcd26b843e3e970f63438efa3f3cb8aed55aa2b'
      },
      {
        id: 'stream-2',
        label: 'Stream 2',
        embed: 'https://dlstreams.top/cast/stream-558.php'
      },
      {
        id: 'stream-3',
        label: 'Stream 3',
        embed: 'https://dlstreams.top/watch/stream-558.php'
      }
    ],
    epg: [
      { start: '18:00', end: '19:00', title: 'Live Stream' }
    ]
  },
  {
    id: 'ch-sport-6',
    name: 'Sky Sport 2 HD',
    group: 'Sport',
    logo: 'SKY',
    logoUrl: 'https://epg.pw/media/images/epg/2024/11/24/20241124021954652856_78.png',
    sources: [
      {
        id: 'stream-1',
        label: 'Stream 1',
        embed: 'https://dlstreams.top/stream/stream-426.php'
      },
      {
        id: 'stream-2',
        label: 'Stream 2',
        embed: 'https://dlstreams.top/stream/stream-559.php'
      },
      {
        id: 'stream-3',
        label: 'Stream 3',
        embed: 'https://dlstreams.top/cast/stream-559.php'
      }
    ],
    epg: [
      { start: '18:00', end: '19:00', title: 'Live Stream' }
    ]
  },
  {
    id: 'ch-sport-´7',
    name: 'Sky Sport 3 HD',
    group: 'Sport',
    logo: 'SKY',
    logoUrl: 'https://epg.pw/media/images/epg/2024/11/24/20241124021648864835_30.png',
    streamUrl: 'https://qmaalhy7acgxwhm.ngolpdkyoctjcddxshli469r.org/sunshine/EzYRYRXk8ddWc-UG2O25z3t8IraLORWen3OzI-41INTBNeEfPhpcwh6MYvJXUFAckYDt21wWxqY2xC9fOpTnmyrAGku4A19Iriksb3cJwI46rGAGQLdit0f5l1DTa2m0ZQPIQlkswYmr3lr0HFDnC3tmfW54Gs__EuFZm_ArPKJjQWvl1q1mu_ioWENomVk9eS5xBE7o6Iic5EB2YAME6Wry-PdnPiIGx0p2UXXNA6MRzuJKgR_oGJXbam9fGaReyO8DYeSwagHtYuopNG2Aug/hls/index.m3u8',
    sources: [
      {
        id: 'stream-1',
        label: 'Stream 1',
        streamUrl: 'https://qmaalhy7acgxwhm.ngolpdkyoctjcddxshli469r.org/sunshine/EzYRYRXk8ddWc-UG2O25z3t8IraLORWen3OzI-41INTBNeEfPhpcwh6MYvJXUFAckYDt21wWxqY2xC9fOpTnmyrAGku4A19Iriksb3cJwI46rGAGQLdit0f5l1DTa2m0ZQPIQlkswYmr3lr0HFDnC3tmfW54Gs__EuFZm_ArPKJjQWvl1q1mu_ioWENomVk9eS5xBE7o6Iic5EB2YAME6Wry-PdnPiIGx0p2UXXNA6MRzuJKgR_oGJXbam9fGaReyO8DYeSwagHtYuopNG2Aug/hls/index.m3u8'
      },
      {
        id: 'stream-2',
        label: 'Stream 2',
        streamUrl: ''
      },
      {
        id: 'stream-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-sport-´20',
    name: 'RTL+ Event 2 HD',
    group: 'Sport',
    logo: 'RTL',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/RTL%2B_Logo_2021_weiss.png',
    streamUrl: 'https://qmaalhy7acgxwhm.ngolpdkyoctjcddxshli469r.org/sunshine/zAAZXvrAmWLvUe15OuatRGr5pkzXmqb9c4QZtG2TFPWWSXXciG2zr5TDKT3OIa3Fg_4RCDE3N74w3-ui-Jsf8tgqSOnFm9PsH46VKl4M2Tx9tGUqQw-QySZtGOMs-o5oW_yLtvgEKk2t8mqAIGkcpzoAs0d80Jm8kz8VTEi_fI-ilNg3qXlFFuKq79GUHfBM9R3BSUdv01gF8jrcPxPXGakubWaOa0ATHJwzm4eBc6fsGkgCe8RRJThEhorWisrZcPejNdyzANCY_8VgqigmMQ/hls/index.m3u8',
    sources: [
      {
        id: 'stream-1',
        label: 'Stream 1',
        streamUrl: 'https://qmaalhy7acgxwhm.ngolpdkyoctjcddxshli469r.org/sunshine/zAAZXvrAmWLvUe15OuatRGr5pkzXmqb9c4QZtG2TFPWWSXXciG2zr5TDKT3OIa3Fg_4RCDE3N74w3-ui-Jsf8tgqSOnFm9PsH46VKl4M2Tx9tGUqQw-QySZtGOMs-o5oW_yLtvgEKk2t8mqAIGkcpzoAs0d80Jm8kz8VTEi_fI-ilNg3qXlFFuKq79GUHfBM9R3BSUdv01gF8jrcPxPXGakubWaOa0ATHJwzm4eBc6fsGkgCe8RRJThEhorWisrZcPejNdyzANCY_8VgqigmMQ/hls/index.m3u8'
      },
      {
        id: 'stream-2',
        label: 'Stream 2',
        streamUrl: 'https://mjkskdvpfpb1fbv.ngolpdkyoctjcddxshli469r.org/sunshine/rlzIgCPlaXE01lkkSaDmJ4Q6FHSiQj4rZUZ9PANNK6oPAru7IwZu3cj9sMTDo6qVgRKnkGlp_7o9YaVlEOrPFdg9G0gZxH_YZpQV1l3gjV4_JL5XVEFFzWrEuc5iEa9A4lGEiaiX6gmg3bsYNPZqHJY7QkiPpy4xe0jiFQyzErWL-uZUVjjpcd9m-jrjrXd9JDrCSM-TO8O1jcDgiYOy7F-OQuKAz6WomR6HiryevaUtM6V_L5s5G4Kjr-gotlBhnTjCbTd_TWnQWOPnpcV53w/hls/index.m3u8'
      },
      {
        id: 'ch-21-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
    {
    id: 'ch-sport-´22',
    name: 'RTL+ Event 3 HD',
    group: 'Sport',
    logo: 'RTL',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/RTL%2B_Logo_2021_weiss.png',
    streamUrl: 'https://mjkskdvpfpb1fbv.ngolpdkyoctjcddxshli469r.org/sunshine/rcLT38G7enK1ppkc0L_-cPKRAPP05icjrSoud_ch2NQGrI2ZSDMF3pe_U_sAYWo2ROPRA-JCxmzJ3My3xch1XXHE454RrOcwJoFnajQ-H4OI8HRZPMjNdd8SmsxmNqfNEtIX2uS2fDNY_aREnFsHZX0EkhOIW1o1tQ9LNIz9AK6xENWa5sqhhunMCbAUZEYa-1wfS0kAmeOCYDC3R91c7qmxpu_1s17xJgznk5vShvYP1hOxLlkVOjOBuPX5DaGzIW8mHnWOeTShIJTWPL1YAw/hls/index.m3u8',
    sources: [
      {
        id: 'stream-1',
        label: 'Stream 1',
        streamUrl: 'https://mjkskdvpfpb1fbv.ngolpdkyoctjcddxshli469r.org/sunshine/rcLT38G7enK1ppkc0L_-cPKRAPP05icjrSoud_ch2NQGrI2ZSDMF3pe_U_sAYWo2ROPRA-JCxmzJ3My3xch1XXHE454RrOcwJoFnajQ-H4OI8HRZPMjNdd8SmsxmNqfNEtIX2uS2fDNY_aREnFsHZX0EkhOIW1o1tQ9LNIz9AK6xENWa5sqhhunMCbAUZEYa-1wfS0kAmeOCYDC3R91c7qmxpu_1s17xJgznk5vShvYP1hOxLlkVOjOBuPX5DaGzIW8mHnWOeTShIJTWPL1YAw/hls/index.m3u8'
      },
      {
        id: 'stream-2',
        label: 'Stream 2',
        streamUrl: ''
      },
      {
        id: 'ch-21-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-sport-´23',
    name: 'RTL+ Event 4 HD',
    group: 'Sport',
    logo: 'RTL',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/RTL%2B_Logo_2021_weiss.png',
    streamUrl: 'https://mjkskdvpfpb1fbv.ngolpdkyoctjcddxshli469r.org/sunshine/cZuMhLDcmatKpm8KdZTOPPM-qooSwaZSj0CPlx-qH9g0elEiQp8WkKxD_xSu4hL0XSZwWZ7nly1vLcp1tcfZ5XdN9_9T3eMXxy9tqpxExOtC70ZW7x0kNgBhHnvp9TD-R2aHzI50KvWJat-07a9TVChUjYif6FwCX82yaSH-VKk81Gpt3mCskLlwMMFUOSP2QTuaZt84xaGnBTfE1nozemcheeYr3NOPXBYtNH-Q0Np7mx_EizEzTO0A_vmXNwQr-lLFI_bQQDV2YEQBGQqrlw/hls/index.m3u8',
    sources: [
      {
        id: 'stream-1',
        label: 'Stream 1',
        streamUrl: 'https://mjkskdvpfpb1fbv.ngolpdkyoctjcddxshli469r.org/sunshine/cZuMhLDcmatKpm8KdZTOPPM-qooSwaZSj0CPlx-qH9g0elEiQp8WkKxD_xSu4hL0XSZwWZ7nly1vLcp1tcfZ5XdN9_9T3eMXxy9tqpxExOtC70ZW7x0kNgBhHnvp9TD-R2aHzI50KvWJat-07a9TVChUjYif6FwCX82yaSH-VKk81Gpt3mCskLlwMMFUOSP2QTuaZt84xaGnBTfE1nozemcheeYr3NOPXBYtNH-Q0Np7mx_EizEzTO0A_vmXNwQr-lLFI_bQQDV2YEQBGQqrlw/hls/index.m3u8'
      },
      {
        id: 'stream-2',
        label: 'Stream 2',
        streamUrl: 'https://mjkskdvpfpb1fbv.ngolpdkyoctjcddxshli469r.org/sunshine/U6P7UN-pfHInTo4_CwDhJ47LbGRpiSPT8EB7lLcO5XbqRIkfZSuVeQjIkMOqNrwBVrSmArDx3641NfOnQMYPc84voOaQkumI9ANElmb7fFPE9Q0Zzdwe72sLVVMgdlxfoH4sNlJSzDKp9CosXHEvJBverajopO_ojWlZzvWH8RuHMifo-G9duairFuInIhcK-flPUTAoKRF5CD4dqpb-Mwz1ttAOTLlmgGXnFr-Gvh3E2efqYFACiD-1UQSZxqG7DUYGyC8hWyqDdDTv7Ew-Ow/hls/index.m3u8'
      },
      {
        id: 'ch-21-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-sport-´24',
    name: 'RTL+ Event 5 HD',
    group: 'Sport',
    logo: 'RTL',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/RTL%2B_Logo_2021_weiss.png',
    streamUrl: 'https://mjkskdvpfpb1fbv.ngolpdkyoctjcddxshli469r.org/sunshine/cZuMhLDcmatKpm8KdZTOPPM-qooSwaZSj0CPlx-qH9g0elEiQp8WkKxD_xSu4hL0XSZwWZ7nly1vLcp1tcfZ5XdN9_9T3eMXxy9tqpxExOtC70ZW7x0kNgBhHnvp9TD-R2aHzI50KvWJat-07a9TVChUjYif6FwCX82yaSH-VKk81Gpt3mCskLlwMMFUOSP2QTuaZt84xaGnBTfE1nozemcheeYr3NOPXBYtNH-Q0Np7mx_EizEzTO0A_vmXNwQr-lLFI_bQQDV2YEQBGQqrlw/hls/index.m3u8',
    sources: [
      {
        id: 'stream-1',
        label: 'Stream 1',
        streamUrl: 'https://mjkskdvpfpb1fbv.ngolpdkyoctjcddxshli469r.org/sunshine/cZuMhLDcmatKpm8KdZTOPPM-qooSwaZSj0CPlx-qH9g0elEiQp8WkKxD_xSu4hL0XSZwWZ7nly1vLcp1tcfZ5XdN9_9T3eMXxy9tqpxExOtC70ZW7x0kNgBhHnvp9TD-R2aHzI50KvWJat-07a9TVChUjYif6FwCX82yaSH-VKk81Gpt3mCskLlwMMFUOSP2QTuaZt84xaGnBTfE1nozemcheeYr3NOPXBYtNH-Q0Np7mx_EizEzTO0A_vmXNwQr-lLFI_bQQDV2YEQBGQqrlw/hls/index.m3u8'
      },
      {
        id: 'stream-2',
        label: 'Stream 2',
        streamUrl: 'https://mjkskdvpfpb1fbv.ngolpdkyoctjcddxshli469r.org/sunshine/cZuMhLDcmatKpm8KdZTOPPM-qooSwaZSj0CPlx-qH9g0elEiQp8WkKxD_xSu4hL0XSZwWZ7nly1vLcp1tcfZ5XdN9_9T3eMXxy9tqpxExOtC70ZW7x0kNgBhHnvp9TD-R2aHzI50KvWJat-07a9TVChUjYif6FwCX82yaSH-VKk81Gpt3mCskLlwMMFUOSP2QTuaZt84xaGnBTfE1nozemcheeYr3NOPXBYtNH-Q0Np7mx_EizEzTO0A_vmXNwQr-lLFI_bQQDV2YEQBGQqrlw/hls/index.m3u8'
      },
      {
        id: 'ch-21-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-sport-´25',
    name: 'RTL+ Event 6 HD',
    group: 'Sport',
    logo: 'RTL',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/RTL%2B_Logo_2021_weiss.png',
    streamUrl: 'https://qmaalhy7acgxwhm.ngolpdkyoctjcddxshli469r.org/sunshine/0mtNDFC5gtevYiptma0jEouQ9438UDxNd_wN5ScXoq-3IOnb6DuUgOLbuWKROJ6soRpVi_wTDfVOj8qLkVezcBcH0kbhzMs2cXBGFe-owJtR1WVxPus2n_AKpHbCoSCddyDjrAH9GIYVOtSxTaeM2umzaR1GetvlY3EuYEaL3L1jwL4BBjqNzA2bfnB0KCu4J-ewARdCtdvjc-b8UxmfC1od6RkCAnLwuSeYOF8w0qDRE1ZvCu2zChrElzwCJZLbbyJVumAxjRqDZ2XEbk-m0A/hls/index.m3u8',
    sources: [
      {
        id: 'stream-1',
        label: 'Stream 1',
        streamUrl: 'https://qmaalhy7acgxwhm.ngolpdkyoctjcddxshli469r.org/sunshine/0mtNDFC5gtevYiptma0jEouQ9438UDxNd_wN5ScXoq-3IOnb6DuUgOLbuWKROJ6soRpVi_wTDfVOj8qLkVezcBcH0kbhzMs2cXBGFe-owJtR1WVxPus2n_AKpHbCoSCddyDjrAH9GIYVOtSxTaeM2umzaR1GetvlY3EuYEaL3L1jwL4BBjqNzA2bfnB0KCu4J-ewARdCtdvjc-b8UxmfC1od6RkCAnLwuSeYOF8w0qDRE1ZvCu2zChrElzwCJZLbbyJVumAxjRqDZ2XEbk-m0A/hls/index.m3u8'
      },
      {
        id: 'stream-2',
        label: 'Stream 2',
        streamUrl: 'https://mjkskdvpfpb1fbv.ngolpdkyoctjcddxshli469r.org/sunshine/cZuMhLDcmatKpm8KdZTOPPM-qooSwaZSj0CPlx-qH9g0elEiQp8WkKxD_xSu4hL0XSZwWZ7nly1vLcp1tcfZ5XdN9_9T3eMXxy9tqpxExOtC70ZW7x0kNgBhHnvp9TD-R2aHzI50KvWJat-07a9TVChUjYif6FwCX82yaSH-VKk81Gpt3mCskLlwMMFUOSP2QTuaZt84xaGnBTfE1nozemcheeYr3NOPXBYtNH-Q0Np7mx_EizEzTO0A_vmXNwQr-lLFI_bQQDV2YEQBGQqrlw/hls/index.m3u8'
      },
      {
        id: 'ch-21-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-sport-´26',
    name: 'RTL+ Event 7 HD',
    group: 'Sport',
    logo: 'RTL',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/RTL%2B_Logo_2021_weiss.png',
    streamUrl: 'https://td3wb1bchdvsahp.ngolpdkyoctjcddxshli469r.org/sunshine/pXcqnI-qvvT0A4X_tlqpOKeoB5rxvhOc8-_La10lJGPi7db0XNIQrZeNK-uAbx2zK0SMPz3vSaGRt-awcDdRkm3uxXxRwG0vjCYkN-D0NgKU7lDa1BERfFzequmnnFkKs6fiLOXsljEV7xLRyUUGgkp9Y-nzqyo4KPMKwHbI6x5o3o_U1OBOQKCz0mKvBFHS7VOO3uJw5bpSipqfns38z5LBI4nT9c6a7J2_XEPPGWacjVZ2c6GI__22Z7Sh5q7S8N72cYFv2OueAKeW8CvELg/hls/index.m3u8',
    sources: [
      {
        id: 'stream-1',
        label: 'Stream 1',
        streamUrl: 'https://td3wb1bchdvsahp.ngolpdkyoctjcddxshli469r.org/sunshine/pXcqnI-qvvT0A4X_tlqpOKeoB5rxvhOc8-_La10lJGPi7db0XNIQrZeNK-uAbx2zK0SMPz3vSaGRt-awcDdRkm3uxXxRwG0vjCYkN-D0NgKU7lDa1BERfFzequmnnFkKs6fiLOXsljEV7xLRyUUGgkp9Y-nzqyo4KPMKwHbI6x5o3o_U1OBOQKCz0mKvBFHS7VOO3uJw5bpSipqfns38z5LBI4nT9c6a7J2_XEPPGWacjVZ2c6GI__22Z7Sh5q7S8N72cYFv2OueAKeW8CvELg/hls/index.m3u8'
      },
      {
        id: 'stream-2',
        label: 'Stream 2',
        streamUrl: ''
      },
      {
        id: 'ch-21-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-sport-´27',
    name: 'RTL+ Event 8 HD',
    group: 'Sport',
    logo: 'RTL',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/RTL%2B_Logo_2021_weiss.png',
    streamUrl: 'https://td3wb1bchdvsahp.ngolpdkyoctjcddxshli469r.org/sunshine/9jlRw9CHagj9-tSWdzmAn5RFlQkvqnyiUJF4kesSb806e9z82VcXfT8ZwMX_YHZps-rvs9bExx4Hg1ykCQpeEH72GwqA9_aXpiSxv79wL90dl5HnLyLFswQa6Q5mzXLKDaxnpFen_PeoJprLUR9Hfon7xBR01JLUTtwaLHlaFGTF7JcFzEwiRHylsJib5m_LF3ZyDTgHBAXXRxF5Qwq3FHsJO6XCwnmTc7UAeBm7P-qMf_3jPZZIrrXGMq52S-j_OAItHHB-A1r0fE9Orx3bog/hls/index.m3u8',
    sources: [
      {
        id: 'stream-1',
        label: 'Stream 1',
        streamUrl: 'https://td3wb1bchdvsahp.ngolpdkyoctjcddxshli469r.org/sunshine/9jlRw9CHagj9-tSWdzmAn5RFlQkvqnyiUJF4kesSb806e9z82VcXfT8ZwMX_YHZps-rvs9bExx4Hg1ykCQpeEH72GwqA9_aXpiSxv79wL90dl5HnLyLFswQa6Q5mzXLKDaxnpFen_PeoJprLUR9Hfon7xBR01JLUTtwaLHlaFGTF7JcFzEwiRHylsJib5m_LF3ZyDTgHBAXXRxF5Qwq3FHsJO6XCwnmTc7UAeBm7P-qMf_3jPZZIrrXGMq52S-j_OAItHHB-A1r0fE9Orx3bog/hls/index.m3u8'
      },
      {
        id: 'stream-2',
        label: 'Stream 2',
        streamUrl: ''
      },
      {
        id: 'stream-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
  {
    id: 'ch-sport-´21',
    name: 'RTL+ Event 8 HD',
    group: 'Sport',
    logo: 'RTL',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/RTL%2B_Logo_2021_weiss.png',
    streamUrl: 'https://mjkskdvpfpb1fbv.ngolpdkyoctjcddxshli469r.org/sunshine/IH3UmK1jRkQASJEIlAzFgO2VRYAOTjcZw6FU_dpT__YJutj8XHfziqZOv2lheiYBDuSfjeQBXKG_cvsSA5PPeVaH8HYpQEUqahqvqbdeR7GMBT0fmlsqwCHcpNUghWzGeIU9l_5bwLX3M9foLdXzoUIDBdgP32bv5ggh81Tfz5C_LASzCL9Y1Zp2_E05khHv2jT1rkJ9_i3iru1OQ4E_iyNjy8yx1s_AXyNLIzoyrcCnn8QncZLTXzN4R6WjtbEvdP0oxY-IWMqhwrr7eXsKKA/hls/index.m3u8',
    sources: [
      {
        id: 'stream-1',
        label: 'Stream 1',
        streamUrl: 'https://mjkskdvpfpb1fbv.ngolpdkyoctjcddxshli469r.org/sunshine/IH3UmK1jRkQASJEIlAzFgO2VRYAOTjcZw6FU_dpT__YJutj8XHfziqZOv2lheiYBDuSfjeQBXKG_cvsSA5PPeVaH8HYpQEUqahqvqbdeR7GMBT0fmlsqwCHcpNUghWzGeIU9l_5bwLX3M9foLdXzoUIDBdgP32bv5ggh81Tfz5C_LASzCL9Y1Zp2_E05khHv2jT1rkJ9_i3iru1OQ4E_iyNjy8yx1s_AXyNLIzoyrcCnn8QncZLTXzN4R6WjtbEvdP0oxY-IWMqhwrr7eXsKKA/hls/index.m3u8'
      },
      {
        id: 'stream-2',
        label: 'Stream 2',
        streamUrl: ''
      },
      {
        id: 'ch-21-source-3',
        label: 'Stream 3',
        embed: ''
      }
    ],
    epg: [
      { start: '18:00', end: '18:30', title: 'Headlines' },
      { start: '18:30', end: '19:15', title: 'Markets & Tech' },
      { start: '19:15', end: '20:00', title: 'World Report' }
    ]
  },
],

// =========================================================
// FILME / MOVIES
// =========================================================
movies: [
  {
    id: 'movie-1',
    type: 'Film',
    title: 'Der Super Mario Galaxy Film',
    year: 2026,
    duration: '1h 37m',
    rating: '16+',
    quality: '4K',
    genre: ['Animation'],
    description: 'Die Brüder Mario und Luigi sowie Prinzessin Peach und Toad erleben ein neues Abenteuer. Geleitet von mysteriösen Sternkatapulten, reisen sie durch die Galaxie. Dabei landen sie auf verschiedenen Planeten, wo sie es mit einem neuen Gegner zu tun bekommen, aber auch auf neue Freunde treffen.',
    backdrop: 'https://static.spreeradio.de/img/7411/1622153/254000/Img_2_1/800/smf.webp',
    logo: 'https://www.universalpictures.at/tl_files/content/movies/super_mario_bros_2/posters/01.jpg',
    streamUrl: 'https://fsaf12.s1q2105.com/hls/rozDYqWlXpBe1weMVEqps0qcNu0MLPRG/master.m3u8?token=6233bcdf8c3834eaaf638dfe1acf411f-1775639057-2a02%3A8071%3A5cc1%3Acea0%3A40bf%3A1b32%3Af5a3%3A3b1b-b5830eac07b16c5853b4913a1c004ecbe65d4521bbff4ab55c5a107da5ec8990',

    sources: [
      {
        id: 'movie-1-stream-1',
        label: 'Stream 1',
        streamUrl: 'https://ugc-cdn-caching-n3dvifdwlponu03jbm.cloudwindow-route.com/engine/hls2-c/01/16906/2rdl2alrjleu_,n,.urlset/index-v1-a1.m3u8?t=fkk9wlHErb67XFKgrJ969YWEtS0r9kh1VpvPQY266CY&s=1775669964&e=14400&f=84534139&node=kffQiIiLL3t5HEaCXmpbOHfVR/lt4JGbBRkc471ieNY=&i=92.208&sp=2500&asn=3209&q=n&rq=c1axQeIFv6mFjhDyoIt3WrV3qezGjaroQBI1d4vn'
      },
      {
        id: 'movie-1-stream-2',
        label: 'Stream 2',
        streamUrl: 'https://fs-4e3c7c.vincdn.net/stream/v2jdrwjqbdjx10/sYLiQSSb3isnt5jj2adzig/1775691706'
      },
      {
        id: 'movie-1-stream-3',
        label: 'Stream 3',
        streamUrl: ''
      }
    ]
  },
  {
    id: 'movie-2',
    type: 'Film',
    title: 'Hoppers',
    year: 2026,
    duration: '1h 45m',
    rating: '6+',
    quality: 'HD',
    genre: ['Animation'],
    description: 'Das findet man am besten heraus, wenn man selbst zum Tier wird. Tierfreundin Mabel hat als Biber äußerst überraschende Erkenntnisse. Aber anstatt sich an die Regeln zu halten, stellt sie die natürliche Ordnung völlig auf den Kopf und zettelt einen tierischen Aufstand an. Und das nur, weil sie unbedingt den Teich retten will.',
    backdrop: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/27cda596-b160-4562-a788-ef81c3f88971/compose?format=webp',
    logo: 'https://kkiste-io.skin/uploads/thumb/271x408-0-75/2026-03/1774530696_np3omywggljnv5v1oqsmuso6ytd.jpg',
    streamUrl: 'https://ugc-cdn-caching-n3pb6objkklpruixuv.cloudwindow-route.com/engine/hls2-c/01/16840/hbj4xouh9czl_,n,.urlset/master.m3u8?t=AIYtS-JYXcDqbVRufol8bC5Zz4rRukU_4m_kfBMhrhc&s=1775671454&e=14400&f=84202930&node=8xQmhgdmyZbNdL+vNOSUbnqqVR6Y+BCfiTNwwVyvyyY=&i=92.208&sp=2500&asn=3209&q=n&rq=c1axQeIFv6mFjhDyoIt3WrV3qezGjaroQBI1d4vn',

    sources: [
      {
        id: 'movie-2-stream-1',
        label: 'Stream 1',
        streamUrl: 'https://ugc-cdn-caching-n3pb6objkklpruixuv.cloudwindow-route.com/engine/hls2-c/01/16840/hbj4xouh9czl_,n,.urlset/master.m3u8?t=AIYtS-JYXcDqbVRufol8bC5Zz4rRukU_4m_kfBMhrhc&s=1775671454&e=14400&f=84202930&node=8xQmhgdmyZbNdL+vNOSUbnqqVR6Y+BCfiTNwwVyvyyY=&i=92.208&sp=2500&asn=3209&q=n&rq=c1axQeIFv6mFjhDyoIt3WrV3qezGjaroQBI1d4vn'
      },
      {
        id: 'movie-2-stream-2',
        label: 'Stream 2',
        streamUrl: 'https://ds588ora.cloudatacdn.com/u5kj7qtmgxa3sdgge67kipq3d7pl5bosjpwiwwa27gw7ksggzhuqil3ufjsq/via8dcv19n~oTtsfU0cG1?token=if3bo15j0h9xjxd2tbsm0hoq&expiry=1775671548132'
      },
      {
        id: 'movie-2-stream-3',
        label: 'Stream 3',
        streamUrl: 'https://fs-e6b287.vincdn.net/stream/kgvw6q2jf3o288/Yq1lJq4nLmFXvCpof0ridw/1775693113'
      }
    ]
  },
  {
    id: 'movie-3',
    type: 'Film',
    title: 'Peaky Blinders: The Immortal Man',
    year: 2026,
    duration: '1h 52m',
    rating: '12+',
    quality: '4K',
    genre: ['Mystery'],
    description: 'Im Birmingham der 1940er-Jahre herrscht Krieg und die Spannungen im Land wachsen. Tommy Shelby lebt im Exil und hat versucht, seine Vergangenheit hinter sich zu lassen. Doch als das Wohl seiner Familie und seines Landes bedroht wird, bleibt ihm keine Wahl mehr. Alte Geister holen ihn ein, und die Verantwortung, der er entkommen wollte, wartet erneut auf ihn. Nun muss er sich entscheiden, ob er sich seinem Erbe stellen oder es endgültig zerstören will.',
    backdrop: 'https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYbgdzjUUThqG93YDrGpnsS7Sbv4zVLQh1NeUFY30D102ROMqiCeZRds5zDbmywtfVSpwZ-OQYaT7JpD0itTrV6KiPBDl2v-y0br.jpg',
    logo: 'https://image.tmdb.org/t/p/w500/1BV17mGhdcQJyKBdRf4MApNuMKu.jpg',
    streamUrl: 'https://a61.filevideo1.com/remote_control.php?time=1775669381&cv=6ab704bacbcd7bda530e8a02372d61f0&lr=0&cv2=16bf03151c47dc8aa0349b1e4772ee4d&file=%2Fvideos%2F981000%2F981162%2F981162_360p.mp4&cv3=2d8ee1a66c0ca6ce75d84c67a50a70e9&cv4=b8e106533bd78951e85f7e87fa325db2',

    sources: [
      {
        id: 'movie-3-stream-1',
        label: 'Stream 1',
        streamUrl: 'https://ugc-cdn-caching-n3e4srqqyuolvqfr5r.cloudwindow-route.com/engine/hls2/01/16790/noxeh59ec5jv_,n,.urlset/master.m3u8?t=bcaf4RqUmrGoNDsLgBAF1b3IizXOp5dw81oLsiBSxLI&s=1775653121&e=14400&f=83950866&node=Y0KHGfl9QQsG/hnJQy4YMlg5PipBN8Q9+7i/ywA/hFo=&i=92.208&sp=2500&asn=3209&q=n&rq=CzeF4301Oh7mBFRx9f2z0fMQwpTQULE6yGNQrnEU'
      },
      {
        id: 'movie-3-stream-2',
        label: 'Stream 2',
        streamUrl: 'https://ugc-cdn-caching-n3e4srqqyuolvqfr5r.cloudwindow-route.com/engine/hls2/01/16790/noxeh59ec5jv_,n,.urlset/master.m3u8?t=bcaf4RqUmrGoNDsLgBAF1b3IizXOp5dw81oLsiBSxLI&s=1775653121&e=14400&f=83950866&node=Y0KHGfl9QQsG/hnJQy4YMlg5PipBN8Q9+7i/ywA/hFo=&i=92.208&sp=2500&asn=3209&q=n&rq=CzeF4301Oh7mBFRx9f2z0fMQwpTQULE6yGNQrnEU'
      },
      {
        id: 'movie-3-stream-3',
        label: 'Stream 3',
        streamUrl: 'https://a61.filevideo1.com/remote_control.php?time=1775669381&cv=6ab704bacbcd7bda530e8a02372d61f0&lr=0&cv2=16bf03151c47dc8aa0349b1e4772ee4d&file=%2Fvideos%2F981000%2F981162%2F981162_360p.mp4&cv3=2d8ee1a66c0ca6ce75d84c67a50a70e9&cv4=b8e106533bd78951e85f7e87fa325db2'
      }
    ]
  },
  {
    id: 'movie-4',
    type: 'Film',
    title: 'The Astronaut',
    year: 2026,
    duration: '1h 31m',
    rating: '12+',
    quality: '4K',
    genre: ['Thriller'],
    description: 'Nachdem sie von ihrer ersten Weltraummission zurückgekehrt ist, wird die Astronautin Sam Walker von der NASA in einem Hochsicherheits-Haus untergebracht, um rehabilitiert und medizinisch untersucht zu werden. Doch als auf dem Gelände zunehmend beunruhigende Ereignisse auftreten, fürchtet sie, dass etwas Außerirdisches ihr zurück zur Erde gefolgt sein könnte.',
    backdrop: 'https://images.justwatch.com/backdrop/337315217/s640/the-astronaut.jpg',
    logo: 'https://kkiste-io.skin/uploads/thumb/271x408-0-75/2025-12/1766846506_souvvkjhyhztc1uqz8levuija3j.jpg',
    streamUrl: 'https://ll1088fn.cloudatacdn.com/u5kjwx75jhalsdgge7pnsz2gde43j74rwqacr6ic4wu6hvtqyu5n7qjqm2wa/axmpvtoi7p~pMPAFlveK7?token=46rjaa7kucosoa524iraktsg&expiry=1775673070604',

    sources: [
      {
        id: 'movie-4-stream-1',
        label: 'Stream 1',
        streamUrl: 'https://ll1088fn.cloudatacdn.com/u5kjwx75jhalsdgge7pnsz2gde43j74rwqacr6ic4wu6hvtqyu5n7qjqm2wa/axmpvtoi7p~pMPAFlveK7?token=46rjaa7kucosoa524iraktsg&expiry=1775673070604'
      },
      {
        id: 'movie-4-stream-2',
        label: 'Stream 2',
        streamUrl: 'https://ugc-cdn-caching-n3tczjg8qagalxt0nj.cloudwindow-route.com/engine/hls2/01/16162/fopb3tyqgwke_,n,.urlset/master.m3u8?t=KvqCsJFpMMVmW9zsp9lGOy49eNJvcYZUT7urTdXHyoA&s=1775673000&e=14400&f=80813868&node=GhhTsFpyNIoz/TVji6YKjEzbfSQoHQXt2hdPpd4I9fQ=&i=92.208&sp=2500&asn=3209&q=n&rq=c1axQeIFv6mFjhDyoIt3WrV3qezGjaroQBI1d4vn'
      },
      {
        id: 'movie-4-stream-3',
        label: 'Stream 3',
        streamUrl: 'https://2r90j1fn28.s1q2105.com/hls2/mGid5KBp5aQhSrKfJkHoWRcz4IhXuz/index_1920x1080.m3u8'
      }
    ]
  },
  {
    id: 'movie-5',
    type: 'Film',
    title: 'Troll 2',
    year: 2025,
    duration: '1h 45m',
    rating: '12+',
    quality: '4K',
    genre: ['Fantasy'],
    description: 'Als ein mächtiger Troll erwacht, gerät Norwegen ins Chaos. Nora (Ine Marie Wilmann), Andreas (Kim Falck) und Kapitän Kris (Mads Sjøgård Pettersen) stehen vor ihrer bislang gefährlichsten Mission. Um die zerstörerische Kreatur aufzuhalten, müssen sie neue Verbündete gewinnen, mächtige Waffen finden und tief in die alte norwegische Geschichte eintauchen. Doch können sie die gewaltigen Herausforderungen meistern, bevor ihr Land ins Verderben stürzt?',
    backdrop: 'https://www.heavenofhorror.com/wp-content/uploads/2025/12/Troll-2-Netflix-Sequel-Review.jpg',
    logo: 'https://kkiste-io.skin/uploads/thumb/271x408-0-75/2025-12/1764589808_8s5hofbmjiehubwa8cpae05p9hx.jpg',
    streamUrl: 'https://ugc-cdn-caching-n3yrhohklc10mfxrgy.cloudwindow-route.com/engine/hls2/01/16007/gyugusvdhe6s_,n,.urlset/master.m3u8?t=hReqnyWSgB5YN2YKMard6AZzPpgQzMZaktBGFZWLchE&s=1775672727&e=14400&f=80038527&node=9/YfUrcSSltRxRudPemYIkc9gzkqTBAOOy6oaT96arE=&i=92.208&sp=2500&asn=3209&q=n&rq=c1axQeIFv6mFjhDyoIt3WrV3qezGjaroQBI1d4vn',

    sources: [
      {
        id: 'movie-5-stream-1',
        label: 'Stream 1',
        streamUrl: 'https://ugc-cdn-caching-n3yrhohklc10mfxrgy.cloudwindow-route.com/engine/hls2/01/16007/gyugusvdhe6s_,n,.urlset/master.m3u8?t=hReqnyWSgB5YN2YKMard6AZzPpgQzMZaktBGFZWLchE&s=1775672727&e=14400&f=80038527&node=9/YfUrcSSltRxRudPemYIkc9gzkqTBAOOy6oaT96arE=&i=92.208&sp=2500&asn=3209&q=n&rq=c1axQeIFv6mFjhDyoIt3WrV3qezGjaroQBI1d4vn'
      },
      {
        id: 'movie-5-stream-2',
        label: 'Stream 2',
        streamUrl: 'https://ugc-cdn-caching-n3yrhohklc10mfxrgy.cloudwindow-route.com/engine/hls2/01/16007/gyugusvdhe6s_,n,.urlset/master.m3u8?t=hReqnyWSgB5YN2YKMard6AZzPpgQzMZaktBGFZWLchE&s=1775672727&e=14400&f=80038527&node=9/YfUrcSSltRxRudPemYIkc9gzkqTBAOOy6oaT96arE=&i=92.208&sp=2500&asn=3209&q=n&rq=c1axQeIFv6mFjhDyoIt3WrV3qezGjaroQBI1d4vn'
      },
      {
        id: 'movie-5-stream-3',
        label: 'Stream 3',
        streamUrl: 'https://fs-972f29.vincdn.net/stream/19200y1vcjdg18/NjNmAfMBiO_2L4SUndHwbQ/1775694429'
      }
    ]
  },
  {
        id: 'movie-6',
        type: 'Film',
        title: 'Interstellar',
        year: 2025,
        duration: '2h 49m',
        rating: '12+',
        quality: '4K',
        genre: ['Top 100'],
        description: 'Was Wissenschaftler, Politiker und Aktivisten seit Jahrzehnten prophezeien, ist eingetreten: Die Menschheit steht kurz davor, an einer globalen Nahrungsknappheit zugrunde zu gehen. Die einzige Hoffnung der Weltbevölkerung besteht in einem geheimen Projekt der US-Regierung, das von dem findigen Wissenschaftler Professor Brand (Michael Caine) geleitet wird. Der Plan sieht vor, eine Expedition in ein anderes Sternensystem zu starten, wo bewohnbare Planeten, Rohstoffe und vor allem Leben vermutet werden.',
        backdrop: 'https://spoilertown.com/wp-content/uploads/2024/06/interstellar-2014.webp',
        logo: 'https://m.media-amazon.com/images/S/pv-target-images/fbda21db28ee35da67f28b4ab5d234c5a5a5d8e33c2f0aae106ba583a6aa44ab._SX780_.jpg',
        streamUrl: 'https://fs-3c4bde.vincdn.net/stream/7q9ddok6cr993k/8TP2X-R8cDhBEtEYm9Z4DA/1775693643',

        sources: [
            {
                id: 'movie-6-stream-1',
                label: 'Stream 1',
                streamUrl: 'https://fs-3c4bde.vincdn.net/stream/7q9ddok6cr993k/8TP2X-R8cDhBEtEYm9Z4DA/1775693643'
            },
            {
                id: 'movie-6-stream-2',
                label: 'Stream 2',
                streamUrl: 'https://ugc-cdn-caching-n3tlrb1vs6yeporajd.cloudwindow-route.com/engine/hls2/01/16047/v2dlebkmk4uo_,n,.urlset/index-v1-a1.m3u8?t=MM1nswXfc8z_GfKoPdBK7OoIPwZXoPA9xTWVQ5L7YBc&s=1775672000&e=14400&f=80238669&node=vQNYzBgoOUWQaNyCrwxJhQY3K9HJDDAMOj7kOzOhD9s=&i=92.208&sp=2500&asn=3209&q=n&rq=c1axQeIFv6mFjhDyoIt3WrV3qezGjaroQBI1d4vn'
            },
            {
                id: 'movie-6-stream-3',
                label: 'Stream 3',
                streamUrl: ''
            }
        ]
    }
],

    // =========================================================
    // SERIEN / SERIES
    // =========================================================
  series: [
{
  id: 'series-1',
  type: 'Serie',
  title: 'Messiah',
  year: 2020,
  seasons: 1,
  episodes: 10,
  rating: '12+',
  quality: '4K',
  genre: ['Drama', 'Action'],
  description: 'In „Messiah - Die sieben Zeichen“ taucht ein Mann auf, der eine Schar von Menschen auf seine Seite zieht. Sie alle verbreiten ihre Überzeugung: Er ist der Messias! Handelt es sich tatsächlich um einen Gottgesandten oder doch eher um einen Betrüger, der die geopolitische Weltordnung durcheinanderbringen möchte? Wie reagiert die Gesellschaft auf den vermeintlichen Messias? Wie gehen die Medien mit den Behauptungen um? Was, wenn sie wahr sind?.',
  backdrop: 'https://etosmedia.de/wp-content/uploads/2020/06/netflix-700x.jpg',
  logo: 'http://186.2.175.5/media/images/channel/desktop/messiah-2p8b0u14?format=avif',
  streamUrl: 'https://ugc-cdn-caching-n3wkgtlrbhjc1mxcjt.cloudwindow-route.com/engine/hls2/01/00169/wsx8ufqfdcl4_,n,.urlset/index-v1-a1.m3u8?t=sYhOMFEiuHQusy9w16oMOkNQWal_iJuxe0U-fe8QgsI&s=1775612178&e=14400&f=4397488&node=bAtMdGZGqUDwL5VVe4d0gdh3Sp+fJM1VA67mUn2vrz0=&i=92.208&sp=2500&asn=3209&q=n&rq=PNs6ffWhp28iyMoApkPANZYIHnkjTEFrXkoHaT72',

  seasonData: [
    {
      season: 1,
      episodes: [
        {
          title: 'Messiah – Episode 1',
          description: 'Staffel 1, Folge 1',
          duration: '24m',
          thumbnail: 'https://m.media-amazon.com/images/M/MV5BNDg5YjllYTQtZWY0NC00MmY4LThmMGItMTJjZTY3YjY5NjQ1XkEyXkFqcGc@._V1_QL75_UY563_CR72,0,1000,563_.jpg',
          streamUrl: 'https://ugc-cdn-caching-n3wkgtlrbhjc1mxcjt.cloudwindow-route.com/engine/hls2/01/00169/wsx8ufqfdcl4_,n,.urlset/index-v1-a1.m3u8?t=sYhOMFEiuHQusy9w16oMOkNQWal_iJuxe0U-fe8QgsI&s=1775612178&e=14400&f=4397488&node=bAtMdGZGqUDwL5VVe4d0gdh3Sp+fJM1VA67mUn2vrz0=&i=92.208&sp=2500&asn=3209&q=n&rq=PNs6ffWhp28iyMoApkPANZYIHnkjTEFrXkoHaT72'
        },
        {
          title: 'Messiah – Episode 2',
          description: 'Staffel 1, Folge 2',
          duration: '24m',
          thumbnail: 'https://m.media-amazon.com/images/M/MV5BOTllZDA3OWYtNWQ1Yi00OGY3LTgxY2QtODMxZGM5MDhmOGExXkEyXkFqcGc@._V1_QL75_UY563_CR67,0,1000,563_.jpg',
          streamUrl: 'https://ugc-cdn-caching-n3cpjlg1yzjzxk8qnq.cloudwindow-route.com/engine/hls2/01/00169/mcvwfffo1v7t_,n,.urlset/index-v1-a1.m3u8?t=3VDZq684Ad8Nmk_psjFgMu2hwrJzXvw0uPtpgvKj5jk&s=1775612208&e=14400&f=4397486&node=YM8ryRuslUo6jpp1CYW90UlU2A0JmuKOHWDGl2tyb2U=&i=92.208&sp=2500&asn=3209&q=n&rq=PNs6ffWhp28iyMoApkPANZYIHnkjTEFrXkoHaT72'
        },
        {
          title: 'Messiah – Episode 3',
          description: 'Staffel 1, Folge 3',
          duration: '24m',
          thumbnail: 'https://m.media-amazon.com/images/M/MV5BNjdmZmVmMzUtNjc2MS00YWZkLTg4MDctYjM5NGIzMzM0MGJjXkEyXkFqcGc@._V1_QL75_UY563_CR72,0,1000,563_.jpg',
          streamUrl: 'https://ugc-cdn-caching-n3s9axncnqpmolwhjf.cloudwindow-route.com/engine/hls2/01/00169/82py6yskzs0i_,n,.urlset/index-v1-a1.m3u8?t=tFJC2YS3bCY8T0oZ0Vf6JcFeNllAvFGByfr8--6qA1s&s=1775612222&e=14400&f=4397492&node=BCeQachLSBhn9CjtJ8a5NmjiOwQOySRQZJFN9sWfb0k=&i=92.208&sp=2500&asn=3209&q=n&rq=PNs6ffWhp28iyMoApkPANZYIHnkjTEFrXkoHaT72'
        },
        {
          title: 'Messiah – Episode 4',
          description: 'Staffel 1, Folge 4',
          duration: '24m',
          thumbnail: 'https://m.media-amazon.com/images/M/MV5BZDJhYzk3MjctMGZiMC00OGIyLWJlN2YtMjJiMDQyYzRkODkxXkEyXkFqcGc@._V1_QL75_UY563_CR1,0,1000,563_.jpg',
          streamUrl: 'https://ugc-cdn-caching-n37iwvgty8fuaq18it.cloudwindow-route.com/engine/hls2/01/00169/wz72qpvfbm5r_,n,.urlset/index-v1-a1.m3u8?t=HHA8nNgqyYudjMLYqR763s4DF7FEWbD2uufBCRuxYuE&s=1775612266&e=14400&f=4397491&node=Wa7JgGxtft18u0Nam640/D9VTrZiKv11TFM8tS0Z2iw=&i=92.208&sp=2500&asn=3209&q=n&rq=PNs6ffWhp28iyMoApkPANZYIHnkjTEFrXkoHaT72'
        },
        {
          title: 'Messiah – Episode 5',
          description: 'Staffel 1, Folge 5',
          duration: '24m',
          thumbnail: 'https://m.media-amazon.com/images/M/MV5BOGUxYTY3NzgtY2M0My00ZjVlLWI4NzktYTQ1YjNlNjNiMGM0XkEyXkFqcGc@._V1_QL75_UY563_CR61,0,1000,563_.jpg',
          streamUrl: 'https://ugc-cdn-caching-n3mu6fsuds3zuz3fgi.cloudwindow-route.com/engine/hls2/01/00169/nfa44u04qa01_,n,.urlset/index-v1-a1.m3u8?t=ix3SB_byXkyaPq5FqMeDlkmphpwvo5BfiVm00w_QIsU&s=1775612278&e=14400&f=4397498&node=vuFLRSYjrRRq/YGQUC8lKJ7J/rNptrhb08gIC4qNiVg=&i=92.208&sp=2500&asn=3209&q=n&rq=PNs6ffWhp28iyMoApkPANZYIHnkjTEFrXkoHaT72'
        },
        {
          title: 'Messiah – Episode 6',
          description: 'Staffel 1, Folge 6',
          duration: '24m',
          thumbnail: 'https://m.media-amazon.com/images/M/MV5BNjQ5ZWIxMjYtMGYxOC00ODU5LWJlNmMtMTUzYTZiOGYzYjFkXkEyXkFqcGc@._V1_QL75_UY563_CR66,0,1000,563_.jpg',
          streamUrl: 'https://ugc-cdn-caching-n3s9axncnqpmolwhjf.cloudwindow-route.com/engine/hls2/01/00169/stgpblng3bbh_,n,.urlset/index-v1-a1.m3u8?t=QkhoyA5YPBSq3gkq4Hb-F6J_WIp0lsGGNSgit7OFjqA&s=1775612291&e=14400&f=4397499&node=BCeQachLSBhn9CjtJ8a5NmjiOwQOySRQZJFN9sWfb0k=&i=92.208&sp=2500&asn=3209&q=n&rq=PNs6ffWhp28iyMoApkPANZYIHnkjTEFrXkoHaT72'
        },
        {
          title: 'Messiah – Episode 7',
          description: 'Staffel 1, Folge 7',
          duration: '24m',
          thumbnail: 'https://m.media-amazon.com/images/M/MV5BNjE3ZjAwMDQtYTRiNy00YzVhLWJkMDktOThiNWMyNjA5ODA2XkEyXkFqcGc@._V1_QL75_UY563_CR64,0,1000,563_.jpg',
          streamUrl: 'https://ugc-cdn-caching-n3lkvxgheee2fzfh03.cloudwindow-route.com/engine/hls2/01/00169/6i71cwq4evxz_,n,.urlset/index-v1-a1.m3u8?t=IsIvoq8ZyXNnEbVOgd7Jcdi07cEKLNPbUdr8RJGEmng&s=1775612306&e=14400&f=4397501&node=n8EHxmjUCaQI0GMbkyuEnOHLVaFEQYXrRRHc++IWY5Q=&i=92.208&sp=2500&asn=3209&q=n&rq=PNs6ffWhp28iyMoApkPANZYIHnkjTEFrXkoHaT72'
        },
        {
          title: 'Messiah – Episode 8',
          description: 'Staffel 1, Folge 8',
          duration: '24m',
          thumbnail: 'https://m.media-amazon.com/images/M/MV5BNWQ3NGNmYTUtYmE1OC00MDNhLTg5NmUtNDQ0ZjNmYTY4YzM4XkEyXkFqcGc@._V1_QL75_UY563_CR52,0,1000,563_.jpg',
          streamUrl: 'https://ugc-cdn-caching-n3z2a1mubxmjkn3ttc.cloudwindow-route.com/engine/hls2/01/00169/we427hbdc7h4_,n,.urlset/index-v1-a1.m3u8?t=xxCzBj9z71NCV5MXKoJwgGEtiYhth6f3SuZ2XepDxY0&s=1775612321&e=14400&f=4397497&node=ZRZ0K3iT4dJ85562a73rCEzGUukeH4sE88b4z/MvRGc=&i=92.208&sp=2500&asn=3209&q=n&rq=PNs6ffWhp28iyMoApkPANZYIHnkjTEFrXkoHaT72'
        },
        {
          title: 'Messiah – Episode 9',
          description: 'Staffel 1, Folge 9',
          duration: '24m',
          thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTE1ZjQxZWEtZTdiNi00NmM2LWE4MTUtMTJiZDI2Y2I3OTMxXkEyXkFqcGc@._V1_QL75_UY563_CR62,0,1000,563_.jpg',
          streamUrl: 'https://ugc-cdn-caching-n3ryktnah4snzsmsft.cloudwindow-route.com/engine/hls2/01/00169/zg6oug254cid_,n,.urlset/index-v1-a1.m3u8?t=LpXHT-STVA4PAeDTDnAANHJP-NPKF99OG-aHfaE161E&s=1775612336&e=14400&f=4397529&node=ANdqgg+j29wtM0uEp2t6GABqJPI8mH/5D4oCOUoEDAo=&i=92.208&sp=2500&asn=3209&q=n&rq=PNs6ffWhp28iyMoApkPANZYIHnkjTEFrXkoHaT72'
        },
        {
          title: 'Messiah – Episode 10',
          description: 'Staffel 1, Folge 10',
          duration: '24m',
          thumbnail: 'https://m.media-amazon.com/images/M/MV5BYzA4ZDk4Y2EtY2NjYy00OGVhLWIwM2MtM2Y1NjAxNDY3NDA3XkEyXkFqcGc@._V1_QL75_UX1000_CR0,11,1000,563_.jpg',
          streamUrl: 'https://ugc-cdn-caching-n3ryktnah4snzsmsft.cloudwindow-route.com/engine/hls2/01/00169/zg6oug254cid_,n,.urlset/index-v1-a1.m3u8?t=LpXHT-STVA4PAeDTDnAANHJP-NPKF99OG-aHfaE161E&s=1775612336&e=14400&f=4397529&node=ANdqgg+j29wtM0uEp2t6GABqJPI8mH/5D4oCOUoEDAo=&i=92.208&sp=2500&asn=3209&q=n&rq=PNs6ffWhp28iyMoApkPANZYIHnkjTEFrXkoHaT72'
        }
      ]
    }
  ]
},
    {
      id: 'series-2',
      type: 'Serie',
      title: 'The Blacklist',
      year: 2013-2023,
      seasons: 10,
      episodes: 8,
      rating: '16+',
      quality: 'HD',
      genre: ['Mystery', 'Thriler'],
      description: 'Raymond „Red“ Reddington ist ein ehemaliger amerikanischer Marineoffizier und einer der meistgesuchten Verbrecher der USA. Eines Tages stellt er sich in der FBI-Hauptzentrale in Washington, D.C. und bietet dem FBI an, bei der Suche nach Verbrechern und Terroristen zu helfen. Allerdings verlangt er, einzig mit der FBI-Agentin Elizabeth Keen verhandeln zu müssen, die vor kurzem erst aus Quantico zugezogen ist. Die Informationen, die er weitergibt, stammen von einer von ihm über Jahre angelegten Liste, der sogenannten „Blacklist“.',
      backdrop: 'http://186.2.175.5/media/images/channel/desktop/the-blacklist-6abbhlvn?format=avif',
      logo: 'http://186.2.175.5/media/images/channel/desktop/the-blacklist-6abbhlvn?format=avif',
      streamUrl: 'https://ugc-cdn-caching-n3jaeuw3ehedpghzva.cloudwindow-route.com/engine/hls2/01/00649/u5yvkt7ygpq1_,n,.urlset/index-v1-a1.m3u8?t=_Gzg1DIHqmbov_1WwdFMxg1isBJlwtHL3jawLBkiEZc&s=1775613353&e=14400&f=75650767&node=zGBu5D2v5eB3O/KB4a4xtvGvDbBUNXxDrrO4ga1VLgc=&i=92.208&sp=2500&asn=3209&q=n&rq=PNs6ffWhp28iyMoApkPANZYIHnkjTEFrXkoHaT72'
    },
    {
      id: 'series-3',
      type: 'Serie',
      title: 'Dear Killer Nannies',
      year: 2026,
      seasons: 1,
      episodes: 24,
      rating: '12+',
      quality: '4K',
      genre: ['Action', 'Drama'],
      description: 'Juampi, der Sohn von Pablo Escobar, hat eine atypische Kindheit und lebt umgeben von Auftragsmördern, die als seine Kindermädchen arbeiten. Er idealisiert seinen Vater, betrachtet ihn als Wohltäter, aber als er aufwächst, erfährt er, dass sein Vater tatsächlich ein Verbrecher ist. Im Laufe der Jahre wird er sich der Last seines Nachnamens stellen müssen und entscheiden müssen, ob er das Familienerbe fortsetzen oder ein neues Leben von Grund auf neu beginnen möchte.',
      backdrop: 'http://186.2.175.5/media/images/channel/desktop/j9WxyGBvzedJrTReqMp9BV1L9XMQcKUT-1775027940?format=avif',
      logo: 'http://186.2.175.5/media/images/channel/desktop/j9WxyGBvzedJrTReqMp9BV1L9XMQcKUT-1775027940?format=avif',
      streamUrl: 'https://ugc-cdn-caching-n3p3qosxlihxv3qtq0.cloudwindow-route.com/engine/hls2/01/16871/fnfpr8spn823_,n,.urlset/index-v1-a1.m3u8?t=8r2xpumT8_xcIzaVeiFWTzlpw-NhMJ9u7baI7zZp-FU&s=1775613612&e=14400&f=84358856&node=lxiKj63/2ULjVa8H1FYfU72ZxLdn02zeCTgM6pfU1O0=&i=92.208&sp=2500&asn=3209&q=n&rq=PNs6ffWhp28iyMoApkPANZYIHnkjTEFrXkoHaT72'
    }
  ]
};
