<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="David" />
        <title>Fairygirl Soundboard</title>
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
        <!-- Font Awesome icons (free version)-->
        <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossorigin="anonymous"></script>
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="styles.css" rel="stylesheet" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    </head>
    <body id="page-top">
        <!-- class="bg-image" style="background-image: url(images/fgrainbow.png); height: 100%; background-repeat:no-repeat; background-position: top; background-size: cover"; -->
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">Fairygirl</span>
                <span class="d-none d-lg-block navbar-logo"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="images/fairygirl.png" alt="Fairygirl profile picture." /></span>
            </a>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item text-white">Fairygirl</li>
                </ul>
            </div>  
            <div class="social-icons">
                <a class="social-icon" href="https://www.twitch.tv/fairygirl"><i class="fab fa-twitch"></i></a>
                <a class="social-icon" href="https://twitter.com/LoLFairyGirl"><i class="fab fa-twitter"></i></a>
                <a class="social-icon" href="https://www.youtube.com/channel/UC5Miqcc_URGFv-fpXprXZCw"><i class="fab fa-youtube"></i></a>
            </div>
        </nav>
        <!-- Page Content-->
        <div class="container-fluid p-0 redxd">
            <section>
                <div class="wrapper justify-content-center">
                    <h1 class="mb-0 d-flex justify-content-center header-padding">
                        Fairygirl Soundboard
                    </h1>
                    <div class="full-page">
                        <span class="d-lg-none center">
                            <img class="img-icon center rounded-circle mx-auto mb-2" src="images/fairygirl.png" alt="Fairygirl profile picture." />
                       </span>
                    </div>

                    
                    <div class="fg-content bg-image b-padding rainbow-pic" >
                        <div class="fg-sounds">

                            <?php
                                $dir = new DirectoryIterator('./sounds');
                                foreach ($dir as $fileinfo) {
                                    if($fileinfo->isDot()) continue;
                                    echo '<button data-audio="sounds/' . $fileinfo->getFilename() . '" class="sound btn btn-primary">' . $fileinfo->getBasename('.mp3') . '</button>';
                                }
                            ?>

                            <!-- <button data-audio="sounds/aha uwu hahah UWU.mp3" class="sound btn btn-primary">aha uwu hahah UWU</button>

                            <button data-audio="sounds/Animal crossing catch a fish noise.mp3" class="sound btn btn-primary">Animal crossing catch a fish noise</button>

                            <button data-audio="sounds/anime silver 4.mp3" class="sound btn btn-primary">anime silver 4</button>

                            <button data-audio="sounds/barky warky.mp3" class="sound btn btn-primary">barky warky</button>
                            
                            <button data-audio="sounds/bitch im a cow moo.mp3" class="sound btn btn-primary">bitch im a cow moo</button>
                            
                            <button data-audio="sounds/boing BOING.mp3" class="sound btn btn-primary">boing BOING</button>
                            
                            <button data-audio="sounds/brain gap.mp3" class="sound btn btn-primary">brain gap</button>

                            <button data-audio="sounds/can i get a weo weo and a who who.mp3" class="sound btn btn-primary">can i get a weo weo and a who who</button>

                            <button data-audio="sounds/chat calls her toxic.mp3" class="sound btn btn-primary">chat calls her toxic</button>

                            <button data-audio="sounds/crazy laugh.mp3" class="sound btn btn-primary">crazy laugh</button>




                            <button data-audio="sounds/crazy laugh 2.mp3" class="sound btn btn-primary">crazy laugh 2</button>

                            <button data-audio="sounds/cuwute.mp3" class="sound btn btn-primary">cuwute</button>

                            <button data-audio="sounds/did i say you could say that bitch.mp3" class="sound btn btn-primary">did i say you could say that bitch</button>
                            
                            <button data-audio="sounds/do you want to hehehehe.mp3" class="sound btn btn-primary">do you want to hehehehe</button>
                            
                            <button data-audio="sounds/duOWO.mp3" class="sound btn btn-primary">duOWO</button>
                            
                            <button data-audio="sounds/eww kill it.mp3" class="sound btn btn-primary">eww kill it</button>
                            
                            <button data-audio="sounds/ewwww.mp3" class="sound btn btn-primary">ewww</button>
                            
                            <button data-audio="sounds/ewwwwwwwwwwwwwww.mp3" class="sound btn btn-primary">ewwww</button>
                            
                            <button data-audio="sounds/feelsbadman.mp3" class="sound btn btn-primary">feelsbadman</button>
                            
                            <button data-audio="sounds/fish fish fish.mp3" class="sound btn btn-primary">fish fish fish</button>



                            
                            <button data-audio="sounds/fuck fuck fuck.mp3" class="sound btn btn-primary">fuck x11</button>
                            
                            <button data-audio="sounds/gasp duuuude.mp3" class="sound btn btn-primary">gasp duuuude</button>
                            
                            <button data-audio="sounds/giggle.mp3" class="sound btn btn-primary">giggle</button>
                            
                            <button data-audio="sounds/go next.mp3" class="sound btn btn-primary">go next</button>
                            
                            <button data-audio="sounds/good morning bitch.mp3" class="sound btn btn-primary">good morning bitch</button>
                            
                            <button data-audio="sounds/hi voyboy chan.mp3" class="sound btn btn-primary">hi voyboy chan</button>
                            
                            <button data-audio="sounds/hiya hiya.mp3" class="sound btn btn-primary">hiya hiya</button>
                            
                            <button data-audio="sounds/hiya.mp3" class="sound btn btn-primary">hiya</button>



                            
                            <button data-audio="sounds/hmm woops.mp3" class="sound btn btn-primary">hmm woops</button>
                            
                            <button data-audio="sounds/how crazy am i.mp3" class="sound btn btn-primary">how crazy am i</button>
                            
                            <button data-audio="sounds/howdy.mp3" class="sound btn btn-primary">howdy</button>
                            
                            <button data-audio="sounds/i didnt say woof.mp3" class="sound btn btn-primary">i didnt say woof</button>
                            
                            <button data-audio="sounds/i dont care.mp3" class="sound btn btn-primary">i dont care</button>
                            
                            <button data-audio="sounds/i dont wanna play.mp3" class="sound btn btn-primary">i dont wanna play</button>
                            
                            <button data-audio="sounds/i have issues.mp3" class="sound btn btn-primary">i have issues</button>
                            
                            <button data-audio="sounds/i wanna die.mp3" class="sound btn btn-primary">i wanna die</button>
                            
                            <button data-audio="sounds/i want to cry.mp3" class="sound btn btn-primary">i want to cry</button>
                            
                            <button data-audio="sounds/i wasnt TRYING to troll.mp3" class="sound btn btn-primary">i wasnt TRYING to troll</button>



                            <button data-audio="sounds/im cappin.mp3" class="sound btn btn-primary">im cappin</button>
                            
                            <button data-audio="sounds/im fucking stupid.mp3" class="sound btn btn-primary">im fucking stupid</button>
                            
                            <button data-audio="sounds/im logging out.mp3" class="sound btn btn-primary">im logging out</button>
                            
                            <button data-audio="sounds/im not toxic shut up.mp3" class="sound btn btn-primary">im not toxic shut up</button>
                            
                            <button data-audio="sounds/im not upset.mp3" class="sound btn btn-primary">im not upset</button>
                            
                            <button data-audio="sounds/im quitting league.mp3" class="sound btn btn-primary">im quitting league</button>
                            
                            <button data-audio="sounds/its a prank.mp3" class="sound btn btn-primary">its a prank</button>
                            
                            <button data-audio="sounds/its not even funny.mp3" class="sound btn btn-primary">its not even funny</button>
                            
                            <button data-audio="sounds/levy ghost noises.mp3" class="sound btn btn-primary">levy ghost noises</button>
                            
                            <button data-audio="sounds/meowch.mp3" class="sound btn btn-primary">meowch</button>



                            <button data-audio="sounds/mew.mp3" class="sound btn btn-primary">mew</button>
                            
                            <button data-audio="sounds/montage that.mp3" class="sound btn btn-primary">montage that</button>
                            
                            <button data-audio="sounds/my lane got RUINED.mp3" class="sound btn btn-primary">my lane got RUINED
                            </button>
                            
                            <button data-audio="sounds/no really i dont.mp3" class="sound btn btn-primary">no really i dont</button>
                            
                            <button data-audio="sounds/no.mp3" class="sound btn btn-primary">no</button>
                            
                            <button data-audio="sounds/nooooo.mp3" class="sound btn btn-primary">nooooo</button>
                            
                            <button data-audio="sounds/nya haha.mp3" class="sound btn btn-primary">nya haha</button>
                            
                            <button data-audio="sounds/nya hahaha.mp3" class="sound btn btn-primary">nya hahaha</button>
                            
                            <button data-audio="sounds/nya~.mp3" class="sound btn btn-primary">nya~</button>
                            
                            <button data-audio="sounds/nyaa.mp3" class="sound btn btn-primary">nyaa</button>




                            <button data-audio="sounds/nyaaa.mp3" class="sound btn btn-primary">nyaaa</button>
                            
                            <button data-audio="sounds/nyyyyya.mp3" class="sound btn btn-primary">nyyyyya</button>
                            
                            <button data-audio="sounds/oh my fking god ah uh haha.mp3" class="sound btn btn-primary">oh my fking god ah uh haha</button>
                            
                            <button data-audio="sounds/oh noo.mp3" class="sound btn btn-primary">oh noo</button>
                            
                            <button data-audio="sounds/oh oh.mp3" class="sound btn btn-primary">oh oh</button>
                            
                            <button data-audio="sounds/oh yeah thats pretty cringe.mp3" class="sound btn btn-primary">oh yeah thats pretty cringe</button>
                            
                            <button data-audio="sounds/oh.mp3" class="sound btn btn-primary">oh</button>
                            
                            <button data-audio="sounds/ok boomer.mp3" class="sound btn btn-primary">ok boomer</button>
                            
                            <button data-audio="sounds/okay boomer.mp3" class="sound btn btn-primary">okay boomer</button>
                            
                            <button data-audio="sounds/okay fine okay fine.mp3" class="sound btn btn-primary">okay fine okay fine</button>



                            <button data-audio="sounds/okay like.mp3" class="sound btn btn-primary">okay like</button>
                            
                            <button data-audio="sounds/okay no eww.mp3" class="sound btn btn-primary">okay no eww</button>
                            
                            <button data-audio="sounds/okay sorry sorry sorry.mp3" class="sound btn btn-primary">okay sorry sorry sorry</button>
                            
                            <button data-audio="sounds/omg.mp3" class="sound btn btn-primary">omg</button>
                            
                            <button data-audio="sounds/omg 2.mp3" class="sound btn btn-primary">omg 2</button>
                            
                            <button data-audio="sounds/one arrow one story.mp3" class="sound btn btn-primary">one arrow one story</button>
                            
                            <button data-audio="sounds/oof.mp3" class="sound btn btn-primary">oof</button>
                            
                            <button data-audio="sounds/owo whats this.mp3" class="sound btn btn-primary">owo whats this</button>
                            
                            <button data-audio="sounds/parrot noise.mp3" class="sound btn btn-primary">parrot noise</button>
                            
                            <button data-audio="sounds/pew.mp3" class="sound btn btn-primary">pew</button>



                            <button data-audio="sounds/pika pika.mp3" class="sound btn btn-primary">pika pika</button>
                            
                            <button data-audio="sounds/pika pika 2.mp3" class="sound btn btn-primary">pika pika 2</button>
                            
                            <button data-audio="sounds/poggy.mp3" class="sound btn btn-primary">poggy</button>
                            
                            <button data-audio="sounds/poggy champer.mp3" class="sound btn btn-primary">poggy champer</button>
                            
                            <button data-audio="sounds/poggy champer bot lane camper.mp3" class="sound btn btn-primary">poggy champer bot lane camper</button>
                            
                            <button data-audio="sounds/prepare for takeoff.mp3" class="sound btn btn-primary">prepare for takeoff</button>
                            
                            <button data-audio="sounds/putting that on my resume.mp3" class="sound btn btn-primary">putting that on my resume</button>
                            
                            <button data-audio="sounds/rawr.mp3" class="sound btn btn-primary">rawr</button>
                            
                            <button data-audio="sounds/rawr 2.mp3" class="sound btn btn-primary">rawr 2</button>
                            
                            <button data-audio="sounds/rawr baited.mp3" class="sound btn btn-primary">rawr baited</button>



                            <button data-audio="sounds/scream.mp3" class="sound btn btn-primary">scream</button>
                            
                            <button data-audio="sounds/scuffed.mp3" class="sound btn btn-primary">scuffed</button>
                            
                            <button data-audio="sounds/so good at being cringe.mp3" class="sound btn btn-primary">so good at being cringe</button>
                            
                            <button data-audio="sounds/sorry haha.mp3" class="sound btn btn-primary">sorry haha</button>
                            
                            <button data-audio="sounds/stinky blob.mp3" class="sound btn btn-primary">stinky blob</button>
                            
                            <button data-audio="sounds/stop.mp3" class="sound btn btn-primary">stop</button>
                            
                            <button data-audio="sounds/stop making me laugh.mp3" class="sound btn btn-primary">stop making me laugh</button>
                            
                            <button data-audio="sounds/subscribe please.mp3" class="sound btn btn-primary">subscribe please</button>
                            
                            <button data-audio="sounds/thank you for existing.mp3" class="sound btn btn-primary">thank you for existing</button>
                            
                            <button data-audio="sounds/that aint it.mp3" class="sound btn btn-primary">that aint it</button>




                            <button data-audio="sounds/that is bullshit.mp3" class="sound btn btn-primary">that is bullshit</button>
                            
                            <button data-audio="sounds/thats pretty cringe.mp3" class="sound btn btn-primary">thats pretty cringe</button>
                            
                            <button data-audio="sounds/thats so embarassing.mp3" class="sound btn btn-primary">thats so embarassing</button>
                            
                            <button data-audio="sounds/UR CAPPING.mp3" class="sound btn btn-primary">UR CAPPING</button>
                            
                            <button data-audio="sounds/uwu you can come in.mp3" class="sound btn btn-primary">uwu you can come in</button>
                            
                            <button data-audio="sounds/villain laugh.mp3" class="sound btn btn-primary">villain laugh</button>
                            
                            <button data-audio="sounds/welcome to summoners rift.mp3" class="sound btn btn-primary">welcome to summoners rift</button>
                            
                            <button data-audio="sounds/whaaaat.mp3" class="sound btn btn-primary">whaaaat</button>
                            
                            <button data-audio="sounds/what are you doing stepbro.mp3" class="sound btn btn-primary">what are you doing stepbro</button>
                            
                            <button data-audio="sounds/what the FUCK.mp3" class="sound btn btn-primary">what the FUCK</button>





                            <button data-audio="sounds/WHO WE OOH.mp3" class="sound btn btn-primary">WHO WE OOH</button>
                            
                            <button data-audio="sounds/why did i just say that.mp3" class="sound btn btn-primary">why did i just say that</button>
                            
                            <button data-audio="sounds/WOOF.mp3" class="sound btn btn-primary">WOOF</button>
                            
                            <button data-audio="sounds/woof woof or barky warky.mp3" class="sound btn btn-primary">woof woof or barky warky</button>
                            
                            <button data-audio="sounds/woooooow man.mp3" class="sound btn btn-primary">woooooow man</button>
                            
                            <button data-audio="sounds/yay.mp3" class="sound btn btn-primary">yay</button>

                            <button data-audio="sounds/yo yo can i get a weo weo.mp3" class="sound btn btn-primary">yo yo can i get a weo weo</button>
                            
                            <button data-audio="sounds/you baka.mp3" class="sound btn btn-primary">you baka</button> -->
                            
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>


                        </div>
                    </div>
                </div>
            </section>
        </div>
        
        <footer class="footer justify-content-center">
            <div class="audio-player justify-content-center">
                <audio id="playa" controls>
                    <source src="">
                </audio> 
            </div>
        </footer>
        <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Core theme JS-->
        <script src="scripts.js"></script>
    </body>
</html>
