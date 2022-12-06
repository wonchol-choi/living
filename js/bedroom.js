$(document).ready(function () {
		
//메뉴 제이쿼리
$('.submenu').hide();
	
	//해당 서브페이지 서브메뉴 자동 슬라이드다운
	$('#menu2>ul').stop().slideDown();
	$('#menu2>a').addClass('mborder');
	
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
	var subbox1=['images/bedroom/icon1-1.jpg', 'images/bedroom/icon1-2.jpg', 'images/bedroom/icon1-3.jpg', 'images/bedroom/icon1-4.jpg', 'images/bedroom/icon1-5.jpg', 'images/bedroom/icon1-6.jpg', 'images/bedroom/icon1-7.jpg', 'images/bedroom/icon1-8.jpg', 'images/bedroom/icon1-9.jpg', 'images/bedroom/icon1-10.jpg'];
	
	var subbox2=['images/bedroom/icon2-1.jpg', 'images/bedroom/icon2-2.jpg', 'images/bedroom/icon2-3.jpg', 'images/bedroom/icon2-4.jpg', 'images/bedroom/icon2-5.jpg', 'images/bedroom/icon2-6.jpg', 'images/bedroom/icon2-7.jpg', 'images/bedroom/icon2-8.jpg', 'images/bedroom/icon2-9.jpg', 'images/bedroom/icon2-10.jpg'];
	
	var sb;

$('.subboxpic').hover(function(){
	sb=$(this).parent().index(); //console.log(sb);
	$(this).children().attr('src',subbox2[sb]);
	}, function(){
		$(this).children().attr('src',subbox1[sb]);
		});


//스크롤서브

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


		
		//콘텐츠1 갤러리
				
			$('.con1gal').click(function(){
		//var index=$(this).parent().index(); 인덱스는 부모와 자식간 관계(this=내가 클릭한 본인이 몇번째 자식인가)
			var p=$(this).attr('src'); //p:임시 기억장소, 클릭한(this) 이미지주소를 넣어둠
			var k=$('.con1pic1').attr('src');
			$(this).attr('src',k);
			$('.con1pic1').attr('src',p);
		});	
		
		
//콘텐츠2 오토슬라이더
				
count = $('.slider li').length;
var e = 0;
autoplay();
				
		function autoplay()  {
			play = setInterval(function(){
				e = ((e+1) == count) ? 0 : e+1;
				$('.slider').animate({'left':-(e*250)}, 500);
			},2000);
		}
		
//슬라이더에 마우스가 오버되면
	$('.slider li').hover(function(){
		clearInterval(play);//자동플레이 중지
		},function(){
			autoplay();//재개
			
		});

		
		
//도큐멘트 끝		
});



//비주얼 마우스 스크롤

$(function(){

	var metodBull = true;
	var metodVar = 0;
	var metodSum = $('.slider_panel ul li').length -1;



	$('#visual').mousewheel(function(h, delta){ //델타: 내릴 때 -1 	//console.log(delta);
		h.preventDefault();
	
		w(delta);
		
		
});	

//스크롤 상하 아이콘 클릭

	$('.prev').click(function(){
		w(1);
	});
	$('.next').click(function(){
		w(-1);
	});

//델타 값, 내릴 때 -1 올릴 때 1
function w(delta){ 
	if(!metodBull) return;
	if(delta > 0){
			if(metodVar > 0){
				metodVar--;
				metodBull = false;
				$('.slider_panel ul li').eq(metodVar+1).stop().animate({'top':372},2000, 'easeOutQuad').find('>a').fadeOut(600, 'easeOutQuart');
				$('.slider_text_panel ul li').eq(metodVar+1).fadeOut(300);

				setTimeout(function(){
					$('.slider_panel ul li').eq(metodVar).stop().animate({'top':0},1000, 'easeOutQuint').find('>a').delay(200).fadeIn(1000, 'easeOutQuart');
				},300);
				setTimeout(function(){
					$('.slider_text_panel ul li').eq(metodVar).fadeIn(300);
				},800);
				setTimeout(function(){
					metodBull = true;
				},2000);
			}else if(metodVar == 0){
				metodVar = metodSum;
				metodBull = false;
				$('.slider_panel ul li').eq(0).siblings().css('top',-372);
				$('.slider_panel ul li').eq(0).stop().animate({'top':372},2000, 'easeOutQuad').find('>a').fadeOut(600, 'easeOutQuart');
				$('.slider_text_panel ul li').eq(0).fadeOut(300);
				
				setTimeout(function(){
					$('.slider_panel ul li').eq(metodVar).stop().animate({'top':0},1000, 'easeOutQuint').find('>a').delay(200).fadeIn(1000, 'easeOutQuart');
				},300);
				setTimeout(function(){
					$('.slider_text_panel ul li').eq(metodVar).fadeIn(300);
				},800);
				setTimeout(function(){
					$('.slider_panel ul li').eq(0).css('top',-372);
					metodBull = true;
				},2000);
			};
		}else{
			if(metodVar < metodSum){
				metodVar++;
				metodBull = false;

				$('.slider_panel ul li').eq(metodVar-1).stop().animate({'top':-372},2000, 'easeOutQuad').find('>a').fadeOut(600, 'easeOutQuart');
				$('.slider_text_panel ul li').eq(metodVar-1).fadeOut(300);

				setTimeout(function(){
					$('.slider_panel ul li').eq(metodVar).stop().animate({'top':0},1000, 'easeOutQuint').find('>a').delay(200).fadeIn(1000, 'easeOutQuart');
				},300);
				setTimeout(function(){
					$('.slider_text_panel ul li').eq(metodVar).fadeIn(300);
				},800);
				setTimeout(function(){
					metodBull = true;
				},2000);
				
			}else if(metodVar == metodSum){
				metodVar = 0;
				metodBull = false;
				$('.slider_panel ul li').eq(metodVar-1).siblings().css('top',372);
				$('.slider_panel ul li').eq(metodVar-1).stop().animate({'top':-372},2000, 'easeOutQuad').find('>a').fadeOut(600, 'easeOutQuart');
				$('.slider_text_panel ul li').eq(metodVar-1).fadeOut(300);
				
				setTimeout(function(){
					$('.slider_panel ul li').eq(metodVar).stop().animate({'top':0},1000, 'easeOutQuint').find('>a').delay(200).fadeIn(1000, 'easeOutQuart');
				},300);
				setTimeout(function(){
					$('.slider_text_panel ul li').eq(metodVar).fadeIn(300);
				},800);
				setTimeout(function(){
					$('.slider_panel ul li').eq(metodSum).css('top',372);
					metodBull = true;
				},2000);
			};
		};
	
	};
	
});

//비주얼 끝

