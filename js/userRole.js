// Create a Firestore instance
var database = firebase.firestore();

window.onload = function () {
    loginState();
}

function loginState() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var uid = user.uid;
            document.getElementById("nameSpan").textContent = user.displayName;
            document.getElementById("userImage").src = user.photoURL;

            database.collection("user_roles").doc(user.uid).get().then((doc) => {
                if (doc.exists) {

                    document.getElementById("role").textContent = doc.data().selectRole;

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such user!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
}