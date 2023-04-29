// Create a Firestore instance
var database = firebase.firestore();

window.onload = function () {
    getUserRole(sessionStorage.getItem("userRole"));
    loginState();
}

function loginState() {
            document.getElementById("nameSpan").textContent = sessionStorage.getItem("userName");
            document.getElementById("userImage").src = sessionStorage.getItem("photoURL");
            document.getElementById("role").textContent = sessionStorage.getItem("userRole");
}

function getUserRole(user_role) {

    var menu = '';

    if (user_role === 'System Admin') {
        menu = '<li>' +
            '<a href="#"><i class="fa fa-user"></i> <span class="nav-label">Hospital</span><span class="fa arrow"></span></a>' +
            '<ul class="nav nav-second-level collapse">' +
            '<li><a href="patient.html">Patient History</a></li>' +
            '<li><a href="add_patient.html">Manage Patient</a></li>' +
            '</ul>' +
            '</li>' +
            '<li>' +
            '<a href="#"><i class="fa fa-flask"></i> <span class="nav-label">MOH</span><span class="fa arrow"></span></a>' +
            '<ul class="nav nav-second-level collapse">' +
            '<li><a href="add_phi.html">Manage PHI</a></li>' +
            '<li><a href="phi_job_assign.html">PHI Job</a></li>' +
            '</ul>' +
            '</li>' +
            '<li>' +
            '<a href="#"><i class="fa fa-sitemap"></i> <span class="nav-label">Administration</span><span class="fa arrow"></span></a>' +
            '<ul class="nav nav-second-level collapse">' +
            '<li><a href="user_add.html">Manage User</a></li>' +
            '</ul>' +
            '</li>';
    }

    if (user_role === 'MOH Admin') {
        menu = '<li>' +
            '<a href="#"><i class="fa fa-flask"></i> <span class="nav-label">MOH</span><span class="fa arrow"></span></a>' +
            '<ul class="nav nav-second-level collapse">' +
            '<li><a href="add_phi.html">Manage PHI</a></li>' +
            '<li><a href="phi_job_assign.html">PHI Job</a></li>' +
            '</ul>' +
            '</li>';

    }

    if (user_role === 'Hospital Admin') {
        menu = '<li>' +
            '<a href="#"><i class="fa fa-user"></i> <span class="nav-label">Patient</span><span class="fa arrow"></span></a>' +
            '<ul class="nav nav-second-level collapse">' +
            '<li><a href="patient.html">Patient History</a></li>' +
            '<li><a href="add_patient.html">Manage Patient</a></li>' +
            '</ul>' +
            '</li>';
    }
    $('#side-menu').append(menu);
}