var map = L.map('map').setView([27.4420647,-94.772125], 1);

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
  minZoom: 2,
  updateWhenIdle:false,
  maxZoom: 4,
  attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  ext: 'png'
}).addTo(map);

// Define los límites del mapa (ejemplo)
var limiteNoroeste = L.latLng(90, -180); // Latitud y longitud del punto noroeste
var limiteSureste = L.latLng(-60, 180); // Latitud y longitud del punto sureste
var limites = L.latLngBounds(limiteSureste, limiteNoroeste);

// Establece los límites en el mapa
map.setMaxBounds(limites);



var marker = L.marker([40.1531536, -3.4482965]).addTo(map);

var url = "https://www.google.com"; // Reemplaza con tu URL deseada
var textoLink = "ESPAÑA"; // Texto que se mostrará como enlace

marker.bindPopup("<a href='" + url + "' target='_blank'>" + textoLink + "</a>");//españa


var marker = L.marker([19.6214153, -99.6028058]).addTo(map);

var url = "pagina1.html"; // Reemplaza con tu URL deseada
var textoLink = "MÉXICO"; // Texto que se mostrará como enlace

marker.bindPopup("<a href='" + url + "' target='_blank'>" + textoLink + "</a>");//mexico

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



