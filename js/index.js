$(document).ready(function(){
	
	//서브메뉴 하이드 처리
	
	$('.submenu').hide();

	$('.menu').hover(function(){
		$('.submenu').stop().slideUp();
		$('#menu>ul>li>a').removeClass('mborder');
		$(this).children().stop().slideDown();
		$(this).children('a').addClass('mborder');
		}, function(){
			$('.submenu').stop().slideUp();
			$('#menu>ul>li>a').removeClass('mborder');
	});
	
          
		
		//작은 이미지 쇼 처리
		$('.img').hide();
		
		$('.img').each(function(index){
			options={percent:100}
			$(this).delay(2000+((index+1)*500)).show('scale',options,500);
		});
		$('.img').each(function(index){
			//options={percent:100}
			$(this).delay(2000+((index+1)*500)).fadeOut().fadeIn();
		});		
		/*
		$('.img').hide();
		setTimeout(function(){
			$('#kids').show('scale',100,1000);
			},500);
		setTimeout(function(){
			$('#bath').show('scale',100,1000);
			},1000);
		setTimeout(function(){
			$('#kitchen').show('scale',100,1000);
			},1500);
		setTimeout(function(){
			$('#veranda').show('scale',100,1000);
			},2000);
		setTimeout(function(){
			$('#bed').show('scale',100,1000);
			},2500);
		setTimeout(function(){
			$('#living').show('scale',100,1000);
			},3000);
			*/
			
		//풋터 애니메이트 레프트 처리
		
		
		/*
		var w=$(window).width();
		//console.log(w);
		$('#footer').css('left',w); //항상 자기 모니터의 오른쪽 바깥 바로 앞에
		document.documentElement.style.overflowX='hidden'; //좌우 스크롤 안 보이게 처리
		$(window).scroll(function(){
			var t = $(window).scrollTop();
			if(t>50) {
				$('#footer').animate({
					left:0
					
					},1500,'easeOutBounce');
			}else{
				$('#footer').animate({
					left: w 
					},500,'easeOutBounce');
				}
			});*/
		 $('.car').eq(1).css('left',250);	
			
	truckani();
    setInterval(function (){

     $('.car').eq(0).css('left',1200).show(); 
	 $('.car').eq(1).css('left',250);
	console.log( $('.car').eq(1).css('left'));
    truckani();
                },9300);   







//팝업창 선 긋기 소스 click animate
   // 팝업창 뜨는 소스 dialog setTimeout


			$('#kids').click(function(){	

				$('#kids-line').css({
					display: 'block',
					transform: 'rotate(10deg)'
				});
				$('#kids-line').animate({
					width : 230,
					top : 5,
					left:320
				},2000);
						
				
			setTimeout(function () {
				$('#dialog1').dialog('open');
			},2000);
			setTimeout(function () {
				$('#kids-line').fadeOut();
				$('#dialog1').dialog('close');
			},7000);
			});
									
						$('#dialog1').dialog({
						 autoOpen:false,
						 modal:false,
						 width:220,
						 position:{
						 	my:'left-550',
						 	at:'top+260'
						 }
					
						}).dialog('widget').find(".ui-dialog-title").hide();
							
					
					
					
					
	         	$('#bath').click(function(){	
					
					$('#bath-line').css({
							display: 'block',
					transform: 'rotate(20deg)'
				});
				$('#bath-line').animate({
					width : 230,
					top:220,
					left:135
		
				},2000);	
				
					setTimeout(function () {
				$('#dialog2').dialog('open');
			},2000);
			setTimeout(function () {
				$('#bath-line').fadeOut();
				$('#dialog2').dialog('close');
			},7000);
			});
												
						$('#dialog2').dialog({
						 autoOpen:false,
						 modal:false,
						 width:320,
						 position:{
						 	my:'left-780',
						 	at:'top+500'
						 }
					
						}).dialog('widget').find(".ui-dialog-title").hide();
							
									
					
					
					$('#kitchen').click(function(){	
					
					
					$('#kitchen-line').css({
							display: 'block',
			        transform: 'rotate(-50deg)'
				});
				$('#kitchen-line').animate({
					width : 150,
					top : 100
				},2000);
				
				setTimeout(function () {
				$('#dialog3').dialog('open');
			},2000);
			setTimeout(function () {
				$('#kitchen-line').fadeOut();
				$('#dialog3').dialog('close');
			},7000);
			});
						
						$('#dialog3').dialog({
						 autoOpen:false,
						 modal:false,
						 width:260,
						 position:{
						 	my:'left+240',
						 	at:'top+240'
						 }
					
						}).dialog('widget').find(".ui-dialog-title").hide();
							
					
					
					
					$('#veranda').click(function(){
						
							$('#veranda-line').css({
									display: 'block',
					transform: 'rotate(-180deg)'
				});
				$('#veranda-line').animate({
					width : 200,
					//top:400,
					left:900
		
				},2000);
							
				setTimeout(function () {
				$('#dialog4').dialog('open');
			},2000);
			setTimeout(function () {
				$('#veranda-line').fadeOut();
				$('#dialog4').dialog('close');
			},7000);
			});
						
						$('#dialog4').dialog({
						 autoOpen:false,
						 modal:false,
						 width:200,
						 position:{
						 	my:'left+450',
						 	at:'top+450'
						 }
					
						}).dialog('widget').find(".ui-dialog-title").hide();
							
							
							
						
						$('#bed').click(function(){	
						
						$('#bed-line').css({
								display: 'block',
					transform: 'rotate(-5deg)'
				});
				$('#bed-line').animate({
					width : 170,
					//top:400,
					left:800
		
				},2000);
				
				setTimeout(function () {
				$('#dialog5').dialog('open');
			},2000);
			setTimeout(function () {
				$('#bed-line').fadeOut();
				$('#dialog5').dialog('close');
			},7000);
			});
						
						$('#dialog5').dialog({
						 autoOpen:false,
						 modal:false,
						 width:310,
						 position:{
						 	my:'left+370',
						 	at:'top+710'
						 }
					
						}).dialog('widget').find(".ui-dialog-title").hide();
								
					
					
					
					$('#living').click(function(){	
					
					$('#living-line').css({
							display: 'block',
					transform: 'rotate(180deg)'
				});
				$('#living-line').animate({
					width : 100,
					//top:400,
					left:200
		
				},2000);
				
				setTimeout(function () {
				$('#dialog6').dialog('open');
			},2000);
			setTimeout(function () {
				$('#living-line').fadeOut();
				$('#dialog6').dialog('close');
			},7000);
			});
						
						$('#dialog6').dialog({
						 autoOpen:false,
						 modal:false,
						 width:260,
						 position:{
						 	my:'left-650',
						 	at:'top+780'
						 }
					
						}).dialog('widget').find(".ui-dialog-title").hide();
							
						
					
				
	//팝업창 소스 끝			
				
				
   function truckani() {
	  // var w=$(window).width();
    $('.car').eq(1).hide(); 
    $('.car').eq(0).animate({
     left:750 
    },2000).fadeOut(1000);
    $('.car').eq(1).delay(5300).fadeIn().animate({
     left:-1000
    },3000);
   };
   
					
});
	