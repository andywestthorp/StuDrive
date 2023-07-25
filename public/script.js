//Global Variables
    let isPWA = true;  // Enables or disables the service worker and PWA
    let isAJAX = true; // AJAX transitions. Requires local server or server
    var pwaName = "StuDrive"; //Local Storage Names for PWA
    var pwaRemind = 1; //Days to re-remind to add to home
    var pwaNoCache = false; //Requires server and HTTPS/SSL. Will clear cache with each visit

    //Setting Service Worker Locations scope = folder | location = service worker js location
    var pwaScope = "/";
    var pwaLocation = "/_service-worker.js";



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
  document.getElementById('pupilDataCollectionForm').hidden = true;
  document.getElementById('finance').hidden = true;
  document.getElementById('menu').hidden = true;
  document.getElementById('pupilForm').hidden = true;

  // Reflect in footer menu
  document.getElementById('pupilsMenu').classList.add('active-nav');
  document.getElementById('homeMenu').classList.remove('active-nav');
  document.getElementById('scheduleMenu').classList.remove('active-nav');
  document.getElementById('financeMenu').classList.remove('active-nav');
  document.getElementById('mainMenu').classList.remove('active-nav');

  }


function showSchedule() {
  // Display appropriate card
  document.getElementById('pupils').hidden = true;
  document.getElementById('schedule').hidden = true;
  document.getElementById('home').hidden = true;
  document.getElementById('finance').hidden = true;
  document.getElementById('menu').hidden = true;
  
  document.getElementById('pupilForm').hidden = true;
  document.getElementById('pupilDataCollectionForm').hidden = false;
  
 

  // Reflect in footer menu
  document.getElementById('pupilsMenu').classList.remove('active-nav');
  document.getElementById('homeMenu').classList.remove('active-nav');
  document.getElementById('financeMenu').classList.remove('active-nav');
  document.getElementById('scheduleMenu').classList.add('active-nav');
  document.getElementById('mainMenu').classList.remove('active-nav');
  
  }


function showSplash() {
  // Display page
  document.getElementById('header').hidden = true;
  document.getElementById('footer').hidden = true;
  document.getElementById('pupils').hidden = true;
  document.getElementById('schedule').hidden = true;
  document.getElementById('home').hidden = true;
  document.getElementById('finance').hidden = true;
  document.getElementById('menu').hidden = true;
  document.getElementById('pupilDataCollectionForm').hidden = true;
  document.getElementById('pupilForm').hidden = true;
  

  document.getElementById('splashPage').hidden = false;
}
 
function showHome() {
  // Display appropriate card
  document.getElementById('header').hidden = false;
  document.getElementById('footer').hidden = false;

  document.getElementById('pupilForm').hidden = true;
  
  document.getElementById('splashPage').hidden = true;
  
  document.getElementById('pupils').hidden = true;
  document.getElementById('schedule').hidden = true;
  document.getElementById('home').hidden = false;
  document.getElementById('finance').hidden = true;
  document.getElementById('menu').hidden = true;
  document.getElementById('pupilForm').hidden = true;

  document.getElementById('pupilDataCollectionForm').hidden = true;

 
  // Reflect in footer menu
  document.getElementById('pupilsMenu').classList.remove('active-nav');
  document.getElementById('scheduleMenu').classList.remove('active-nav');
  document.getElementById('homeMenu').classList.add('active-nav');
  document.getElementById('financeMenu').classList.remove('active-nav');
  document.getElementById('mainMenu').classList.remove('active-nav');
  }


function showFinance() {
  // Display appropriate card
  document.getElementById('pupils').hidden = true;
  document.getElementById('schedule').hidden = true;
  document.getElementById('home').hidden = true;
  document.getElementById('finance').hidden = false;
  document.getElementById('menu').hidden = true;
  document.getElementById('pupilForm').hidden = true;

  document.getElementById('pupilDataCollectionForm').hidden = true;
  
  
  // Reflect in footer menu
  document.getElementById('pupilsMenu').classList.remove('active-nav');
  document.getElementById('scheduleMenu').classList.remove('active-nav');
  document.getElementById('homeMenu').classList.remove('active-nav');
  document.getElementById('financeMenu').classList.add('active-nav');
  document.getElementById('mainMenu').classList.remove('active-nav');
  


}


function showMenu() {
  // Display appropriate card
  document.getElementById('header').hidden = false;
  document.getElementById('footer').hidden = false;
  
  document.getElementById('splashPage').hidden = true;
  
  document.getElementById('pupilDataCollectionForm').hidden = true;
  document.getElementById('pupils').hidden = true;
  document.getElementById('schedule').hidden = true;
  document.getElementById('home').hidden = true;
  document.getElementById('finance').hidden = true;
  document.getElementById('menu').hidden = false;
  
  // Reflect in footer menu
  document.getElementById('pupilsMenu').classList.remove('active-nav');
  document.getElementById('scheduleMenu').classList.remove('active-nav');
  document.getElementById('homeMenu').classList.remove('active-nav');
  document.getElementById('financeMenu').classList.remove('active-nav');
  document.getElementById('mainMenu').classList.add('active-nav');
  }



function displayPupilDetails(status,address,dob,license,email,foreName,surName,telephone){


  // Hide the big pupils list
  document.getElementById('pupils').hidden = true;
  // Show the individual pupil details
 document.getElementById('pupilForm').hidden = false;
  // If there is no data, the variable will have the value of "undefined"
  if (foreName !=undefined){
    document.getElementById('pupilFormForeName').innerHTML = foreName;
  
    if (surName !=undefined){
      document.getElementById('pupilFormSurname').innerHTML = surName;
      
      // Set heading
      document.getElementById('learnerHeading').innerHTML ='<img src="icons/icon-48x48.png">'+foreName+' '+surName;
 //     document.getElementById('learnerHeading').innerHTML ='<img src="Avatar-200.png" width="45"><h1>'+foreName+' '+surName+'</h1>';
     
    }
  }
         console.log(address);
  
   if (address !=undefined){
    document.getElementById('pupilFormAddress').innerHTML = '<a href="https://maps.google.com/maps?'+address+'&hl=en_GB&authuser=0" target="_blank" >'+address+'</a>';


     console.log(address);
  }
   if (telephone !=undefined){
    document.getElementById('pupilFormTelephone').innerHTML = "Phone: "+telephone;
  console.log(telephone);
   }
  if (email !=undefined){
    document.getElementById('pupilFormEmail').innerHTML = "Email: "+email;
  console.log(email);
  }
    if (dob !=undefined){
      console.log(dob);
    document.getElementById('pupilFormDOB').innerHTML = "DOB: "+dob;
  }

   if (license!=undefined){
      console.log(license);
    document.getElementById('pupilFormLicense').innerHTML = "LicenseNo: "+license;
  }
   if (status !=undefined){
      console.log(status);
    document.getElementById('pupilFormStatus').innerHTML = "Status: "+active;
  }
  
}
