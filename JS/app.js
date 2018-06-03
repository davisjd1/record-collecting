// Create the map object, set the view and zoom
const mymap = L.map("mapid").setView([47.890746, -122.277508], 10.5);

// Add the background tiles to the map
L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken:
      "pk.eyJ1IjoiZGF2aXNqZDEiLCJhIjoiY2poemNlbjdwMHNnYzNrcXMwNTI5Nzd5ZSJ9.Q71zubav-tBEnmM1DUWm3A"
  }
).addTo(mymap);





 var marker = L.marker([47.823077, -122.283583]).addTo(mymap);
  marker.bindPopup("<b>Silver Platters Lynnwood</b><br>$1-$30 (used-new) <br>3715 196th St SW").openPopup();

 var marker = L.marker([47.822469, -122.316774]).addTo(mymap);
  marker.bindPopup("<b>Half Price Books Lynnwood</b><br>$1-$20 (used-newish) <br>19500 WA-99").openPopup();

 var marker = L.marker([47.912859, -122.214944]).addTo(mymap);
  marker.bindPopup("<b>Half Price Books Everett</b><br>$1-$20 (used-newish) <br>1321 SE Everett Mall Way").openPopup();

var marker = L.marker([47.984330, -122.201099]).addTo(mymap);
  marker.bindPopup("<b>Bargain CDs, Records, and Tapes</b><br>$3-$10 (used) <br>2501 Broadway").openPopup();

var marker = L.marker([47.904953, -122.237397]).addTo(mymap);
  marker.bindPopup("<b>Goodwill Everett South</b><br>$1-$4 (used) <br>228 SW Everett Mall Way").openPopup();

var marker = L.marker([47.781073, -122.345172]).addTo(mymap);
  marker.bindPopup("<b>Aurora Antique Mall</b><br>$1-$5 (used)<br>24111 WA-99").openPopup();