function animate(elemets, target, callback) {
	clearInterval(elemets.timer);
	elemets.timer = setInterval(function() {
		var step = (target - elemets.offsetLeft) / 10;
		step = step > 0 ? Math.ceil(step) : Math.floor(step);
		var moveDistant = elemets.offsetLeft + step + 'px';
		if(elemets.offsetLeft == target) {
			clearInterval(elemets.timer);
		} else {
			elemets.style.left = moveDistant;
		}
	}, 30)
}