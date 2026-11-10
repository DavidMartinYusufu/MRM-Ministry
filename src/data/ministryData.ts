export interface Pillar {
  number: number;
  title: string;
  description: string;
  scriptureRef?: string;
}

export interface HBISchool {
  id: string;
  name: string;
  focus: string;
  duration: string;
  summary: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  schedule: string;
  location: string;
  audience: string;
  description: string;
}

export interface AlbumTrack {
  trackNumber: number;
  title: string;
  duration: string;
  language: string;
  theme: string;
}

export const MINISTRY_INFO = {
  name: 'Majalisar Ruhu Mai Tsarki Outreach Ministries',
  alias: 'The Holy Ghost Parliament Nig.',
  shortCode: 'MRM',
  domain: 'mrm.com.ng',
  motto: 'Reconciliation and Transformation',
  mottoScripture: '2 Corinthians 5:18-19, Romans 12:1-2',
  description:
    'A Christian Youth inter-denominational outreach and Transformation Movement dedicated to awakening, discipleship, and kingdom impact.',
  mandate:
    'We have been chosen and sent by the Lord Jesus Christ as a family of love to this generation and beyond with a gospel outreach and transformation mandate, to transform every young person on our way into the image of Jesus Christ, opening them individually and collectively to the communion of the Holy Spirit.',
  vision: {
    title: 'Vision 20/2107',
    target: '100 Million Young People',
    timeline: 'Between now and 2107',
    text: 'Through our lifestyle and Gospel missions’ outreaches, we desire to see the Holy Spirit transforming the lives of 100 million young people into the image of Jesus Christ, beginning from the Hausa Fulani speaking communities of northern Nigeria to the entire Continent of Africa at large, between now and 2107.',
  },
  mission: {
    statement:
      'To Labor In Love, reaching out to the young people with The Gospel Of Jesus Christ through Rural/urban Outreach, Cross-Cultural Missions, discipleship, and skill acquisition; helping each one, to teach one, to reach one.',
    mottoWord: 'Each one, to teach one, to reach one.',
  },
  contacts: {
    phones: ['08061557035', '08072448718', '08085844858'],
    email: 'majalisa2050@gmail.com',
    address: 'Bauchi State, Northern Nigeria',
  },
};

export const MINISTRY_PILLARS: Pillar[] = [
  {
    number: 1,
    title: 'Grace of our Lord Jesus Christ',
    description: 'Grounding every youth in the unmerited favor, redemption, and righteousness found solely in Christ.',
  },
  {
    number: 2,
    title: 'Love of God',
    description: 'Manifesting God’s selfless agape love to broken, neglected, and searching souls across urban and rural borders.',
  },
  {
    number: 3,
    title: 'Communion of the Holy Spirit',
    description: 'Cultivating intimate fellowship, spiritual gifts, and sensitivity to the Spirit’s guidance in daily life.',
  },
  {
    number: 4,
    title: 'Rural/Urban Gospel Outreach',
    description: 'Aggressively carrying the light of the gospel to the unreached villages and energetic cities of Northern Nigeria.',
  },
  {
    number: 5,
    title: 'Biblical Discipleship',
    description: 'Rooting believers in sound doctrine, personal devotion, and life-on-life mentoring until Christ is formed.',
  },
  {
    number: 6,
    title: 'Intercessory Prayers',
    description: 'Maintaining a 24/7 spiritual watch, tearing down strongholds, and birthing national revival on our knees.',
  },
  {
    number: 7,
    title: 'Entrepreneurship',
    description: 'Equipping believers with practical vocational trades, self-reliance, and financial independence for kingdom advancement.',
  },
  {
    number: 8,
    title: 'Leadership Empowerment',
    description: 'Raising ethical, competent leaders for governance, church ministry, institutions, and civic community spheres.',
  },
  {
    number: 9,
    title: 'Community Development',
    description: 'Serving local settlements through clean water, basic educational aid, healthcare outreaches, and youth rehabilitation.',
  },
];

