// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  confirmPasswordReset,
  GoogleAuthProvider,
  signInWithPopup
} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js';


import {
  getFirestore,
  collection,
  doc,
  onSnapshot,
  getDocs,
  addDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  getDoc,
  updateDoc
} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js';

import {
  getAnalytics
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";

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

const provider = new GoogleAuthProvider();

const notlog = document.getElementById('not-log-in');
const login = document.getElementById('logged-in');
const form = document.getElementById('form');






// Start of loggin in code...

onAuthStateChanged(auth, (user) => {
  if (user) {
      console.log('logged in!');

      showHome();


  } else {
      console.log('Not logged in, yet!');
      document.getElementById('splashPage').hidden = false;

  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log(email, " ", password);

  signInWithEmailAndPassword(auth, email, password)
      .then((user) => {

      })
      .catch((error) => {
          console.log('error', error);
      });
});

// End of loggin in code...

// Log out
const logoutButton = document.querySelector('.logout');
logoutButton.addEventListener('click', () => {
  signOut(auth)
      .then(() => {
          console.log("Signed out");

          // Change Display
          showSplash();
      })
      .catch((err) => {
          console.log(err.message);
      });
});
// end of log out

// Sync Calendar
const syncCalButton = document.querySelector('.syncCal');
syncCalButton.addEventListener('click', () => {
  console.log("Synchronise with Google Calendar");
  alert('A possible feature to add?');
});

//
// Elements for pupil data
const pupilForeNameElement = document.getElementById("displayPupilForename");
const pupilSurNameElement = document.getElementById("displayPupilSurname");
// .. Add rest later!
//
// Start of database manipulations

const db = getFirestore(app);
const pupilsCol = collection(db, "pupils");
// real time collection data

// Queries
const pupilQuery = query(pupilsCol, orderBy('surName', 'asc'));
//const pupilQuery= query(pupilsCol, where("foreName","==","Lucy"), orderBy('surName','asc'))

let pupilsList = [];


onSnapshot(pupilQuery, (snapshot) => {

  let feedList = document.getElementById("feeds");
feedList.replaceChildren();

  snapshot.docs.forEach((doc) => {
      pupilsList.push({...doc.data(),
          id: doc.id
      });

      let feed = document.createElement("div");
      feed.setAttribute("class", "bg-theme mx-3 rounded-m shadow-m mt-3 mb-3");
      feed.setAttribute("id", doc.id);

    // This seems wrong! - why can't we pass an object?- doc.data()

  
    
      let docLink = "displayPupilDetails(\'" + doc.data().status+"','"+ doc.data().address + "','"+ doc.data().dob + "','"+ doc.data().drivingLicenseNumber + "','"+ doc.data().email + "','"+ doc.data().foreName + "','" + doc.data().surName + "','" + doc.data().telephone + "\')";

    
    console.log(docLink);
    
      let preText='<div onclick="'+docLink+'" class="d-flex px-2 pb-2 pt-2"><div><a  ><img src="Avatar-200.png" width="45" class="rounded-s" alt="img"></a></div><div class="ps-2 align-self-center"><h5 class="ps-1 mb-0 line-height-xs pt-1">';

      let postText = '</div><div class="ms-auto"><a data-bs-toggle="dropdown" class="icon icon-m ps-3"><i class="bi bi-three-dots-vertical font-18 color-theme"></i></a></div>';

      let phone = '<h6 class="ps-1 mb-0 line-height-xs pt-1">' + doc.data().telephone + '</h6>';
      feed.innerHTML = preText + doc.data().foreName + "<br>" + doc.data().surName + phone + postText;

      document.getElementById("feeds").append(feed);
    
  //  console.log(doc.data());
    
      /*
    document.getElementByID(doc.id).addEventListener('click', e => {
e.preventDefault();
pupilsCol.doc(foreName.value).get()
.then(user => {
  if(user.exists)
    console.log(user.data());
  else
    console.log('User does not exist !');
  })
.catch(error => {
  console.error(error);
});
});
    */
  });
//   console.log("Here is the data...");
//   console.log(pupilsList);

});


// adding pupils
const addPupilForm = document.querySelector('.pupilDetailsForm')
addPupilForm.addEventListener('submit', (e) => {
e.preventDefault() // Prevent refresh of HTML page
addDoc(pupilsCol,{
  foreName: addPupilForm.foreName.value,
  surName: addPupilForm.surName.value,
  address: addPupilForm.foreName.value,
  dob: addPupilForm.dob.value,
  drivingLicenseNumber: addPupilForm.license.value,
  email: addPupilForm.pupilemail.value,
  status: addPupilForm.driverstatus.value,
  telephone: addPupilForm.telephone.value

})
.then(() => {
  addPupilForm.reset()
   alert("Pupil's details have been added")
})

})

/*
// deleting a pupil record
const deletePupilForm = document.querySelector('.delete')
deletePupilForm.addEventListener('submit', (e) => {
e.preventDefault() // Prevent refresh of HTML page
const docRef = doc(db, "pupils", deletePupilForm.id.value);
deleteDoc(docRef)
.then(() => {
  deletePupilForm.reset()
  alert("Pupil's details have been removed")
})
  
})

// get a single document
const docRef = doc(db, 'pupils', '7q96KwNCrsb4NTXgXTxq')
getDoc(docRef)
.then((doc) => {
console.log(doc.data(), doc.id)
})

// updating a document
const updatePupilForm = document.querySelector('.update')
updatePupilForm.addEventListener('submit', (e) => {
e.preventDefault()
const docRef = doc(db, "pupils", updatePupilForm.id.value);

updateDoc(docRef, {
  foreName: 'Lucy'
})
.then(() => {
  updatePupilForm.reset()
})

})

// Finding a pupil

const findPupilButton = document.querySelector('findPupilButton')
findPupilButton.addEventListener('click', (e) => {
e.preventDefault() // Prevent refresh of HTML page
alert("Boo")
const dbref = ref(db)

get(child(dbref,"pupils/" + findPupilName.value))
.then((snapshot)=>{
  if (snapshot.exists()){
    //Display details  
    displayPupilForename.innerHTML = snapshot.val().foreName;
    displayPupilSurname.innerHTML = snapshot.val().surName;
    
  }
  
})
})

*/