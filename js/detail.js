window.addEventListener('load', function() {
	var leftw = this.document.querySelector('.preview_img');
	var img_block = this.document.querySelector('.img_block');
	var img_big = document.querySelector('.img_big');
	leftw.addEventListener('mouseover', function() {
		img_big.style.display = 'block';
		img_block.style.display = 'block';
	})
	leftw.addEventListener('mouseout', function() {
		img_big.style.display = 'none';
		img_block.style.display = 'none';
	})
	leftw.addEventListener('mousemove', function(e) {
		var width = img_block.clientWidth / 2;
		var x = e.pageX - leftw.offsetLeft;
		var y = e.pageY - leftw.offsetTop;
		var blockx = x - width;
		var blocky = y - width;
		var maxx = leftw.offsetWidth - img_block.offsetWidth;
		if(blockx <= 0) {
			blockx = 0
		} else if(blockx >= maxx) {
			blockx = maxx;
		}
		if(blocky <= 0) {
			blocky = 0;
		} else if(blocky >= maxx) {
			blocky = maxx;
		}
		img_block.style.left = blockx + 'px';
		img_block.style.top = blocky + 'px';
		var bigimg = document.querySelector('.bigimg');
		var bmax = bigimg.offsetWidth - img_big.offsetWidth;
		var x = blockx * bmax / maxx;
		var y = blocky * bmax / maxx;
		bigimg.style.left = -x + "px";
		bigimg.style.top = -y + "px";
	});
     
})