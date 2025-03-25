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


var marker = L.marker([46.9696141,6.406614,7], {icon: icoFan}).addTo(map);

var url = "https://www.google.com"; // Reemplaza con tu URL deseada
var textoLink1 = "ESPAÑA "; // Texto que se mostrará como enlace
var textoLink2 = "ESPAÑA "; // Texto que se mostrará como enlace
var textoLink3 = "ESPAÑA 3"; // Texto que se mostrará como enlace
var textoLink4 = "ESPAÑA 4"; // Texto que se mostrará como enlace


marker.bindPopup("<a href='" + url + "' target='_blank'>" + textoLink1 + "  " + textoLink2 + "</a>");//



var marker = L.marker([40.1531536, -3.4482965], {icon: icoFan}).addTo(map);

var url = "https://www.google.com"; // Reemplaza con tu URL deseada
var textoLink = "ESPAÑA"; // Texto que se mostrará como enlace

marker.bindPopup("<a href='" + url + "' target='_blank'>" + textoLink + "</a>");//españa




var marker = L.marker([39.6443853,-8.1245517], {icon: icoFan}).addTo(map);

var url = "https://www.google.com"; // Reemplaza con tu URL deseada
var textoLink = "ESPAÑA"; // Texto que se mostrará como enlace

marker.bindPopup("<a href='" + url + "' target='_blank'>" + textoLink + "</a>");//




var marker = L.marker([19.6214153, -99.6028058], {icon: icoFan}).addTo(map);

var url = "pagina1.html"; // Reemplaza con tu URL deseada
var textoLink = "MÉXICO"; // Texto que se mostrará como enlace

marker.bindPopup("<a href='" + url + "' target='_self'>" + textoLink + "</a>");//mexico

var marker = L.marker([41.3940536, -101.2571840]).addTo(map);

var url = "https://www.google.com"; // Reemplaza con tu URL deseada
var textoLink = "ESTADOS UNIDOS"; // Texto que se mostrará como enlace

marker.bindPopup("<a href='" + url + "' target='_blank'>" + textoLink + "</a>");//US

var marker = L.marker([31.4363022, 107.9471031]).addTo(map);

var url = "https://www.google.com"; // Reemplaza con tu URL deseada
var textoLink = "CHINA"; // Texto que se mostrará como enlace

marker.bindPopup("<a href='" + url + "' target='_blank'>" + textoLink + "</a>");//china


var marker = L.marker([36.2374423, 139.6828261]).addTo(map);

var url = "https://www.google.com"; // Reemplaza con tu URL deseada
var textoLink = "JAPÓN"; // Texto que se mostrará como enlace

marker.bindPopup("<a href='" + url + "' target='_blank'>" + textoLink + "</a>");//Japón 




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
  dialogo.showModal({
    
  })
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


function playVideo(videoUrl) {
  const ventana = document.getElementById('portadasdialog');
  const videoElement = document.getElementById('video'); // Obtén el elemento dentro de la función
  console.log("Se hizo clic en una carta. URL del video:", videoUrl);
  if (videoElement) {
    videoElement.src = videoUrl;
    videoElement.load();
    ventana.close()
  } else {
    console.error("No se encontró el elemento de video.");
  }
  videoElement.play()//revisión
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