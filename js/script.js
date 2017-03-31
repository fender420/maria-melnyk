var mouse_x = $(window).width() / 2;
var mouse_y = $(window).height() / 2;
var n1, n2;
var contW = 2100;
var contH = 1400;

$(document).ready(function() {
	followWrap();
	var interval = setInterval(
		"cont(mouse_x, mouse_y);",
		150
	);
});

function followWrap() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	n1 = (contW - windowWidth) / windowWidth;
	n2 = (contH - windowHeight) / windowHeight;
	$('.container').css({width: contW, height: contH});
	$('.wrap').css({width: windowWidth, height: windowHeight});
};

function cont(x, y) {
	$(".container").css({transform: "translate("+ x * n1 * (-1) +"px, "+ y * n2 * (-1) +"px)"});
};

window.onresize = function(event) {
	followWrap();
};

var m = (document.layers) ? true : false

function init() {
	if (m) {document.captureEvents(Event.MOUSEMOVE);}
	document.onmousemove = mousemove;
}

function mousemove(event) {
	if (document.attachEvent != null) {
		mouse_x = window.event.clientX;
		mouse_y = window.event.clientY;
	} else if (!document.attachEvent && document.addEventListener) {
		mouse_x = event.clientX;
		mouse_y = event.clientY;
	}
}

init();