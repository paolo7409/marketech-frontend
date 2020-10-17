var firebaseConfig = {
  apiKey: "AIzaSyAWWNmWbPkVjgA61CFADnbhXqQsorQRPj0",
  authDomain: "proyecto-web-ecommerce.firebaseapp.com",
  databaseURL: "https://proyecto-web-ecommerce.firebaseio.com",
  projectId: "proyecto-web-ecommerce",
  storageBucket: "proyecto-web-ecommerce.appspot.com",
  messagingSenderId: "518903531304",
  appId: "1:518903531304:web:33d0197143264595d1b21d"
};
firebase.initializeApp(firebaseConfig);

const basededatos = firebase.firestore()