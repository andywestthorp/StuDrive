//Global Variables
    let isPWA = true;  // Enables or disables the service worker and PWA
    let isAJAX = true; // AJAX transitions. Requires local server or server
    var pwaName = "StuDrive"; //Local Storage Names for PWA
    var pwaRemind = 1; //Days to re-remind to add to home
    var pwaNoCache = false; //Requires server and HTTPS/SSL. Will clear cache with each visit

    //Setting Service Worker Locations scope = folder | location = service worker js location
    var pwaScope = "/";
    var pwaLocation = "/_service-worker.js";


// Find pupil search bar
function findPupil() {
  // This will display a list of potential pupils
  alert("Boo");
}

// Light and Dark mode switching
function switchLightMode() {

  document.body.classList.remove('theme-dark');
  document.body.classList.add('theme-light');
}

function switchDarkMode() {
  
  document.body.classList.remove('theme-light');
  document.body.classList.add('theme-dark');
  
}

// Footer menu functions

function showPupils() {
  
  // Display appropriate card
  document.getElementById('pupils').hidden = false;
  document.getElementById('schedule').hidden = true;
  document.getElementById('home').hidden = true;
  
   document.getElementById('finance').hidden = true;

  // Reflect in footer menu
  document.getElementById('pupilsMenu').classList.add('active-nav');
  document.getElementById('homeMenu').classList.remove('active-nav');
  document.getElementById('scheduleMenu').classList.remove('active-nav');
  document.getElementById('financeMenu').classList.remove('active-nav');

  }


function showSchedule() {
  // Display appropriate card
  document.getElementById('pupils').hidden = true;
  document.getElementById('schedule').hidden = false;
  document.getElementById('home').hidden = true;
  document.getElementById('finance').hidden = true;
 

  // Reflect in footer menu
  document.getElementById('pupilsMenu').classList.remove('active-nav');
  document.getElementById('homeMenu').classList.remove('active-nav');
  document.getElementById('financeMenu').classList.remove('active-nav');
  document.getElementById('scheduleMenu').classList.add('active-nav');
  
  }


function showSplash() {
  // Display page
  document.getElementById('footer').hidden = true;
  document.getElementById('pupils').hidden = true;
  document.getElementById('schedule').hidden = true;
  document.getElementById('home').hidden = true;
  document.getElementById('finance').hidden = true;

  document.getElementById('splashPage').hidden = false;
}
 
function showHome() {
  // Display appropriate card
  document.getElementById('pupils').hidden = true;
  document.getElementById('schedule').hidden = true;
  document.getElementById('home').hidden = false;
  document.getElementById('finance').hidden = true;

 
  // Reflect in footer menu
  document.getElementById('pupilsMenu').classList.remove('active-nav');
  document.getElementById('scheduleMenu').classList.remove('active-nav');
  document.getElementById('homeMenu').classList.add('active-nav');
  document.getElementById('financeMenu').classList.remove('active-nav');
  }


function showFinance() {
  // Display appropriate card
  document.getElementById('pupils').hidden = true;
  document.getElementById('schedule').hidden = true;
  document.getElementById('home').hidden = true;
  document.getElementById('finance').hidden = false;
  
  
  // Reflect in footer menu
  document.getElementById('pupilsMenu').classList.remove('active-nav');
  document.getElementById('scheduleMenu').classList.remove('active-nav');
  document.getElementById('homeMenu').classList.remove('active-nav');
  document.getElementById('financeMenu').classList.add('active-nav');
  }



