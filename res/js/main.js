import { Enemy } from "./ui/entities.js";
import { Background } from "./ui/basic-ui.js";


const battleBus = new Enemy("battleBus", 50, 1, 0, 50, 300)
const fnkid = new Enemy("fnkid", 50, 1, 2, 50, 100)

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
}
const render = () => {
  battleBus.draw(ctx)  
  fnkid.draw(ctx)
}
const fps = () => {
  
}

window.onload = () => {
  window.requestAnimationFrame(gameLoop);
}