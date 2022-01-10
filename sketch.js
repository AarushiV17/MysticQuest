var bg , bgImg;
var logo, logoImg;
var gbutton, gbuttonImg;
var bg2, bg2Img;
var bg3, bg3Img;
var bird1, bird2, enemy1, enemy2;
var START = 0;
var LEVEL1 = 1;
var LEVEL1WIN = 7;
var LEVEL2 = 2;
var LEVEL2WIN = 8;
var LEVEL3 = 3;
var GAMEOVER = 4;
var GAMEWIN = 5;
var GAMEWIN2 = 6;
var GAMEOVER2 = 9;
var LEVELUP = 10;
var STORY = 11;
var gameState = START;
var player,playerImg,playerImg2;
var unicorn, Stand , Run;
var invisGround,invisGround2;
var diamond1,diamond2,diamond3,diamond4,diamond5;
var star1,star2,star3,star4,star5;
var enemy, enemyGroup;
var invisWall1, invisWall2, invisWall3,invisWall4,invisWall5;
var killer1Img, killer2Img,killer3Img, killer1, killer2,killer3;
var horn,hornImg;
var diamondboard,diamondboardImg;
var starboard,starboardImg;
var gameOverImg,gameOver;
var gameWinImg , gameWin;
var bowImg, bow;
var diamondCount = 0;
var starCount = 0;
var level1win,level1winImg;
var bg4Img , bg4;
var gem1 , gem2;
var obstacle , obstaclesGroup;
var fire , spear;
var clock , clockImage;
var pearlCount = 0;
var pearlBoard, pearlImg;
var timer1=200,timer2=50,timer=0,timer3=0;
var pearl1, pearl1Img;
var pearl2 , pearl2Img;
var gameover2, gameover2Img;
var levelup,levelupImg;
var mermaid,mermaidImg,mermaidImg1;
var pearl,pearlImg;
var bridge,bridgeImg;
var gamewin2,gamewin2Img;
var level3, level3Img,gamewin3,gamewin3Img,gameover3,gameover3Img;
var bg5 , bg5Img ;
var bg6 , bg6Img ;
var dragon , dragonImg;
var waterarrow,waterarrowImg,waterbow,waterbowImg,firearrow,firearrowImg,firebow,firebowImg,bagfull,bagempty,bagfullImg,bagemptyImg,bow1,bowImg3,rightfireImg;
var waterarrowcount=5,firearrowcount=5,health=100,dragonhealth=100;
var howtoplay , howtoplayImg , infoScreen, storyImg;
var music;

