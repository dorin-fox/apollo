$(document).ready(function() {
    $("#element").introLoader({

    animation: {
        name: 'simpleLoader',
        options: {
            exitFx:'slideRight',
            ease: "easeInOutCirc",
            style: 'light',
            delayBefore: 1000, //delay time in milliseconds
            exitTime: 500
        }
    }

});

});

$('.my-flipster').flipster({
     style: 'flat',
    buttons: true,
    scrollwheel: false,
    spacing: -0.15
});

$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['welcome-section', 'about-section', 'portfolio-section-1','portfolio-section-2','portfolio-section-3','contact'],
	});
});
var sidebarBox = document.querySelector('#box');
var sidebarBtn = document.querySelector('#btn');
var pageWrapper = document.querySelector('#main-content');

sidebarBtn.addEventListener('click', function(event) {

		if (this.classList.contains('active')) {
				this.classList.remove('active');
				sidebarBox.classList.remove('active');
		} else {
				this.classList.add('active');
				sidebarBox.classList.add('active');
		}
});

pageWrapper.addEventListener('click', function(event) {

		if (sidebarBox.classList.contains('active')) {
				sidebarBtn.classList.remove('active');
				sidebarBox.classList.remove('active');
		}
});

window.addEventListener('keydown', function(event) {

		if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
				sidebarBtn.classList.remove('active');
				sidebarBox.classList.remove('active');
		}
});
