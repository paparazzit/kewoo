// nav

var toggleBar = document.querySelector(".toggle-bar");
var dropDown = document.querySelector(".drop-down");
var nav = document.querySelector("nav");

toggleBar.addEventListener("click", () => {
	console.log("klknuo sam");
	dropDown.classList.toggle("active");
	nav.classList.toggle("no-border");
	toggleBar.classList.toggle("toggle-open");
	console.log(nav);
});

$("#tutors").owlCarousel({
	loop: true,
	margin: 50,
	autoWidth: true,
	center: true,
	nav: true,
	dots: false,
	responsive: {
		0: {
			items: 1,
		},
		1200: {
			items: 3,
		},
		1300: {
			items: 5,
		},
	},
});

$("#testimonials").owlCarousel({
	loop: true,
	margin: 50,
	nav: true,
	dots: false,
	responsive: {
		0: {
			items: 1,
		},
		800: {
			items: 1,
		},
		1000: {
			items: 1,
		},
	},
});
// Map marker vertical and horizontal ajustments using data-atributes
$(".map-marker").each(function () {
	var $this = $(this),
		top = $this.data("top"),
		left = $this.data("left");

	$this.css({
		top: top + "%",
		left: left + "%",
	});
	$this.css({ top: top + "%" });
});

// managing featured tutor bt data-atributes: just give data-featured to html element

$(".tutor-card").each(function () {
	var $this = $(this),
		featured = $this.data("featured"),
		featured_tutor = $this.data("featured");

	if ($this.data(featured_tutor) === "featured") {
		var tutor_img_lg = $this.find(".tutor-card-img");
		var tutor_img_sm = $this.find(".tutor-img-round");
		tutor_img_lg.append(
			"<div class='featured-banner'><p>Featured tutor</p></div>"
		);
		tutor_img_sm.append(
			"<div class='featured-banner'><p>Featured tutor</p></div>"
		);
	}
});

// CUSTOM OPTION SELECT
const selected = document.querySelectorAll(".selected");
const optionsList = document.querySelectorAll(".option");
var optionsContainer = document.querySelectorAll(".options-container");

selected.forEach(function (s) {
	s.addEventListener("click", function () {
		// event.stopPropagation();
		optionsContainer.forEach(function (container) {
			container.classList.remove("active");
		});

		s.previousElementSibling.classList.toggle("active");
		console.log(s.previousElementSibling);
		console.log(s);
		s.focus();
	});
});

optionsList.forEach((o) => {
	o.addEventListener("click", function () {
		single_option = o.querySelector("label"); //take selected label
		selected_single = o.parentElement.nextElementSibling;
		selected_single.innerHTML = single_option.innerHTML;
		selected_single.previousElementSibling.classList.remove("active");
		console.log(single_option.innerText); //give me selected label's text
	});
});

// Izgasi opcije na search parametrima za tutore
window.addEventListener("click", function (event) {
	optionsContainer.forEach(function (c) {
		c.classList.remove("active");
	});
});

// TUTOR NAV TOGGLE

var tutorNavToggle = document.querySelector(".tutor-nav-toggle");
var tutorNavUl = document.querySelector(".tutor-profile-nav ul");
var tutorNavLinks = document.querySelectorAll(".tutor-profile-nav ul li");
var tutorProfileView = document.querySelector(".tutor-profile-view");

tutorNavToggle.addEventListener("click", () => {
	tutorNavUl.classList.toggle("active-tutor-nav");

	tutorNavLinks.forEach(function (l) {
		l.classList.toggle("show");
		l.addEventListener("click", () => {
			event.preventDefault();

			tutorNavLinks.forEach(function (el) {
				el.classList.remove("show");
			});
			tutorNavUl.classList.remove("active-tutor-nav");
		});
	});
});

// ABOUT ME

var about_me_btns = document.querySelectorAll(".lang_btn");

about_me_btns.forEach((button) => {
	button.addEventListener("click", () => {
		event.preventDefault();
		about_me_btns.forEach((button) => {
			button.classList.remove("active_lang");
		});

		button.classList.toggle("active_lang");
	});
});
