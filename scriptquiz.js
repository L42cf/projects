/*!
* Start Bootstrap - Resume v7.0.2 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/

/*accordion*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 

var images = {
  "aatrox" : "lolportraits/AatroxSquare.webp",
  "ahri" : "lolportraits/AhriSquare.webp",
  "akali" : "lolportraits/AkaliSquare.webp",
  "akshan" : "lolportraits/AkshanSquare.webp",
  "alistar" : "lolportraits/AlistarSquare.webp",
  "amumu" : "lolportraits/AmumuSquare.webp",
  "anivia" : "lolportraits/AniviaSquare.webp",
  "annie" : "lolportraits/AnnieSquare.webp",
  "aphelios" : "lolportraits/ApheliosSquare.webp",
  "ashe" : "lolportraits/AsheSquare.webp",
  "aurelionsol" : "lolportraits/Aurelion_SolSquare.webp",
  "azir" : "lolportraits/AzirSquare.webp",
  "bard" : "lolportraits/BardSquare.webp",
  "belveth" : "lolportraits/BelVethSquare.webp",
  "blitzcrank" : "lolportraits/BlitzcrankSquare.webp",
  "brand" : "lolportraits/BrandSquare.webp",
  "braum" : "lolportraits/BraumSquare.webp",
  "caitlyn" : "lolportraits/CaitlynSquare.webp",
  "camille" : "lolportraits/CamilleSquare.webp",
  "cassiopeia" : "lolportraits/CassiopeiaSquare.webp",
  "chogath" : "lolportraits/ChoGathSquare.webp",
  "corki" : "lolportraits/CorkiSquare.webp",
  "darius" : "lolportraits/DariusSquare.webp",
  "diana" : "lolportraits/DianaSquare.webp",
  "draven" : "lolportraits/DravenSquare.webp",
  "ekko" : "lolportraits/EkkoSquare.webp",
  "elise" : "lolportraits/EliseSquare.webp",
  "evelynn" : "lolportraits/EvelynnSquare.webp",
  "ezreal" : "lolportraits/EzrealSquare.webp",
  "jhin" : "lolportraits/JhinSquare.webp",
  "lulu" : "lolportraits/LuluSquare.webp",
  "lux" : "lolportraits/LuxSquare.webp",
  "morgana" : "lolportraits/MorganaSquare.webp",
  "poppy" : "lolportraits/PoppySquare.webp",
  "pyke" : "lolportraits/PykeSquare.webp",
  "qiyana" : "lolportraits/QiyanaSquare.webp",
  "rammus" : "lolportraits/RammusSquare.webp",
  "seraphine" : "lolportraits/SeraphineSquare.webp",
  "urgot" : "lolportraits/UrgotSquare.webp",
  "zed" : "lolportraits/ZedSquare.webp",
  }

  
  
  /*fail 1*/
  // var allAudios = document.querySelectorAll('audio');
  // function stopAllAudio() {
  //   allAudios.forEach(function(audio) {
  //     audio.pause();
  //   });

  // }

  document.getElementById('btn0').addEventListener('click', () => {
    document.querySelectorAll('audio').forEach(el => el.pause());
  });
  document.getElementById('btn1').addEventListener('click', () => {
    document.querySelectorAll('audio').forEach(el => el.pause());
  });
  document.getElementById('btn2').addEventListener('click', () => {
    document.querySelectorAll('audio').forEach(el => el.pause());
  });
  document.getElementById('btn3').addEventListener('click', () => {
    document.querySelectorAll('audio').forEach(el => el.pause());
  });


  var lolsounds = new Array();
  var i = 0;
  
  /*audio list*/
  lolsounds[0] = 'lolsound/Urgot_ban.ogg';
  lolsounds[1] = 'lolsound/Zed_ban.ogg';
  lolsounds[2] = 'lolsound/ChoGath_ban.ogg';
  lolsounds[3] = 'lolsound/Diana_ban.ogg';
  lolsounds[4] = 'lolsound/Ezreal_ban.ogg';
  lolsounds[5] = 'lolsound/Aatrox_ban.ogg';
  lolsounds[6] = 'lolsound/Amumu_ban.ogg';
  lolsounds[7] = 'lolsound/Darius_ban.ogg';
  lolsounds[8] = 'lolsound/Jhin_ban.ogg';
  lolsounds[9] = 'lolsound/Cassiopeia_ban.ogg';
  lolsounds[10] = 'lolsound/Lulu_ban.ogg';
  lolsounds[11] = 'lolsound/Ahri_ban.ogg';
  lolsounds[12] = 'lolsound/Lux_ban.ogg';
  lolsounds[13] = 'lolsound/Braum_ban.ogg';
  lolsounds[14] = 'lolsound/Qiyana_ban.ogg';
  lolsounds[15] = 'lolsound/Corki_ban.ogg';
  lolsounds[16] = 'lolsound/Pyke_ban.ogg';
  lolsounds[17] = 'lolsound/Seraphine_ban.ogg';
  lolsounds[18] = 'lolsound/Rammus_ban.ogg';
  lolsounds[19] = 'lolsound/Camille_ban.ogg';
  lolsounds[20] = 'lolsound/Caitlyn_ban.ogg';
  lolsounds[21] = 'lolsound/Elise_ban.ogg';
  lolsounds[22] = 'lolsound/BelVeth_ban.ogg';
  lolsounds[23] = 'lolsound/Aphelios_ban.ogg';
  lolsounds[24] = 'lolsound/Evelynn_ban.ogg';
  lolsounds[25] = 'lolsound/Azir_ban.ogg';
  lolsounds[26] = 'lolsound/Ashe_ban.ogg';
  lolsounds[27] = 'lolsound/Blitzcrank_ban.ogg';
  lolsounds[28] = 'lolsound/AurelionSol_ban.ogg';
  lolsounds[29] = 'lolsound/Anivia_ban.ogg';
  lolsounds[30] = 'lolsound/Bard_ban.ogg';
  lolsounds[31] = 'lolsound/Morgana_ban.ogg';
  lolsounds[32] = 'lolsound/Ekko_ban.ogg';
  lolsounds[33] = 'lolsound/Annie_ban.ogg';
  lolsounds[34] = 'lolsound/Akshan_ban.ogg';
  lolsounds[35] = 'lolsound/Brand_ban.ogg';
  lolsounds[36] = 'lolsound/Alistar_ban.ogg';
  lolsounds[37] = 'lolsound/Poppy_ban.ogg';
  lolsounds[38] = 'lolsound/Draven_ban.ogg';
  lolsounds[39] = 'lolsound/Akali_ban.ogg';


  function changeSound() {
    document.getElementById('sfx-playa' + i).classList.add('show-hide');
    if (i < lolsounds.length-1) {
      i++;
      console.log(i);
    } else {
      i = 0;
    }
    document.getElementById('sfx-playa' + i).classList.remove('show-hide');
  }
  

  document.getElementById('btn0').addEventListener('click', changeSound);
  document.getElementById('btn1').addEventListener('click', changeSound);
  document.getElementById('btn2').addEventListener('click', changeSound);
  document.getElementById('btn3').addEventListener('click', changeSound);

  // var a = 1;
  // console.log(a);
  // function changeAudio() {
  //   var audio = document.getElementById('sfx-playa');
  //   for (let index = 0; index < 2; index++) {
  //     document.getElementById('track').src = 'lolsound/Aatrox_ban.ogg';';
  //     index = index+1;
  //     console.log(index);
  //   }


  //     if (audio.onclick && a==1) {
  //     document.getElementById('track').src = 'lolsound/Aatrox_ban.ogg';';
  //     a = a+1;
  //     console.log(a);
  //     }
  //     if (audio.onclick && a==2) {
  //       document.getElementById('track').src = 'lolsound/Ahri_ban.ogg';';
  //       a = a+1;
  //     }
  //   audio.load();
  // }

  // changeAudio();
  // console.log(a);
  

  // var playButton = document.getElementById("sfx-playa");
  // let playSound = () => new Audio("lolsound/Aatrox_ban.ogg';").play();
  // playButton.onclick = playSound;
  

  // var stopButton = document.getElementById("sfx-playa-stopper");
  // let stopSound = () => new Audio(quiz.getQuestionIndex().audiofile).pause();
  // stopButton.onclick = stopSound;


  /*fail 2*/
  // var playButton = document.getElementById("sfx-playa");
  // let audio1 = new Audio(quiz.getQuestionIndex().audiofile);
  // console.log(audio1);
  // playButton.onclick = audio1.play();
  

  // var stopButton = document.getElementById("sfx-playa-stopper");
  // stopButton.onclick = audio1.pause();

  
  /*fail 3*/
  // var audio = document.getElementById('playa');
  // var audio1 = quiz.getQuestionIndex().audiofile;
  // console.log(audio1);
  // var source = document.getElementById('audioSource').setAttribute('src', audio1);
  // audio.load();
  

  //

  
  function populate() {
  if (quiz.isEnded()) {
  showScores();
  } else {
  // show question
  var element = document.getElementById("question");
  element.innerHTML = quiz.getQuestionIndex().text;
  
  // show options
  var choices = quiz.getQuestionIndex().choices;
  for (var i = 0; i < choices.length; i++) {
  var element = document.getElementById("choice" + i);
  element.innerHTML = images[choices[i]]? '<img src="'+images[choices[i]]+'"/>':choices[i];
  guess("btn" + i, choices[i]);
  }
  
  showProgress();
  }
  showLiveScore();
  };
  
  
  function guess(id, guess) {
  var button = document.getElementById(id);
    button.onclick = function() {
      quiz.guess(guess);
      populate();
      
    }
  };
  
  function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
  };

  function showLiveScore() {
  var currentScore = quiz.score;
  var element = document.getElementById("livescore");
  element.innerHTML = "Score: " + currentScore + "/" + quiz.questions.length; 
  };
  
  function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  
  if (quiz.score == 40) {
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "/40 <br /> You are a true gamer." + "</h2>";
  } else if (quiz.score >=32 && quiz.score <40) {
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "/40 <br /> Good job! But you can ace it!" + "</h2>";
  } else if (quiz.score >=22 && quiz.score <32) {
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "/40 <br /> Keep trying, you can do better." + "</h2>";
  } else if (quiz.score >=12 && quiz.score <22) {
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "/40 <br /> Were you even trying?" + "</h2>";
  } else if (quiz.score <= 11) {
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "/40 <br /> Did you just spam one answer?" + "</h2>";
  }
  var element = document.getElementById("quiz");
  
  element.innerHTML = gameOverHTML;
  };
  
  // create questions
  var questions = [

    new Question("Who says this?",
    ["zed", "jhin", "urgot", "aatrox"], "urgot"),
    new Question("Who says this?",
    ["jhin", "darius", "pyke", "zed"], "zed"),
    new Question("Who says this?",
    ["chogath", "aatrox", "belveth", "rammus"], "chogath"),
    new Question("Who says this?",
    ["morgana", "cassiopeia", "elise", "diana"], "diana"),
    new Question("Who says this?",
    ["ezreal", "akshan", "ekko", "draven"], "ezreal"),
    new Question("Who says this?",
    ["aatrox", "brand", "urgot", "pyke"], "aatrox"),
    new Question("Who says this?",
    ["corki", "amumu", "poppy", "annie"], "amumu"),
    new Question("Who says this?",
    ["draven", "aatrox", "urgot", "darius"], "darius"),
    new Question("Who says this?",
    ["jhin", "akshan", "aurelionsol", "draven"], "jhin"),
    new Question("Who says this?",
    ["akali", "morgana", "cassiopeia", "evelynn"], "cassiopeia"),
    new Question("Who says this?",
    ["lulu", "poppy", "lux", "annie"], "lulu"),
    new Question("Who says this?",
    ["qiyana", "ahri", "caitlyn", "evelynn"], "ahri"),
    new Question("Who says this?",
    ["seraphine", "ashe", "lux", "ezreal"], "lux"),
    new Question("Who says this?",
    ["braum", "jhin", "akshan", "azir"], "braum"),
    new Question("Who says this?",
    ["qiyana", "draven", "camille", "akshan"], "qiyana"),
    new Question("Who says this?",
    ["poppy", "corki", "amumu", "rammus"], "corki"),
    new Question("Who says this?",
    ["pyke", "aatrox", "urgot", "jhin"], "pyke"),
    new Question("Who says this?",
    ["seraphine", "ahri", "akali", "rammus"], "seraphine"),
    new Question("Who says this?",
    ["rammus", "ahri", "akali", "seraphine"], "rammus"),
    new Question("Who says this?",
    ["belveth", "camille", "akali", "caitlyn"], "camille"),
    new Question("Who says this?",
    ["ashe", "poppy", "camille", "caitlyn"], "caitlyn"),
    new Question("Who says this?",
    ["elise", "cassiopeia", "evelynn", "diana"], "elise"), 
    new Question("Who says this?",
    ["morgana", "chogath", "belveth", "aatrox"], "belveth"),
    new Question("Who says this?",
    ["aurelionsol", "jhin", "bard", "aphelios"], "aphelios"),
    new Question("Who says this?",
    ["evelynn", "ahri", "morgana", "elise"], "evelynn"),
    new Question("Who says this?",
    ["qiyana", "azir", "bard", "aurelionsol"], "azir"),
    new Question("Who says this?",
    ["belveth", "akali", "evelynn", "ashe"], "ashe"),
    new Question("Who says this?",
    ["rammus", "blitzcrank", "azir", "zed"], "blitzcrank"),
    new Question("Who says this?",
    ["aurelionsol", "chogath", "jhin", "aatrox"], "aurelionsol"),
    new Question("Who says this?",
    ["ashe", "anivia", "akali", "caitlyn"], "anivia"),
    new Question("Who says this?",
    ["blitzcrank", "aphelios", "aurelionsol", "bard"], "bard"),
    new Question("Who says this?",
    ["evelynn", "morgana", "elise", "caitlyn"], "morgana"),
    new Question("Who says this?",
    ["ekko", "akshan", "draven", "rammus"], "ekko"),
    new Question("Who says this?",
    ["lulu", "amumu", "poppy", "annie"], "annie"),
    new Question("Who says this?",
    ["alistar", "ezreal", "draven", "akshan"], "akshan"),
    new Question("Who says this?",
    ["annie", "pyke", "brand", "zed"], "brand"),
    new Question("Who says this?",
    ["alistar", "draven", "braum", "aatrox"], "alistar"),
    new Question("Who says this?",
    ["akali", "evelynn", "lulu", "poppy"], "poppy"),
    new Question("Who says this?",
    ["draven", "akshan", "ezreal", "rammus"], "draven"),
    new Question("Who says this?",
    ["evelynn", "elise", "ahri", "akali"], "akali"),

  ];
  
  function Question(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
      // this.audiofile = audiofile;
  }

  
  
  
  Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
  }
  
  
  function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
  }
  
  Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
  }
  
  Quiz.prototype.guess = function(answer) {
  if (this.getQuestionIndex().isCorrectAnswer(answer)) {
  this.score++;
  }
  
  this.questionIndex++;
  }
  
  Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
  }

  
  
  // create quiz
  var quiz = new Quiz(questions);
  // display quiz
  populate();


  