(function () {
	var $sliders = $('.tu'),
		sliders_num = $sliders.length,
		active_num = 0,
		prev_num = 0,
		key = true,
		newArr = [[0,0,2,0,0],[0,0,0,2,0],[0,0,0,0,2],[2,0,0,0,0],[0,2,0,0,0]],
		imgArr=[[{'width':530,'height':225,'opacity':0,'top':25,'left':-530},{'width':530,'height':225,'opacity':0.7,'top':25,'left':0},{'width':640,'height':270,'opacity':1,'top':0,'left':165},{'width':530,'height':225,'opacity':0.7,'top':25,'left':440},{'width':530,'height':225,'opacity':0,'top':25,'left':970}],
			   [{'width':530,'height':225,'opacity':0,'top':25,'left':970},{'width':530,'height':225,'opacity':0,'top':25,'left':-530},{'width':530,'height':225,'opacity':0.7,'top':25,'left':0},{'width':640,'height':270,'opacity':1,'top':0,'left':165},{'width':530,'height':225,'opacity':0.7,'top':25,'left':440}],
			   [{'width':530,'height':225,'opacity':0.7,'top':25,'left':440},{'width':530,'height':225,'opacity':0,'top':25,'left':970},{'width':530,'height':225,'opacity':0,'top':25,'left':-530},{'width':530,'height':225,'opacity':0.7,'top':25,'left':0},{'width':640,'height':270,'opacity':1,'top':0,'left':165}],
			   [{'width':640,'height':270,'opacity':1,'top':0,'left':165},{'width':530,'height':225,'opacity':0.7,'top':25,'left':440},{'width':530,'height':225,'opacity':0,'top':25,'left':970},{'width':530,'height':225,'opacity':0,'top':25,'left':-530},{'width':530,'height':225,'opacity':0.7,'top':25,'left':0}],
			   [{'width':530,'height':225,'opacity':0.7,'top':25,'left':0},{'width':640,'height':270,'opacity':1,'top':0,'left':165},{'width':530,'height':225,'opacity':0.7,'top':25,'left':440},{'width':530,'height':225,'opacity':0,'top':25,'left':970},{'width':530,'height':225,'opacity':0,'top':25,'left':-530}]],
		slider_timer = null,
		$prev = $('.prev'),
		$next = $('.next'),
		$li = $('li');
	$prev.on('click',function () {
		if (key){
			key = false;
			$.slider_change('prev');
		}
	})
	$next.on('click',function () {
		if (key){
			key = false;
			$.slider_change('next');
		}
	})
	$li.on('click',function () {
		if (key){
			key = false;
			$.slider_change($(this).index());
		}
	})
	$.extend({
		slider_change: function (direction) {
			prev_num = active_num;
			var $sliders_prev = $sliders.eq(prev_num);
			switch(direction){
				case 'prev':
							active_num = active_num - 1 < 0 ? sliders_num - 1 : active_num - 1;
							$.move(active_num);
							$li.removeClass('on').eq(active_num).addClass('on');
							$.slider_auto();
							break;
				case 'next':
							active_num = active_num + 1 > sliders_num - 1 ? 0 : active_num + 1;
							$.move(active_num);
							$li.removeClass('on').eq(active_num).addClass('on');
							$.slider_auto();
							break;
				case 0:
						active_num = 0;
						$.move(active_num);
						$.slider_auto();
						$li.removeClass('on').eq(active_num).addClass('on');
						break;
				case 1: 
						active_num = 1;
						$.move(active_num);
						$.slider_auto();
						$li.removeClass('on').eq(active_num).addClass('on');
						break;
				case 2:
						active_num = 2;
						$.move(active_num);
						$.slider_auto();
						$li.removeClass('on').eq(active_num).addClass('on');
						break;
				case 3: 
						active_num = 3;
						$.move(active_num);
						$.slider_auto();
						$li.removeClass('on').eq(active_num).addClass('on');
						break;
				case 4:
						active_num = 4;
						$.move(active_num);
						$.slider_auto();
						$li.removeClass('on').eq(active_num).addClass('on');
						break;
			}			
		},
		slider_auto: function () {
			clearTimeout(slider_timer);
			if (sliders_num > 1){
				slider_timer = setTimeout(function (){
					$.slider_change('next');
				},3000)
			}
		},
		move: function (active_num) {
			for (var i = 0; i < sliders_num; i++){
				$sliders.eq(i).css('zIndex',newArr[active_num][i]);
				$sliders.eq(i).animate(imgArr[active_num][i],
					function () {
						key = true;
					})
			}
		}
	})
	$.slider_auto();
})()