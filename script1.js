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
    console.dir("arrastrar")
    let data=event.target.id;
    event.dataTransfer.setData("Text",data)
}

let zonaDestino=document.querySelector(".conteRC");

zonaDestino.addEventListener("dragover", (event)=>{
    event.preventDefault();
    console.log("ingreso elemento")
})
zonaDestino.addEventListener("drop", (event)=>{
    let contenido=event.dataTransfer.getData("Text")
    if(contenido === "fb2"){
        let imagen= document.getElementById(contenido);
        console.dir(imagen)
        event.target.innerHTML=`<img src=${contenido.src}/>`
      
      console.log("DROP")
     console.dir(event)
}else{ 
    event.target.innerHTML=`<img ${"contenido"}`}
})

const permitirSoltar=(event)=>{
    event.preventDefault()
}






//-----------------------------otro mas----------------------------

/*
let imgArrastrada = null; // Variable para guardar la imagen arrastrada

// Función que se ejecuta al comenzar a arrastrar
function arrastrar(event) {
    console.log("Arrastrando la imagen: ", event.target.id);
    imgArrastrada = event.target; // Almacena la imagen que se está arrastrando
    event.dataTransfer.setData("text", event.target.id); // Guarda el id del elemento
}

// Función para permitir que se suelten elementos en las zonas A, B o C
function permitirSoltar(event) {
    
    event.preventDefault(); // Permite que el elemento se suelte
}

// Función que se ejecuta cuando se suelta la imagen en la zona de destino
function soltar(event) {
    event.preventDefault();
     
    let data = event.dataTransfer.getData("text"); // Obtiene el id de la imagen arrastrada
    let imagenSoltada = document.getElementById(data);
    
    // Verifica que no haya una imagen ya colocada en la zona de destino
    if (event.target.tagName === "DIV" && event.target.children.length === 0) {
        console.log("Moviendo la imagen: ", imagenSoltada.id);
        if (event.target.querySelector('p')) {
            event.target.querySelector('p').remove();
        }
        event.target.appendChild(imagenSoltada); // Mueve la imagen a la zona de destino
        imgArrastrada = null; // Limpia la variable
    } else {
        console.log("La zona de destino ya contiene una imagen o no es un div");
    }console.log("Imagen soltada: ", imagenSoltada.id);
    console.log("Elemento destino: ", event.target);
    
}

// Función para reiniciar el juego
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
}
*/
//-----------------------otro----------------------------------------
/*function iniciar(){
    var imagenes=document.querySelectorAll('.fragmento img');
     soltar=document.getElementById('A');  
     soltar2  =document.getElementById('B'); 
     soltar3 = document.getElementById('C'); 

    for(var i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', arrastrado, false);
    }

    soltar.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    soltar.addEventListener('dragover', function(e){
    e.preventDefault(); }, false)
      
    ;
    soltar.addEventListener('drop', soltado, false);


    soltar2.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar2.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar2.addEventListener('drop', soltado, false);


    soltar3.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar3.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar3.addEventListener('drop', soltado, false);

}
function arrastrar(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

async function soltado(e){
    e.preventDefault();
    console.log(e)
    let id=e.dataTransfer.getData('Text');
    let imagen=document.getElementById(id);
    imagen.style.display= 'none';
     e.target.innerHTML='<img src="'+imagen.src+'" height="400px" width="275px">';
    contador++


}*/