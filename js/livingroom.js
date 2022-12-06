$(document).ready(function () {
	$('.submenu').hide();
	
	$('#menu1>ul').stop().slideDown();
	$('#menu1>a').addClass('mborder');
	
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

var subbox1=['images/livingroom/icon1-1.jpg', 'images/livingroom/icon1-2.jpg', 'images/livingroom/icon1-3.jpg', 'images/livingroom/icon1-4.jpg', 'images/livingroom/icon1-5.jpg', 'images/livingroom/icon1-6.jpg', 'images/livingroom/icon1-7.jpg', 'images/livingroom/icon1-8.jpg', 'images/livingroom/icon1-9.jpg', 'images/livingroom/icon1-10.jpg'];
	
	var subbox2=['images/livingroom/icon2-1.jpg', 'images/livingroom/icon2-2.jpg', 'images/livingroom/icon2-3.jpg', 'images/livingroom/icon2-4.jpg', 'images/livingroom/icon2-5.jpg', 'images/livingroom/icon2-6.jpg', 'images/livingroom/icon2-7.jpg', 'images/livingroom/icon2-8.jpg', 'images/livingroom/icon2-9.jpg', 'images/livingroom/icon2-10.jpg'];
	
	var sb;

$('.subboxpic').hover(function(){
	sb=$(this).parent().index(); //console.log(sb);
	$(this).children().attr('src',subbox2[sb]);
	}, function(){
		$(this).children().attr('src',subbox1[sb]);
		});
		
		
		//스크롤서브메뉴
		
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
		


//콘텐츠1 이미지 쇼

		$('.con1pic').hide();
		
		$('.con1pic').each(function(index){
			$(this).delay((index+1)*1000).show('drop',1500);
		});
		
		
//콘텐츠3 슬라이드 이미지
				var index=0;

				$('.slider_text').css('left', -860);
				$('.slider_text').each(function(index) {
					$(this).attr('data-index',(index));  //버튼과 텍스트의 index 값을 같게 하기 위해 만든 속성값
				});
				
				$('.control_button').click(function() {
					//clearInterval(s); //Interval을 제어함
					index = $(this).index();
					moveSlider(index);
					/*setTimeout(function () {
						autoMove();
					},5000);*/
				});
				
				//index = Math.round(Math.random()*4);
				//round = 반올림, 첫 이미지가 랜덤으로 설정되는 것, 약간의 움직임을 주기 위함
				moveSlider(index);
				//autoMove();
				
				/*function autoMove() {
					var s = setInterval(function () {
						index++;
						if(index>=5) {
							index = 0;
						}
						moveSlider(index);
					},2000);
				}*/
				$('#icon').click(function(){
					$('#lightbox-div>a').eq(index).trigger('click');
					});
					$('a[rel="lightbox"]').colorbox();
			});

			function moveSlider(index){
				$('.slider_panel').stop().animate({
					left: -(index*1060) 
				},'slow');
				$('.control_button').removeClass('active');
				$('.control_button').eq(index).addClass('active'); //위치값을 갖고 있는 것만 active Class를 갖게 된다
				$('.slider_text[data-index=' + index + ']').animate({
					left: 0
				},'slow');// [ ] = 값을 얻어올 것
				$('.slider_text[data-index!=' + index + ']').animate({
					left: -860
				},'slow');// [ ] = 값을 얻어올 것
				//data-index를 쓰는 것이 훨씬 자연스러움
				/*$('.slider_text').animate({
					left : -390
				});
				$('.slider_text').eq(index).animate({
					left: 0
				});*/
			}
				

			