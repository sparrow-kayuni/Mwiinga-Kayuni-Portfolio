
// MY CONSTANTS \\
const navBar = document.querySelector(".navbar");
const navMenu = document.querySelector(".nav-menu");
const navMenuBtn = document.querySelector(".nav-menu-btn");
const navMenuBtnBar1 = document.querySelector(".bar1");
const navMenuBtnBar2 = document.querySelector(".bar2");
const navMenuBtnBar3 = document.querySelector(".bar3");
const navLinks = document.querySelectorAll('.nav-link')
const homeTab = document.querySelector(".menu-item:nth-child(1)");
const aboutTab = document.querySelector(".menu-item:nth-child(2)");
const workTab = document.querySelector(".menu-item:nth-child(3)");
const contactsTab = document.querySelector(".menu-item:nth-child(4)");
const workSection = document.querySelector(".work")
const headingName =  document.querySelector(".name");
const headingTitles =  document.querySelector(".titles");
const aboutHeading = document.querySelector(".about-heading");
const aboutDescription = document.querySelector(".about-description")
const cutoutImage = document.querySelector(".cutout-image");
const cutoutImageContainer = document.querySelector(".cutout-image-container");


window.addEventListener('scroll', onScroll);

var isDropped = false; // this tracks whether the nav-menu has been dropped
navMenuBtn.addEventListener('click', showMenu);

// because navLinks is an array of nodes, we can't add event listener directly 
// so we have to loop through its elements, adding the event listener to each
for(var i=0; i < navLinks.length; i++){
	navLinks[i].addEventListener('click', function(){
		isDropped= true;
		showMenu();
	});
}

function showMenu(){
	if(!isDropped){
		navBar.classList.add("darken-background");
		navMenu.classList.add("dropped");
		navMenuBtnBar1.classList.add("rotate-45");
		navMenuBtnBar3.classList.add("rotate-neg-45");
		navMenuBtnBar2.classList.add("opacity-0");
		isDropped = true;
	
	}else{
		navBar.classList.remove("darken-background");
		navMenu.classList.remove("dropped");
		navMenuBtnBar1.classList.remove("rotate-45");
		navMenuBtnBar3.classList.remove("rotate-neg-45");
		navMenuBtnBar2.classList.remove("opacity-0");
		isDropped = false;
	}
}

// when scrolling we want to:
// (1.) make sure the navbar stick to the top when it reaches the top of the screen
// (2.) change the tabs as we are scrolling throught different sections of the page
function onScroll(){
	fixNavToTop(window.scrollY, window.innerWidth, window.innerHeight);
	addTabToCurrentSection(window.scrollY, window.innerWidth, window.innerHeight);
}


// Sticky Navbar function and changing colours\\
function fixNavToTop(scrollPos, screenWidth, screenHeight){
	if(screenWidth > 900){
		if(window.scrollY < screenHeight-100){
			navBar.classList.remove('fixed');
			navBar.classList.remove('one-em');
			navMenu.classList.remove("box-shadow");
			navMenu.classList.remove("mid-grey-background");
			navMenu.classList.remove("light-grey-background");
			navMenu.classList.remove("dark-grey-background");
		
		}else if(window.scrollY >= screenHeight-100){
			
			navBar.classList.add('fixed');
			navBar.classList.add('one-em');
			navMenu.classList.add("box-shadow");
			
			if(window.scrollY < screenHeight * 2){
				navMenu.classList.add("mid-grey-background");
				navMenu.classList.remove("light-grey-background");
				navMenu.classList.remove("dark-grey-background");
			}
			if(window.scrollY >= screenHeight * 2 && window.scrollY < screenHeight * 3){
				navMenu.classList.add("light-grey-background");
				navMenu.classList.remove("mid-grey-background");
				navMenu.classList.remove("dark-grey-background");
			}
			if(window.scrollY >= screenHeight * 3){
				navMenu.classList.add("dark-grey-background");
				navMenu.classList.remove("light-grey-background");
				navMenu.classList.remove("mid-grey-background");
			}
		} 
	}
}


 //Adding Tabs to Current Section\\
//--------------------------------\\

function addTabToCurrentSection(scrollPos, screenWidth, screenHeight){
	if(window.scrollY < screenHeight){
		homeTab.classList.add("highlighted");
		aboutTab.classList.remove("highlighted");
		workTab.classList.remove("highlighted");
		contactsTab.classList.remove("highlighted");	
	}
	else if(window.scrollY >= screenHeight && window.scrollY < screenHeight * 2){
		homeTab.classList.remove("highlighted");
		aboutTab.classList.add("highlighted");
		workTab.classList.remove("highlighted");
		contactsTab.classList.remove("highlighted");
	}
	else if(window.scrollY >= screenHeight * 2 && window.scrollY < screenHeight * 3){
		homeTab.classList.remove("highlighted");
		aboutTab.classList.remove("highlighted");
		workTab.classList.add("highlighted");
		contactsTab.classList.remove("highlighted");
	}
	else if(window.scrollY >= screenHeight * 3){
		homeTab.classList.remove("highlighted");
		aboutTab.classList.remove("highlighted");
		workTab.classList.remove("highlighted");
		contactsTab.classList.add("highlighted");
	}
}

gsap.registerPlugin(ScrollTrigger)
const timeline = gsap.timeline();

// Header Animation \\

timeline.from(headingName, 1,
	{
		rotate: "90deg", 
		transform: "scaleX(0)",
		ease: "sine"
	}
)
.from(headingTitles, 1,
	{
		transform: "translateX(-100px)",
		zIndex: -4,
		opacity: 0
	},
);

// About Heading slide-in animation \\
gsap.from(
	aboutHeading,
	{
		scrollTrigger: {
			trigger: aboutHeading,
			toggleActions: "restart none none pause",
			start: "top bottom"
			// ,markers: true
		},
		duration: 2,
		x: -200,
		ease: "expo"
	}
);

// About Description appear Animation \\
gsap.from(
	aboutDescription,
	{
		scrollTrigger: {
			trigger: aboutDescription,
			toggleActions: "restart none none pause",
			start: "top bottom"
			// ,markers: true
		},
		duration: 1,
		opacity: 0,
		y: 200
	}
);


// About Image Slide-In Animation \\
gsap.from(
	cutoutImage,
	{
		scrollTrigger: {
			trigger: cutoutImage,
			toggleActions: "restart none none pause",
			start: "top 90%"
			// ,markers: true
		},
		duration: 1,
		x: 500,
		opacity: 0
	}
);