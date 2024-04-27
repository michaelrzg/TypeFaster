//main js file for Running Words
//Michaek Rizig
//----------------------------------------------------------------
//checks if browser is mobile
if (window.innerHeight > window.innerWidth) {
  document.getElementById("loader").style.display = "none";
  document.getElementById("gameOver").style.display = "none";
  document.getElementById("hearts").style.display = "none";
  document.getElementById("highscore").style.display = "none";
  document.getElementById("onlyDesk").style.display = "block";
}
/*loop to animate the game*/
async function nextFrame() {
  if (stopped) return;
  tick++;
  var x = document.getElementById("Frame").getElementsByTagName("*");
  for (var i = 0; i < x.length; i++) {
    var prop = window
      .getComputedStyle(x[i])
      .getPropertyValue("margin-left")
      .split("p");

    var ins = parseInt(prop[0]) + speed + "px";
    x[i].style.marginLeft = ins;
    if (parseInt(prop[0]) > 1800) {
      x[i].remove();
      removeHeart();
    }
  }
  if (tick % 50 == 0) {
    addWord();
  }
  if (tick % 200 == 0) {
    console.log("tick: " + tick);
    speed++;
    tick = 0;
  }
  if (x > 0) {
    var largest = document.getElementById("Frame").getElementsByTagName("*")[0];
  }
  for (var i = 0; i < x.length; i++) {
    var prop = window
      .getComputedStyle(x[i])
      .getPropertyValue("margin-left")
      .split("p");
    prop[0] = parseInt(prop[0]);
    if (prop[0] > largest) {
      largest = prop[0];
    }
  }
  selectNextLetter();
  /*waits 30ms before calling nextFrame again*/
  await new Promise((resolve) => setTimeout(nextFrame, 30));
}

/*returns random int within range*/
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/* adds word to screen, and incriements the speed of the game*/
function addWord() {
  var Tword = document.createElement("div");
  frame.appendChild(Tword);
  Tword.style.height = "100px";
  Tword.style.width = "200px";
  Tword.style.fontSize = "40px";
  Tword.style.position = "absolute";
  // Tword.style.backgroundColor = "blue";
  var int = getRandomInt();
  Tword.style.marginTop = getRandomInt(40) + "%";
  Tword.innerHTML = words[getRandomInt(words.length)];
  Tword.style.color = "white";
}

function selectNextLetter() {
  var x = document.getElementById("Frame").getElementsByTagName("*");
  if (x.length > 0) {
    var furthest = x[0];
    furthest.id = "first";
    furthestWord = furthest;
  }
}

function updateScore() {
  score.innerHTML = parseInt(score.innerHTML) + 1;
  console.log(score.innerHTML);
  if (parseInt(score.innerHTML) > parseInt(highscore.innerHTML)) {
    highscore.innerHTML = parseInt(score.innerHTML);
  }
}

function reset() {
  score.innerHTML = 0;
  speed = 1;
  tick = 0;
  hearts = 3;
}

function removeHeart() {
  hearts--;
  if (hearts == 0) {
    gameOver();
  } else {
    document.getElementById(hearts).style.display = "none";
  }
}
function gameOver() {
  stopped = true;

  frame.style.display = "none";
  speed = 0;
  document.getElementById("Frame").style.display = "none";
  document.getElementById("gameOver").style.display = "block";
  document.getElementById("EndScore").style.display = "block";
  document.getElementById("EndScore").innerHTML =
    "You Scored: " + parseInt(score.innerHTML);
  score.style.display = "none";
  document.getElementById("hearts").style.display = "none";
  var x = document.getElementById("Frame").getElementsByTagName("*");
  while (x.length > 0) {
    x[0].remove();
  }
  reset();
  console.log(x.length);
}
function start() {
  score.style.color = "white";
  document.getElementById("loader").style.display = "none";
  document.getElementById("Frame").style.display = "block";
  document.getElementById("gameOver").style.display = "none";
  document.getElementById("EndScore").style.display = "none";
  score.style.display = "block";
  speed = 5;
  stopped = false;
  nextFrame();
}

