var city;
var button = '<div id="btn"></div>';

$(function(){
	
	$('.list').click(function(){
		$(".cities_list").slideToggle(300);
	});

	$('ul.cities_list li').click(function(){
		var tx = $(this).html();
		var tv = $(this).attr('alt');
		$(".cities_list").slideUp(300);
		$(".list span").html(tx);
		$(".delivery_text").html(tv);
	});


	$('#kiev').click(function()
	{
		$('span').html('<center><img src="loading.gif" width="50" height="50" /></center>');
		getWeather('kiev');
		document.getElementById('box').innerHTML = button+'Киев ';
	});
	$('#london').click(function()
	{
		$('span').html('<center><img src="loading.gif" width="50" height="50" /></center>');
		getWeather('london');
		document.getElementById('box').innerHTML = button+'Лондон';
	});
});

var weatherTable = document.createElement('table');
weatherTable.id = 'table';
var titleRow = weatherTable.insertRow(0);
var valueRow = weatherTable.insertRow(1);
titleRow.id = 'title';
valueRow.id = 'value';


titleRow.insertCell().innerHTML = 'Страна'
titleRow.insertCell().innerHTML = 'Время рассвета';
titleRow.insertCell().innerHTML = 'Время заката';
titleRow.insertCell().innerHTML = 'Облачность';
titleRow.insertCell().innerHTML = 'Температура °C';
titleRow.insertCell().innerHTML = 'Давление';
titleRow.insertCell().innerHTML = 'Максимальная температура';
titleRow.insertCell().innerHTML = 'Минимальная температура';
titleRow.insertCell().innerHTML = 'Скорость ветра';
titleRow.insertCell().innerHTML = 'Направление ветра ↑';

var countryCell = valueRow.insertCell();
var sunriceCell = valueRow.insertCell();
var sunsetCell = valueRow.insertCell();		
var cloudCell = valueRow.insertCell();
var tempCell = valueRow.insertCell();
var pressureCell = valueRow.insertCell();
var maxTempCell = valueRow.insertCell();
var minTempCell = valueRow.insertCell();
var speedWindCell = valueRow.insertCell();
var degWindCell = valueRow.insertCell();
var titleRow = weatherTable.insertRow(0);
var valueRow = weatherTable.insertRow(1);
titleRow.id = 'title';
valueRow.id = 'value';


function getWeather(city){

	var APIKEY  = 'e9fc0dfa8729f1e73c92f579cce35aea';
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

		
		


		
		function corectTime(t)
		{
			return t<10 ? "0"+t : t;
		}
		

		countryCell.innerHTML = country;	

		var timeSunrice = new Date(sunrice*1000);
		sunriceCell.innerHTML = corectTime(timeSunrice.getHours() )+':'+corectTime(timeSunrice.getMinutes())+':'+corectTime(timeSunrice.getSeconds());

		var timeSunset= new Date(sunset*1000);
		sunsetCell.innerHTML = corectTime(timeSunset.getHours())+':'+corectTime(timeSunset.getMinutes())+':'+corectTime(timeSunset.getSeconds());		
		cloudCell.innerHTML = cloud;
		tempCell.innerHTML =  temp;
		pressureCell.innerHTML = pressure;
		maxTempCell.innerHTML =  maxTemp;
		minTempCell.innerHTML =  minTemp;
		speedWindCell.innerHTML = speedWind;
		degWindCell.innerHTML =  degWind;

		$('span').html('');
		document.body.appendChild(weatherTable);
	}
};
xhttp.open("GET", fullURL, true);
xhttp.send();
}












