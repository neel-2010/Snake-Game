export var snake_speed = document.getElementById("speed").value;
import {getinput}  from './input.js'
import { box } from './game.js';
const snakebody=[
  {x:11, y:11},
];
const GRID_SIZE=21;
let newsegments=0;
export  function update()
{
    snake_speed = document.getElementById("speed").value;
    addsegment();
    const inputdirection=getinput()
    for(let i=snakebody.length-2;i>=0;i--)
    {
        snakebody[i+1]={...snakebody[i]};
    }
    snakebody[0].x+=inputdirection.x;
    snakebody[0].y+=inputdirection.y;
    if(box==true) return;
    for(let i=0;i<snakebody.length;i++)
    {
       if(snakebody[i].x<1) snakebody[i].x=GRID_SIZE;
        else if(snakebody[i].x>GRID_SIZE)snakebody[i].x=1;
        if(snakebody[i].y<1) snakebody[i].y=GRID_SIZE;
        else if(snakebody[i].y>GRID_SIZE)snakebody[i].y=1;
    }
    
}
export function getsnakehead()
{
    return snakebody[0]
}

export  function draw(gameboard)
{
    snakebody.forEach(segment =>
        {
            const snakeelement= document.createElement('div');
            snakeelement.style.gridRowStart=segment.y;
            snakeelement.style.gridColumnStart= segment.x;
            snakeelement.classList.add('snake');
            gameboard.appendChild(snakeelement); 
        })
}

export function onsnake(food,{ignorehead =false}={})
{
    return snakebody.some((segment,index) =>
        {
            if(ignorehead===true && index===0) return false
            return segment.x==food.x && segment.y==food.y;
        })
}
export function expandsnake(amount)
{
    newsegments+=amount;
}
function addsegment()
{
    for(let i=0;i<newsegments;i++)
    {
        snakebody.push({...snakebody[snakebody.length-1]})
    }
    newsegments=0
}
export function snakeintersection()
{
    return onsnake(snakebody[0], {ignorehead:true})
}