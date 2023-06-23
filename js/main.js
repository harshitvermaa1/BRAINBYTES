// (function($) {
// 	"use strict"
	
// 	// Preloader
// 	$(window).on('load', function() {
// 		$("#preloader").delay(600).fadeOut();
// 	});

// 	// Mobile Toggle Btn
// 	$('.navbar-toggle').on('click',function(){
// 		$('#header').toggleClass('nav-collapse')
// 	});
	
// })();
document.addEventListener('DOMContentLoaded', function () {
	var toggleButton = document.querySelector('.navbar-toggle');
	var mainMenu = document.querySelector('.main-menu');
  
	toggleButton.addEventListener('click', function () {
	  mainMenu.classList.toggle('active');
	});
  });
  