export const HBI_SCHOOLS: HBISchool[] = [
  {
    id: 'spirit',
    name: 'School of the Spirit',
    focus: 'Communion, spiritual discernment, and walking in the realm of the Holy Ghost.',
    duration: '6 Weeks',
    summary: 'A deep dive into personal intimacy with the Holy Spirit and supernatural living.',
  },
  {
    id: 'purpose',
    name: 'School of Purpose',
    focus: 'Discovery of divine blueprint, personal identity, and life assignment.',
    duration: '4 Weeks',
    summary: 'Aligning your gifts and passions with God’s eternal redemptive master plan.',
  },
  {
    id: 'ministry',
    name: 'School of Ministry',
    focus: 'Apostolic foundations, church planting, pulpit decorum, and spiritual fathering.',
    duration: '8 Weeks',
    summary: 'Equipping called servants with biblical ministerial ethics and organizational wisdom.',
  },
  {
    id: 'missions',
    name: 'School of Missions',
    focus: 'Cross-cultural evangelism, frontier missions, language mastery, and rural survival.',
    duration: '6 Weeks',
    summary: 'Field-ready training for reaching unreached Hausa-Fulani and African ethnic clusters.',
  },
  {
    id: 'warfare',
    name: 'School of Spiritual Warfare',
    focus: 'Territorial intercession, wrestling principalities, deliverance, and spiritual armor.',
    duration: '4 Weeks',
    summary: 'Biblically balanced authority in dismantling spiritual obstacles and territorial pacts.',
  },
  {
    id: 'leadership',
    name: 'School of Leadership',
    focus: 'Servant leadership, organizational capacity, integrity, and visionary mobilization.',
    duration: '6 Weeks',
    summary: 'Developing generational leaders who govern communities and institutions with righteousness.',
  },
  {
    id: 'prayer',
    name: 'School of Prayer',
    focus: 'The priestly altar, secret place dynamics, prophetic intercession, and fastings.',
    duration: '4 Weeks',
    summary: 'Birthing prayers of travail and sustained communion that alter national destinies.',
  },
  {
    id: 'marriage',
    name: 'School of Marriage',
    focus: 'Courtship, godly homes, emotional health, covenant fidelity, and family priesthood.',
    duration: '4 Weeks',
    summary: 'Building unshakeable Christian families that serve as godly sanctuaries and beacons.',
  },
  {
    id: 'grace',
    name: 'School of Grace',
    focus: 'New covenant theology, freedom from legalism, and reigning through righteousness.',
    duration: '4 Weeks',
    summary: 'Exposing religious performance and unlocking the empowering enablement of God’s grace.',
  },
  {
    id: 'wisdom',
    name: 'School of Wisdom',
    focus: 'Proverbial insight, tactical negotiation, emotional intelligence, and crisis decision-making.',
    duration: '4 Weeks',
    summary: 'Operating in the manifold wisdom of God for complex cultural, family, and vocational affairs.',
  },
  {
    id: 'prophecy',
    name: 'School of Prophecy',
    focus: 'Hearing God’s voice, prophetic stewardship, protocol of utterances, and discernment.',
    duration: '6 Weeks',
    summary: 'Testing, receiving, and communicating prophetic insight in humility and scriptural fidelity.',
  },
  {
    id: 'wealth',
    name: 'School of Wealth Creation',
    focus: 'Kingdom economics, ethical enterprise, capital accumulation, and generational stewardship.',
    duration: '6 Weeks',
    summary: 'Shattering poverty mindsets and mastering business fundamentals for ministry funding.',
  },
  {
    id: 'politics',
    name: 'School of Kingdom Politics',
    focus: 'Civic governance, legislative ethics, church-state engagement, and nation building.',
    duration: '6 Weeks',
    summary: 'Equipping righteous believers to enter the corridors of political influence without compromise.',
  },
];

