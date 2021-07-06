let food =getrandomfoodpos()
const expansionrate=1;
import { onsnake,expandsnake } from "./snake.js";
import { getrandom } from "./grid.js";
export let score=0;
let eat = new Audio();
eat.src = "./audio/eat.mp3";
export function update()
{
    if(onsnake(food))
    {
        eat.play();
        expandsnake(expansionrate);
        food=getrandomfoodpos()
        score++;
        
    }
}

export  function draw(gameboard)
{
    const foodelement= document.createElement('div');
    foodelement.style.gridColumnStart= food.x;
    foodelement.style.gridRowStart=food.y;
    foodelement.classList.add('food');
    gameboard.appendChild(foodelement); 
        
}
function getrandomfoodpos()
{
    let newfoodpos=5;
    while(newfoodpos==5 || onsnake(newfoodpos))
    {
        newfoodpos=getrandom();
    }
    return newfoodpos
}