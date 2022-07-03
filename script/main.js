const controler = document.createElement('div');
controler.classList.add('cont');
document.body.appendChild(controler);
const keyup = document.createElement('div');
keyup.classList.add('keyu');
controler.appendChild(keyup);
const keyright = document.createElement('div');
keyright.classList.add('keyr');
controler.appendChild(keyright);
const keydown = document.createElement('div');
keydown.classList.add('keyd');
controler.appendChild(keydown);
const keyleft = document.createElement('div');
keyleft.classList.add('keyl');
controler.appendChild(keyleft);

const pacman = document.createElement('div');
pacman.classList.add('man');
document.body.appendChild(pacman);

let down1 = 0;
let left1 = 0;

document.onkeydown = (ev) => {
    if (ev.key == 'ArrowRight') {
        pacman.style.left = left1 + 'px';
        left1 += 50;
        console.log(left1)
    }
    if (ev.key == 'ArrowDown') {
        pacman.style.top = down1 + 'px';
        down1 += 50;
    }
    if (ev.key == 'ArrowLeft') {
        pacman.style.left = left1 + 'px';
        left1 -= 50;
        console.log(left1)
    }
    if (ev.key == 'ArrowUp') {
        pacman.style.top = down1 + 'px';
        down1 -= 50;
    }
};

keyup.addEventListener('click', (e) => {
    pacman.style.top = down1 + 'px';
    down1 -= 50;
});
keyright.addEventListener('click', (e) => {
    pacman.style.left = left1 + 'px';
    left1 += 50;
});
keydown.addEventListener('click', (e) => {
    pacman.style.top = down1 + 'px';
    down1 += 50;
});
keyleft.addEventListener('click', (e) => {
    pacman.style.left = left1 + 'px';
    left1 -= 50;
});