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


var key  = 'e6dab7a6cb1943c7bab100423162208';
var city = 'Kiev';
var xhr = new XMLHttpRequest();

var  fullURL = 'http://api.apixu.com/v1/current.json?key='+key+'&q='+city;

xhr.open('GET', fullURL, true);
xhr.send();

console.log(xhr);

var weather = JSON.parse(xhr.responseText);
// console.log(weather);