/*main*/
/*initialize variables*/
var furthestWord;
var words = [
  "lightning",
  "work",
  "give",
  "turn",
  "send",
  "show",
  "biological",
  "find",
  "social",
  "work",
  "call",
  "turn",
  "force",
  "mathematical",
  "seem",
  "company",
  "money",
  "meeting",
  "play",
  "give",
  "report",
  "want",
  "sit",
  "think",
  "become",
  "come",
  "thunder",
  "plastic",
  "use",
  "move",
  "rule",
  "star",
  "nuclear",
  "biological",
  "dream",
  "strength",
  "wish",
  "process",
  "look",
  "want",
  "tree",
  "put",
  "function",
  "universe",
  "hear",
  "go",
  "be",
  "look",
  "person",
  "take",
  "market",
  "choose",
  "come",
  "interest",
  "hope",
  "storm",
  "economic",
  "island",
  "change",
  "show",
  "power",
  "change",
  "plan",
  "artistic",
  "flower",
  "art",
  "record",
  "put",
  "hear",
  "speak",
  "ocean",
  "electric",
  "example",
  "think",
  "call",
  "work",
  "plant",
  "carry",
  "see",
  "condition",
  "photo",
  "get",
  "religious",
  "food",
  "nature",
  "goal",
  "air",
  "believe",
  "moral",
  "make",
  "musical",
  "find",
  "come",
  "insect",
  "mean",
  "investment",
  "legal",
  "bird",
  "employee",
  "learn",
  "comet",
  "stand",
  "come",
  "river",
  "department",
  "fruit",
  "get",
  "mountain",
  "open",
  "leave",
  "database",
  "get",
  "social",
  "make",
  "vegetable",
  "talk",
  "problem",
  "religious",
  "pipe",
  "have",
  "show",
  "security",
  "world",
  "scientific",
  "matter",
  "amphibian",
  "physical",
  "technical",
  "energy",
  "psychological",
  "rain",
  "sell",
  "structure",
  "mine",
  "know",
  "chemical",
  "call",
  "space",
  "hear",
  "blackhole",
  "magnetic",
  "possession",
  "geological",
  "political",
  "gas",
  "show",
  "political",
  "cultural",
  "system",
  "rock",
  "thing",
  "use",
  "student",
  "care",
  "say",
  "mean",
  "want",
  "jungle",
  "take",
  "place",
  "help",
  "feel",
  "point",
  "geographical",
  "take",
  "reptile",
  "furnace",
  "computer",
  "know",
  "philosophical",
  "give",
  "item",
  "turn",
  "move",
  "start",
  "tell",
  "keep",
  "moon",
  "planet",
  "way",
  "have",
  "ethical",
  "health",
  "mammal",
  "cultural",
  "product",
  "think",
  "unit",
  "play",
  "phone",
  "chemical",
  "minefield",
  "buy",
  "do",
  "live",
  "sample",
  "leave",
  "say",
  "feeling",
  "sun",
  "objective",
  "need",
  "earth",
  "show",
  "protection",
  "animal",
  "educational",
  "weakness",
  "forest",
  "lake",
  "account",
  "watch",
  "seem",
  "go",
  "literary",
  "water",
  "project",
  "start",
  "wind",
  "thought",
  "fish",
  "love",
  "know",
  "historical",
  "snow",
  "like",
  "think",
  "economic",
  "desert",
  "time",
  "customer",
  "metal",
  "visit",
  "physical",
  "fire",
  "logical",
  "sea",
  "want",
  "archipelago",
  "calligraphy",
  "cacophony",
  "chimera",
  "conundrum",
  "diaspora",
  "edifice",
  "enigma",
  "ephemeral",
  "fauna",
  "ferment",
  "fervor",
  "filigree",
  "fjord",
  "fracas",
  "fritillary",
  "gambit",
  "geyser",
  "gondola",
  "hallmark",
  "hieroglyph",
  "idyll",
  "imbroglio",
  "impasse",
  "impromptu",
  "incognito",
  "inertia",
  "intrigue",
  "labyrinth",
  "legacy",
  "lexicon",
  "lullaby",
  "manifesto",
  "mausoleum",
  "menagerie",
  "meridian",
  "metamorphosis",
  "monolith",
  "monsoon",
  "mosaic",
  "nostalgia",
  "oasis",
  "odyssey",
  "panorama",
  "pantheon",
  "paradigm",
  "paradox",
  "pariah",
  "pasturage",
  "pedigree",
  "periphery",
  "perigee",
  "periwinkle",
  "physiognomy",
  "pinnacle",
  "plagiarism",
  "pleistocene",
  "podium",
  "precipice",
  "premise",
  "protagonist",
  "provenance",
  "pyre",
  "quirk",
  "abjure",
  "bolster",
  "caper",
  "coalesce",
  "concoct",
  "deconstruct",
  "descry",
  "disabuse",
  "discomfit",
  "distill",
  "divulge",
  "elicit",
  "embolden",
  "engender",
  "extemporize",
  "ferment",
  "flummox",
  "foray",
  "foster",
  "galvanize",
  "garner",
  "glimmer",
  "hamper",
  "harmonize",
  "imbibe",
  "improvise",
  "incandescent",
  "inculcate",
  "inscribe",
  "languish",
  "laud",
  "macerate",
  "mitigate",
  "mollify",
  "muse",
  "orchestrate",
  "ossify",
  "perambulate",
  "perpetuate",
  "precipitate",
  "preen",
  "prevail",
  "recant",
  "rectify",
  "rejuvenate",
  "relegate",
  "remit",
  "scuttle",
  "sequester",
  "sublimate",
  "suffuse",
  "symbolize",
  "synthesize",
];
var tick = 0;
var speed = 3;
var fontSize = 40;
var hearts = 3;
var stopped = false;
/* getting frame to use as parent div for words */
const frame = document.getElementById("Frame");
/*gets start button */
const startButton = document.getElementById("start");
let score = document.getElementById("score");
let highscore = document.getElementById("hsv");
score.innerHTML = 0;
/*adds EventListener to start button to start the game*/
startButton.addEventListener("click", (event) => {
  start();
});
document.getElementById("gameOver").addEventListener("click", (event) => {
  start();
});

document.addEventListener("keydown", (e) => {
  var str = furthestWord.innerHTML;
  if (e.key == furthestWord.innerHTML.charAt(0)) {
    console.log(e.key);
    str = str.slice(1);
    furthestWord.innerHTML = str;

    fontSize += 7;
    furthestWord.style.fontSize = fontSize + "px";
  }
  if (str == "" || str == " ") {
    furthestWord.remove();
    updateScore();
    fontSize = 40;
  }
});
addWord();
