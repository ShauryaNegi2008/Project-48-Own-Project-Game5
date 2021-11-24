var bg, bgImg, rand1, rand2, rand3, rand4, rand5, spaceShip, spaceShipHealth = 5, spaceShipImg, bulletImg, bulletImg1, ufoBossImg, ufo1, ufo2, ufo3, ufo4, ufo5, ufos = 15, ufoImg, bullet, bullet1, bullet2, bullet3, bullet4, bulletGroup, bullets = 70, bulletGroup1, ufoBoss, ufoBosshealth = 20, ufo1health = 7, ufo2health = 7, ufo3health = 7, ufo4health = 7, ufo5health = 7, gameState = "play";

function preload() {
  bg = loadImage("assets/bg.jpg");
  spaceShipImg = loadImage("assets/spaceShip.jpg");
  ufoImg = loadImage("assets/ufo.jpg");
  ufoBossImg = loadImage("assets/ufoBoss.png")
  bulletImg = loadImage("assets/blue.png")
  bulletImg1 = loadImage("assets/red.png")
}

function setup() {
  canvas = createCanvas(800, 400);
  spaceShip = createSprite(400, 350);
  spaceShip.addImage(spaceShipImg);
  spaceShip.scale = 0.5;

  spaceShip.setCollider("rectangle", 0, 0, 150, 150)

  ufo1 = createSprite(2, 10)
  ufo1.scale = 0.10
  ufo1.addImage(ufoImg);
  ufo2 = createSprite(200, 10)
  ufo2.scale = 0.10
  ufo2.addImage(ufoImg);
  ufo3 = createSprite(400, 10)
  ufo3.scale = 0.10
  ufo3.addImage(ufoImg);
  ufo4 = createSprite(600, 10)
  ufo4.scale = 0.10
  ufo4.addImage(ufoImg);
  ufo5 = createSprite(798, 10)
  ufo5.scale = 0.10
  ufo5.addImage(ufoImg);
  rand1 = random(1, 4);
  rand2 = random(1, 4);
  rand3 = random(1, 4);
  rand4 = random(1, 4);
  rand5 = random(1, 4);
  bulletGroup = new Group();
  bulletGroup1 = new Group();
  ufo1.velocityX = rand1
  ufo2.velocityX = rand2
  ufo3.velocityX = rand3
  ufo4.velocityX = rand4
  ufo5.velocityX = rand5

  bullets = 300;

  Boss();
}

