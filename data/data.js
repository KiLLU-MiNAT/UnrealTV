window.UNREAL_DATA = {
  accounts: [
    { username: 'Admin', password: '63450', avatar: 'assets/avatar-admin.svg', color: '#d62828' },
    { username: 'Amur', password: '63450', avatar: 'assets/avatar-amur.svg', color: '#2a9d8f' },
    { username: 'Aviano', password: '63450', avatar: 'assets/avatar-aviano.svg', color: '#577590' },
    { username: 'Alessia', password: '63450', avatar: 'assets/avatar-alessia.svg', color: '#b5179e' },
    { username: 'Volkan', password: '63450', avatar: 'assets/avatar-volkan.svg', color: '#f4a261' },
    { username: 'Mano', password: '63450', avatar: 'assets/avatar-mano.svg', color: '#6a4c93' }
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
      streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
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
  epg: [
    { start: '18:00', end: '18:30', title: 'Headlines' },
    { start: '18:30', end: '19:15', title: 'Markets & Tech' },
    { start: '19:15', end: '20:00', title: 'World Report' }
  ]
},
{
  id: 'ch-custom-embed1',
  name: 'DAZN 1 HD',
  group: 'Sport',
  logo: 'EMB',
  logoUrl: 'https://epg.pw/media/images/epg/2024/12/16/20241216021430919637_94.png',
  sources: [
    {
      id: 'dazn1-source-1',
      label: 'Stream 1',
      embed: 'https://dlstreams.top/stream/stream-426.php'
    },
    {
      id: 'dazn1-source-2',
      label: 'Stream 2',
      embed: 'https://dlstreams.top/stream/stream-426.php?source=2'
    },
    {
      id: 'dazn1-source-3',
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

  sources: [
    {
      id: 'stream-1',
      label: 'Stream 1',
      embed: 'https://dlstreams.top/stream/stream-558.php'
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
}
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
    genre: ['Animation', 'Family'],
    description: 'Die Brüder Mario und Luigi sowie Prinzessin Peach und Toad erleben ein neues Abenteuer. Geleitet von mysteriösen Sternkatapulten, reisen sie durch die Galaxie. Dabei landen sie auf verschiedenen Planeten, wo sie es mit einem neuen Gegner zu tun bekommen, aber auch auf neue Freunde treffen.',
    backdrop: 'https://static.spreeradio.de/img/7411/1622153/254000/Img_2_1/800/smf.webp',
    logo: 'https://www.universalpictures.at/tl_files/content/movies/super_mario_bros_2/posters/01.jpg',
    streamUrl: 'https://cdn-skbjnxouspvjfe76.edgeon-bandwidth.com/engine/hls2-c/01/16904/ptla1bwufklo_,n,.urlset/index-v1-a1.m3u8?t=_t0FDl0SxpCh9exnNvw6Ar3uHUHd-aKGCS0zzEn2YHs&s=1775519809&e=14400&f=84520864&node=hg7PGsGVZYOY68f6mOhvXMWx8eV9vWM5f+Mfj7RSTc8=&i=95.223&sp=2500&asn=3209&q=n&rq=fW3aV1UcqS32n9edBMtB8FUjQiWrm5Y4eiLo2K5t'
  },
    {
      id: 'movie-2',
      type: 'Film',
      title: 'Hoppers',
      year: 2026,
      duration: '1h 45m',
      rating: '6+',
      quality: 'HD',
      genre: ['Animation', 'Family'],
      description: 'Das findet man am besten heraus, wenn man selbst zum Tier wird. Tierfreundin Mabel hat als Biber äußerst überraschende Erkenntnisse. Aber anstatt sich an die Regeln zu halten, stellt sie die natürliche Ordnung völlig auf den Kopf und zettelt einen tierischen Aufstand an. Und das nur, weil sie unbedingt den Teich retten will.',
      backdrop: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/27cda596-b160-4562-a788-ef81c3f88971/compose?format=webp',
      logo: 'https://kkiste-io.skin/uploads/thumb/271x408-0-75/2026-03/1774530696_np3omywggljnv5v1oqsmuso6ytd.jpg',
      streamUrl: 'https://cdn-utzguzfstc6qeiys.edgeon-bandwidth.com/engine/hls2-c/01/16839/gzxmx0xeg9tw_,n,.urlset/index-v1-a1.m3u8?t=yqdkJ88n5w7JKEBM_2xsIuNtazDRIGvFqyAFlPQfOUY&s=1775570089&e=14400&f=84198008&node=FvLLQmFLPprhIaaK7QxxW1GPH4U48RVkH2s8+1QkG/U=&i=95.223&sp=2500&asn=3209&q=n&rq=rTxQ0b7L5PI6dCbcXG2ILn4y7JbwFEy1s7jBGAjY',
    },
    {
      id: 'movie-3',
      type: 'Film',
      title: 'Peaky Blinders: The Immortal Man',
      year: 2026,
      duration: '1h 52m',
      rating: '12+',
      quality: '4K',
      genre: ['Adventure', 'Mystery'],
      description: 'Im Birmingham der 1940er-Jahre herrscht Krieg und die Spannungen im Land wachsen. Tommy Shelby lebt im Exil und hat versucht, seine Vergangenheit hinter sich zu lassen. Doch als das Wohl seiner Familie und seines Landes bedroht wird, bleibt ihm keine Wahl mehr. Alte Geister holen ihn ein, und die Verantwortung, der er entkommen wollte, wartet erneut auf ihn. Nun muss er sich entscheiden, ob er sich seinem Erbe stellen oder es endgültig zerstören will.',
      backdrop: 'https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYbgdzjUUThqG93YDrGpnsS7Sbv4zVLQh1NeUFY30D102ROMqiCeZRds5zDbmywtfVSpwZ-OQYaT7JpD0itTrV6KiPBDl2v-y0br.jpg',
      logo: 'https://kkiste-io.skin/uploads/thumb/271x408-0-75/2026-03/1774006048_79misxas5mp0yo2a3ln5yemymnw.jpg',
      streamUrl: 'https://cdn-kjx4wmys82vaf5ot.edgeon-bandwidth.com/engine/hls2-c/01/16154/uvpagomaw4hi_,n,.urlset/index-v1-a1.m3u8?t=V8q-xCjp_162rjNJF9Hs_LJjgrq8d9S8efuQ7DNMvRg&s=1775572215&e=14400&f=80772088&node=3XyL9ThD9+Y33uW0lP0558J3jB+pUeDNB2x/RukRShY=&i=95.223&sp=2500&asn=3209&q=n&rq=rTxQ0b7L5PI6dCbcXG2ILn4y7JbwFEy1s7jBGAjY'
    },
    {
      id: 'movie-4',
      type: 'Film',
      title: 'The Astronaut',
      year: 2026,
      duration: '1h 31m',
      rating: '12+',
      quality: '4K',
      genre: ['Thriller', 'Mystery'],
      description: 'Nachdem sie von ihrer ersten Weltraummission zurückgekehrt ist, wird die Astronautin Sam Walker von der NASA in einem Hochsicherheits-Haus untergebracht, um rehabilitiert und medizinisch untersucht zu werden. Doch als auf dem Gelände zunehmend beunruhigende Ereignisse auftreten, fürchtet sie, dass etwas Außerirdisches ihr zurück zur Erde gefolgt sein könnte.',
      backdrop: 'https://images.justwatch.com/backdrop/337315217/s640/the-astronaut.jpg',
      logo: 'https://kkiste-io.skin/uploads/thumb/271x408-0-75/2025-12/1766846506_souvvkjhyhztc1uqz8levuija3j.jpg',
      streamUrl: 'https://cdn-thliixidzdaessdj.edgeon-bandwidth.com/engine/hls2-c/01/16788/uazp7m8uyusm_,n,.urlset/index-v1-a1.m3u8?t=ZPqbW2AynpUVJI5FswJ1qMxeZHBJorXLSkwsKybeUJQ&s=1775571677&e=14400&f=83943700&node=pWqV+ZPoqtprtyEAwyk0jtcBRJ1E7KKdFvCtlEKJqAw=&i=95.223&sp=2500&asn=3209&q=n&rq=rTxQ0b7L5PI6dCbcXG2ILn4y7JbwFEy1s7jBGAjY'
    },
    {
      id: 'movie-5',
      type: 'Film',
      title: 'Troll 2',
      year: 2025,
      duration: '1h 45m',
      rating: '12+',
      quality: '4K',
      genre: ['Action', 'Fantasy'],
      description: 'Als ein mächtiger Troll erwacht, gerät Norwegen ins Chaos. Nora (Ine Marie Wilmann), Andreas (Kim Falck) und Kapitän Kris (Mads Sjøgård Pettersen) stehen vor ihrer bislang gefährlichsten Mission. Um die zerstörerische Kreatur aufzuhalten, müssen sie neue Verbündete gewinnen, mächtige Waffen finden und tief in die alte norwegische Geschichte eintauchen. Doch können sie die gewaltigen Herausforderungen meistern, bevor ihr Land ins Verderben stürzt?',
      backdrop: 'https://www.heavenofhorror.com/wp-content/uploads/2025/12/Troll-2-Netflix-Sequel-Review.jpg',
      logo: 'https://kkiste-io.skin/uploads/thumb/271x408-0-75/2025-12/1764589808_8s5hofbmjiehubwa8cpae05p9hx.jpg',
      streamUrl: 'https://cdn-wiytxu35mq1nktzw.edgeon-bandwidth.com/engine/hls2/01/15952/zk7y7ktv7izs_,n,.urlset/index-v1-a1.m3u8?t=tfxsVt5j9gTsLXpC_4RwdorY2OvimKiTan8WyX8ZY1I&s=1775573941&e=14400&f=79764271&node=J5VCNxAvP+5uhy5fz6YcfCbWnOO02P+Fhn8aluaxz/o=&i=95.223&sp=2500&asn=3209&q=n&rq=rTxQ0b7L5PI6dCbcXG2ILn4y7JbwFEy1s7jBGAjY'
    }
  ],

    // =========================================================
    // SERIEN / SERIES
    // =========================================================
  series: [
    {
      id: 'series-1',
      type: 'Serie',
      title: 'Neon District',
      year: 2026,
      seasons: 2,
      episodes: 16,
      rating: '16+',
      quality: '4K',
      genre: ['Cyberpunk', 'Action'],
      description: 'Platzhalter-Serie mit Metadaten, Tags und Detailansicht. Ideal, um später Staffeln, Episoden und externe Streams einzubinden.',
      backdrop: 'assets/series-1.svg',
      logo: 'assets/series-1.svg',
      streamUrl: ''
    },
    {
      id: 'series-2',
      type: 'Serie',
      title: 'Signal 9',
      year: 2025,
      seasons: 1,
      episodes: 8,
      rating: '12+',
      quality: 'HD',
      genre: ['Mystery', 'Drama'],
      description: 'Beispielhafte Serienkarte mit modernem Poster-Look und später austauschbaren Daten.',
      backdrop: 'assets/series-2.svg',
      logo: 'assets/series-2.svg',
      streamUrl: ''
    },
    {
      id: 'series-3',
      type: 'Serie',
      title: 'Afterglow Files',
      year: 2026,
      seasons: 3,
      episodes: 24,
      rating: '16+',
      quality: '4K',
      genre: ['Sci-Fi', 'Thriller'],
      description: 'Noch eine Serien-Vorlage, die du später durch eigene Titel ersetzen kannst.',
      backdrop: 'assets/series-3.svg',
      logo: 'assets/series-3.svg',
      streamUrl: ''
    }
  ]
};