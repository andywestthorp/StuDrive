
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,  sendPasswordResetEmail, confirmPasswordReset } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'
    import { getFirestore, doc, getDocs } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js'
      
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCfCLsX_gImU0zziR_0m4jS3PmLdK-g5xs",
    authDomain: "stu-s-driving-school.firebaseapp.com",
    databaseURL: "https://stu-s-driving-school-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "stu-s-driving-school",
    storageBucket: "stu-s-driving-school.appspot.com",
    messagingSenderId: "492596404048",
    appId: "1:492596404048:web:cde58c675ee12ec8395655",
    measurementId: "G-JRJWQ77L7R"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  
  const notlog = document.getElementById('not-log-in');
  const login = document.getElementById('logged-in');
  const form = document.getElementById('form')  
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        // Display page
  document.getElementById('footer').hidden = true;
  document.getElementById('pupils').hidden = true;
  document.getElementById('schedule').hidden = true;
  document.getElementById('home').hidden = false;
  document.getElementById('finance').hidden = true;

  document.getElementById('splashPage').hidden = true;
  document.getElementById('footer').hidden = false;


        showHome();
        
      } else {
        // User is signed out
        // ...
        // Display page
  document.getElementById('page').hidden = true;
  document.getElementById('splashPage').hidden = false;
        login.style.display = 'block'
        notlog.style.display = 'block'
      }
    });
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log(email," ",password)
    
       signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
            // Signed in 
            // const user = usercred.user;
            if (user) {
              alert('sucess')
            }
            // ...
        })
        .catch((error) => {
            console.log('error',error)
        });
    })
    
const db = getFirestore(app);

/*
const pupilsCol = collection(db, "pupils");
const docsSnap = await getDocs(pupilsCol);

docsSnap.forEach(doc => {
  console.log(doc.data());
})
*/

// Get a list of cities from your database
async function getPupils() {
  const pupilsCol = collection(db, 'pupils');
  const pupilSnapshot = await getDocs(pupilsCol);
  const pupilList = pupilSnapshot.docs.map(doc => doc.data());
  return pupilList;
}
//console.log(app);
