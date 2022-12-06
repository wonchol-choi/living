$(document).ready(function () {
		
//메뉴 제이쿼리
$('.submenu').hide();
	
	//해당 서브페이지 서브메뉴 자동 슬라이드다운
	$('#menu7>ul').stop().slideDown();
	$('#menu7>a').addClass('mborder');
	
	//메뉴 hover시
	$('.menu').hover(function(){
		$('#menu>ul>li>a').removeClass('mborder');
		$('.submenu').stop().slideUp();
		//.removeClass('mborder');
		$(this).children().stop().slideDown();
		$(this).children('a').addClass('mborder');
		}, function(){
			$('#menu>ul>li>a').removeClass('mborder');
			$('.submenu').stop().slideUp();
	});
	
	//서브이미지박스 마우스오버
	var subbox1=['images/diy/icon1-1.jpg', 'images/diy/icon1-2.jpg', 'images/diy/icon1-3.jpg', 'images/diy/icon1-4.jpg', 'images/diy/icon1-5.jpg', 'images/diy/icon1-6.jpg', 'images/diy/icon1-7.jpg', 'images/diy/icon1-8.jpg', 'images/diy/icon1-9.jpg', 'images/diy/icon1-10.jpg'];
	
	var subbox2=['images/diy/icon2-1.jpg', 'images/diy/icon2-2.jpg', 'images/diy/icon2-3.jpg', 'images/diy/icon2-4.jpg', 'images/diy/icon2-5.jpg', 'images/diy/icon2-6.jpg', 'images/diy/icon2-7.jpg', 'images/diy/icon2-8.jpg', 'images/diy/icon2-9.jpg', 'images/diy/icon2-10.jpg'];
	
	var sb;

$('.subboxpic').hover(function(){
	sb=$(this).parent().index(); //console.log(sb);
	$(this).children().attr('src',subbox2[sb]);
	}, function(){
		$(this).children().attr('src',subbox1[sb]);
		});

   //서브스크롤메뉴
        $('#scrollMenu').css('display','none');
    	$(window).scroll(function(){  
		   
		   var num = $(this).scrollTop(); 
		   console.log(num);
		   if( num > 600){
			  $('#scrollMenu').css('display','block');
		   }else{
			   $('#scrollMenu').css('display','none');
		   }
	 	});
	
		$('.depth2>li').click(function(e) {
			e.preventDefault();
			$('.depth2>li').removeClass('depth2s');
			$(this).addClass('depth2s');
		});
		
		$('.depth2>li').hover(function() {
			$(this).addClass('depth2s');
		},function(){
			$('.depth2>li').removeClass('depth2s');
		});

});