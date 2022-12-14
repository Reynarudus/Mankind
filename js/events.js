const event_list_img = ['img/Charles-R-Knight-caveman1.png',
'img/hunting01.png',
'img/hunting02.png',
'img/family.png',
'img/stonetoll.png',
'img/LiborBalak-AShamanoftheAurignacianCulture.png',
'img/zdenek-burian-magic-rites.png',
'img/skeleton.png',
'img/beringstraitmigration.png',
'img/neolith.png',
'img/neolithfarm.png',
'img/Zdenek_Burian_HumanshuntingaHerdofMammoths.png',
'img/shepherdNeolithic.png',
'img/problemHarvest.png',
'img/neolithicfarm2.png',
'img/stonehengeViewedFromTheWest.png',
'img/AndreHouotMagdaleniaCampoftheUpperPaleolithic.png',
'img/eveGoldsmithCoxeter.png',
'img/mesopotamiaCity.png'
]
const event_list_title = ['The birth of humanity',
'Bad Hunting',
'Good hunting',
'Newcomers',
'Talented craftsman',
'Ancestors day',
'Hostile tribe attack',
'Victory',
'Defeat',
'Last Famine',
'Abrupt End',
'Migration to Middle East',
'Migration to Europe',
'The beginning of the Neolithic',
'Good Harvest',
'Ritual battle',
'Trade offer',
'Problems in the harvest',
'New Settlers',
'Stonhege Construction',
'Pilgrims',
'A sign from the gods',
'Rivalry with Farmers',
'Bankruptcy',
'Emigration',
'Urbanization',
]
const event_list_description = ['Around 300,000 appeared the first populations of Homo Sapiens derived from Homo erectus. They inhabited East Africa toiling in Paleolithic life. NOTE You start out as hunter-gatherers, to move to the next level of the organization you need to collect a certain amount of culture the required amount depends on the date and region',
'Recently, hunting has completely failed, we lose surplus food.',
'These hunts were extremely successful.',
'This small group of people wants to join your tribe.',
'Your tribe has a skilled craftsman, what should he focus on?',
'Shamans agree, soon your tribe will be visited by ancestral spirits. What will you ask them to do?',
'They are bloody and ruthless. These barbarians demand tribute!',
'Humiliation! Your warriors are dead and your resources are plundered!',
'You won! Your people are safe and your enemies are taken captive!',
'Your people have run out of food to survive',
'Your nation died a sudden, unexpected death. Arecheologists argue to this day whether it was due to war or disease.',
'Many tribes are heading to Levant en masse, will your tribe go on this journey?',
'Europe is attracting more and more interest, it is said to be full of fur and other riches, will your tribe go on this journey?',
'The discovery of agriculture revolutionized your society. It will soon lead to the specialization of social classes, the development of trade, and sudden population growth <br> Note// Get 1000 population to go to the next stage of development. The Neolithic is currently the last stage in this game, when you gain 1000 population the game will end.',
'The harvest today has been exceptionally successful',
'A neighboring tribe challenges your to a ritual battle. They want to praise the gods with blood and check which tribe is stronger!',
'Victory! The gods were on your side',
'You have been defeated, but at least the gods are in a good mood',
'Merchants offer you various goods',
'The plague has devastated this year this harvest',
'Your growing settlement attracts new settlers',
'Your shamans have an interesting idea for a monumental structure',
'Your structure attracts lots of pilgrims',
'Soon the gods will send a sign in the form of a red moon, but what does this sign mean?',
'Increasingly numerous Neolithic communities occupy more and more land, turning the number of natural areas into arable land, reducing the number of animals to be hunted',
'It is hard to build a civilization while in poverty',
'Your culture is uninteresting and primitive. Other civilizations are more attractive to your inhabitants',
'Your nation has entered a new stage of development, founded its first city, it will certainly soon begin to influence other nations politically. <br> It is over now, thanks for playing ^^ <br> Out of curiosity, did you manage to build a stonehenge?',
]
const badhunting = {
id:'badhunting',
name: 1,
description: 1,
img:1,
options: ['Ignore it','Buy food from a neighboring tribe'],
descriptions: ['You lose 20 food','You lose 30 wealth'],
effect: [false,0,0,0,-20,0,0,0,0,0,0,0,0,false,0,0,0,0,-30,0,0,0,0,0,0,0] // change name, event next, government, religion, food, wealth, culture, militarization, population, region, enemy strength min, enemy strength max, battle effect
};
const goodhunting = {
id:'goodhunting',
name: 2,
description: 2,
img:2,
options: ['More food!','It is time to organize a feast'],
descriptions: ['You gain 100 food','You gain 50 culture <br> You lose 50 food'],
effect: [false,0,0,0,100,0,0,0,0,0,0,0,0,false,0,0,0,-50,0,50,0,0,0,0,0,0]
};
const newcomers = {
id:'newcomers',
name: 3,
description: 3,
img:3,
options: ['Let them join','We do not need freeloaders'],
descriptions: ['You gain 10 population <br> You lose 10 food','You gain 10 food'],
effect: [false,0,0,0,-10,0,0,0,10,0,0,0,0,false,0,0,0,10,0,20,0,0,0,0,0,0]
};
const craftsman = {
id:'craftsman',
name: 4,
description: 4,
img:4,
options: ['On new practical tools','On weapons','On art'],
descriptions: ['You gain 30 food','You gain 1 militarization', 'You gain 30 wealth and 30 culture'],
effect: [false,0,0,0,30,0,0,0,0,0,0,0,0,false,0,0,0,0,0,0,1,0,0,0,0,0,false,0,0,0,0,30,30,0,0,0,0,0,0]
};
const ancestors = {
id:'ancestors',
name: 5,
description: 5,
img:5,
options: ['For good fertility','For wealth','For strength','this is absurd'],
descriptions: ['You lose 30 food <br> You gain 50 population and 20 culture','You lose 30 food <br> You gain 20 culture and 10 wealth', 'You lose 30 food <br> You gain 20 culture and 1 militarization','You gain 30 food and lose 30 culture'],
effect: [false,0,0,0,-30,0,20,0,50,0,0,0,0,false,0,0,0,-30,10,20,0,0,0,0,0,0,false,0,0,0,0,0,20,1,0,0,0,0,0,false,0,0,0,30,0,-30,0,0,0,0,0,0]
};
const smallenemytribeattack = {
id:'smallenemytribeattack',
name: 6,
description: 6,
img:6,
options: ['Surrender','To arms!'],
descriptions: ['You lose 50 food and 20 wealth<br>','Enemy strength 50-100'],
effect: [false,0,0,0,-50,-20,0,0,0,0,0,0,0,false,0,0,0,0,0,0,0,0,0,50,100,1],
};

