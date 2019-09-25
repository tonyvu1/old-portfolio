
/************************************************************************************** *
// Homepage animations
var scrollArea = window.innerWidth;
var projectsBox = document.querySelector('.projects');
var resumeBox = document.querySelector('.resume');
var contactBox = document.querySelector('.contact');
var logoBox = document.querySelector('.logo-container');

window.addEventListener('scroll', function () {
	var scrollTop = window.pageYOffset || window.scrollTop;
	var scrollPercent = scrollTop / scrollArea || 0;
	var moveDistance = (scrollPercent * window.innerWidth) * 0.3;
	var quickMove = (scrollPercent * window.innerWidth) * 0.7;


	if (moveDistance > 60) {
		var distanceTravelled = moveDistance - 60;
		contactBox.style.transform = "translateX(" + "-" + distanceTravelled + "vw)";
	}
	else if (moveDistance <= 60) {
		contactBox.style.transform = "translateX(" + "-" + 0 + "vw)";
	}

	if (moveDistance > 40) {
		var distanceTravelled = moveDistance - 40;
		resumeBox.style.transform = "translateX(" + "-" + distanceTravelled + "vw)";
	}
	else if (moveDistance <= 40) {
		resumeBox.style.transform = "translateX(" + "-" + 0 + "vw)";
	}

	if (moveDistance > 20) {
		var distanceTravelled = moveDistance - 20;
		projectsBox.style.transform = "translateX(" + "-" + distanceTravelled + "vw)";
	}
	else if (moveDistance <= 20) {
		projectsBox.style.transform = "translateX(" + "-" + 0 + "vw)";
	}

	logoBox.style.transform = "translateX(" + "+" + quickMove + "vw)";

});
// END
************************************************************************************** */



/***************************************************************************************
// Setting up HOME bar to appear when below homepage, and disappear when at homepage. 
var currentPosition = "Above";
var homeClicked = false;
var scrollHome = document.querySelector('.home-link');

scrollHome.addEventListener('click', function() {
	smoothScroll('.html', scrollSpeed);

	if(currentPosition === "Below") {
		document.querySelector('.home-bar').style.animationName = "home-animation-in";
		homeClicked = true;
	}
});

window.addEventListener('scroll', function()  {
	var skillsPos = document.querySelector('.skills-container').offsetTop;

	if(skillsPos >= (window.pageYOffset+5)) {
		// this.console.log("Above");

		if((currentPosition === "Below") && homeClicked === false) {
			document.querySelector('.home-bar').style.animationName = "home-animation-in";
			currentPosition = "Above";
		}
	}
	else {
		// this.console.log("Below");

		if((currentPosition === "Above") && homeClicked === false) {
			document.querySelector('.home-bar').style.animationName = "home-animation-out";
			currentPosition = "Below";
		}
	}
	
	if(this.window.pageYOffset === 0) {
		homeClicked = false;
	}
		// Used for debugging
		//this.console.log("skills C offset: " + document.querySelector('.skills-container').offsetTop);
		//this.console.log("pageYoffset: " + window.pageYOffset);

	});
// END
************************************************************************************** */

/***************************************************************************************/
// Setting up HOME bar to appear when below homepage, and disappear when at homepage. 
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
		document.querySelector('.home-bar').style.top = "0";
	} else {
		document.querySelector('.home-bar').style.top = "-10vw";
	}
}
// END
/************************************************************************************** */


/***************************************************************************************/
// Setting up type-writer animation for loader
var i = 0;
var txt = '     TONY VU';
var speed = 100;

