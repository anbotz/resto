import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyAcwnSv2GNS9muKSuvHtn3iTN4gIzpMX0k",
    authDomain: "mcdou-f13d9.firebaseapp.com",
    databaseURL: "https://mcdou-f13d9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mcdou-f13d9",
    storageBucket: "mcdou-f13d9.appspot.com",
    messagingSenderId: "181698134233",
    appId: "1:181698134233:web:986f0787cc12df1c197ec8"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}

export default Firebase;