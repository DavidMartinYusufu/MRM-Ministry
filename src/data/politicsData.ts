export interface LGAData {
  id: string;
  name: string;
  headquarters: string;
  senatorialDistrict: 'Bauchi South' | 'Bauchi Central' | 'Bauchi North';
  numberOfWards: number;
  wards: string[];
  estimatedChristianPopulation: string;
  briefHistory: string;
  welcomeLine: string;
}

export interface SenatorialDistrictInfo {
  name: 'Bauchi South' | 'Bauchi Central' | 'Bauchi North';
  lgaCount: number;
  introduction: string;
  lgas: string[];
}

export const SENATORIAL_DISTRICTS: Record<string, SenatorialDistrictInfo> = {
  'Bauchi South': {
    name: 'Bauchi South',
    lgaCount: 7,
    introduction:
      'Bauchi South is the heartland of the Christian community in Bauchi State. It is the home of the Sayawa, Jarawa, Zaar, Dass and many other peoples, and it includes the state capital.',
    lgas: ['alkaleri', 'bauchi', 'bogoro', 'dass', 'kirfi', 'tafawa-balewa', 'toro'],
  },
  'Bauchi Central': {
    name: 'Bauchi Central',
    lgaCount: 6,
    introduction:
      'Bauchi Central is a land of ancient emirates, farming communities and fast-growing Christian fellowships. Believers here live as a minority in most places, which makes organised unity especially important.',
    lgas: ['dambam', 'darazo', 'ganjuwa', 'misau', 'ningi', 'warji'],
  },
  'Bauchi North': {
    name: 'Bauchi North',
    lgaCount: 7,
    introduction:
      "Bauchi North is the home of the Katagum and Jama'are emirates, great trading towns and wide farmland. Christians here are a small minority, and a united, well-organised voice is the greatest need.",
    lgas: ['gamawa', 'giade', 'itas-gadau', 'jamaare', 'katagum', 'shira', 'zaki'],
  },
};

