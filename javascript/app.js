function distortIn(element) {
	element.style.opacity = "1";
	element.setAttribute('src', 'images/distorted.jpg');
}

function distortOut(element) {
	element.style.opacity = "1";
	element.setAttribute('src', 'images/main-picture.jpg');
}

function smoothScroll(target, duration) {
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;

	// This makes the animation smooth
	function animation(currentTime) {
		if(startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, startPosition, targetPosition, duration);
		window.scrollTo(0, run);
		if(timeElapsed < duration) requestAnimationFrame(animation);
	}

	function ease(t, b, c, d) {
		t /= d / 2;
		if(t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t-2) - 1) + b;
	}

	requestAnimationFrame(animation);
}



var scrollSkills = document.querySelector('.skills-js-trigger');
scrollSkills.addEventListener('click', function() {
	smoothScroll('.skills-container', 2000);
});

var scrollProjects = document.querySelector('.projects-js-trigger');
scrollProjects.addEventListener('click', function() {
	smoothScroll('.projects-container', 2000);
});

var scrollAbout = document.querySelector('.about-js-trigger');
scrollAbout.addEventListener('click', function() {
	smoothScroll('.about-container', 2000);
});

var scrollContact = document.querySelector('.contact-js-trigger');
scrollContact.addEventListener('click', function() {
	smoothScroll('.contact-container', 2000);
});





var scrollArea = window.innerWidth;
var skillsBox = document.querySelector('.skills-move');
var projectsBox = document.querySelector('.projects-move');
var aboutBox = document.querySelector('.about-move');
var contactBox = document.querySelector('.contact-move');
var mainPicture = document.querySelector('.main-picture');

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = scrollTop/scrollArea || 0;
  var moveDistance = (scrollPercent*window.innerWidth) * 0.3;
  
  if(moveDistance > 60) {
	var distanceTravelled = moveDistance - 60;
	contactBox.style.transform = "translateX(" + "-" + distanceTravelled + "vw)";
  }
  else if(moveDistance <= 60) {
	contactBox.style.transform = "translateX(" + "-" + 0 + "vw)";
  }

  if(moveDistance > 40) {
	var distanceTravelled = moveDistance - 40;
	aboutBox.style.transform = "translateX(" + "-" + distanceTravelled + "vw)";
  }
  else if(moveDistance <= 40) {
	aboutBox.style.transform = "translateX(" + "-" + 0 + "vw)";
  }
 

  if(moveDistance > 20) {
	var distanceTravelled = moveDistance - 20;
	projectsBox.style.transform = "translateX(" + "-" + distanceTravelled + "vw)";
  }
  else if(moveDistance <= 20) {
	projectsBox.style.transform = "translateX(" + "-" + 0 + "vw)";
  }

  skillsBox.style.transform = "translateX(" + "-" + moveDistance + "vw)";






  
  mainPicture.style.opacity = 1 - (scrollPercent*window.innerWidth * 0.01);

  this.console.log(scrollPercent*window.innerWidth * 0.001);
});

































