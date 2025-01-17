

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
// const myIcon = L.icon({
//     iconUrl: 'images/icon2022.png',
//     iconSize: [50, 50],
//     iconAnchor: [22, 94],
//     popupAnchor: [-3, -76],
// });
// const marker = L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);


// create an event listener to pop up a specific location in the area for that specific list item for each of the list items.
// have that evnet listener prompt some example text.

// shows the buisnesses lists when item is selected
document.getElementById("places").addEventListener('change',
  (event) => {
   let buisness = event.target.value;
    switch (buisness) {
      case "coffee":
        // console.log(buisness);
        getFoursquare(buisness)
        break;
      case "restaurant":
        getFoursquare(buisness)
        break;
      case "hotel":
        getFoursquare(buisness)
        break;
      case "market":
        getFoursquare(buisness)
        break;
      default:
        console.log('default');
        break;
    }
  });


// have foursquare find locations of each selected options show on the map 

// get foursquare buisnesses
async function getFoursquare(buisness) {
  const options = {
  method: 'GET',
  headers: {
  Accept: 'application/json',
  Authorization: 'fsq3XcDK8dkjWj4yZXVUYXClvuc0vwuw9oaPk6X3rbyf0/I='
  }
};

let response = await fetch(
  `https://api.foursquare.com/v3/places/search?&query=${buisness}&limit=10`,
options
);

let data = await response.text();
let parsedData = JSON.parse(data);
console.log(parsedData);
return parsedData;
}

// function to show the map where the locations are when clicked.
function processBusinesses() {
  const myIcon = L.icon({
    iconUrl: 'images/icon2022.png',
    iconSize: [50, 50],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
}















