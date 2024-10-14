


/*          Video               */
let tiempoReal;

let vid=document.querySelector("video");
const reproducir=()=>{
    vid.play();

    let relo=document.querySelector(".reloj");
    let duracionMin = Math.floor(vid.duration/60);
    let duracionSeg = Math.floor(vid.duration%60);
    relo.textContent = `${duracionMin}:${duracionSeg.toString().padStart(2, '0')}`;
    tiempoReal=setInterval(()=>{
        let relo=document.querySelector(".reloj")
        let duracionMin = Math.floor(vid.currentTime/60);
        let duracionSeg = Math.floor(vid.currentTime%60);
        relo.textContent = `Duracion del video ${duracionMin.toString().padStart(2, 0)}:${duracionSeg.toString().padStart(2, '0')}`;
        
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
