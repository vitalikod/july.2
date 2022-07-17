// const screen = document.createElement('div');
// screen.classList.add('scr');
// document.body.appendChild(screen);
// const controler = document.createElement('div');
// controler.classList.add('cont');
// document.body.appendChild(controler);
// const keyup = document.createElement('div');
// keyup.classList.add('keyu');
// controler.appendChild(keyup);
// const keyright = document.createElement('div');
// keyright.classList.add('keyr');
// controler.appendChild(keyright);
// const keydown = document.createElement('div');
// keydown.classList.add('keyd');
// controler.appendChild(keydown);
// const keyleft = document.createElement('div');
// keyleft.classList.add('keyl');
// controler.appendChild(keyleft);
// const pacman = document.createElement('div');
// pacman.classList.add('man');
// screen.appendChild(pacman);
// const barrier = document.createElement('div');
// barrier.classList.add('barrier');
// screen.appendChild(barrier);

// let shag = 50;

// let bartop = 200;
// let barleft = 200;
// let bartop1 = bartop+= 50;
// let barleft1 = barleft+= 50;

// let down1 = 0;
// let left1 = 0;

// document.addEventListener ('keydown', (ev) => {
//     if (ev.key == 'ArrowRight') {
//         left1+= shag;
//         pacman.style.left = `${left1}px`;
//     }
//     if ( left1 > 600) left1 = 600;
//     if (ev.key == 'ArrowDown') {
//         down1+= shag;
//         pacman.style.top = `${down1}px`;
//     }
//     if ( down1 > 600) down1 = 600;
//     if (ev.key == 'ArrowLeft') {
//         left1-= shag;
//         pacman.style.left = `${left1}px`;
//     }
//     if ( left1 < 10 ) left1 = 50;
//     if (ev.key == 'ArrowUp') {
//         down1-= shag;
//         pacman.style.top = `${down1}px`;
//     }
//     if ( down1 < 10 ) down1 = 50;
// })

// keyup.addEventListener('click', (e) => {
//     down1-= 50;
//     pacman.style.top = `${down1}px`; 
//     if ( down1 < 10 ) down1 = 50;     
// })
// keyright.addEventListener('click', (e) => {
//     left1+= 50;
//     pacman.style.left = `${left1}px`;
//     if ( left1 > 600) left1 = 600;
// })
// keydown.addEventListener('click', (e) => {                                                   
//     down1+= 50;
//     pacman.style.top = `${down1}px`;
//     if ( down1 > 600) down1 = 600;
// })
// keyleft.addEventListener('click', (e) => {
//     left1-= 50;
//     pacman.style.left = `${left1}px`;
//     if ( left1 < 10 ) left1 = 50;
// })  

// -------------------------------------------------------------------------------------------------------------------------

// shagchar = 30;
// topchar = 0;
// leftchar = 0;

// const char = document.createElement('div');
// char.classList.add('char');
// char.style.left = '100px';
// document.body.appendChild(char);

// document.addEventListener('keydown', (go) => {
//     if (go.key == 'w') {
//         topchar-= shagchar;
//         char.style.top = `${topchar}px`;
//         console.log(topchar);
//     }
//     if (go.key == 's') {
//         topchar+= shagchar;
//         char.style.top = `${topchar}px`;
//         console.log(topchar);
//     }
//     if (go.key == 'a') {
//         leftchar-= shagchar;
//         char.style.left = `${leftchar}px`;
//         console.log(leftchar);
//     }
//     if (go.key == 'd') {
//         leftchar+= shagchar;
//         char.style.left = `${leftchar}px`;
//         console.log(leftchar);
//     }
// })  

// let jjjj = {
//     x: Math.floor((Math.random() * 14 +1)) * shag,
//     y: Math.floor((Math.random() * 14 +1)) * shag,
// };
// console.log(jjjj);

const screen = document.createElement('div');
screen.classList.add('screen');
document.body.append(screen);

const barrier = document.createElement('div');
barrier.classList.add('barrier');
screen.append(barrier);

const pacman = document.createElement('div');
pacman.classList.add('pacman');
screen.append(pacman);
const shag = 30;
let pacman1 = {
    x: 0,
    y: 0,
}
let top1 = 0;
let left1 = 0;
 


function control() {
    if(top1 += shag ) {pacman1.x = top1};
    if(top1 -= shag ) {pacman1.x = top1};
    if(left1 += shag ) {pacman1.y = left1};
    if(left1 -= shag ) {pacman1.y = left1};
}


document.addEventListener('keydown', (ev) => {
    if(ev.key == 'ArrowRight') {
        left1+= shag;
        control();
        if(left1 > 690) left1 = 720;
        pacman.style.left = `${left1}px`;
    } 
    if(ev.key == 'ArrowLeft') {
        left1-= shag;
        control();
        if(left1 < 30) left1 = 0;
        pacman.style.left = `${left1}px`;
    }
    if(ev.key == 'ArrowUp') {
        top1-= shag;
        control();
        if(top1 < 30) top1 = 0;
        pacman.style.top = `${top1}px`;
    }
    if(ev.key == 'ArrowDown') {
        top1+= shag;
        control();
        if(top1 > 690) top1 = 720;
        pacman.style.top = `${top1}px`;
    }
    
})
document.addEventListener('keydown', (jj) => {
    if(jj.key == 'w') {
        console.log(JSON.stringify(pacman1) === JSON.stringify(place));
        ggg();
    }
    
})
let place = {
    x: 0,
    y: 0,
};
place = {
    x: Math.floor((Math.random() * 14 +1)) * shag,
    y: Math.floor((Math.random() * 14 +1)) * shag,
};
console.log(place);

let top11 = place.x;
let left11 = place.y;
barrier.style.top = `${top11}px`;
barrier.style.left = `${left11}px`;

function ggg(a, b) {
    if(JSON.stringify(a) === JSON.stringify(b)) return left1 -= shag;
}

ggg(pacman1, place);
console.log(ggg);