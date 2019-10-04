
/**************************************************************************************
// Skills animations
var scrollArea = window.innerWidth;
var skillsHeader = document.querySelector('.skills-header');
var skillsHtml = document.querySelector('.skills-html');
var skillsCss = document.querySelector('.skills-css');
var skillsJavascript = document.querySelector('.skills-javascript');

window.addEventListener('scroll', function () {
	var scrollTop = window.pageYOffset || window.scrollTop;
	var scrollPercent = scrollTop / scrollArea || 0;
	var moveDistance = (scrollPercent * window.innerWidth) * 0.3;

	if (moveDistance > 280) {
		var distanceTravelled = moveDistance - 280;
		skillsJavascript.style.transform = "translateX(" + "-" + distanceTravelled + "vw)";
	}
	else if (moveDistance <= 280) {
		skillsJavascript.style.transform = "translateX(" + "-" + 0 + "vw)";
	}

	if (moveDistance > 260) {
		var distanceTravelled = moveDistance - 260;
		skillsCss.style.transform = "translateX(" + "-" + distanceTravelled + "vw)";
	}
	else if (moveDistance <= 260) {
		skillsCss.style.transform = "translateX(" + "-" + 0 + "vw)";
	}

	if (moveDistance > 240) {
		var distanceTravelled = moveDistance - 240;
		skillsHtml.style.transform = "translateX(" + "-" + distanceTravelled + "vw)";
	}
	else if (moveDistance <= 240) {
		skillsHtml.style.transform = "translateX(" + "-" + 0 + "vw)";
	}


	

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
var navState = false;

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
		navState = true;
	} else {
		navState = false;
	}
}

function adjustNavBar(navState) {
	if (navState == true) {
		document.querySelector('.home-bar').style.top = "0";
	}
	else {
		document.querySelector('.home-bar').style.top = "-10vw";
	}
}

// Function is constantly running. Use this until a better solutions comes along!
// This process could destroy CPU cycles
setInterval(function () {
	adjustNavBar(navState);
	// console.log("adjustNavBar active");
}, 500);

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
// Setting up homepage pictures to alternate on click AND media queries for nav clicks
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





// HOMEPAGE MEDIA QUERIES
function adjustHomepagePics(screen480) {
	if (screen480.matches) { // For all phone screen sizes
		if (imgIndex === 1) {
			leftPicture.style.backgroundImage = 'url(images/contact3phone.jpg)';
			mainPicture.setAttribute('src', 'images/projects1phone.jpg');
			rightPicture.style.backgroundImage = 'url(images/resume2phone.jpg)';
		}
		else if (imgIndex === 2) {
			leftPicture.style.backgroundImage = 'url(images/projects1phone.jpg)';
			mainPicture.setAttribute('src', 'images/resume2phone.jpg');
			rightPicture.style.backgroundImage = 'url(images/contact3phone.jpg)';
		}
		else if (imgIndex === 3) {
			leftPicture.style.backgroundImage = 'url(images/resume2phone.jpg)';
			mainPicture.setAttribute('src', 'images/contact3phone.jpg');
			rightPicture.style.backgroundImage = 'url(images/projects1phone.jpg)';
		}

		leftPicture.addEventListener('touchstart', function () {
			if (imgIndex === 1) {
				leftPicture.style.backgroundImage = 'url(images/resume2phone.jpg)';
				mainPicture.setAttribute('src', 'images/contact3phone.jpg');
				rightPicture.style.backgroundImage = 'url(images/projects1phone.jpg)';
				imgIndex = 3;
				mainHeader.innerHTML = "CONTACT";
			}
			else if (imgIndex === 3) {
				leftPicture.style.backgroundImage = 'url(images/projects1phone.jpg)';
				mainPicture.setAttribute('src', 'images/resume2phone.jpg');
				rightPicture.style.backgroundImage = 'url(images/contact3phone.jpg)';
				imgIndex = 2;
				mainHeader.innerHTML = "R&Eacute;SUM&Eacute;";
			}
			else if (imgIndex === 2) {
				leftPicture.style.backgroundImage = 'url(images/contact3phone.jpg)';
				mainPicture.setAttribute('src', 'images/projects1phone.jpg');
				rightPicture.style.backgroundImage = 'url(images/resume2phone.jpg)';
				imgIndex = 1;
				mainHeader.innerHTML = "PROJECTS";
			}
		})

		rightPicture.addEventListener('touchstart', function () {
			if (imgIndex === 1) {
				leftPicture.style.backgroundImage = 'url(images/projects1phone.jpg)';
				mainPicture.setAttribute('src', 'images/resume2phone.jpg');
				rightPicture.style.backgroundImage = 'url(images/contact3phone.jpg)';
				imgIndex = 2;
				mainHeader.innerHTML = "R&Eacute;SUM&Eacute;";
			}
			else if (imgIndex === 2) {
				leftPicture.style.backgroundImage = 'url(images/resume2phone.jpg)';
				mainPicture.setAttribute('src', 'images/contact3phone.jpg');
				rightPicture.style.backgroundImage = 'url(images/projects1phone.jpg)';
				imgIndex = 3;
				mainHeader.innerHTML = "CONTACT";
			}
			else if (imgIndex === 3) {
				leftPicture.style.backgroundImage = 'url(images/contact3phone.jpg)';
				mainPicture.setAttribute('src', 'images/projects1phone.jpg');
				rightPicture.style.backgroundImage = 'url(images/resume2phone.jpg)';
				imgIndex = 1;
				mainHeader.innerHTML = "PROJECTS";
			}
		})

		mainPicture.addEventListener('touchstart', function () {
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
	}

	else { // For all other non-phone screen sizes
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
	}
}

var screen480 = window.matchMedia("(min-device-width: 0px)" && "(max-device-width: 480px)");
adjustHomepagePics(screen480);// Call listener function at run time
screen480.addListener(adjustHomepagePics); // Attach listener function on state changes

// END
/************************************************************************************** */


