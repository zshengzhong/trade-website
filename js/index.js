window.addEventListener('load', function() {
	var spot = document.querySelector('.list').children[0];
	var banner = document.querySelector('.banner');
	var focus = document.querySelector('.focus');
	var arrowl = document.querySelector('.arrowl');
	var arrowr = document.querySelector('.arrowr');
	var num = 0;
	var num2 = 0;
	var flag = true;
	var timer = setInterval(function() {
		arrowr.click();
	}, 2000);
	focus.addEventListener('mouseleave', function() {
		arrowl.style.display = 'none';
		arrowr.style.display = 'none';
		timer = setInterval(function() {
			arrowr.click();
		}, 2000)
	})
	focus.addEventListener('mouseenter', function() {
		arrowl.style.display = 'block';
		arrowr.style.display = 'block';
		clearInterval(timer);
	})
	for(var i = 0; i < banner.children[0].children.length; i++) {
		var li = document.createElement('li');
		spot.appendChild(li);
		li.setAttribute('data-index', i)
		li.addEventListener('click', function() {
			var index = this.getAttribute('data-index');
			num = index;
			num2 = index;
			animate(banner, -index * focus.offsetWidth);
			for(var i = 0; i < banner.children[0].children.length - 1; i++) {
				spot.children[i].className = '';
			}
			this.className = 'currentli';
		})
	}
	banner.children[0].appendChild(banner.children[0].children[0].cloneNode(true));
	spot.children[0].className = "currentli";
	arrowr.addEventListener('click', function() {
		if(num == 4) {
			banner.style.left = 0;
			num = 0;
		}
		num++;
		animate(banner, -num * focus.offsetWidth);
		for(var i = 0; i < banner.children[0].children.length - 1; i++) {
			spot.children[i].className = '';
		}
		if(num2 == 3) {
			num2 = -1;
		}
		num2++;
		spot.children[num2].className = 'currentli';
	})
	arrowl.addEventListener('click', function() {
		if(num == 0) {
			num = banner.children[0].children.length - 1;
			banner.style.left = -focus.offsetWidth * num + "px";
		}
		num--;
		animate(banner, -num * focus.offsetWidth);
		for(var i = 0; i < banner.children[0].children.length - 1; i++) {
			spot.children[i].className = '';
		}
		if(num2 == 0) {
			num2 = banner.children[0].children.length - 1;
		}
		num2--;
		spot.children[num2].className = 'currentli';
	})
	var recommend = $(".recommend").offset().top;
	var flag = true;
	show();
	$(window).scroll(function() {
		show();
		if(flag) {
			$(".floor .w").each(function(index, ele) {
				if($(ele).offset().top -5 <= $(document).scrollTop()) {
					console.log(index);
					$(".fixtool ul li").eq(index).addClass("currentbytool").siblings().removeClass();
				}
			})
		}
	});

	function show() {
		if($(document).scrollTop() >= recommend) {
			$(".fixtool").stop().fadeIn(200);
		} else {
			$(".fixtool").stop().fadeOut(200);
		}
	}
	$(".fixtool ul").on("click", "li", function() {
		flag = false;
		var index = $(this).index();
		var current = $(".floor .w").eq(index).offset().top;
		$("html,body").stop().animate({
			scrollTop: current
		},function(){
			flag = true;
		})
		$(this).addClass('currentbytool').siblings().removeClass('currentbytool');
	})
})