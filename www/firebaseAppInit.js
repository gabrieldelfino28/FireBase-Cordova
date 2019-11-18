function onLoadFunction(){
    firebase.initializeApp(firebaseConfig);
    showCurrentUser();//update lbUserLoggedIn label
}