const migrationToMiddleEast = {
id:'migrationToMiddleEast',
name: 11,
description: 11,
img:8,
options: ['It is time to start the journey','We are fine here'],
descriptions: ['Change region to Middle East','Nothing changes'],
effect: [false,0,0,0,0,0,0,0,0,'Middle East',0,0,0,false,0,0,0,0,0,0,0,0,0,0,0,0],
historicalMomentOption: 0,
historicalmoment: 'o2o2o',
};
const migrationToEurope = {
id:'migrationToEurope',
name: 12,
description: 12,
img:8,
options: ['It is time to start the journey','We are fine here'],
descriptions: ['Change region to Europe','Nothing changes'],
effect: [false,0,0,0,0,0,0,0,0,'Europe',0,0,0,false,0,0,0,0,0,0,0,0,0,0,0,0],
historicalMomentOption: 0,
historicalmoment: 'o3o3o',
};

const beginningoftheneolithic = {
id:'beginningoftheneolithic',
name: 13,
description: 13,
img:9,
options: ['Let a new age begin'],
descriptions: ['Change government to Neolithic settlement'],
effect: [false,0,'Neolithic settlement',0,0,0,0,0,0,0,0,0,0],
historicalMomentOption: 0,
historicalmoment: 'o4o4o',
};

