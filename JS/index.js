const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');


let load = 0;
let interval = setInterval(blurring, 30)


function blurring() {
    load++
    if (load > 99) {
        clearInterval(interval);

        //Creación de enlace a la página Home al llegar al 100%
        window.location.href = 'home.html';
    }


    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