function preload(){
  bgImg = loadImage('bg.jpg')
  logoImg = loadImage('logo.png')
  gbuttonImg = loadImage('gbutton.png')
  bg2Img = loadImage('bg2.png')
  bird1 = loadImage('bird1.gif')
  bird2 = loadImage('bird2.gif')
  enemy1 = loadImage('enemy1.gif')
  enemy2 = loadImage('enemy2.gif')
 playerImg = loadAnimation('png/idle.png','png/idle2.png','png/idle3.png','png/idle4.png','png/idle5.png','png/idle6.png','png/idle7.png','png/idle8.png','png/idle9.png')
 diamondImg = loadImage('reward1.gif');
 starImg = loadImage('reward2.gif');
 hornImg = loadImage('horn.png');
 killer1Img = loadImage('killer.png');
 killer2Img = loadImage('killer2.png');
 killer3Img = loadImage('killer3.gif')
 starboardImg = loadImage('starboard.png');
 diamondboardImg = loadImage('diamondboard.png')
 gameOverImg = loadImage('gameOver.png')
 playerImg2 = loadAnimation('png/Dead__000.png','png/Dead__001.png','png/Dead__002.png','png/Dead__003.png','png/Dead__004.png','png/Dead__005.png','png/Dead__006.png','png/Dead__007.png','png/Dead__008.png','png/Dead__008.png','png/Dead__008.png','png/Dead__008.png','png/Dead__008.png','png/Dead__009.png','png/Dead__009.png','png/Dead__009.png','png/Dead__009.png','png/Dead__009.png','png/Dead__009.png')
 gameWinImg = loadImage('gamewin.png');
 bg3Img = loadImage('bg8.png');
 Stand = loadImage('standingunicorn.gif');
 Run = loadImage('unicornwalking.gif')
 bowImg = loadImage('bow.png');
 level1winImg = loadImage('level1win.png');
 bg4Img = loadImage('bg1.webp');
 fire = loadImage('topfireball.png');
 spear = loadImage('spear.png')
 clockImg = loadImage('timerimage.png');
 pearlBoardImg = loadImage('scoreboard.png');
 pearl1Img = loadImage('gem1.gif');
 pearl2Img = loadImage('gem2.gif');
 gameOver2Img = loadImage('gameover2.png');
 levelupImg = loadImage('levelup2.png');
 mermaidImg = loadImage('mermaid6.png')
 pearlImg = loadImage('pearl.png')
 mermaidImg1 = loadImage('mermaid4.gif');
 bridgeImg = loadImage('bridge1.png');
 gamewin2Img = loadImage('gamewin2.png');
 gameover3Img = loadImage('gameover2.png');
 bg5Img = loadImage('bg12.jpg');
 bg6Img = loadImage('bg14.png');
 dragonImg = loadImage('dragon.gif');
 bagemptyImg = loadImage('bagempty.png');
 bagfullImg = loadImage('bagfull.png');
 waterarrowImg = loadImage('waterarrow.png');
 waterbowImg = loadImage('waterbow.png');
 firearrowImg = loadImage('firearrow.png');
 firebowImg = loadImage('firebow.png');
 level3Img = loadImage('level3.png');
 gamewin3Img = loadImage('gamewin3.png');
 gameover3Img = loadImage('gameover3.png')
 bowImg3 = loadImage('bow1.png');
 rightfireImg = loadImage('rightfire.png');
 howtoplayImg = loadImage('howtoplay.png');
 storyImg = loadImage('story.png')
 music = loadSound('music.mp3');
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  logo = createSprite(750,250);
  logo.addImage(logoImg);
  logo.scale = 0.7

  gbutton = createSprite(750,600);
  gbutton.addImage(gbuttonImg);
  gbutton.scale = 0.3

  player = createSprite(200,500);
  player.addAnimation("Idle",playerImg);
  player.addAnimation("dead",playerImg2);
  player.scale = 0.35

  invisGround = createSprite(width/2,630,width,10);
  invisGround.visible = false;

  invisGround = createSprite(width/2,630,width,10);
  invisGround.visible = false;

  diamond1 = createSprite(400,100);
  diamond1.addImage(diamondImg);
  diamond1.scale = 0.45;

  diamond2 = createSprite(600,300);
  diamond2.addImage(diamondImg);
  diamond2.scale = 0.45

  diamond3 = createSprite(1400,400);
  diamond3.addImage(diamondImg);
  diamond3.scale = 0.45

  diamond4 = createSprite(1000,500);
  diamond4.addImage(diamondImg);
  diamond4.scale = 0.45

  diamond5 = createSprite(900,100);
  diamond5.addImage(diamondImg);
  diamond5.scale = 0.45

  star1 = createSprite(100,100);
  star1.addImage(starImg);
  star1.scale = 0.25

  horn = createSprite(790,350);
  horn.addImage(hornImg);
  horn.scale = 0.5

  star3 = createSprite(1400,650);
  star3.addImage(starImg);
  star3.scale = 0.25

  star4 = createSprite(1250,250);
  star4.addImage(starImg);
  star4.scale = 0.25

  star5 = createSprite(450,500);
  star5.addImage(starImg);
  star5.scale = 0.25

  invisWall1 = createSprite(775,250,350,10);
  invisWall1.visible = false;

  invisWall2 = createSprite(650,325,10,350);
  invisWall2.visible = false;

  invisWall3 = createSprite(775,450,350,10);
  invisWall3.visible = false;

  invisWall4 = createSprite(950,325,10,350);
  invisWall4.visible = false;

  invisWall5 = createSprite(width-20,450,20,300)
  invisWall5.visible = false;

 killer1 = createSprite(940,300);
  killer1.addImage(killer1Img);
  killer1.scale = 0.3;
  killer1.velocityY = 0.5;

 killer2 = createSprite(650,300);
 killer2.addImage(killer2Img);
 killer2.scale = 0.3; 
 killer2.velocityY = -1;

 killer3 = createSprite(775,450);
 killer3.addImage(killer3Img);
 killer3.scale = 0.2;
 killer3.velocityX = 2;

 diamondboard = createSprite(1200,50);
 diamondboard.addImage(diamondboardImg);
 diamondboard.scale = 0.12

 starboard = createSprite(1400,50);
 starboard.addImage(starboardImg);
 starboard.scale = 0.12;

 gameOver = createSprite(width/2,height/2)
 gameOver.addImage(gameOverImg);
 gameOver.scale = 0.6;

 gameWin = createSprite(width/2,height/2);
 gameWin.addImage(gameWinImg);
 gameWin.scale = 0.3;

 level1win = createSprite(width/2,height/2);
 level1win.addImage(level1winImg);
 level1win.scale = 0.3;

 unicorn = createSprite(1000,450);
 unicorn.addAnimation("unicornStand",Stand);
 unicorn.addAnimation("unicornRun",Run);
 unicorn.scale = 1.3;

 bow = createSprite(1000,450);
 bow.addImage(bowImg);
 bow.scale = 0.2;

 clock = createSprite(200,100);
 clock.addImage(clockImg);
 clock.scale = 0.15;

 pearlBoard = createSprite(1300,100);
 pearlBoard.addImage(pearlBoardImg);
 pearlBoard.scale = 0.15;

 pearl1 = createSprite(300,450);
 pearl1.addImage(pearl1Img);
 pearl1.scale = 0.6;

 pearl2 = createSprite(1000,300);
 pearl2.addImage(pearl2Img);
 pearl2.scale = 0.6;

gameover2 = createSprite(width/2,height/2);
gameover2.addImage(gameOver2Img);
gameover2.scale = 0.3
 
levelup = createSprite(width/2,height/2);
levelup.addImage(levelupImg);
levelup.scale = 0.3;

mermaid = createSprite(width/2+350,height-250);
mermaid.addImage(mermaidImg);
mermaid.scale = 1;
mermaid.visible = false;

pearl = createSprite(width/2+200,height-370);
pearl.addImage(pearlImg);
pearl.scale = 0.2;
pearl.visible = false;

bridge = createSprite(width/2,height-170);
bridge.addImage(bridgeImg);
bridge.scale = 0.65;
bridge.visible = false;

gamewin2 = createSprite(width/2-200,height/2+100);
gamewin2.addImage(gamewin2Img);
gamewin2.scale = 0.3;
gamewin2.visible = false;

gameover3 = createSprite(width/2,height/2);
gameover3.addImage(gameover3Img);
gameover3.scale = 0.3;
gameover3.visible = false;

  dragon = createSprite(width-200,height-300);
  dragon.addImage(dragonImg);
  dragon.scale = 1.2;
  dragon.visible = false;

  bag = createSprite(player.x-20,player.y);
  bag.addImage(bagfullImg);
  bag.scale = 0.05;
  bag.visible = false;

  bow1 = createSprite(player.x,player.y)
  bow1.addImage(bowImg3)
  bow1.scale = 0.05;
  bow1.visible = false;

  waterarrow = createSprite(bow1.x,bow1.y);
  waterarrow.addImage(waterarrowImg);
  waterarrow.scale = 0.1;
  waterarrow.visible = false;

  firearrow = createSprite(bow1.x,bow.y);
  firearrow.addImage(firearrowImg);
  firearrow.scale = 0.1;
  firearrow.visible = false;

  waterbow = createSprite(350,80);
  waterbow.addImage(waterbowImg);
  waterbow.scale = 0.15;
  waterbow.visible = false;

  firebow = createSprite(130,80);
  firebow.addImage(firebowImg);
  firebow.scale = 0.15;
  firebow.visible = false;

  level3 = createSprite(width/2,80);
  level3.addImage(level3Img);
  level3.scale = 0.15;
  level3.visible = false;

  gamewin3 = createSprite(width/2,height/2)
  gamewin3.addImage(gamewin3Img);
  gamewin3.scale =0.3;
  gamewin3.visible = false;

  invisGround2 = createSprite(10,740,5000,20);
  invisGround2.visible = false;

  howtoplay = createSprite(1000,600)
  howtoplay.addImage(howtoplayImg);
  howtoplay.scale = 0.3;
  howtoplay.visible = false;

  infoScreen = createSprite(width/2,height/2);
  infoScreen.addImage(storyImg);
  infoScreen.scale = 0.5;

 enemyGroup = new Group();
 obstaclesGroup = new Group();
 fireballobGroup = new Group ();
}

