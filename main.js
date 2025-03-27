var map = L.map('map').setView([27.4420647,-94.772125], 1);



L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	minZoom: 1.9,
    updateWhenIdle:false,
    zoomControls: false,
    maxZoom:4,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);




// Define los límites del mapa (ejemplo)
var limiteNoroeste = L.latLng(76, -180); // Latitud y longitud del punto noroeste
var limiteSureste = L.latLng(-60, 180); // Latitud y longitud del punto sureste
var limites = L.latLngBounds(limiteSureste, limiteNoroeste);

// Establece los límites en el mapa
map.setMaxBounds(limites);

//iconos marker
var icoFan =L.icon({
    iconUrl: 'assets/fantasma.png',

    iconSize: [40,40],
})

//Función para agregar marcadores en el mapa (latitud,longitud  var del icono   la url de redirección   texto del bindpopup )
//---------------------------------------------------------------------------------------------------------------------------
function marcador([posx,posy], icono, url, texto){
  var marker = L.marker([posx,posy], {icon: icono}).addTo(map);
  var urlpag = url;

  marker.bindPopup("<a href='" + urlpag + "' target='_self'>" + texto + "</a>");

}


//Final de la función
//---------------------------------------------------------------------------------------------------------------------------



//Marcadores llamados por la función------marcador()

marcador([-23.478330, -102.535787], icoFan, "pagina2.html", "Océano Pacífico");
marcador([18.952172, -98.487488], icoFan, "pagina1.html", "México");







//---INICIO de popup de pagina inicial

const dialogo = document.getElementById('popup');

// Comprobamos si la bandera 'skipPopup' está en sessionStorage
if (sessionStorage.getItem('skipPopup') !== 'true') {
  popup.showModal();
} else {
  // Si la bandera está presente, la eliminamos para futuras visitas normales
  sessionStorage.removeItem('skipPopup');
}

function cerrar_ventana(){
    popup.close()
}
//---FINAL de popup de pagina inicial




function pagMapa(){
    sessionStorage.setItem('skipPopup', 'true');
    window.open("index.html", "_self");
};

function historias(){
  const videoElement = document.getElementById('video');
  const dialogo = document.getElementById('portadasdialog');
  dialogo.open =true;
  videoElement.pause();
}



const lampContainer = document.querySelector('.lamp-container');
const illuminatedText = document.querySelector('.illuminated-text');
let isOn = true;

function toggleLight() {
    isOn = !isOn;
    lampContainer.classList.toggle('off', !isOn);
    illuminatedText.classList.toggle('lit', isOn);
}

// Parpadeo aleatorio
function randomBlink() {
    const interval = Math.random() * 1000 + 700; // Intervalo aleatorio entre 0.5 y 1.5 segundos
    setTimeout(() => {
        toggleLight();
        randomBlink();
    }, interval);
}

randomBlink(); // Iniciar el parpadeo aleatorio


function playVideo(elementoClicado, videoUrl) {
  const ventana = document.getElementById('portadasdialog');
  const videoElement = document.getElementById('video'); 
  const ojoElement = document.getElementById('ojos');
  const botontitulo = document.querySelector('.btn.left')
  



  if (elementoClicado.dataset.cardId) {
    console.log("Se hizo clic en la card con ID:", elementoClicado.dataset.cardId);
  }

  console.log("Se hizo clic en una carta. URL del video:", videoUrl);

  
  
  if (videoElement) {
    ojoElement.style.display = 'none'
    videoElement.style.display = "block";
    videoElement.src = videoUrl;
    videoElement.load();
    ventana.close()
    botontitulo.textContent = elementoClicado.dataset.cardId
    botontitulo.style.display="block"

  } if(videoUrl === "none"){

    videoElement.style.display = "none";
    ojoElement.style.display = 'grid'
    console.log("NO");
  } if (elementoClicado.dataset.cardId === "none") {
        botontitulo.style.display='none'
    
  }//revisión

}

function scrollRightInContainer() {
  const contenedor = document.getElementById('portadas');
  const scrollAmount = 300;

  if (contenedor) {
    contenedor.scrollBy({
      left: scrollAmount,
      top: 0,
      behavior: 'smooth'
    });
  } else {
    console.error("No se encontró el contenedor con el ID 'portadas'");
  }
}
function scrollLeftInContainer() {
  const contenedor = document.getElementById('portadas');
  const scrollAmount = -300;

  if (contenedor) {
    contenedor.scrollBy({
      left: scrollAmount,
      top: 0,
      behavior: 'smooth'
    });
  } else {
    console.error("No se encontró el contenedor con el ID 'portadas'");
  }
}







const portadas = document.getElementById('portadas');

portadas.addEventListener('scroll', function() {
  console.log("¡El evento de scroll se ha disparado!");
  console.log("ScrollLeft:", portadas.scrollLeft);
  console.log("ScrollWidth:", portadas.scrollWidth);
  console.log("Mitad de ScrollWidth:", portadas.scrollWidth / 2);

  if (portadas.scrollLeft >= portadas.scrollWidth / 2) {
    console.log("¡Llegamos a la mitad!");
    portadas.scrollLeft = 0;
    console.log("ScrollLeft después de reset:", portadas.scrollLeft);
  }
});





//Confetti



function confe(){
  confetti({
    spread: 20,
    ticks: 30,
    gravity: 12,
    decay: 0.70,
    startVelocity: 20,
    particleCount: 12,
    "zIndex": 0,
    origin: { y: 0.0001 },
    scalar: 3,
    shapes: ["image"],
    shapeOptions: {
      image: [{
          src: "assets/dulce-de-halloween (1).png",
          width: 32,
          height: 32,
        },
        {
          src: "assets/dulce-de-halloween (2).png",
          width: 32,
          height: 32,
        },
        {
          src: "assets/fantasma2.png",
          width: 32,
          height: 32,
        },
        {
          src: "assets/payaso.png",
          width: 32,
          height: 32,
        },
        {
          src: "assets/gato-negro.png",
          width: 32,
          height: 32,
        },
      ],
    },
  });
  

}





