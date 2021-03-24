const navBar = document.querySelector(".navbar");
const navMenu = document.querySelector(".nav-menu");
const navMenuBtn = document.querySelector(".nav-menu-btn");
const navMenuBtnBar1 = document.querySelector(".bar1");
const navMenuBtnBar2 = document.querySelector(".bar2");
const navMenuBtnBar3 = document.querySelector(".bar3");
const navLinks = document.querySelectorAll('.nav-link')
const homeLink = document.querySelector("#home");
const aboutLink = document.querySelector("#about-me");
const workLink = document.querySelector("#my-work");
const contactLink = document.querySelector("#contact-me");
const homeTab = document.querySelector(".menu-item:nth-child(1)");
const aboutTab = document.querySelector(".menu-item:nth-child(2)");
const workTab = document.querySelector(".menu-item:nth-child(3)");
const contactsTab = document.querySelector(".menu-item:nth-child(4)");
const headingName =  document.querySelector(".name");
const headingTitles =  document.querySelector(".titles");
const aboutHeading = document.querySelector(".about-heading");
const aboutDescription = document.querySelector(".about-description")
const cutoutImage = document.querySelector(".cutout-image");
const cutoutImageContainer = document.querySelector(".cutout-image-container");


window.addEventListener('scroll', onScroll);

var isDropped = false;
navMenuBtn.addEventListener('click', showMenu);

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
		navMenuBtnBar2.classList.add("rotate-neg-45");
		navMenuBtnBar3.classList.add("hidden");
		isDropped = true;
	}else{
		navBar.classList.remove("darken-background");
		navMenu.classList.remove("dropped");
		navMenuBtnBar1.classList.remove("rotate-45");
		navMenuBtnBar2.classList.remove("rotate-neg-45");
		navMenuBtnBar3.classList.remove("hidden");
		isDropped = false;
	}
}


function onScroll(){
	fixNavToTop(window.scrollY, window.innerWidth, window.innerHeight);
	addTabToCurrentPage(window.scrollY, window.innerWidth, window.innerHeight);
}


// Sticky Navbar function \\
function fixNavToTop(scrollPos, screenWidth, screenHeight){
	if(screenWidth > 900){
		if(window.scrollY >= screenHeight-100){
			navBar.classList.add('fixed');
			navBar.classList.add('one-em');
		}
		if(window.scrollY < screenHeight-100){
			navBar.classList.remove('fixed');
			navBar.classList.remove('one-em');
		}
	}
}


 //Adding Tabs to Current Section\\
//--------------------------------\\

function addTabToCurrentPage(scrollPos, screenWidth, screenHeight){
	if(screenWidth > 900){
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
		duration: 2,
		opacity: 0
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


// About Image Slide-Out Animation \\
gsap.to(
	cutoutImage,
	{
		scrollTrigger: {
			trigger: cutoutImage,
			toggleActions: "resart none none pause",
			start: "top 30%",
			// markers: true
		},
		duration: 10,
		x: -500
	}
);