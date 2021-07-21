
	var i = 0; // Start point
	var images = [];
	var time = 1000;

	// Image List
	images[0] = 'media/ghost-captured.png';
	images[1] = 'media/ghost-creator.png';
	images[2] = 'media/ghost-captured.png';
	images[3] = 'danger-explosion.png';

	// Change Image
	function changeImg(){
		document.slide.src = images[i];

		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}

		setTimeout("changeImg()", time);
	}

	window.onload = changeImg;