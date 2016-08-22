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
	});
})


var APIKEY  = 'e9fc0dfa8729f1e73c92f579cce35aea';
var city = 'Kiev';

var  fullURL = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID='+APIKEY;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) {

		var weather = JSON.parse(xhttp.responseText);
		
		var country = weather.sys.country; 		// 	Страна
		var sunrice = weather.sys.sunrise; 		// Время рассвета
		var sunset = weather.sys.sunset;			// Время заката
		var cloud = weather.clouds.all;				// Облачность
		var temp = weather.main.temp - 273;		// Температура (в Цельсиях)
		var pressure = weather.main.pressure;	// Давление
		var maxTemp = weather.main.temp_max;	// Максимальная температура
		var minTemp = weather.main.temp_min;	// Минимальная температура
		var speedWind = weather.wind.speed;		// Скорость ветра
		var degWind = weather.wind.deg; 			// Направление ветра

		var newTable = document.createElement('table');

		newTable.id = 't1';
		newTable.width = 500;

		var titleRow = newTable.insertRow(0);
		titleRow.id = 'tr';
		var time = new Date();

		var countryCell = titleRow.insertCell();
		countryCell.innerHTML = country;

		var sunriceCell = titleRow.insertCell();
		
		sunriceCell.innerHTML = sunrice;

		var sunsetCell = titleRow.insertCell();
		
		sunsetCell.innerHTML = sunset;
		
		var cloudCell = titleRow.insertCell();
		
		cloudCell.innerHTML = cloud;

		var tempCell = titleRow.insertCell();
		
		tempCell.innerHTML = temp;

		var pressureCell = titleRow.insertCell();
		
		pressureCell.innerHTML = pressure;

		var maxTempCell = titleRow.insertCell();
		
		maxTempCell.innerHTML = maxTemp;

		var minTempCell = titleRow.insertCell();
		
		minTempCell.innerHTML = minTemp;

		var speedWindCell = titleRow.insertCell();
		
		speedWindCell.innerHTML = speedWind;

		var degWindCell = titleRow.insertCell();
		
		degWindCell.innerHTML = degWind;

		document.body.appendChild(newTable);


	}
};
xhttp.open("GET", fullURL, true);
xhttp.send();