const goodharvest = {
id:'goodharvest',
name: 14,
description: 14,
img:10,
options: ['Fill granaries!','It is all thanks to the gods','It is time for a BIG celebration!'],
descriptions: ['You gain 200 food','You gain 100 food and 100 culture','You gain 100 culture, 50 population and lose 100 food, 50 wealth'],
effect: [false,0,0,0,200,0,0,0,0,0,0,0,0,false,0,0,0,100,0,100,0,0,0,0,0,0,false,0,0,0,-100,-50,100,0,50,0,0,0,0] // change name, event next, government, religion, food, wealth, culture, militarization, population, region, enemy strength min, enemy strength max, battle effect
};
const ritualbattle = {
id:'ritualbattle',
name: 15,
description: 15,
img:11,
options: ['We will praise the gods in a different way','For the gods!'],
descriptions: ['You lose 200 culture','Enemy strength 100-200'],
effect: [false,0,0,0,0,0,-200,0,0,0,0,0,0,false,0,0,0,0,0,0,0,0,0,100,200,3] 
};
const tradeoffert = {
id:'tradeoffert',
name: 16,
description: 18,
img:12,
options: ['These goats look pretty good','These beautiful beads!','We do not need new goods'],
descriptions: ['You lose 50 wealth and gain 100 food','You lose 100 food and gain 50 wealth','Nothing changes'],
effect: [false,0,0,0,100,-50,0,0,0,0,0,0,0,false,0,0,0,-100,50,0,0,0,0,0,0,0,false,0,0,0,0,50,0,0,0,0,0,0,0]
};
const problemHarvest = {
id:'problemHarvest',
name: 17,
description: 19,
img:13,
options: ['I can not do anything about it','I will buy supplies from a neighboring nation'],
descriptions: ['You lose 80 food','You lose 50 wealth'],
effect: [false,0,0,0,-80,0,0,0,0,0,0,0,0,false,0,0,0,0,-50,100,0,0,0,0,0,0]
};

const neolithicImigrant = {
id:'neolithicImigrant',
name: 18,
description: 20,
img:14,
options: ['Let them come','Let them find another place'],
descriptions: ['You gain 200 population and lose 150 food','You gain 50 food'],
effect: [false,0,0,0,-150,0,0,0,200,0,0,0,0,false,0,0,0,50,0,0,0,0,0,0,0,0,], // change name, event next, government, religion, food, wealth, culture, militarization, population, region, enemy strength min, enemy strength max, battle effect	
	
}
const stonehengeBuild = {
id:'stonehengeBuild',
name: 19,
description: 21,
img:15,
options: ['I will build it','These are just a few stones, who needs it ?'],
descriptions: ['You lose 300 wealth, 300 culture and gain new event','Nothing changes'],
effect: [false,0,0,0,0,-300,-300,0,0,0,0,0,0,false,0,0,0,0,0,0,0,0,0,0,0,0],
historicalMomentOption: 0,
historicalmoment: 'o5o5o',
};

const stonehengePilgrims = {
id:'stonehengePilgrims',
name: 20,
description: 22,
img:15,
options: ['I will gladly accept their gifts','Let them stay longer'],
descriptions: ['You gain 100 wealth','You gain 100 population'],
effect: [false,0,0,0,0,100,0,0,0,0,0,0,0,false,0,0,0,0,0,0,0,100,0,0,0,0],
};
const signFromTheGods = {
id:'signFromTheGods',
name: 21,
description: 23,
img:15,
options: ['It means a good harvest','War is coming!','A new era is about to come!'],
descriptions: ['You gain 100 food','You gain 2 militarization','You gain 100 culture'],
effect: [false,0,0,0,100,0,0,0,0,0,0,0,0,false,0,0,0,0,0,0,2,0,0,0,0,0,false,0,0,0,0,0,100,0,0,0,0,0,0],
};

