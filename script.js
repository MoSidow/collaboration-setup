var myLocation = document.getElementById('location');
var searchLocation = document.getElementById('search');

var weatherAPIKey = '272b68b95d1c42ff7655c2f715fa4879';
var APIURL = 'https://api.openweathermap.org/';

var fiveDayForecast = 5;

// Gets the location the user has submitted
function getLocation(){
  var userInput = myLocation.value;

  console.log('Pressed');
}

searchLocation.addEventListener("click", getLocation);




searchLocation.addEventListener("click", function () {
    var searchText = document.getElementById("location");  
    var showtext = document.getElementById("your-location")
    
    showtext.innerHTML = searchText.value;
    
});