function typeWriter() {
	if (i === 8) {
		document.querySelector('.loadme').innerHTML += "Y ";
		i++;
		i++;
		setTimeout(typeWriter, speed);
	}
	else if (i < txt.length) {
		document.querySelector('.loadme').innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}

typeWriter();
// END
/************************************************************************************** */


/***************************************************************************************/
// Setting up homepage pictures to alternate on click
var imgIndex = 1;
var leftPicture = document.querySelector('.block-left');
var leftPictureFrame = document.querySelector('.homepage-block-left');
var rightPicture = document.querySelector('.block-right');
var rightPictureFrame = document.querySelector('.homepage-block-right');

var mainPicture = document.querySelector('.main-picture');
var mainAnimator = document.querySelector('.middle-frame');
var mainHeader = document.querySelector('.main-header');


function resetSideAnimations() {
	leftPictureFrame.style.animation = 'none';
	leftPictureFrame.offsetHeight; /* trigger reflow */
	leftPictureFrame.style.animation = null;
	rightPictureFrame.style.animation = 'none';
	rightPictureFrame.offsetHeight;
	rightPictureFrame.style.animation = null;
}

function resetEnlargeMain() {
	mainPicture.style.animation = 'none';
	mainPicture.offsetHeight; /* trigger reflow */
	mainPicture.style.animation = null;
}


function resetFromLeft() {
	mainAnimator.style.WebkitAnimationName = "middle-animate-left";
	mainAnimator.style.animation = 'none';
	mainAnimator.offsetHeight; /* trigger reflow */
	mainAnimator.style.animation = null;
	mainAnimator.style.WebkitAnimationName = "middle-animate-left";
}

function resetFromRight() {
	mainAnimator.style.WebkitAnimationName = "middle-animate-right";
	mainAnimator.style.animation = 'none';
	mainAnimator.offsetHeight; /* trigger reflow */
	mainAnimator.style.animation = null;
	mainAnimator.style.WebkitAnimationName = "middle-animate-right";
}

mainPicture.onclick = function () {

};


leftPicture.onclick = function () {
	if (imgIndex === 1) {
		leftPicture.style.backgroundImage = 'url(images/resume2.jpg)';
		mainPicture.setAttribute('src', 'images/contact3.jpg');
		rightPicture.style.backgroundImage = 'url(images/projects1.jpg)';
		imgIndex = 3;
		mainHeader.innerHTML = "CONTACT";
		resetSideAnimations();
		resetFromRight();
		resetEnlargeMain();
	}
	else if (imgIndex === 3) {
		leftPicture.style.backgroundImage = 'url(images/projects1.jpg)';
		mainPicture.setAttribute('src', 'images/resume2.jpg');
		rightPicture.style.backgroundImage = 'url(images/contact3.jpg)';
		imgIndex = 2;
		mainHeader.innerHTML = "R&Eacute;SUM&Eacute;";
		resetSideAnimations();
		resetFromRight();
		resetEnlargeMain();
	}
	else if (imgIndex === 2) {
		leftPicture.style.backgroundImage = 'url(images/contact3.jpg)';
		mainPicture.setAttribute('src', 'images/projects1.jpg');
		rightPicture.style.backgroundImage = 'url(images/resume2.jpg)';
		imgIndex = 1;
		mainHeader.innerHTML = "PROJECTS";
		resetSideAnimations();
		resetFromRight();
		resetEnlargeMain();
	}
};


rightPicture.onclick = function () {
	if (imgIndex === 1) {
		leftPicture.style.backgroundImage = 'url(images/projects1.jpg)';
		mainPicture.setAttribute('src', 'images/resume2.jpg');
		rightPicture.style.backgroundImage = 'url(images/contact3.jpg)';
		imgIndex = 2;
		mainHeader.innerHTML = "R&Eacute;SUM&Eacute;";
		resetSideAnimations();
		resetFromLeft();
		resetEnlargeMain();
	}
	else if (imgIndex === 2) {
		leftPicture.style.backgroundImage = 'url(images/resume2.jpg)';
		mainPicture.setAttribute('src', 'images/contact3.jpg');
		rightPicture.style.backgroundImage = 'url(images/projects1.jpg)';
		imgIndex = 3;
		mainHeader.innerHTML = "CONTACT";
		resetSideAnimations();
		resetFromLeft();
		resetEnlargeMain();
	}
	else if (imgIndex === 3) {
		leftPicture.style.backgroundImage = 'url(images/contact3.jpg)';
		mainPicture.setAttribute('src', 'images/projects1.jpg');
		rightPicture.style.backgroundImage = 'url(images/resume2.jpg)';
		imgIndex = 1;
		mainHeader.innerHTML = "PROJECTS";
		resetSideAnimations();
		resetFromLeft();
		resetEnlargeMain();
	}
};

// END
/************************************************************************************** */


/************************************************************************************** */
// Setting up auto-scroll for nav links
var scrollSpeed = 1000;
var scrollDash = 400;

function smoothScroll(target, duration) {
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var startTime = null;

	// This makes the animation smooth
	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, startPosition, targetPosition, duration);
		window.scrollTo(0, run);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	}

	// Math formula used for ease motion
	function ease(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	}
	requestAnimationFrame(animation);
}

mainPicture.addEventListener('click', function () {
	if (imgIndex === 1) {
		smoothScroll('.projects-container', scrollSpeed);
	}
	else if (imgIndex === 2) {
		smoothScroll('.resume-container', scrollSpeed);
	}
	else if (imgIndex === 3) {
		smoothScroll('.contact-container', scrollSpeed);
	}
})


// Home link
var barHome = document.querySelector('.home-link');
barHome.addEventListener('click', function () {
	smoothScroll('.homepage-container', scrollDash);
});

// Projects link
var barProjects = document.querySelector('.projects-link');
barProjects.addEventListener('click', function () {
	smoothScroll('.projects-container', scrollDash);
});

// Resume link
var barAbout = document.querySelector('.resume-link');
barAbout.addEventListener('click', function () {
	smoothScroll('.resume-container', scrollDash);
});

// Contact link
var barContact = document.querySelector('.contact-link');
barContact.addEventListener('click', function () {
	smoothScroll('.contact-container', scrollDash);
});


// END
/************************************************************************************** */


/************************************************************************************** */
// 



// END
/************************************************************************************** */