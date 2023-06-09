// Create a Firestore instance
var database = firebase.firestore();

function logout() {

    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "index.html";
        sessionStorage.remove("userRole");
        sessionStorage.remove("userName");
        sessionStorage.remove("photoURL");
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
    });
}