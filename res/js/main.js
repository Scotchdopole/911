import { Enemy } from "./ui/entities.js";
import { Background } from "./ui/basic-ui.js";
import { Twins } from "./ui/twins.js";


const enemies = [];


const background = new Background();
const twins = new Twins(245, 495, 50, 245, 610);

let mouse = {
  x:0,
  y:0
}

document.addEventListener("click", (e) => {
  console.log(e.clientX);
  console.log(e.clientY);
  const canvasPos = canvas.getBoundingClientRect();

  const rect = canvas.getBoundingClientRect();
  mouse.x = ((e.clientX - rect.left)/(rect.right - rect.left)*canvas.width);
  mouse.y = ((e.clientY - rect.top)/(rect.bottom - rect.top)*canvas.height);

  for (const enemy of enemies) {
    if (enemy.detectCollision(mouse)){
      break
    };
  }
});


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


const gameLoop = () => {

  clear();
  update();
  render();
  fps();

  window.requestAnimationFrame(gameLoop);

}



const clear = () => {
  canvas.width = 1280;
  canvas.height = 720;
  background.draw(ctx);
}
const update = () => {
  enemies.map((a) => {
    a.update();
    twins.detectCollision(a);
  })
}
const render = () => {
  twins.draw(ctx);
  enemies.map((a) => {
    a.draw(ctx)
  })
}
const fps = () => {

}

const loadData = async () => {
  const enetitiesFile = await fetch("./res/data/entities.json");
  const data = await enetitiesFile.json();
  Enemy.entitiesData = data;
}

const genEnemies = () => {
  Enemy.entitiesData.map((a) => {
    enemies.push(
      new Enemy(
        a.name,
        a.hp,
        a.dmg,
        a.imagePath,
        a.width,
        a.height,
        a.velocity,
        a.type
      ))
  })
}

window.onload = async () => {
  window.requestAnimationFrame(gameLoop);
  await loadData();
  console.log(Enemy.entitiesData);
  genEnemies();
  console.log(enemies);
}