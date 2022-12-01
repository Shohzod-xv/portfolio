$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.menu').toggleClass('open');		
	});

	$('.menu__link').click(function(event){
		$('.header__burger, .menu').removeClass('active');
		$('body').removeClass('lock');
	});
});

const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	depay: 400,
});

sr.reveal(`.home__image`)
sr.reveal(`.home__inner`, {origin: 'bottom'})
sr.reveal(`.services__inner`, {interval: 100})
sr.reveal(`.services__image`, {origin: 'left'})
sr.reveal(`.works__item`, {origin: 'bottom'})
sr.reveal(`.works__text`, {origin: 'top'})
sr.reveal(`.contact__inner`, {origin: 'bottom'})
sr.reveal(`.contact__item`, {origin: 'left'})
//sr.reveal(`.footer__inner`, {origin: 'top'})//