const rivalryWithFarmers = {
id:'rivalryWithFarmers',
name: 22,
description: 24,
img:17,
options: ['It does not sound good...'],
descriptions: ['You lose 100 food'],
effect: [false,0,0,0,-100,0,0,0,0,0,0,0,0],
};

const cityBuild = {
id:'cityBuild',
name: 24,
description: 28,
img:18,
effect: [false,0,0,0,0,0,0,0,0,0,0,0,0],
options: ['This is end? :c'],
historicalMomentOption: 0,
historicalmoment: 'o6o6o',
endgame:true,
};


//statistics events
const lastFamine = {
id:'lastFamine',
name: 9,
description: 9,
img:7,
effect: [false,0,0,0,0,0,0,0,0,0,0,0,0],
historicalMomentOption: 0,
historicalmoment: 'o1o1o',
options: ['It does not sound good...'],
descriptions: ['End Game'],

endgame:true,
};
const abruptEnd = {
id:'abruptEnd',
name: 10,
description: 10,
img:7,
effect: [false,0,0,0,0,0,0,0,0,0,0,0,0],
historicalMomentOption: 0,
historicalmoment: 'o1o1o',
options: ['It does not sound good...'],
descriptions: ['End Game'],
endgame:true,
};
const bankruptcy = {
id:'bankruptcy',
name: 23,
description: 25,
img:17,
options: ['Poverty is not cool'],
descriptions: ['You lost all militarization and culture'],
effect: [false,0,0,0,0,0,0,0,0,0,0,0,0],
bankruptcy:true,
};
const weakCulture = {
id:'weakCulture',
name: 24,
description: 26,
img:17,
options: ['Come back!'],
descriptions: ['You lost 100 population and gain 20 culture'],
effect: [false,0,0,0,0,0,20,0,-100,0,0,0,0],
};
// change name, event next, government, religion, food, wealth, culture, militarization, population, region, enemy strength min, enemy strength max, battle effect	

 
//event list
const hunterGatherersEvents = [badhunting,goodhunting,newcomers]
const stoneAgeEvents = [craftsman,smallenemytribeattack];
const animismEvents = [ancestors]
const neolithEvents = [goodharvest,ritualbattle,tradeoffert,problemHarvest,neolithicImigrant,];
const stonehengeEvents = [stonehengePilgrims,signFromTheGods];
const neolithicVsPalaeolithic = [rivalryWithFarmers]

let selectedEvents = [];



// battle effect


const smallTribleWin = {
id:'smallTribleWin',
name: 7,
description: 8,
img:6,
options: ['Victory'],
descriptions: ['You gain 50 wealth <br> You lose 10 population and 1 militarization'],
effect: [false,0,0,0,0,50,0,-1,-10,0,0,0,0],
};
const smallTribleDefeat = {
id:'smallTribleDefeat',
name: 8,
description: 7,
img:6,
options: ['Defeat'],
descriptions: ['You lose 150, 100 wealth, 20 population and 1 militarization'],
effect: [false,0,0,0,-150,-100,0,-1,-29,0,0,0,0],
};

const ritualBattleWin = {
id:'ritualBattleWin',
name: 7,
description: 16,
img:11,
options: ['Victory'],
descriptions: ['You gain 100 culture <br>You lose 20 population and 1 militarization'],
effect: [false,0,0,0,0,0,100,-1,-20,0,0,0,0],
};
const ritualBattleDefeat = {
id:'ritualBattleDefeat',
name: 8,
description: 17,
img:11,
options: ['Defeat'],
descriptions: ['You lose 100 population and 1 militarization'],
effect: [false,0,0,0,0,0,0,-1,-100,0,0,0,0],
};
// change name, event next, government, religion, food, wealth, culture, militarization, population, region, enemy strength min, enemy strength max, battle effect
const battleEffect = [smallTribleWin,smallTribleDefeat,ritualBattleWin,ritualBattleDefeat];
const lastevent = [lastFamine];

//Important event
let ImportantEventActive = [1,1,1,1];

// 0 - migration to Middle East
// 1 - migration to Europe
// 2 - Stonhege Construction
// 3 - city Build