function draw() {
  
  music.play();

  if(gameState === START){
    background(bgImg);
    logo.visible = true;
    gbutton.visible = true;
    player.visible = false;
    howtoplay.visible = true;

    diamond1.visible = false;
    diamond2.visible = false;
    diamond3.visible = false;
    diamond4.visible = false;
    diamond5.visible = false;

    star1.visible = false;
    horn.visible = false;
    star3.visible = false;
    star4.visible = false;
    star5.visible = false;

    killer1.visible = false;
    killer2.visible = false;
    killer3.visible = false;

    diamondboard.visible = false;
    starboard.visible = false;

    gameOver.visible = false;
    gameWin.visible = false;
    level1win.visible = false;

    unicorn.visible = false;
    bow.visible = false;

    clock.visible = false;
    pearlBoard.visible = false;

    pearl1.visible = false;
    pearl2.visible = false;

    gameover2.visible = false;
    levelup.visible = false;
    infoScreen.visible = false;

    if(mousePressedOver(gbutton)){
       gameState = LEVEL1;
    }
    
    if(mousePressedOver(howtoplay)){
      infoScreen.visible = true;
    }
  }
  
 


  if(gameState === LEVEL1){

    background(bg2Img); 
    logo.visible = false;
    gbutton.visible = false;
    player.visible = true;
    howtoplay.visible = false;

    diamond1.visible = true;
    diamond2.visible =true;
    diamond3.visible = true;
    diamond4.visible = true;
    diamond5.visible = true;

    star1.visible = true;;
    horn.visible = true;
    star3.visible = true;
    star4.visible = true;
    star5.visible = true;

    killer1.visible = true;
    killer2.visible = true;
    killer3.visible = true;

    diamondboard.visible = true;
    starboard.visible = true;

    gameOver.visible = false;
    gameWin.visible = false;
    level1win.visible = false;

    unicorn.visible = false;
    bow.visible = false;
 
    
    if(diamond1.isTouching(player)){
      diamond1.velocityX = 6;
      diamond1.velocityY = -0.3;
    }
    
    if(diamond2.isTouching(player)){
      diamond2.velocityX = 6;
      diamond2.velocityY = -2;
    }

    if(diamond3.isTouching(player)){
      diamond3.velocityX = -2;
      diamond3.velocityY = -5;
    }

    if(diamond4.isTouching(player)){
      diamond4.velocityX = 3;
      diamond4.velocityY = -5;
    }

    if(diamond5.isTouching(player)){
      diamond5.velocityX = 5;
      diamond5.velocityY = -1;
    }

    if(star1.isTouching(player)){
      star1.velocityX = 6;
      star1.velocityY = -0.2;
    }

    if(star3.isTouching(player)){
      star3.velocityX = 0.5;
      star3.velocityY = -5;
    }
    
    if(star4.isTouching(player)){
      star4.velocityX = 3;
      star4.velocityY = -3;
    }

    if(star5.isTouching(player)){
      star5.velocityX = 7;
      star5.velocityY = -3;
    }

    if(diamond1.isTouching(diamondboard)){
      diamond1.destroy();
      diamondCount = diamondCount+1;
    }

    if(diamond2.isTouching(diamondboard)){
      diamond2.destroy();
      diamondCount = diamondCount+1;
    }

    if(diamond3.isTouching(diamondboard)){
      diamond3.destroy();
      diamondCount = diamondCount+1;
    }

    if(diamond4.isTouching(diamondboard)){
      diamond4.destroy();
      diamondCount = diamondCount+1;
    }

    if(diamond5.isTouching(diamondboard)){
      diamond5.destroy();
      diamondCount = diamondCount+1;
    }

    if(star1.isTouching(starboard)){
      star1.destroy();
      starCount = starCount+1;
    }

    if(star3.isTouching(starboard)){
      star3.destroy();
      starCount = starCount+1;
    }

    if(star4.isTouching(starboard)){
      star4.destroy();
      starCount = starCount+1;
    }

    if(star5.isTouching(starboard)){
      star5.destroy();
      starCount = starCount+1;
    }
    
    if(enemyGroup.isTouching(player)){
      gameState = GAMEOVER;
      player.changeAnimation("dead",playerImg2)
    }

    if(killer1.isTouching(player)){
      gameState = GAMEOVER;
      player.changeAnimation("dead",playerImg2)
    }

    if(killer2.isTouching(player)){
      gameState = GAMEOVER;
      player.changeAnimation("dead",playerImg2)
    }

    if(killer3.isTouching(player)){
      gameState = GAMEOVER;
      player.changeAnimation("dead",playerImg2)
    }

    if(horn.isTouching(player)){
      gameState = GAMEWIN;
    }
    spawnEnemy();

  }

  if(keyDown("right_arrow")){
    player.x = player.x + 10;
  }

  if(keyDown("left_arrow")){
    player.x = player.x - 10;
  }

  if(keyDown("space")){
    player.velocityY = -10;
  }
  player.velocityY = player.velocityY+2;

  player.collide(invisGround);
  player.collide(invisGround2);

  killer1.bounceOff(invisWall1);
  killer1.bounceOff(invisWall3);
  killer2.bounceOff(invisWall1);
  killer2.bounceOff(invisWall3);
  killer3.bounceOff(invisWall2);
  killer3.bounceOff(invisWall4);

  if(gameState === GAMEOVER){
    background(bg2Img);

    gameOver.visible = true;

    enemyGroup.destroyEach();

    killer1.velocityY = 0;
    killer2.velocityY = 0;
    killer2.velocityX = 0;

    if(mousePressedOver(gameOver)){
      restart();
    }
  }

    if(gameState === GAMEWIN){
      background(bg2Img);

      gameWin.visible = true;
  
      enemyGroup.destroyEach();
  
      killer1.velocityY = 0;
      killer2.velocityY = 0;

      if(mousePressedOver(gameWin)){
        gameState = LEVEL1WIN;
        player.x = 300;
        player.y = 450;
      }
    }

    if(gameState === LEVEL1WIN){
      background(bg3Img);
      
      diamond1.visible = false;
      diamond2.visible = false;
      diamond3.visible = false;
      diamond4.visible = false;
      diamond5.visible = false;
  
      star1.visible = false;
      horn.visible = false;
      star3.visible = false;
      star4.visible = false;
      star5.visible = false;
  
      killer1.visible = false;
      killer2.visible = false;
      killer3.visible = false;
  
      diamondboard.visible = false;
      starboard.visible = false;
  
      gameOver.visible = false;
      gameWin.visible = false;

      player.changeAnimation("Idle",playerImg)

      unicorn.visible = true;
      bow.visible = true;

      if(bow.isTouching(player)){
        bow.x = player.x;
        bow.y = player.y;

        unicorn.changeAnimation("unicornRun",Run);
        unicorn.velocityX = 4;
      } 

      if(unicorn.isTouching(invisWall5)){
        unicorn.destroy();
        gameState = GAMEWIN2;
      }

    }

    if( gameState === GAMEWIN2){
      background(bg3Img);
      level1win.visible = true;
      bow.x = player.x;
      bow.y = player.y;

      if(mousePressedOver(level1win)){
        gameState = LEVEL2;
      }
    }

    if(gameState === LEVEL2 ){

       background(bg4Img);
       bow.visible = false;
       level1win.visible = false;
       clock.visible = true;
       pearlBoard.visible = true;
       timer++;
      
    if(timer>=300&&timer<500)
    {
      pearl1.visible = true;
      if(timer1!=0)
      {
      timer1--;
      }
      if(timer1===0)
      {
        pearl1.destroy();
        timer1=200;
    
      }
    }
    

    else if(timer>=800)
    {
      pearl2.visible = true;
      if(timer1!=0)
      {
      timer1--;
      }
           if(timer1===0)
      {
        pearl2.destroy();
        timer1=0;
      }
    }

    if(player.isTouching(obstaclesGroup))
    {
      gameState = GAMEOVER2;
     // obstaclesGroup.destroyEach();
      //pearl1.destroy();
      //pearl2.destroy();
    }

    if(player.isTouching(pearl1)&&pearl1.visible)
    {
      pearlCount = pearlCount +20;
      pearl1.destroy();
      timer1=200
    }
    if(player.isTouching(pearl2)&&pearl2.visible)
    {
      pearlCount = pearlCount +20;
      pearl2.destroy();
      timer1=0
    }
    if(pearlCount===20)
    {
      gameState = LEVEL2WIN;
    }

    spawnObstacles();
  }

   if(gameState === LEVEL2WIN){
     background(bg4Img)
     levelup.visible = true;
      
     if(mousePressedOver(levelup)){
        gameState = LEVELUP;
     }
    }

     if(gameState === GAMEOVER2){
      background(bg4Img);

     gameover2.visible = true;
  
      obstaclesGroup.destroyEach();

      if(mousePressedOver(gameover2)){
        restart2();
      }
    }

    else if(gameState===LEVELUP)
  {
    background(bg5Img);
    clock.visible = false;
    pearlBoard.visible = false;
    levelup.visible = false;
    mermaid.visible = true;
    player.x = width/2+100;
    player.y = height/2-80;
    pearl.visible = true;
    timer3++;
    if(timer3===200)
    {
      gamewin2.visible = true;
      mermaid.addImage(mermaidImg1);
      mermaid.scale =2;
      pearl.x = player.x+30;
      pearl.y = player.y;
      
    }
    else if(timer3>=250)
    {
      mermaid.visible = false;
      pearl.scale=0.1;
    }
if(mousePressedOver(gamewin2))
{
  gameState = LEVEL3;
  player.x = 350;
  player.y = 200;
}

  }

  
  else if(gameState === LEVEL3)
  {
    background(bg6Img);
    gamewin2.visible = false;
    pearl.visible = false;
    level3.visible = true;
    waterbow.visible = true;
    firebow.visible = true;
    bow1.visible = true;
    dragon.visible = true;
    bag.visible = true;
    invisGround.destroy();

    


    if(mousePressedOver(waterbow))
    {
      waterarrow = createSprite(bow1.x,bow1.y);
      waterarrow.addImage(waterarrowImg);
      waterarrow.scale = 0.1;
      arrowtype="water";
     
    }

    if(mousePressedOver(firebow))
    {
      firearrow = createSprite(bow1.x,bow1.y);
      firearrow.addImage(firearrowImg);
      firearrow.scale=0.1;
      arrowtype="fire";

    }
    if(keyDown("s"))
    {
      if(arrowtype==="water"&&waterarrowcount!=0)
      {
        waterarrowcount=waterarrowcount-1;
        waterarrow.velocityX = 3;
        waterarrow.velocityY = -3;
        arrowtype="nothing"
      }
      else if(arrowtype==="fire"&&firearrowcount!=0)
      {
        firearrowcount=firearrowcount-1;
        firearrow.velocityX = 3;
        firearrow.velocityY = -3;
        arrowtype="nothing"

      }
    }


    spawnfire();
   
    player.scale=0.4;
    bow1.x = player.x+40;
    bow1.y = player.y;
    bag.x = player.x-35;
    bag.y=player.y;
    
   if(player.isTouching(fireballobGroup))
    {
      fireballobGroup.destroyEach();
      health=health-20;
    }

     if(health===0)
    {
      fireballobGroup.destroyEach();
      gameover3.visible =true;
      dragon.visible = false;
      player.changeAnimation("dead",playerImg2);
      bow1.visible= false;
      bag.visible = false;
    }

    if(waterarrow.visible&&waterarrow.isTouching(dragon))
    {
      dragonhealth= dragonhealth-10;
      waterarrow.destroy();
    }
    if(firearrow.visible&&firearrow.isTouching(dragon))
    {
      dragonhealth= dragonhealth-10;
      firearrow.destroy();

    }

    if(dragonhealth===0)
    {
      dragon.destroy();
      fireballobGroup.destroyEach();
      gamewin3.visible =true;
      dragon.visible = false;
      player.visible = false;
      bow1.visible= false;
      bag.visible = false;
      waterarrow.visible = false;
      firearrow.visible = false;
      waterbow.visible = false;
      firebow.visible = false;
      level3.visible = false;
    }

    if(mousePressedOver(gameover3)&&gameover3.visible){
      gameState = LEVEL3;
      gameover3.visible = false;
      firearrow.destroy();
      waterarrow.destroy();
      player.changeAnimation("Idle",playerImg);
      waterarrowcount=5;
      firearrowcount=5;
      health=100;
      dragonhealth=100;
    }
  }


  drawSprites();

  if(gameState === LEVEL1){
    fill("white");
    textSize(20);
    textFont("algerian");
    text(diamondCount,1200,58);
    text(starCount,1400,58);
  }

  if(gameState === LEVEL2){
    fill("white");
    textSize(35);
    textFont("algerian");
    text(pearlCount,1290,125);
    text(timer1,225,120);
  }
  if(gameState===LEVEL3&&dragonhealth!=0 )
  {
  textSize(32);
  fill("yellow");
  textFont('Georgia');
  text(waterarrowcount,waterbow.x+20,waterbow.y);
  fill("brown");
  text(firearrowcount,firebow.x+20,firebow.y);
  fill("white");
  text(health,player.x,player.y-50);
  textSize(50);
  fill("orange");
  text(dragonhealth,dragon.x-150,dragon.y+50);
  }
    }

