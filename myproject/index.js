
// leaflet code
var map = L.map('map').setView([51.505, -0.09], 13);

// Map Tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Get the users location instantly
L.control.locate().addTo(map)

let getLocation = document.querySelector('.leaflet-bar-part');
window.onload = () => {
 getLocation.click();
};

// text on your current location
const locationText = document.querySelector('.leaflet-popup-content');
// locationText.textContent = `<span style="background-color: lime">Replacement HTML</span>`;



// icon style
const myIcon = L.icon({
    iconUrl: 'images/icon2022.png',
    iconSize: [50, 50],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});
const marker = L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);



// create an event listener to pop up a specific location in the area for that specific list item for each of the list items.
// have that evnet listener prompt some example text.
// change the switch statement to an array


// let buisness = document.getElementById('places').value;



document.getElementById("places").addEventListener('change',
  (event) => {
   event.preventDefault();

    switch (event.target.value) {
      case "coffee":
       // options
        let buisness = document.getElementById('places').value;
        break;
      case "restauraunt":
        console.log({
          Message: "You have selected restauraunt"
        });
        break;
      case "hotel":
        console.log({
          Message: "You have selected hotel"
        });
        break;
      case "market":
        console.log({
          Message: "You have selected market"
        });
        break;
    }
  } 
);


const options = {
 method: 'GET',
 headers: {
  Accept: 'application/json',
  Authorization: 'fsq3XcDK8dkjWj4yZXVUYXClvuc0vwuw9oaPk6X3rbyf0/I='
 }
};

fetch('https://api.foursquare.com/v3/places/search?&query=${buisness}', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));


// have foursquare find locations of each selected options show on the map in the location



















