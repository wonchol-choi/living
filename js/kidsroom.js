var	play;


$(document).ready(function () {
	$('.submenu').hide();
	
	$('#menu5>ul').stop().slideDown();
	$('#menu5>a').addClass('mborder');
	
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


	var subbox1=['images/kidsroom/icon1-1.jpg', 'images/kidsroom/icon1-2.jpg', 'images/kidsroom/icon1-3.jpg', 'images/kidsroom/icon1-4.jpg', 'images/kidsroom/icon1-5.jpg', 'images/kidsroom/icon1-6.jpg', 'images/kidsroom/icon1-7.jpg', 'images/kidsroom/icon1-8.jpg', 'images/kidsroom/icon1-9.jpg', 'images/kidsroom/icon1-10.jpg'];
	
	var subbox2=['images/kidsroom/icon2-1.jpg', 'images/kidsroom/icon2-2.jpg', 'images/kidsroom/icon2-3.jpg', 'images/kidsroom/icon2-4.jpg', 'images/kidsroom/icon2-5.jpg', 'images/kidsroom/icon2-6.jpg', 'images/kidsroom/icon2-7.jpg', 'images/kidsroom/icon2-8.jpg', 'images/kidsroom/icon2-9.jpg', 'images/kidsroom/icon2-10.jpg'];
	
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


//con3 오토 슬라이드 소스
		
				
	$('.animation_canvas1').hover(function(){
   		$('.first>img').attr('src','images/kidsroom/c3-1-1.jpg');
		
		count1 = $('.con3-1-panel>li').length;
     	 a = 0;
     	 callplay1();
	
		},function(){
		clearInterval(play1);
		setTimeout(function () {
		$('.con3-1-panel').animate({
			left:0
		},1000);
		$('.first>img').attr('src','images/kidsroom/c3-1-0.jpg');
		},1000);
	});
//	
	$('.animation_canvas2').hover(function(){
   		$('.second>img').attr('src','images/kidsroom/c3-2-1.jpg');
		
		count2 = $('.con3-2-panel>li').length;
     	 b = 0;
     	 callplay2();
	
		},function(){

		clearInterval(play2);
		setTimeout(function () {
		$('.con3-2-panel').animate({
			left:0
		},1000);
		$('.second>img').attr('src','images/kidsroom/c3-2-0.jpg');
		},1000);
	});
//	
	$('.animation_canvas3').hover(function(){
   		$('.third>img').attr('src','images/kidsroom/c3-3-1.jpg');
		
		count3 = $('.con3-3-panel>li').length;
     	 c = 0;
     	 callplay3();
	
		},function(){
	//		console.log('떠난값='+play);
		clearInterval(play3);
		setTimeout(function () {
		$('.con3-3-panel').animate({
			left:0
		},1000);
		$('.third>img').attr('src','images/kidsroom/c3-3-0.jpg');
		},1000);
	});
	
//비쥬얼부분스크립트	
	var index;
		$('#visual>div').click(function(){
			index=$(this).index();
		
		$('.kids_text').css('display','none');
		
		$('#visual>div').removeClass(function (index) {
			return 'kids_v'+ (index+1) + '_o'
		}); 
		
		$(this).addClass('kids_v'+ (index+1) + '_o');
		
		$('.kids_text').eq(index).css('display','block');
	
		});
//비쥬얼부분스크립트 끝			

});
				
		function callplay1()  {
			autoplay1();
			play1 = setInterval(function(){
				autoplay1();
			},2000);
		};
		function callplay2()  {
			autoplay2();
			play2 = setInterval(function(){
				autoplay2();
			},2000);
		};
		function callplay3()  {
			autoplay3();
			play3 = setInterval(function(){
				autoplay3();
			},2000);
		};
		
		function autoplay1() {
			a = ((a+1) == count1) ? 0 : a+1;
				$('.con3-1-panel').animate({
					left : -(a*380)
				},1500);
		}
		function autoplay2() {
			b = ((b+1) == count2) ? 0 : b+1;
				$('.con3-2-panel').animate({
					left : -(b*380)
				},1500);
		}
		function autoplay3() {
			c = ((c+1) == count3) ? 0 : c+1;
				$('.con3-3-panel').animate({
					left : -(c*380)
				},1500);
		}

		
			
		