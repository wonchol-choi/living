$(document).ready(function () {
				
//메뉴 제이쿼리
$('.submenu').hide();
	
	//해당 서브페이지 서브메뉴 자동 슬라이드다운
	$('#menu3>ul').stop().slideDown();
	$('#menu3>a').addClass('mborder');
	
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
	
	//서브 이미지 메뉴 마우스 오버
	
	var subbox1=['images/kitchen/icon1-1.jpg', 'images/kitchen/icon1-2.jpg', 'images/kitchen/icon1-3.jpg', 'images/kitchen/icon1-4.jpg', 'images/kitchen/icon1-5.jpg', 'images/kitchen/icon1-6.jpg', 'images/kitchen/icon1-7.jpg', 'images/kitchen/icon1-8.jpg', 'images/kitchen/icon1-9.jpg', 'images/kitchen/icon1-10.jpg'];
	
	var subbox2=['images/kitchen/icon2-1.jpg', 'images/kitchen/icon2-2.jpg', 'images/kitchen/icon2-3.jpg', 'images/kitchen/icon2-4.jpg', 'images/kitchen/icon2-5.jpg', 'images/kitchen/icon2-6.jpg', 'images/kitchen/icon2-7.jpg', 'images/kitchen/icon2-8.jpg', 'images/kitchen/icon2-9.jpg', 'images/kitchen/icon2-10.jpg'];
	
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
	
				
				//비주얼 슬라이더 버튼				
				var index=0;
		
				$('.left_move').click(function() {
					if(index>0) {
						index--;
						moveSlider(index);
					} else{
						index=4;
						moveSlider(index);
					}
				});
				
				$('.right_move').click(function() {
					if(index<4) {
						index++;
						moveSlider(index);
					} else{
						index=0;
						moveSlider(index);
					}
				});
				
				
//콘텐츠1 오토슬라이더
				
count = $('.slider li').length;
e = 0;
autoplay();
				
		function autoplay()  {
			play = setInterval(function(){
				e = ((e+1) == count) ? 0 : e+1;
				$('.slider').animate({'left':-(e*720)}, 500);
			},2000);
		}
		
//슬라이더에 마우스가 오버되면
	$('.slider li').hover(function(){
		clearInterval(play);//자동플레이 중지
		},function(){
			autoplay();//재개
			
			});
				
			});

//콘텐츠1 오토슬라이더 끝

//비주얼 무브슬라이더
			function moveSlider(index){
				$('.slider_panel').stop().animate({
					left: -(index*1050) 
				},'slow');
			}
			