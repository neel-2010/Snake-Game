
let lastrendertime=0
import {snake_speed, getsnakehead,snakeintersection, update as update_snake,draw as draw_snake} from './snake.js';
import {update as update_food, draw as draw_food,score} from './food.js'
import { outsidegrid } from './grid.js';
const gameboard= document.getElementById('game-board');
let gameover=false;
let dead = new Audio();
dead.src = "./audio/dead.mp3";
export var box = document.getElementById("box").checked
function main(currenttime)
{
    
    if(gameover)
    {
        dead.play();
        if(confirm("Your Score: "+score+"\nYOU LOSE. Press ok to restart."))
        window.location='/'
        else return

        //return alert("Your Score: "+score+"\nYOU LOSE ");
    }
    window.requestAnimationFrame(main);
    let secondsincelastrender=currenttime-lastrendertime;
    if(secondsincelastrender/1000 < 1/snake_speed) return;
    update();
    draw();

    lastrendertime=currenttime;
  //  console.log('Render')
}
window.requestAnimationFrame(main);
function update()
{
    box = document.getElementById("box").checked
    update_snake()
    update_food()
    check_death()
}
function draw()
{
    gameboard.innerHTML = '';
    draw_snake(gameboard);
    draw_food(gameboard)
}
function check_death()
{
    
    if(box)
    {
        gameover = outsidegrid(getsnakehead()) || snakeintersection();
    }
    else{
        gameover =  snakeintersection();
    }

}