window.onload = function(){
    var config = {
        apiKey: "AIzaSyDhU0N1pqMfQxWuBsFZswmsyZavjf-c9FA",
        authDomain: "jsfirebaseapp.firebaseapp.com",
        databaseURL: "https://jsfirebaseapp.firebaseio.com",
        projectId: "jsfirebaseapp",
        storageBucket: "jsfirebaseapp.appspot.com",
        messagingSenderId: "586775948754"
        };
    firebase.initializeApp(config);
    database = firebase.database()
    authentication = firebase.auth()
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
      });


    console.log(provider)
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.location = "welcome.html";
            console.log('you are here')
        } else {
            //window.location.href = 'index.html';
        }
      });
    facebookSignin = function(){
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log('token *8888888888888' + token)
            window.location.href = 'welcome.html';
            }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(error)
            // ...
        });
    }
}