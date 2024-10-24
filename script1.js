
function navChange() {
    const navbar = document.getElementById('navbar');
    
    // Detecta cuando el usuario hace scroll
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'var(--colorazul)';
        navbar.style.color = 'white';
    } else {
        navbar.style.backgroundColor = 'var(--colorbBlanco)';
        navbar.style.color = 'inherit';
    }
}


/*          Video               */
let tiempoReal;

let vid=document.querySelector("video");
const reproducir=()=>{
    vid.play();

    let relo=document.querySelector(".reloj");
    let duracionMin = Math.floor(vid.duration/60);
    let duracionSeg = Math.floor(vid.duration%60);
    relo.textContent = `Duración video ${duracionMin}:${duracionSeg.toString().padStart(2, '0')}`;
    tiempoReal=setInterval(()=>{
        let relo=document.querySelector(".reloj")
        let duracionMin = Math.floor(vid.currentTime/60);
        let duracionSeg = Math.floor(vid.currentTime%60);
        relo.textContent = ` ${duracionMin.toString().padStart(2, 0)}:${duracionSeg.toString().padStart(2, '0')}`;
        
    },1000)
    console.log(vid.duration)
}
const pausar=()=>{
    vid.pause()
    clearInterval(tiempoReal)
}
/*const mutedOnOff=()=>{
    vid.muted="true"
}*/
