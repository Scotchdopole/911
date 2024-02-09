import { Enemy } from "./ui/entities.js";
import { Background } from "./ui/basic-ui.js";


const enemies = [];


const background = new Background();


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
  })
}
const render = () => {
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