/***************************************************************************************/
// Setting up button functions in project container. These functions will animate and update
// project information upon button clicks.
var currentBtn = 1;
var p1Container = document.querySelector('.project-one-container');
var btn1 = document.querySelector('.btn-one');
var btn2 = document.querySelector('.btn-two');
var btn3 = document.querySelector('.btn-three');

var title = document.querySelector('.p1-title');
var subTitle = document.querySelector('.p1-sub-title');
var lang1 = document.querySelector('.p1-lang1');
var lang2 = document.querySelector('.p1-lang2');
var lang3 = document.querySelector('.p1-lang3');
var lang4 = document.querySelector('.p1-lang4');
var lang5 = document.querySelector('.p1-lang5');
var paragraph = document.querySelector('.p1-paragraph');
var visitSite = document.querySelector('.btn-p1-visit');
var viewGit = document.querySelector('.btn-p1-git');
var projectImg = document.querySelector('.p1-picture');

function resetP1Animate(qSelect, animateName) {
	qSelect.style.WebkitAnimationName = animateName;
	qSelect.style.animation = 'none';
	qSelect.offsetHeight; /* trigger reflow */
	qSelect.style.animation = null;
	qSelect.style.WebkitAnimationName = animateName;
}

function animateOutPro() {
	p1Container.style.transform = "translateX(-150rem)";
}
function animateOutPro2() {
	p1Container.style.transform = "translateX(0rem)";
}

function btn1ChangeColors() {
	if (currentBtn == 2 || currentBtn == 3) {
		btn1.style.background = "rgba(238, 60, 60, 0.808)";
		btn1.style.color = "white";
		btn2.style.background = "white";
		btn2.style.color = "black";
		btn3.style.background = "white";
		btn3.style.color = "black";
		currentBtn = 1;
	}
}

function btn2ChangeColors() {
	if (currentBtn == 1 || currentBtn == 3) {
		btn2.style.background = "rgba(238, 60, 60, 0.808)";
		btn2.style.color = "white";
		btn1.style.background = "white";
		btn1.style.color = "black";
		btn3.style.background = "white";
		btn3.style.color = "black";
		currentBtn = 2;
	}
}

function btn3ChangeColors() {
	if (currentBtn == 1 || currentBtn == 2) {
		btn3.style.background = "rgba(238, 60, 60, 0.808)";
		btn3.style.color = "white";
		btn1.style.background = "white";
		btn1.style.color = "black";
		btn2.style.background = "white";
		btn2.style.color = "black";
		currentBtn = 3;
	}
}

