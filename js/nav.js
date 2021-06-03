// nav

var toggleBar = document.querySelector(".toggle-bar");
var dropDown = document.querySelector(".drop-down");
var nav = document.querySelector("nav");
var login = document.querySelector(".login .login_icon");
var login_drop = document.querySelector(".login-drop");
var login_btns = document.querySelectorAll(".form_btn");
var user_opt = document.querySelectorAll(".login_wrapper form");
var forgot_pass = document.querySelector(".forgot_pass_btn");

toggleBar.addEventListener("click", () => {
	console.log("klknuo sam");
	dropDown.classList.toggle("active");
	nav.classList.toggle("no-border");
	toggleBar.classList.toggle("toggle-open");
	console.log(nav);
});

// SING UP LOGIN

login.addEventListener("click", () => {
	login_drop.classList.toggle("show_login");
});

login_btns.forEach((login_btn) => {
	login_btn.addEventListener("click", () => {
		removeActive_btn();
		hide_login_form();
		var user_opt_form = document.querySelector(
			`.${login_btn.getAttribute("data-form")}`
		);
		user_opt_form.classList.add("show_form");
		login_btn.classList.add("active_btn");
	});
});

forgot_pass.addEventListener("click", () => {
	hide_login_form();
});

function removeActive_btn() {
	login_btns.forEach((login_btn) => {
		login_btn.classList.remove("active_btn");
	});
}

function hide_login_form() {
	user_opt.forEach((opt) => {
		opt.classList.remove("show_form");
	});
}
