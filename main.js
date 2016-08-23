$(function(){
 /* выбор города */
 $('.delivery_list').click(function(){
 $(".cities_list").slideToggle('fast');
 });
 $('ul.cities_list li').click(function(){
 var tx = $(this).html();
 var tv = $(this).attr('alt');
 $(".cities_list").slideUp('fast');
 $(".delivery_list span").html(tx);
 $(".delivery_text").html(tv);
 });
 })


var APIKEY  = 'e9fc0dfa8729f1e73c92f579cce35aea';
var city = 'Kiev';

var  fullURL = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID='+APIKEY;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) {

		var weather = JSON.parse(xhttp.responseText);
		
		
		var country = weather.sys.country; 													// Страна
		var sunrice = weather.sys.sunrise; 													// Время рассвета
		var sunset = weather.sys.sunset;														// Время заката
		var cloud = weather.clouds.all;															// Облачность
		var temp =  Math.floor(weather.main.temp - 273);						// Температура (в Цельсиях)
		var pressure = weather.main.pressure;												// Давление
		var maxTemp =  Math.floor(weather.main.temp_max - 273);			// Максимальная температура
		var minTemp =  Math.floor(weather.main.temp_min - 273);			// Минимальная температура
		var speedWind = weather.wind.speed;													// Скорость ветра
		var degWind = weather.wind.deg; 														// Направление ветра

		var newTable = document.createElement('table');

		newTable.id = 't';
		newTable.width = 800;
		newTable.border = 1;

		var titleRow = newTable.insertRow(0);
		var valueRow = newTable.insertRow(1);
		titleRow.id = 'tirle';
		valueRow.id = 'value';
		
		function corectTime(t)
		{
				return t<10 ? "0"+t : t;
		}
		
		titleRow.insertCell().innerHTML = 'Страна'
		valueRow.insertCell().innerHTML = country;

		
		titleRow.insertCell().innerHTML = 'Время рассвета';
		var timeSunrice= new Date(sunrice*1000);
		valueRow.insertCell().innerHTML = corectTime(timeSunrice.getHours() )+':'+corectTime(timeSunrice.getMinutes())+':'+corectTime(timeSunrice.getSeconds());

		titleRow.insertCell().innerHTML = 'Время заката';
		var timeSunset= new Date(sunset*1000);
		valueRow.insertCell().innerHTML = corectTime(timeSunset.getHours())+':'+corectTime(timeSunset.getMinutes())+':'+corectTime(timeSunset.getSeconds());
		
		titleRow.insertCell().innerHTML = 'Облачность';
		valueRow.insertCell().innerHTML = cloud;

		titleRow.insertCell().innerHTML = 'Температура °C';
		valueRow.insertCell().innerHTML =  temp;

		titleRow.insertCell().innerHTML = 'Давление';
		valueRow.insertCell().innerHTML = pressure;

		titleRow.insertCell().innerHTML = 'Максимальная температура';
		valueRow.insertCell().innerHTML =  maxTemp;

		titleRow.insertCell().innerHTML = 'Минимальная температура';
		valueRow.insertCell().innerHTML =  minTemp;

		titleRow.insertCell().innerHTML = 'Скорость ветра';
		valueRow.insertCell().innerHTML = speedWind;

		titleRow.insertCell().innerHTML = 'Направление ветра ↑';
		valueRow.insertCell().innerHTML =  degWind;


		document.body.appendChild(newTable);
	

}
};
xhttp.open("GET", fullURL, true);
xhttp.send();








