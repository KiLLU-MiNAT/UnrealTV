window.UNREAL_DATA = {
  accounts: [
    { username: 'Admin', password: '63450', avatar: 'assets/avatar-admin.svg', color: '#d62828' },
    { username: 'Amur', password: '63450', avatar: 'assets/avatar-amur.svg', color: '#2a9d8f' },
    { username: 'Aviano', password: '63450', avatar: 'assets/avatar-aviano.svg', color: '#577590' },
    { username: 'Alessia', password: '63450', avatar: 'assets/avatar-alessia.svg', color: '#b5179e' },
    { username: 'Volkan', password: '63450', avatar: 'assets/avatar-volkan.svg', color: '#f4a261' },
    { username: 'Gesu', password: '63450', avatar: 'assets/avatar-gesu.png', color: '#fc2be4' },
    { username: 'Mano', password: 'Anissa100', avatar: 'assets/avatar-mano.svg', color: '#6a4c93' },
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
    streamUrl: 'https://fsaf12.s1q2105.com/hls/rozDYqWlXpBe1weMVEqps0qcNu0MLPRG/master.m3u8?token=6233bcdf8c3834eaaf638dfe1acf411f-1775639057-2a02%3A8071%3A5cc1%3Acea0%3A40bf%3A1b32%3Af5a3%3A3b1b-b5830eac07b16c5853b4913a1c004ecbe65d4521bbff4ab55c5a107da5ec8990'
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
      streamUrl: 'https://fsaf12.s1q2105.com/hls/zV2wn7s0l3EFshiXnzljd9TrpZ3SM7xw/index_2586x1080.m3u8?token=af8b31553402390d90fbf57f0c9baf5b-1775639272-2a02%3A8071%3A5cc1%3Acea0%3A40bf%3A1b32%3Af5a3%3A3b1b-8c42bc6440cf269edc0e2a1b3732c32ad6a9cff39cdfe1c0d930d19f03150044',
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
      streamUrl: 'https://181rtfg1.s1q2105.com/hls/0t7rPIRFFoxXs8b6ocbPVqMWlDoJksfS/index_2378x1080.m3u8?token=599a5bf8b52d487e3042cfdd26d68d49-1775639354-2a02%3A8071%3A5cc1%3Acea0%3A40bf%3A1b32%3Af5a3%3A3b1b-2caec2b64a3f16d2fb07ad468ad8fab982f380b0da775d8ea8396461d1a6ff71'
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
      streamUrl: 'https://ugc-cdn-caching-n32q9szkwxe3xq5x6z.cloudwindow-route.com/engine/hls2/01/16154/uvpagomaw4hi_,n,.urlset/index-v1-a1.m3u8?t=X-rpcf1qdPjgubTCr0couNB3v09_UMgAAZc5oARzGjs&s=1775610775&e=14400&f=80772088&node=3XyL9ThD9+Y33uW0lP0558J3jB+pUeDNB2x/RukRShY=&i=92.208&sp=2500&asn=3209&q=n&rq=ly1MIphYYviNxjlDVLyYM86qr1vMtoep1toOhXll'
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
      streamUrl: 'https://ugc-cdn-caching-n3wiytxu35mq1nktzw.cloudwindow-route.com/engine/hls2/01/15952/zk7y7ktv7izs_,n,.urlset/index-v1-a1.m3u8?t=UbMsABg5mLbJEU-Q0CWF0pEAmGVKCYjrryqEMz2DQRE&s=1775610847&e=14400&f=79764271&node=J5VCNxAvP+5uhy5fz6YcfCbWnOO02P+Fhn8aluaxz/o=&i=92.208&sp=2500&asn=3209&q=n&rq=ly1MIphYYviNxjlDVLyYM86qr1vMtoep1toOhXll'
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
      title: 'Dear Killer Nannies: Grossgezogen von Mafia-Auftragskillern',
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