function draw() {
  background(bg);
  textSize(15)
  fill("White");
  text("ufo's left :" + ufos, 700, 75);
  text("Bullets's left :" + bullets, 650, 175);
  text("Health:" + spaceShipHealth, 700, 275)

  if (gameState === "play" || gameState === "Ulost") {
    if (bulletGroup.isTouching(ufo1)) {
      for (var i = 0; i < bulletGroup.length; i++) {
        if (bulletGroup[i].isTouching(ufo1)) {
          ufo1health = ufo1health - 1;
          bulletGroup[i].destroy()

        }
      }
    }
    if (bulletGroup.isTouching(ufo2)) {
      for (var i = 0; i < bulletGroup.length; i++) {
        if (bulletGroup[i].isTouching(ufo2)) {
          ufo2health = ufo2health - 1;
          bulletGroup[i].destroy()

        }
      }
    }
    if (bulletGroup.isTouching(ufo3)) {
      for (var i = 0; i < bulletGroup.length; i++) {
        if (bulletGroup[i].isTouching(ufo3)) {
          ufo3health = ufo3health - 1;
          bulletGroup[i].destroy()

        }
      }
    }
    if (bulletGroup.isTouching(ufo4)) {
      for (var i = 0; i < bulletGroup.length; i++) {
        if (bulletGroup[i].isTouching(ufo4)) {
          ufo4health = ufo4health - 1;
          bulletGroup[i].destroy()

        }
      }
    }
    if (bulletGroup.isTouching(ufo5)) {
      for (var i = 0; i < bulletGroup.length; i++) {
        if (bulletGroup[i].isTouching(ufo5)) {
          ufo5health = ufo5health - 1;
          bulletGroup[i].destroy()

        }
      }
    }
    if (bulletGroup.isTouching(ufoBoss)) {
      for (var i = 0; i < bulletGroup.length; i++) {
        if (bulletGroup[i].isTouching(ufoBoss)) {
          ufoBosshealth = ufoBosshealth - 1;
          bulletGroup[i].destroy()

        }
      }
    }
    if (bulletGroup1.isTouching(spaceShip)) {
      for (var i = 0; i < bulletGroup1.length; i++) {
        if (bulletGroup1[i].isTouching(spaceShip)) {
          spaceShipHealth--;
          bulletGroup.destroyEach();
          bulletGroup1[i].destroy();
        }
      }
    }
    console.log(gameState)
    if (bulletGroup.isTouching(bulletGroup1)) {
      for (var i = 0; i < bulletGroup.length; i++) {
        bulletGroup[i].destroy();
      }
    }
    if (spaceShipHealth == 0) {
      spaceShip.y = 100000000;
    }
    if (ufo1health == 0) {
      ufo1.y = 10000;
      ufos--
      console.log(ufos)
      ufo1health = 10
    }
    if (ufo2health == 0) {
      ufo2.y = 10000;
      ufos--
      ufo2health = 10
    }
    if (ufo3health == 0) {
      ufo3.y = 10000;
      ufos--
      ufo3health = 10
    }
    if (ufo4health == 0) {
      ufo4.y = 10000;
      ufos--
      ufo4health = 10
    }
    if (ufo5health == 0) {
      ufo5.y = 10000;
      ufos--
      ufo5health = 10
    }
    if (ufos == 10 || ufos == 5) {
      ufo1.y = 10
      ufo2.y = 10
      ufo3.y = 10
      ufo4.y = 10
      ufo5.y = 10
    }
    if (ufoBosshealth == 0) {
      ufoBoss.y = 100000000000000000000
      gameState = "Win"
    }
    if (ufos == 0) {
      gameState = "Ulost"
    }
    if (frameCount % 39 === 0) {
      bullet1 = createSprite(ufo1.x, ufo1.y, 5, 15)
      bullet1.lifetime = 100
      bullet1.scale = 0.25;
      bullet1.velocityY = 5;
      bullet1.setCollider("rectangle", 0, 0, 100, 200);
      bullet1.addImage(bulletImg1);
      bullet2 = createSprite(ufo2.x, ufo2.y, 5, 15)
      bullet2.lifetime = 100
      bullet2.scale = 0.25;
      bullet2.velocityY = 5;
      bullet2.setCollider("rectangle", 0, 0, 100, 200);
      bullet2.addImage(bulletImg1);
      bullet3 = createSprite(ufo3.x, ufo3.y, 5, 15)
      bullet3.lifetime = 100
      bullet3.scale = 0.25;
      bullet3.velocityY = 5;
      bullet3.setCollider("rectangle", 0, 0, 100, 200);
      bullet3.addImage(bulletImg1);
      bullet4 = createSprite(ufo4.x, ufo4.y, 5, 15)
      bullet4.lifetime = 100
      bullet4.scale = 0.25;
      bullet4.velocityY = 5;
      bullet4.setCollider("rectangle", 0, 0, 100, 200);
      bullet4.addImage(bulletImg1);
      bullet5 = createSprite(ufo5.x, ufo5.y, 5, 15)
      bullet5.lifetime = 100
      bullet5.scale = 0.25;
      bullet5.velocityY = 5;
      bullet5.setCollider("rectangle", 0, 0, 100, 200);
      bullet5.addImage(bulletImg1);
      bulletGroup1.add(bullet1);
      bulletGroup1.add(bullet2);
      bulletGroup1.add(bullet3);
      bulletGroup1.add(bullet4);
      bulletGroup1.add(bullet5);
    }
    Move();
    drawSprites();
    UfoX();
  }
  if (spaceShipHealth == 0) {
    gameState = "lost"
  }
  if (gameState == "lost") {
    textSize(100);
    fill("white")
    text("Lost", 300, 200)
  }
  if (gameState == "win") {
    textSize(100);
    fill("white");
    text("YOU WIN", 200, 200)
  }

  function Move() {
    if (keyDown("RIGHT_ARROW")) {
      spaceShip.x = spaceShip.x + 5
    }
    if (keyDown("LEFT_ARROW")) {
      spaceShip.x = spaceShip.x - 5
    }
    if (bullets > 0) {

      if (keyWentDown("UP_ARROW")) {
        bullet = createSprite(spaceShip.x, spaceShip.y, 5, 15)
        bullet.addImage(bulletImg)
        bullet.scale=0.15
        bullet.velocityY = -10;
        bullet.lifetime = 50
        bulletGroup.add(bullet);
        bullets = bullets - 1;
      }
    }
    if (ufos == 0) {
      background("black");
      background(bg)
      ufoBoss.visible = true;
      if (frameCount % 40 === 0) {
        ufoBoss.setCollider("rectangle", 0, 0, 1000, 500)
        bullet1 = createSprite(ufoBoss.x, ufoBoss.y, 5, 15)
        bullet1.velocityY = 10;
        bullet1.scale = 0.25;
        bullet1.addImage(bulletImg1);
        bullet2 = createSprite(ufoBoss.x + 50, ufoBoss.y, 5, 15)
        bullet2.velocityY = 10;
        bullet2.scale = 0.25;
        bullet2.addImage(bulletImg1);
        bullet3 = createSprite(ufoBoss.x - 50, ufoBoss.y, 5, 15)
        bullet3.velocityY = 10;
        bullet3.scale = 0.25;
        bullet3.addImage(bulletImg1);
        bulletGroup1.add(bullet1)
        bulletGroup1.add(bullet2)
        bulletGroup1.add(bullet3)
      }
    }
  }
  function UfoX() {
    if (ufo1.x >= 800) {
      ufo1.velocityX = -rand1
    }
    if (ufo1.x <= 0) {
      ufo1.velocityX = rand1
    }

    if (ufo2.x >= 800) {
      ufo2.velocityX = -rand2
    }
    if (ufo2.x <= 0) {
      ufo2.velocityX = rand2
    }

    if (ufo3.x >= 800) {
      ufo3.velocityX = -rand3
    }
    if (ufo3.x <= 0) {
      ufo3.velocityX = rand3
    }

    if (ufo4.x >= 800) {
      ufo4.velocityX = -rand4
    }
    if (ufo4.x <= 0) {
      ufo4.velocityX = rand4
    }

    if (ufo5.x >= 800) {
      ufo5.velocityX = -rand5
    }
    if (ufo5.x <= 0) {
      ufo5.velocityX = rand5
    }
    if (ufoBoss.x === 200) {
      ufoBoss.velocityX = 2
    }
    if (ufoBoss.x == 600) {
      ufoBoss.velocityX = -2
    }
  }
}
function Boss() {
  ufoBoss = createSprite(400, 40, 10, 10)
  ufoBoss.addImage(ufoBossImg)
  ufoBoss.velocityX = -2;
  ufoBoss.visible = false;
  ufoBoss.setCollider("rectangle", 0, 0, 200, 200)
  ufoBoss.scale = 0.25
  ufoBoss.setCollider("rectangle", 10000, 10000, 0, 0)
}