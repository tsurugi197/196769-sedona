var call_btn = document.querySelector(".caller-btn");
var search_form = document.querySelector(".search-form");
var search_submit = document.querySelector(".search-btn");

var datein = search_form.querySelector("[name=datein]");
var dateout = search_form.querySelector("[name=dateout]");
var adult = search_form.querySelector("[name=adult]");
var kids = search_form.querySelector("[name=kids]");

call_btn.addEventListener("click", function(evenet) {
	event.preventDefault();
	search_form.classList.toggle("search-animation");
});
search_submit.addEventListener("click", function(event) {
	if (!datein.value || !dateout.value || !adult.value || !kids.value) {
		event.preventDefault();
		alert("Please, fill all fields.... Hey, you, please take me frome here, they force me to work all the ti....i can't speak any mo....ah u little brat! NOO PLEASE(*very painfull screams*)");
	}
});