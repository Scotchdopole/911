import { Enemy } from "./ui/entities.js";
import { Background } from "./ui/basic-ui.js";


const battleBus = new Enemy("battleBus", 50, 1, 0, 50, 300, 6, 0);
const fnkid = new Enemy("fnkid", 50, 1, 2, 50, 100, 3, 0);
const battleBus2 = new Enemy("battleBus", 50, 1, 0, 50, 400, 7, 0);
const battleBus3 = new Enemy("battleBus", 50, 1, 0, 50, 500, 5, 0);



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
  battleBus.update();
  fnkid.update();
  battleBus2.update();
  battleBus3.update();
}
const render = () => {
  battleBus.draw(ctx);
  fnkid.draw(ctx);
  battleBus2.draw(ctx);
  battleBus3.draw(ctx);
}
const fps = () => {

}

window.onload = () => {
  window.requestAnimationFrame(gameLoop);
}