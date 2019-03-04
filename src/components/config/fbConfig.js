import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyDpPXnOMOc3441RnDqiT7yj4Q4GesuoQl8",
    authDomain: "saferzone-pie.firebaseapp.com",
    databaseURL: "https://saferzone-pie.firebaseio.com",
    projectId: "saferzone-pie",
    storageBucket: "saferzone-pie.appspot.com",
    messagingSenderId: "190691065895"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;