function Story(){
  infoScreen.visible = false;
  gameState = START;
}

 
function restart2(){
  gameState = LEVEL2;
  gameover2.visible = false;
  pearlCount = 0;

  timer1=200;
  timer2=50;
  timer=0;
  timer3=0;

}


function restart(){
  gameState = LEVEL1;
  player.changeAnimation("Idle",playerImg)
  gameOver.visible = false;
  enemyGroup.destroyEach();
  diamondCount = 0;
  starCount = 0;
  player.x = 200;
  player.y = 500;
  killer1.velocityY = 0.5;
  killer2.velocityY = -1;
}

function spawnEnemy(){
  if (frameCount % 80 === 0){
    var enemy = createSprite(width+10,165,10,40);
    enemy.velocityX = -3
    
     //generate random obstacles
     var rand = Math.round(random(1,4));
     switch(rand) {
       case 1: enemy.addImage(bird1);
       enemy.y = Math.round(random(50,height/2))
               break;
       case 2: enemy.addImage(bird2);
       enemy.y = Math.round(random(50,height/2))
               break;
       case 3: enemy.addImage(enemy1);
       enemy.y = height/2 + 100;
               break;
       case 4: enemy.addImage(enemy2);
       enemy.y = height-115;
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     enemy.scale = 0.3;
     enemy.lifetime = 500;
    
    //add each obstacle to the group
     enemyGroup.add(enemy);
  }
 }

 function spawnObstacles() {
  if (frameCount % 120 === 0){
var obstacle = createSprite(Math.round(random(width-50,0),20,20))
obstacle.velocityY = (5);

var rand = Math.round(random(1,2));
switch (rand){
  case 1: obstacle.addImage(fire);
  obstacle.scale = 0.1;
  break;
  case 2: obstacle.addImage(spear);
  obstacle.scale = 0.3;
  break;
  default: break;
}

obstacle.lifetime = 300;
obstaclesGroup.add(obstacle);
  }
}

function spawnfire()

{
  if(frameCount%200===0)
  {
    fireballob = createSprite(dragon.x-370,dragon.y+100);
    fireballob.addImage(rightfireImg);
    fireballob.velocityX=-3;
    fireballob.velocityY=3;
    fireballob.scale = 0.1;

    fireballobGroup.add(fireballob);
  
  }
  }