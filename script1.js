console.log("Archivo script1.js cargado");

function navChange() {
    const navbar = document.getElementById('navbar');
    
    // Detecta cuando el usuario hace scroll
    if (window.scrollY > 300) {
        navbar.style.backgroundColor = 'white';
        navbar.style.color = 'transparent';
    } else {
        navbar.style.backgroundColor = 'transparent';
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





//--------------mover piesas-----------

const arrastrar=(event)=>{
    console.log("arrastrar")
    let data=event.target.id;
    event.dataTransfer.setData("text",data)
}; 

const permitirSoltar =(event)=>{
    event.preventDefault();
};

const soltar =(event)=>{
    debugger
    event.preventDefault();
    let contenido=event.dataTransfer.getData("text");
    let imagen=document.getElementById(contenido);

        if (imagen){
            imagen.parentNode.removeChild(imagen); 
            event.target.innerHTML=`<img src="${imagen.src}" alt="${imagen.alt}"/>`;
            console.log("imagen soltada");
        }else {
            console.log("contenido no valido");
        }      
};



let zonaDestino=document.querySelector(".conteRC");

zonaDestino.addEventListener("dragover", (event)=>{
    event.preventDefault();
    console.log("ingreso elemento")
});

zonaDestino.addEventListener("drop", (event)=>{
    let contenido=event.dataTransfer.getData("text");
    if(contenido){
        let imagen= document.getElementById(contenido);
        if (imagen){
            imagen.parentNode.removeChild(imagen); 
            event.target.innerHTML=`<img src="${imagen.src}" alt="${imagen.alt}"/>`;
      
            console.log("DROP")
           
        }
 else { 
    console.log("contenido no valido");
}
}});
function reinicio() {
    let piezas = document.querySelectorAll(".fragmento img"); // Selecciona todas las imágenes
    let zonas = document.querySelectorAll(".conteRC div"); // Selecciona todas las zonas A, B, C

    // Coloca cada imagen en su lugar original
    piezas.forEach((pieza) => {
        pieza.style.display = "block"; // Vuelve a mostrar las imágenes
        document.querySelector(".fragmento").appendChild(pieza); // Las devuelve a su contenedor
    });

    // Limpia las zonas de destino
    zonas.forEach((zona) => {
        zona.innerHTML = "<p> Arrastre y suelte la imagen aquí </p>"; // Restaura el texto en las zonas de destino
    });
};