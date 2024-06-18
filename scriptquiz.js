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
  "Aatrox" : "lolportraits/AatroxSquare.webp",
  "Ahri" : "lolportraits/AhriSquare.webp",
  "Akali" : "lolportraits/AkaliSquare.webp",
  "Akshan" : "lolportraits/AkshanSquare.webp",
  "Alistar" : "lolportraits/AlistarSquare.webp",
  "Amumu" : "lolportraits/AmumuSquare.webp",
  "Anivia" : "lolportraits/AniviaSquare.webp",
  "Annie" : "lolportraits/AnnieSquare.webp",
  "Aphelios" : "lolportraits/ApheliosSquare.webp",
  "Ashe" : "lolportraits/AsheSquare.webp",
  "AurelionSol" : "lolportraits/Aurelion_SolSquare.webp",
  "Azir" : "lolportraits/AzirSquare.webp",
  "Bard" : "lolportraits/BardSquare.webp",
  "BelVeth" : "lolportraits/BelVethSquare.webp",
  "Blitzcrank" : "lolportraits/BlitzcrankSquare.webp",
  "Brand" : "lolportraits/BrandSquare.webp",
  "Braum" : "lolportraits/BraumSquare.webp",
  "Caitlyn" : "lolportraits/CaitlynSquare.webp",
  "Camille" : "lolportraits/CamilleSquare.webp",
  "Cassiopeia" : "lolportraits/CassiopeiaSquare.webp",
  "ChoGath" : "lolportraits/ChoGathSquare.webp",
  "Corki" : "lolportraits/CorkiSquare.webp",
  "Darius" : "lolportraits/DariusSquare.webp",
  "Diana" : "lolportraits/DianaSquare.webp",
  "Draven" : "lolportraits/DravenSquare.webp",
  "Ekko" : "lolportraits/EkkoSquare.webp",
  "Elise" : "lolportraits/EliseSquare.webp",
  "Evelynn" : "lolportraits/EvelynnSquare.webp",
  "Ezreal" : "lolportraits/EzrealSquare.webp",
  "Jhin" : "lolportraits/JhinSquare.webp",
  "Lulu" : "lolportraits/LuluSquare.webp",
  "Lux" : "lolportraits/LuxSquare.webp",
  "Morgana" : "lolportraits/MorganaSquare.webp",
  "Poppy" : "lolportraits/PoppySquare.webp",
  "Pyke" : "lolportraits/PykeSquare.webp",
  "Qiyana" : "lolportraits/QiyanaSquare.webp",
  "Rammus" : "lolportraits/RammusSquare.webp",
  "Seraphine" : "lolportraits/SeraphineSquare.webp",
  "Urgot" : "lolportraits/UrgotSquare.webp",
  "Zed" : "lolportraits/ZedSquare.webp",
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
  lolsounds[0] = 'lolsound/Urgot_Ban.ogg';
  lolsounds[1] = 'lolsound/Zed_Ban.ogg';
  lolsounds[2] = 'lolsound/ChoGath_Ban.ogg';
  lolsounds[3] = 'lolsound/Diana_Ban.ogg';
  lolsounds[4] = 'lolsound/Ezreal_Ban.ogg';
  lolsounds[5] = 'lolsound/Aatrox_Ban.ogg';
  lolsounds[6] = 'lolsound/Amumu_Ban.ogg';
  lolsounds[7] = 'lolsound/Darius_Ban.ogg';
  lolsounds[8] = 'lolsound/Jhin_Ban.ogg';
  lolsounds[9] = 'lolsound/Cassiopeia_Ban.ogg';
  lolsounds[10] = 'lolsound/Lulu_Ban.ogg';
  lolsounds[11] = 'lolsound/Ahri_Ban.ogg';
  lolsounds[12] = 'lolsound/Lux_Ban.ogg';
  lolsounds[13] = 'lolsound/Braum_Ban.ogg';
  lolsounds[14] = 'lolsound/Qiyana_Ban.ogg';
  lolsounds[15] = 'lolsound/Corki_Ban.ogg';
  lolsounds[16] = 'lolsound/Pyke_Ban.ogg';
  lolsounds[17] = 'lolsound/Seraphine_Ban.ogg';
  lolsounds[18] = 'lolsound/Rammus_Ban.ogg';
  lolsounds[19] = 'lolsound/Camille_Ban.ogg';
  lolsounds[20] = 'lolsound/Caitlyn_Ban.ogg';
  lolsounds[21] = 'lolsound/Elise_Ban.ogg';
  lolsounds[22] = 'lolsound/BelVeth_Ban.ogg';
  lolsounds[23] = 'lolsound/Aphelios_Ban.ogg';
  lolsounds[24] = 'lolsound/Evelynn_Ban.ogg';
  lolsounds[25] = 'lolsound/Azir_Ban.ogg';
  lolsounds[26] = 'lolsound/Ashe_Ban.ogg';
  lolsounds[27] = 'lolsound/Blitzcrank_Ban.ogg';
  lolsounds[28] = 'lolsound/AurelionSol_Ban.ogg';
  lolsounds[29] = 'lolsound/Anivia_Ban.ogg';
  lolsounds[30] = 'lolsound/Bard_Ban.ogg';
  lolsounds[31] = 'lolsound/Morgana_Ban.ogg';
  lolsounds[32] = 'lolsound/Ekko_Ban.ogg';
  lolsounds[33] = 'lolsound/Annie_Ban.ogg';
  lolsounds[34] = 'lolsound/Akshan_Ban.ogg';
  lolsounds[35] = 'lolsound/Brand_Ban.ogg';
  lolsounds[36] = 'lolsound/Alistar_Ban.ogg';
  lolsounds[37] = 'lolsound/Poppy_Ban.ogg';
  lolsounds[38] = 'lolsound/Draven_Ban.ogg';
  lolsounds[39] = 'lolsound/Akali_Ban.ogg';


  function changeSound() {
    document.getElementById('sfx-playa' + i).classList.add('show-hide');
    if (i < lolsounds.length-1) {
      i++;
      console.log("This is question " + i);
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
  };
  
  var summary = [];
  
  function guess(id, guess) {
  var button = document.getElementById(id);
    button.onclick = function() {
      quiz.guess(guess, quiz.getQuestionIndex());
      populate();
      
    }
  };
  
  function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
  };


  
  function showScores() {
    console.log("summary", summary);
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
    for (i = 0; i < questions.length; i++) {
      if (summary[i].isCorrect == true) {
        gameOverHTML += "<span class='correct'>" + (i+1) + ") " + " <span class='summaryPlaceholder'>SFX:</span> " + "<audio class='no-margin' controls id='sfx-playa" + [i] +"'>" + "<source src='https://github.com/L42cf/projects/blob/main/" + summary[i].soundFile + "?raw=true' id='track'>" + "</audio>" + "<b>  Correct.</b> " + "<span class='normal-answer'>&nbsp;Your&nbsp;Answer:&nbsp;"  + summary[i].answer + "</span></span>";
      } else if (summary[i].isCorrect == false) {
        gameOverHTML += "<span class='wrong'>" + (i+1) + ") " + " <span class='summaryPlaceholder'>SFX:</span> " + "<audio class='no-margin' controls id='sfx-playa" + [i] +"'>" + "<source src='https://github.com/L42cf/projects/blob/main/" + summary[i].soundFile + "?raw=true' id='track'>" + "</audio>" + "<b>  Incorrect.</b> " + "<span class='normal'>&nbsp;Your&nbsp;Answer:&nbsp;</span><span class='normal-input'>"  + summary[i].answer + "</span>" + " <span class='normal'> | Correct&nbsp;Answer:&nbsp;</span><span class='normal-answer'>" + summary[i].question + "</span></span>";
      }
    }
    
    
    
    var element = document.getElementById("quiz");
    
    element.innerHTML = gameOverHTML;
  };
  
  // create questions
  var questions = [

    new Question("Who says this?",
    ["Zed", "Jhin", "Urgot", "Aatrox"], "Urgot"),
    new Question("Who says this?",
    ["Jhin", "Darius", "Pyke", "Zed"], "Zed"),
    new Question("Who says this?",
    ["ChoGath", "Aatrox", "BelVeth", "Rammus"], "ChoGath"),
    new Question("Who says this?",
    ["Morgana", "Cassiopeia", "Elise", "Diana"], "Diana"),
    new Question("Who says this?",
    ["Ezreal", "Akshan", "Ekko", "Draven"], "Ezreal"),
    new Question("Who says this?",
    ["Aatrox", "Brand", "Urgot", "Pyke"], "Aatrox"),
    new Question("Who says this?",
    ["Corki", "Amumu", "Poppy", "Annie"], "Amumu"),
    new Question("Who says this?",
    ["Draven", "Aatrox", "Urgot", "Darius"], "Darius"),
    new Question("Who says this?",
    ["Jhin", "Akshan", "AurelionSol", "Draven"], "Jhin"),
    new Question("Who says this?",
    ["Akali", "Morgana", "Cassiopeia", "Evelynn"], "Cassiopeia"),
    new Question("Who says this?",
    ["Lulu", "Poppy", "Lux", "Annie"], "Lulu"),
    new Question("Who says this?",
    ["Qiyana", "Ahri", "Caitlyn", "Evelynn"], "Ahri"),
    new Question("Who says this?",
    ["Seraphine", "Ashe", "Lux", "Ezreal"], "Lux"),
    new Question("Who says this?",
    ["Braum", "Jhin", "Akshan", "Azir"], "Braum"),
    new Question("Who says this?",
    ["Qiyana", "Draven", "Camille", "Akshan"], "Qiyana"),
    new Question("Who says this?",
    ["Poppy", "Corki", "Amumu", "Rammus"], "Corki"),
    new Question("Who says this?",
    ["Pyke", "Aatrox", "Urgot", "Jhin"], "Pyke"),
    new Question("Who says this?",
    ["Seraphine", "Ahri", "Akali", "Rammus"], "Seraphine"),
    new Question("Who says this?",
    ["Rammus", "Ahri", "Akali", "Seraphine"], "Rammus"),
    new Question("Who says this?",
    ["BelVeth", "Camille", "Akali", "Caitlyn"], "Camille"),
    new Question("Who says this?",
    ["Ashe", "Poppy", "Camille", "Caitlyn"], "Caitlyn"),
    new Question("Who says this?",
    ["Elise", "Cassiopeia", "Evelynn", "Diana"], "Elise"), 
    new Question("Who says this?",
    ["Morgana", "ChoGath", "BelVeth", "Aatrox"], "BelVeth"),
    new Question("Who says this?",
    ["AurelionSol", "Jhin", "Bard", "Aphelios"], "Aphelios"),
    new Question("Who says this?",
    ["Evelynn", "Ahri", "Morgana", "Elise"], "Evelynn"),
    new Question("Who says this?",
    ["Qiyana", "Azir", "Bard", "AurelionSol"], "Azir"),
    new Question("Who says this?",
    ["BelVeth", "Akali", "Evelynn", "Ashe"], "Ashe"),
    new Question("Who says this?",
    ["Rammus", "Blitzcrank", "Azir", "Zed"], "Blitzcrank"),
    new Question("Who says this?",
    ["AurelionSol", "ChoGath", "Jhin", "Aatrox"], "AurelionSol"),
    new Question("Who says this?",
    ["Ashe", "Anivia", "Akali", "Caitlyn"], "Anivia"),
    new Question("Who says this?",
    ["Blitzcrank", "Aphelios", "AurelionSol", "Bard"], "Bard"),
    new Question("Who says this?",
    ["Evelynn", "Morgana", "Elise", "Caitlyn"], "Morgana"),
    new Question("Who says this?",
    ["Ekko", "Akshan", "Draven", "Rammus"], "Ekko"),
    new Question("Who says this?",
    ["Lulu", "Amumu", "Poppy", "Annie"], "Annie"),
    new Question("Who says this?",
    ["Alistar", "Ezreal", "Draven", "Akshan"], "Akshan"),
    new Question("Who says this?",
    ["Annie", "Pyke", "Brand", "Zed"], "Brand"),
    new Question("Who says this?",
    ["Alistar", "Draven", "Braum", "Aatrox"], "Alistar"),
    new Question("Who says this?",
    ["Akali", "Evelynn", "Lulu", "Poppy"], "Poppy"),
    new Question("Who says this?",
    ["Draven", "Akshan", "Ezreal", "Rammus"], "Draven"),
    new Question("Who says this?",
    ["Evelynn", "Elise", "Ahri", "Akali"], "Akali"),

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
  
  Quiz.prototype.guess = function(answer, question) {
    var isCorrect = false;
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
      console.log("You got this correct");
      isCorrect = true;
    } else {
      console.log("You got this wrong");
      isCorrect = false;
    }

    // answer = answer
    // question number = this.questionIndex + 1
    // isCorrect
    summary.push({
      answer: answer,
      question: question.answer,
      isCorrect: isCorrect,
      soundFile: lolsounds[this.questionIndex],
      // soundBite: document.getElementById('sfx-playa' + (i-1))
    });
    console.log("question", question);

    console.log("summary guess", summary);
    
    this.questionIndex++;
  }
  
  Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
  }

  
  
  // create quiz
  var quiz = new Quiz(questions);
  // display quiz
  populate();