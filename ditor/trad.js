// vanillaJS : https://putaindecode.io/articles/de-jquery-a-vanillajs/
// geoloc : https://stackoverflow.com/questions/3489460/how-to-get-visitors-location-i-e-country-using-geolocation


var httpRequest = new XMLHttpRequest()
httpRequest.onreadystatechange = function (response) {
  console.log(response)
  console.log(response.city, response.country);
}
httpRequest.open('GET', 'https://ipinfo.io')
httpRequest.send()

$.get("https://ipinfo.io", function(response) {
    console.log(response.city, response.country);
}, "jsonp");
