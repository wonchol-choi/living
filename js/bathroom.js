$(document).ready(function () {
				
				$('.submenu').hide();
	
	$('#menu4>ul').stop().slideDown();
	$('#menu4>a').addClass('mborder');
	
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
	
	var subbox1=['images/bathroom/icon1-1.jpg', 'images/bathroom/icon1-2.jpg', 'images/bathroom/icon1-3.jpg', 'images/bathroom/icon1-4.jpg', 'images/bathroom/icon1-5.jpg', 'images/bathroom/icon1-6.jpg', 'images/bathroom/icon1-7.jpg', 'images/bathroom/icon1-8.jpg', 'images/bathroom/icon1-9.jpg', 'images/bathroom/icon1-10.jpg'];
	
	var subbox2=['images/bathroom/icon2-1.jpg', 'images/bathroom/icon2-2.jpg', 'images/bathroom/icon2-3.jpg', 'images/bathroom/icon2-4.jpg', 'images/bathroom/icon2-5.jpg', 'images/bathroom/icon2-6.jpg', 'images/bathroom/icon2-7.jpg', 'images/bathroom/icon2-8.jpg', 'images/bathroom/icon2-9.jpg', 'images/bathroom/icon2-10.jpg'];
	
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

	
	
	
/*슬라이드 이미지*/
				var index=0;
				var indexcheck;
				
				moveSlider(index);
				$('.B_circle').eq(index).addClass('B_circle_over');
				$('.B_circle').click(function() {
					index=$(this).index();
					$('.B_circle').removeClass('B_circle_over');
					$(this).addClass('B_circle_over');
					moveSlider(index);
				});
				
				$('.B_circle').hover(function() {
					$(this).addClass('B_circle_over');
				},function(){
					indexcheck=$(this).index();
					if(indexcheck!=index) {
					$(this).removeClass('B_circle_over');
					}
				});
	
				
			});

			function moveSlider(index){
				$('.slider_panel').stop().animate({
					left: -(index*1150) 
				},'slow');
			
		
			}
/*슬라이드 이미지*/	