export const BAUCHI_LGAS: LGAData[] = [
  // BAUCHI SOUTH (7)
  {
    id: 'alkaleri',
    name: 'Alkaleri',
    headquarters: 'Alkaleri',
    senatorialDistrict: 'Bauchi South',
    numberOfWards: 11,
    wards: [
      'Alkaleri',
      'Birin/Gigara/Yankari',
      'Dan Kungibar',
      'Futuk',
      'Gar',
      'Gwana/Mansur',
      'Gwaram',
      'Maimadi',
      'Pali',
      'Yalo',
      'Yuli/Lim',
    ],
    estimatedChristianPopulation: '7 to 10 percent, about 25,000 to 40,000',
    briefHistory:
      "Alkaleri is one of the largest LGAs in the state. It is the home of Yankari Game Reserve and the Wikki Warm Spring, one of Nigeria's best known tourist attractions. The Gongola River passes through its eastern part. Its peoples include Fulani, Duguri and others. It is also associated with the Kolmani River oil discovery.",
    welcomeLine:
      'Alkaleri, where nature, tourism and opportunity meet. Believers here are building a strong voice.',
  },
  {
    id: 'bauchi',
    name: 'Bauchi',
    headquarters: 'Bauchi city, the state capital',
    senatorialDistrict: 'Bauchi South',
    numberOfWards: 12,
    wards: [
      'Birshi/Miri',
      'Dandango/Yamrat',
      "Dan'iya Hardo",
      'Dawaki',
      'Galambi/Gwaskwaram',
      'Kangyare/Turwun',
      'Kundum/Durum',
      'Majidadi A',
      'Majidadi B',
      'Makama/Sarki Baki',
      'Mun/Munsal',
      'Zungur/Liman Katagum',
    ],
    estimatedChristianPopulation: '12 to 18 percent, about 90,000 to 160,000',
    briefHistory:
      'Bauchi was founded as a town in the early 1800s, during the jihad era, by Yakubu, who became the first Emir. The area was earlier called Yakoba. The 2006 census counted 493,810 people. The LGA covers about 3,687 square kilometres and has a large Fulani and Gerawa population alongside many other groups. It is the seat of government and a major education centre. It is home to Abubakar Tafawa Balewa University, the Federal Polytechnic Bauchi and Abubakar Tatari Ali Polytechnic. Many Christian communities from all over Nigeria live and worship in the city.',
    welcomeLine: 'Bauchi, the capital of our State and the centre of our Christian community.',
  },
  {
    id: 'bogoro',
    name: 'Bogoro',
    headquarters: 'Bogoro',
    senatorialDistrict: 'Bauchi South',
    numberOfWards: 10,
    wards: [
      'BOI A',
      'BOI B',
      'BOI C',
      'Bogoro A',
      'Bogoro B',
      'Bogoro C',
      'Bogoro D',
      'Lusa A',
      'Lusa B',
      'Lusa C',
    ],
    estimatedChristianPopulation: '75 to 85 percent, about 100,000 to 130,000',
    briefHistory:
      'Bogoro is one of the most strongly Christian LGAs in Bauchi State. It is the homeland of the Sayawa (Zaar) people, who speak Saya and keep a rich culture of farming and festivals. It covers about 894 square kilometres and had a 2006 census population of 84,215. The government has said publicly that it is working on a Zaar Sayawa chiefdom for the Christian communities of Bogoro and Tafawa Balewa.',
    welcomeLine:
      'Bogoro, a land of faith, culture and strong families. Our community leads the way.',
  },
  {
    id: 'dass',
    name: 'Dass',
    headquarters: 'Dass',
    senatorialDistrict: 'Bauchi South',
    numberOfWards: 10,
    wards: [
      'Bagel/Bajar',
      'Baraza',
      'Bundot',
      'Bununu Central',
      'Bununu South',
      'Dott',
      'Durr',
      'Polchi',
      'Wandi',
      'Zumbul/Lukshi',
    ],
    estimatedChristianPopulation: '30 to 40 percent, about 40,000 to 65,000',
    briefHistory:
      'Dass is a small but historic LGA of about 535 square kilometres, with a 2006 census population of 89,943. It is the seat of the Dass Emirate. Local history records that Islam was first resisted at the Dass frontier, in the Mbula battle at Jakiri in Dott ward. It later entered through Maleka, the father of Bilyaminu Othman, who became the first Emir of Dass. Its peoples include the Dass, Bagel, Zumbul, Wandi and Polchi, many of whom are Christians.',
    welcomeLine: 'Dass, a small land with a big history. Believers here stand on a proud heritage.',
  },
  {
    id: 'kirfi',
    name: 'Kirfi',
    headquarters: 'Kirfi',
    senatorialDistrict: 'Bauchi South',
    numberOfWards: 10,
    wards: [
      'Badara',
      'Bara',
      'Beni A',
      'Beni B',
      'Dewu Central',
      'Dewu East',
      'Kirfi',
      'Shango',
      'Tubule',
      'Wanka',
    ],
    estimatedChristianPopulation: '3 to 6 percent, about 8,000 to 18,000',
    briefHistory:
      'Kirfi lies in the eastern part of the state, where the Gongola River crosses its land. The area is home to the Bure, Hausa, Fulani and other groups. It is mainly an agricultural area with fishing and farming along the river.',
    welcomeLine:
      'Kirfi, where the river brings life. Our small but faithful community is growing in strength.',
  },
  {
    id: 'tafawa-balewa',
    name: 'Tafawa Balewa',
    headquarters: 'Bununu (some sources list Tafawa Balewa town)',
    senatorialDistrict: 'Bauchi South',
    numberOfWards: 11,
    wards: [
      'Ball',
      'Bula',
      'Bununu',
      'Dajin',
      'Dull',
      'Kardam A',
      'Kardam B',
      'Lere South',
      'Lere North',
      'Tapshin',
      'Wai',
    ],
    estimatedChristianPopulation: '40 to 50 percent, about 130,000 to 190,000',
    briefHistory:
      'This LGA is the birthplace of Sir Abubakar Tafawa Balewa, born in 1912 in the Tafawa Balewa area and later the first Prime Minister of Nigeria. It covers about 2,515 square kilometres and had a 2006 census population of 219,988. The Gongola River passes through it. It has a mix of Sayawa, Jarawa, Hausa and Fulani peoples, with a very large Christian community, especially in the Lere area.',
    welcomeLine:
      'Tafawa Balewa, the home of a statesman and a strong Christian family.',
  },
  {
    id: 'toro',
    name: 'Toro',
    headquarters: 'Toro',
    senatorialDistrict: 'Bauchi South',
    numberOfWards: 11,
    wards: [
      "Jama'a/Zaranda",
      'Lame',
      'Mara/Palama',
      'Rahama',
      'Rauta/Geji',
      'Ribina',
      'Tama',
      'Tilden Fulani',
      'Toro/Tulai',
      'Wonu',
      'Zalau/Rishi',
    ],
    estimatedChristianPopulation: '30 to 40 percent, about 130,000 to 230,000',
    briefHistory:
      'Toro is the largest LGA in the state by land area, at about 6,932 square kilometres, and one of the largest in Nigeria. The 2006 census counted 350,404 people. It has three districts, Toro, Jama’a and Lame, and the Bunga River crosses it. Its many peoples include the Jere, Panawa and Geji (Zaar clusters), as well as Fulani and Hausa. A large share of the people are Christians.',
    welcomeLine:
      'Toro, the giant of Bauchi. Wide land, many peoples and one strong Christian voice.',
  },

  // BAUCHI CENTRAL (6)
  {
    id: 'dambam',
    name: 'Dambam',
    headquarters: 'Dambam',
    senatorialDistrict: 'Bauchi Central',
    numberOfWards: 10,
    wards: [
      'Dagauda',
      'Dambam',
      'Gargawa',
      'Garuza',
      'Gurbana',
      'Jalam Central',
      'Jalam East',
      'Yame',
      'Yanda',
      'Zaura',
    ],
    estimatedChristianPopulation: '1 to 3 percent, about 3,000 to 9,000',
    briefHistory:
      'Dambam lies in the northern part of the central zone. It is an agricultural area of mostly Hausa and Fulani communities, with farming and livestock as the main occupations. The Christian community is small but active.',
    welcomeLine: 'Dambam, where a few faithful hearts are building a great witness.',
  },
  {
    id: 'darazo',
    name: 'Darazo',
    headquarters: 'Darazo',
    senatorialDistrict: 'Bauchi Central',
    numberOfWards: 11,
    wards: [
      'Darazo',
      'Gabarin',
      'Gabciyari',
      'Konkiyal',
      'Lago',
      'Lanzai',
      'Papa',
      'Sade',
      'Tauya',
      'Wahu',
      'Yautare',
    ],
    estimatedChristianPopulation: '2 to 4 percent, about 8,000 to 18,000',
    briefHistory:
      'Darazo is an old town in the eastern part of the central zone and the seat of the Darazo Emirate. Its people are mostly Fulani and Hausa, with other small communities. Farming and trading are the main occupations.',
    welcomeLine: 'Darazo, an ancient town with a growing Christian presence.',
  },
  {
    id: 'ganjuwa',
    name: 'Ganjuwa',
    headquarters: 'Kafin Madaki',
    senatorialDistrict: 'Bauchi Central',
    numberOfWards: 10,
    wards: [
      'Gungura',
      'Kafin Madaki',
      'Kariya',
      'Kubi East',
      'Kubi West',
      'Miya East',
      'Miya West',
      'Nasarawa South',
      'Nasarawa North',
      'Yali',
    ],
    estimatedChristianPopulation: '3 to 5 percent, about 10,000 to 20,000',
    briefHistory:
      'Ganjuwa covers about 5,059 square kilometres, one of the larger LGAs in the state. The 2006 census counted 280,468 people. It is home to the Miya people and to Fulani and Hausa communities. The land is good for farming.',
    welcomeLine: 'Ganjuwa, a land of rich soil and strong people. Every believer here counts.',
  },
  {
    id: 'misau',
    name: 'Misau',
    headquarters: 'Misau',
    senatorialDistrict: 'Bauchi Central',
    numberOfWards: 10,
    wards: [
      'Ajilin/Gugulin',
      'Beti',
      'Gwaram',
      'Hardawa',
      'Jarkasa',
      'Kukadi/Gundari',
      'Sarma/Akuyam',
      'Sirko',
      'Tofu',
      'Zadawa',
    ],
    estimatedChristianPopulation: '1 to 3 percent, about 5,000 to 15,000',
    briefHistory:
      'Misau is the seat of the Misau Emirate, one of the historic emirates of Bauchi State. Its people include Hausa, Fulani, Kanuri and Bolewa. Lake Maladumba supports farming and fishing in the area.',
    welcomeLine: 'Misau, an old emirate with a new generation of believers rising.',
  },
  {
    id: 'ningi',
    name: 'Ningi',
    headquarters: 'Ningi',
    senatorialDistrict: 'Bauchi Central',
    numberOfWards: 11,
    wards: [
      'Balma',
      'Bashe',
      'Burra/Kyata',
      'Dingis',
      'Jangu',
      'Kudu/Yamma',
      'Kurmi',
      'Nasaru',
      'Ningi',
      'Sama',
      'Tiffi/Guda',
    ],
    estimatedChristianPopulation: '3 to 5 percent, about 15,000 to 35,000',
    briefHistory:
      'Ningi is one of the largest and most populous LGAs in the state, covering about 4,625 square kilometres, with a 2006 census population of 387,192. The Ningi people are known in Nigerian history for resisting the Sokoto Caliphate in the 1800s and keeping their independence for a long time. Ningi is the seat of the Ningi Emirate and has several language groups, including Diri, Pa’a, Siri and Warji.',
    welcomeLine:
      'Ningi, a proud and independent people. Our believers are part of that strong spirit.',
  },
  {
    id: 'warji',
    name: 'Warji',
    headquarters: 'Warji',
    senatorialDistrict: 'Bauchi Central',
    numberOfWards: 10,
    wards: [
      'Baima South/East',
      'Baima North/West',
      'Dagu East',
      'Dagu West',
      'Gabanga',
      'Katanga',
      'Kilbori',
      'Rangan',
      'Tiyin',
      'Tudun Wada West',
    ],
    estimatedChristianPopulation: '10 to 15 percent, about 15,000 to 35,000',
    briefHistory:
      'Warji is a small, dense LGA of about 625 square kilometres, with a 2006 census population of 114,720. It is the homeland of the Warji people, who speak the Warji language and are among the original inhabitants of the central zone. Farming is the main occupation, and there is a notable Christian community among the Warji.',
    welcomeLine:
      'Warji, home of a proud people. Our believers here carry the faith of generations.',
  },

  // BAUCHI NORTH (7)
  {
    id: 'gamawa',
    name: 'Gamawa',
    headquarters: 'Gamawa',
    senatorialDistrict: 'Bauchi North',
    numberOfWards: 11,
    wards: [
      'Alagarno/Jadori',
      'Gadiya',
      'Gamawa',
      'Gololo',
      'Kafin Romi',
      'Kubdiya',
      'Raga',
      'Tarmasuwa',
      'Tumbi',
      'Udubo',
      'Zindi',
    ],
    estimatedChristianPopulation: '1 to 2 percent, about 4,000 to 10,000',
    briefHistory:
      'Gamawa is in the far north-east of the state, close to the Yobe State boundary. Its peoples include Hausa, Fulani and Karekare, and farming is the main occupation.',
    welcomeLine: 'Gamawa, at the northern gate of Bauchi State. Every believer here is a light.',
  },
  {
    id: 'giade',
    name: 'Giade',
    headquarters: 'Giade',
    senatorialDistrict: 'Bauchi North',
    numberOfWards: 10,
    wards: [
      'Chinkani',
      'Doguwa South',
      'Doguwa Central',
      'Giade',
      'Isawa',
      'Sabon Sara',
      'Uzum A',
      'Uzum B',
      'Zabi',
      'Zirrami',
    ],
    estimatedChristianPopulation: '2 to 4 percent, about 5,000 to 12,000',
    briefHistory:
      'Giade is in the northern part of the state. Its communities are mainly Hausa and Fulani, with a small but committed Christian population. Farming is the main occupation.',
    welcomeLine: 'Giade, a quiet land where faithful believers continue to grow.',
  },
  {
    id: 'itas-gadau',
    name: 'Itas/Gadau',
    headquarters: 'Itas',
    senatorialDistrict: 'Bauchi North',
    numberOfWards: 10,
    wards: [
      'Abdallawa/Magarya',
      'Bambal',
      'Bilkicheri',
      'Buzawa',
      'Gadau',
      'Gwarai',
      'Itas',
      'Kashuri',
      'Mashema',
      'Zubuki',
    ],
    estimatedChristianPopulation: '1 to 3 percent, about 4,000 to 12,000',
    briefHistory:
      'Itas/Gadau is mainly Hausa and Fulani. Gadau is the home of Bauchi State University, which brings students and staff from many backgrounds, including Christians.',
    welcomeLine: 'Itas/Gadau, a land of learning. Our young believers are leading the way.',
  },
  {
    id: 'jamaare',
    name: "Jama'are",
    headquarters: "Jama'are",
    senatorialDistrict: 'Bauchi North',
    numberOfWards: 10,
    wards: [
      'Dogon Jeji A',
      'Dogon Jeji B',
      'Dogon Jeji C',
      'Galdimari',
      'Hanafari',
      "Jama'are A",
      "Jama'are B",
      "Jama'are C",
      "Jama'are D",
      'Jurara',
    ],
    estimatedChristianPopulation: '3 to 6 percent, about 8,000 to 18,000',
    briefHistory:
      "Jama'are is the seat of the Jama'are Emirate and is named after the Jama'are River, which flows through several LGAs in the state. It is a historic trading and farming area of Hausa, Fulani and other peoples.",
    welcomeLine:
      "Jama'are, a historic emirate by the river. Faith and community go together here.",
  },
  {
    id: 'katagum',
    name: 'Katagum',
    headquarters: 'Azare',
    senatorialDistrict: 'Bauchi North',
    numberOfWards: 11,
    wards: [
      'Bulkachuwa/Dagaro',
      'Buskuri',
      'Chinade',
      'Gambaki/Bidir',
      'Madachi/Gangai',
      'Madangala',
      'Madara',
      'Nasarawa Bakin Kasuwa',
      'Ragwam/Magonshi',
      'Tsakuwa Kofar Gabas/Kofar Kuka',
      'Yayu',
    ],
    estimatedChristianPopulation: '1 to 3 percent, about 5,000 to 14,000',
    briefHistory:
      'Azare is the headquarters and the seat of the Katagum Emirate, one of the oldest and most important emirates in the north of the state, founded in the early 1800s by Mallam Zaki. Azare is a busy commercial and educational town. Its Christians are mostly in the town, among traders, civil servants and teachers.',
    welcomeLine:
      'Katagum, a great old emirate and a busy town. Believers here are a strong, united fellowship.',
  },
  {
    id: 'shira',
    name: 'Shira',
    headquarters: 'Yana',
    senatorialDistrict: 'Bauchi North',
    numberOfWards: 11,
    wards: [
      'Andubun',
      'Beli/Gagidaba',
      'Bukul/Bangire',
      'Disina',
      'Faggo',
      'Kilbori',
      'Sambuwal',
      'Shira',
      'Tsafi',
      'Tumfafi',
      'Zubo',
    ],
    estimatedChristianPopulation: '2 to 4 percent, about 7,000 to 16,000',
    briefHistory:
      'Shira lies in the north-west of the state, near the Kano and Jigawa boundaries. Its people are mainly Hausa and Fulani, and farming and trade are the main activities.',
    welcomeLine:
      'Shira, in the north-west of Bauchi State. Our believers here are small in number and big in faith.',
  },
  {
    id: 'zaki',
    name: 'Zaki',
    headquarters: 'Katagum town (some sources list Sakwa)',
    senatorialDistrict: 'Bauchi North',
    numberOfWards: 11,
    wards: [
      'Alangawari/Kafin/Larabawa',
      'Bursali',
      'Gumai',
      'Katagum',
      'Mainako',
      'Maiwa',
      'Makawa',
      'Murmur South',
      'Murmur North',
      'Sakwa',
      'Tashena/Gadai',
    ],
    estimatedChristianPopulation: '1 to 2 percent, about 2,000 to 7,000',
    briefHistory:
      'Zaki is in the far north of the state, bordering the Jigawa State boundary. It is mainly Hausa, and farming and trading are the main occupations.',
    welcomeLine:
      'Zaki, at the northern edge of our State. Every believer here has a place in our family.',
  },
];