function updateSummaryP1() {
	title.innerHTML = "AUTOMIZE";
	subTitle.innerHTML = "E-COMMERCE";
	lang1.innerHTML = "PHP";
	lang2.innerHTML = "SQL";
	lang3.innerHTML = "HTML";
	lang4.style.opacity = "1";
	lang5.style.opacity = "1";
	lang4.innerHTML = "SASS";
	lang5.innerHTML = "JavaScript";
	paragraph.innerHTML = "This was one of my first web development projects created for a" +
	" web design/implementation college course. Orginally, I programmed this website using only HTML," +
	"  CSS, and JavaScript. Later on I added PHP and SQL to utilize databases for storing vehicle and " +
	"user account information. SASS was later impelemented for cross-browser consistency.";
	projectImg.setAttribute('src', 'images/automize.jpg');
}

function updateSummaryP2() {
	title.innerHTML = "PINEAPPLE PIZZERIA";
	subTitle.innerHTML = "POS SYSTEM";
	lang1.innerHTML = "React JS";
	lang2.innerHTML = "PHP";
	lang3.innerHTML = "SQL";
	lang4.style.opacity = "0";
	lang5.style.opacity = "0";
	paragraph.innerHTML = "This website is an online POS platform for Pineapple Pizzeria restaurant." +
	" I programmed this website using the ReactJS framework. Utilizing ReactJS' components was a" +
	" gamechanger for my development skills! It is currently my favorite framework to code with.";
	projectImg.setAttribute('src', 'images/pizza.jpg');
}

function updateSummaryP3() {
	title.innerHTML = "TONYVU.IO";
	subTitle.innerHTML = "ONLINE PORTFOLIO";
	lang1.innerHTML = "JavaScript";
	lang2.innerHTML = "HTML";
	lang3.innerHTML = "SASS";
	lang4.style.opacity = "0";
	lang5.style.opacity = "0";
	paragraph.innerHTML = "I don't mean to toot my own horn, but I am proud of my portfolio creation!" +
	" I programmed this website with nothing but HTML, SASS, and JavaScript (with a hint of PHP for" +
	" webforms ... and some JQuery scroll animations). Developing this website taught me a whole lot about the importance of responsive design" +
	", animations, and utilizing Git.";
	projectImg.setAttribute('src', 'images/tvportfolio.jpg');
}




btn1.onclick = function () {
	btn1ChangeColors();

	resetP1Animate(p1Container, "float-out");

	var cycleInterval = setInterval(function () {
		updateSummaryP1();
		resetP1Animate(p1Container, "float-in");
		console.log("interval going");
		clearInterval(cycleInterval);
	}, 200);
};

btn2.onclick = function () {
	btn2ChangeColors();

	resetP1Animate(p1Container, "float-out");

	var cycleInterval = setInterval(function () {
		updateSummaryP2();
		resetP1Animate(p1Container, "float-in");
		console.log("interval going");
		clearInterval(cycleInterval);
	}, 200);

};

btn3.onclick = function () {
	btn3ChangeColors();

	resetP1Animate(p1Container, "float-out");

	var cycleInterval = setInterval(function () {
		updateSummaryP3();
		resetP1Animate(p1Container, "float-in");
		console.log("interval going");
		clearInterval(cycleInterval);
	}, 200);
};





// END
/************************************************************************************** */


/***************************************************************************************/
// Setting up auto-scroll for nav links
var scrollSpeed = 2000;
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
// END
/************************************************************************************** */


/************************************************************************************** */
// Menu icon functions

var menuIcon = document.querySelector(".menu-icon");
var menu = document.querySelector(".phone-nav");
var menuVisible = false;

menuIcon.addEventListener('touchstart', function () {
	if (menuVisible == false) {
		menu.style.visibility = "visible";
		menuVisible = true;
	}
	else if (menuVisible == true) {
		menu.style.visibility = "hidden";
		menuVisible = false;
	}



})



// END
/************************************************************************************** */


/************************************************************************************** */
// 


// END
/************************************************************************************** */
