particlesJS.load('particles-js-back', 'particles.json', function () {
	console.log('particles.js: background loaded');
});
particlesJS.load('particles-js-front', 'particles-front.json', function () {
	console.log('particles.js: foreground loaded');
});

function duplicate() {			
	var front = document.getElementById('particles-js-front');
	var back = document.querySelector('#particles-js-back canvas');
	
	if (typeof(back) != 'undefined' && typeof(front) != 'undefined') {
		try {
			front.addEventListener('mousemove', function (e) {
				var eCopy = document.createEvent("MouseEvents");
            eCopy.initMouseEvent(e.type, e.bubbles, e.cancelable, e.view, e.detail,
                e.pageX || e.layerX, e.pageY || e.layerY, e.clientX, e.clientY, e.ctrlKey, e.altKey,
                e.shiftKey, e.metaKey, e.button, e.relatedTarget);
				back.dispatchEvent(eCopy);
			});
		} catch (err) {
			console.warn(err);
		}
	} else {
		setTimeout(duplicate, 100);
	}
}

setTimeout(duplicate, 100);