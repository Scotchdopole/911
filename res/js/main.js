import { Enemy } from "./ui/entities.js";
import { Background } from "./ui/basic-ui.js";


const foo = new Enemy("tomas", 50, 1)
console.log(foo)

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
  
}
const render = () => {
  
}
const fps = () => {
  
}

window.onload = () => {
  window.requestAnimationFrame(gameLoop);
}