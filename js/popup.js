
/* Скрипт для Седоны */

var form = document.querySelector(".site-search-form");
var popup = document.querySelector(".open-contact-popup");

form.classList.add("form-hidden");

popup.addEventListener("click", function(event) {
  event.preventDefault();
  form.classList.toggle("form-hidden");
});


var oldMap = document.querySelector(".site-map");
var map = document.querySelector(".js-open-map");

oldMap.classList.toggle("map-hidden");

map.classList.toggle("map-hidden");
