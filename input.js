let inputdirection = {x:0,y:0}
let lastdirection = {x:0,y:0}

let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();



up.src = "./audio/up.mp3";
right.src = "./audio/right.mp3";
left.src = "./audio/left.mp3";
down.src = "./audio/down.mp3";
window.addEventListener('keydown', e =>{
    switch(e.key)
    {
        case 'ArrowUp':
            if(lastdirection.y!=0) break
            inputdirection={x:0,y:-1};up.play()
            break
        case 'ArrowDown':
            if(lastdirection.y!=0) break
            inputdirection={x:0,y:1};down.play()
            break
        case 'ArrowRight':
            if(lastdirection.x!=0) break
            inputdirection={x:1,y:0};right.play()
            break
        case 'ArrowLeft':
            if(lastdirection.x!=0) break
            inputdirection={x:-1,y:0};left.play()
            break
    }
}
)
export function getinput()
{
    lastdirection=inputdirection
    return inputdirection
}