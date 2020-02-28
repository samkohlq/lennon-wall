import * as firebase from "firebase/app";
import "firebase/auth";

// TODO(samkohlq): hide the following info
const firebaseConfig = {
  apiKey: "AIzaSyBi5VooZczcDMY-5MVOIa0_7UMC4g-yDiQ",
  authDomain: "lennon-wall-40c86.firebaseapp.com",
  databaseURL: "https://lennon-wall-40c86.firebaseio.com",
  projectId: "lennon-wall-40c86",
  storageBucket: "lennon-wall-40c86.appspot.com",
  messagingSenderId: "1074722798754",
  appId: "1:1074722798754:web:11bee00ed874bcefde2bfb"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
