 $(function(){
 	new WOW().init();

 	$('.button-menu').click(function(){
 		$('.wrapper-menu').toggleClass('wrapper-menu-active');

 		$(this).toggleClass('button-menu-active');
 	});

 	$('.menu a:nth-child(1)').on('click', function(e){
 		e.preventDefault();

 		$('body,html').animate({ scrollTop: $('.background').offset().top},1000);
 	});

 	$('.menu a:nth-child(2)').on('click', function(e){
 		e.preventDefault();

 		$('body,html').animate({ scrollTop: $('.introduce').offset().top},1000);
 	});

 	$('.menu a:nth-child(3)').on('click', function(e){
 		e.preventDefault();

 		$('body,html').animate({ scrollTop: $('.section-project').offset().top},1000);
 	});

 	$('.menu a:nth-child(4)').on('click', function(e){
 		e.preventDefault();

 		$('body,html').animate({ scrollTop: $('.footer').offset().top},1000);
 	});

 	$('#backtotop').click(function(){
 		$('body,html').animate({scrollTop: 0},1000);
 	});
})  
 
 	var scroll = $('.scroll').offset().top;
 	var introduce = $('.introduce').offset().top;
 $(window).scroll(function(){
 	var top = $('body').scrollTop() || $('html').scrollTop();
 		if (top >= introduce){
 			$('.menu').addClass('menu2');
 			$('.scroll').addClass('scroll-hidden');
 			$('#backtotop').css('display', 'block');
 		}else{
 			$('.menu2').removeClass('menu2');
 			$('.scroll-hidden').removeClass('scroll-hidden');
 			$('#backtotop').css('display', 'none');
 		}



 });