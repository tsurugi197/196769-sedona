var call_btn = document.querySelector(".caller-btn");
var search_form = document.querySelector(".search-form");
var search_submit = document.querySelector(".search-btn");

var datein = search_form.querySelector("[name=datein]");
var dateout = search_form.querySelector("[name=dateout]");
var adult = search_form.querySelector("[name=adult]");
var kids = search_form.querySelector("[name=kids]");

call_btn.addEventListener("click", function(e) {
	e.preventDefault();
	search_form.classList.toggle("search-animation");
});
search_submit.addEventListener("click", function(event) {
	if (!datein.value || !dateout.value || !adult.value || !kids.value) {
		event.preventDefault();
		alert("Please, fill all fields.... Hey, you, please take me frome here, they force me to work all the ti....i can't speak any mo....ah u little brat! NOO PLEASE(*very painfull screams*)");
	}
});
/* adult input + - */
var adultval = Number(search_form.querySelector("[name=adult]").value); 
var adltplus = search_form.querySelector(".input-adult .btn-plus");
var adltmins = search_form.querySelector(".input-adult .btn-minus");
adltplus.addEventListener("click", function(event) {
	event.preventDefault();
	adultval += 1;
	document.querySelector(".input-adult input").value = adultval;
});
adltmins.addEventListener("click", function(event) {
	event.preventDefault();
	if (adultval > 0) {
	adultval -= 1;
	}
	document.querySelector(".input-adult input").value = adultval;
});
/* kids input + - */
var kidsval = Number(search_form.querySelector("[name=kids]").value); 
var kidsplus = search_form.querySelector(".input-kids .btn-plus");
var kidsmins = search_form.querySelector(".input-kids .btn-minus");
kidsplus.addEventListener("click", function(event) {
	event.preventDefault();
	kidsval += 1;
	document.querySelector(".input-kids input").value = kidsval;
});
kidsmins.addEventListener("click", function(event) {
	event.preventDefault();
	if (kidsval > 0) {
	kidsval -= 1;
	}
	document.querySelector(".input-kids input").value = kidsval;
});