export const MINISTRY_PROGRAMS: ProgramItem[] = [
  {
    id: 'apostolic-watch',
    title: 'Majalisa Apostolic Fire Night',
    schedule: 'Every Last Friday of the Month · 9:00 PM (WAT)',
    location: 'Main Parliament Sanctuary, Bauchi & Online Stream',
    audience: 'All Believers, Youth, and Kingdom Seekers',
    description:
      'All-night prayer vigil, prophetic declarations, spiritual impartation, and deep communion with the Holy Spirit.',
  },
  {
    id: 'discipleship-academy',
    title: 'Discipleship & Skill Academy',
    schedule: 'Weekly Saturdays · 10:00 AM - 1:00 PM',
    location: 'Outreach Centers across Bauchi South, Central & North',
    audience: 'Youths, Students & Artisans',
    description:
      'Hands-on vocational empowerment (solar installation, computer literacy, modern agribusiness, tailoring) coupled with systemic Bible study.',
  },
  {
    id: 'maidens-fellowship',
    title: 'The Maidens Circle (Daughters of the Altar)',
    schedule: 'Bi-Weekly Thursdays · 5:00 PM',
    location: 'MRM Fellowship Hall & Live Audio Stream',
    audience: 'Young Ladies, Sisters & Mothers in Israel',
    description:
      'Mentorship in feminine godliness, virtue, maternal prayer intercession, character development, and vocational independence.',
  },
  {
    id: 'priests-cohort',
    title: 'The Priests Gathering (Men of Valor)',
    schedule: 'Bi-Weekly Tuesdays · 6:00 PM',
    location: 'Upper Room Prayer Altar',
    audience: 'Young Men, Fathers & Ministerial Candidates',
    description:
      'Challenging men to spiritual priesthood, purity of thought, covenant accountability, and bold community leadership.',
  },
  {
    id: 'frontier-outreach',
    title: 'Frontier Hausa-Fulani Gospel Expedition',
    schedule: 'Quarterly Mission Weeks',
    location: 'Rural Villages & Border Communities across Bauchi',
    audience: 'Mission Teams & Local Communities',
    description:
      'Direct open-air preaching, showing the Jesus Film in indigenous tongues, free medical outreach, clothing distribution, and house-to-house visitation.',
  },
];

export const JUYA_NI_ALBUM = {
  title: 'Juya Ni',
  subtitle: 'The Apostolic Worship & Revival Album',
  meaning: 'Juya Ni is Hausa for "Transform Me / Turn Me Around"',
  releaseYear: '2025/2026',
  artist: 'Holy Ghost Parliament Worship Team & Apostle',
  description:
    'An anointed collection of indigenous revival songs, deep Hausa chantings of intercession, and contemporary apostolic anthems created to awaken hearts and ignite spiritual transformation across Northern Nigeria and the African continent.',
  tracks: [
    { trackNumber: 1, title: 'Juya Ni (Transform Me)', duration: '6:42', language: 'Hausa & English', theme: 'Personal surrender and Holy Spirit fire' },
    { trackNumber: 2, title: 'Majalisar Ruhu (The Spirit Parliament)', duration: '8:15', language: 'Hausa', theme: 'Communion of the saints and holy throne room intercession' },
    { trackNumber: 3, title: 'Ya Yesu Mai Iko (Jesus the Mighty)', duration: '5:28', language: 'Hausa', theme: 'Exaltation of Christ’s supremacy over all lands' },
    { trackNumber: 4, title: 'Kasar Bauchi Ta Yesu Ce (Bauchi Belongs to Jesus)', duration: '7:04', language: 'Hausa & English', theme: 'Territorial claim for light, peace and righteousness' },
    { trackNumber: 5, title: 'Altar of Fire', duration: '9:12', language: 'English & Tongues', theme: 'Priestly continuous night watch' },
    { trackNumber: 6, title: 'Reconciliation Song', duration: '5:50', language: 'Hausa & English', theme: '2 Corinthians 5:18 gospel mandate' },
    { trackNumber: 7, title: 'Zuciyata Ga Ka (My Heart is Yours)', duration: '6:35', language: 'Hausa', theme: 'Consecration and purity' },
  ],
};
