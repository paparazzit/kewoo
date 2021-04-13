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
var about_me_content = document.querySelectorAll(".about_me_content");

about_me_btns.forEach((button) => {
	button.addEventListener("click", (b) => {
		event.preventDefault();
		about_me_btns.forEach((button) => {
			button.classList.remove("active_lang");
		});
		var data_lang = button.getAttribute("data-lang");
		var languageInput = document.querySelector(`#${data_lang}`);
		remove_about_me_content();
		button.classList.toggle("active_lang");
		languageInput.style.display = "block";
	});
});

function remove_about_me_content() {
	about_me_content.forEach((about_me) => {
		about_me.style.display = "none";
	});
}

// PAYMENT METHOD

var preffered_payment = document.querySelectorAll(".preffered_paymet span");
preffered_payment.forEach((prefered_item) => {
	prefered_item.addEventListener("click", () => {
		removePaymentActive();
		prefered_item.classList.toggle("preffered_payment_active");
	});
});

function removePaymentActive() {
	preffered_payment.forEach((prefered_item) => {
		prefered_item.classList.remove("preffered_payment_active");
	});
}

// PLAY VIDEO

var play_btn = document.querySelector(".play_btn");
var video = document.querySelector("video");

play_btn.addEventListener("click", () => {
	video.play();
	play_btn.classList.add("hide_ply_btn");
	video.style.pointerEvents = "all";
});

video.addEventListener("click", () => {
	video.pause();
	play_btn.classList.remove("hide_ply_btn");
});

video.onended = () => {
	play_btn.classList.remove("hide_ply_btn");
};

// MY MESSAGES

var single_mail = document.querySelectorAll(".single_mail");
var current_mail = null;
single_mail.forEach((mail) => {
	mail.addEventListener("click", () => {
		var mail_view_classs = mail.getAttribute("data-mail");
		var my_mail = mail.childNodes[9];
		var mail_options = mail.childNodes[7].childNodes[2];
		my_mail.classList.toggle("open");
		mail_options.classList.toggle("show_options");
		console.log(mail_options);
	});
});
