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
/*슬라이드 이미지*/			
				
			});

			function moveSlider(index){
				$('.slider_panel').stop().animate({
					left: -(index*1150) 
				},'slow');
			
		
			}
			
			
/*드래그비주얼*/
			$(document).ready(function(){
				
				var change_w1=[43,38,61,23,24,50,54,50,49,38];
				var change_h1=[75,75,75,75,75,50,60,50,75,75];
				
				var change_w2=[77,77,55,60,67,71,27,29,39,31];
				var change_h2=[27,75,70,43,60,60,65,65,60,60];
				
				var pos;
				$('#drag>div>img').draggable({
					zIndex : 100,
					revert: "invalid",
					scroll :false
				});
				
				$('#drag_middle').droppable({
					accept : '#drag>div>img',	
					drop: function (event, ui) {
						
						$(ui.draggable).removeAttr('height');
						$(ui.draggable).removeAttr('width');
						
					}
					
				});
				
				$('.drag_left>div>img').click(function(e) {
					pos=$(this).parent().index();
					$(this).attr('height',change_h1[pos]);
					$(this).attr('width',change_w1[pos]);
					$(this).css('left',0);
					$(this).css('top',0);

				})
				
				$('.drag_right>div>img').click(function(e) {
					pos=$(this).parent().index();
					$(this).attr('height',change_h2[pos]);
					$(this).attr('width',change_w2[pos]);
					$(this).css('left',0);
					$(this).css('top',0);

				})
				
				
			});
/*드래그비주얼*/