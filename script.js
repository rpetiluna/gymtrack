// ===============================
// SHOW / HIDE SECTIONS
// ===============================

function showSection(sectionId){

    const sections = document.querySelectorAll(".page-section");

    sections.forEach(section => {

        section.style.display = "none";

    });

    const activeSection = document.getElementById(sectionId);

    if(activeSection){

        activeSection.style.display = "block";

    }

    const menuItems = document.querySelectorAll(".sidebar li");

    menuItems.forEach(item => {

        item.classList.remove("active");

    });

    const clickedLink = event.target.closest("li");

    if(clickedLink){

        clickedLink.classList.add("active");

    }

}

// ===============================
// LOGIN
// ===============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        // Dummy Admin Account
        if (email === "admin@gmail.com" && password === "admin123") {

            alert("Welcome Admin!");

            window.location.href = "admin.html";

        }

        // Dummy Member Account
        else {

            alert("Welcome Member!");

            window.location.href = "member.html";

        }

    });

}

// ===============================
// REGISTER
// ===============================

const registerForm = document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit", function(e){

        e.preventDefault();

        const password = document.getElementById("password").value;

        const confirmPassword = document.getElementById("confirmPassword").value;

        if(password !== confirmPassword){

            alert("Passwords do not match!");

            return;

        }

        alert("Registration Successful!");

        window.location.href = "index.html";

    });

}

// ===============================
// LOGOUT
// ===============================

const logoutLinks = document.querySelectorAll("a[href='index.html']");

logoutLinks.forEach(link=>{

    link.addEventListener("click",function(e){

        const confirmLogout = confirm("Are you sure you want to logout?");

        if(!confirmLogout){

            e.preventDefault();

        }

    });

});
// ===============================
// SEARCH TABLE
// ===============================

const searchInputs = document.querySelectorAll(".toolbar input");

searchInputs.forEach(input => {

    input.addEventListener("keyup", function(){

        const value = this.value.toLowerCase();

        const table = this.closest(".page-section").querySelector("table");

        if(!table) return;

        const rows = table.querySelectorAll("tbody tr");

        rows.forEach(row => {

            const text = row.innerText.toLowerCase();

            row.style.display = text.includes(value) ? "" : "none";

        });

    });

});

// ===============================
// DELETE BUTTONS
// ===============================

const deleteButtons = document.querySelectorAll("button");

deleteButtons.forEach(button => {

    if(button.textContent.trim() === "Delete"){

        button.addEventListener("click", function(){

            if(confirm("Delete this record?")){

                this.closest("tr").remove();

            }

        });

    }

});

// ===============================
// EDIT BUTTONS
// ===============================

const editButtons = document.querySelectorAll("button");

editButtons.forEach(button => {

    if(button.textContent.trim() === "Edit"){

        button.addEventListener("click", function(){

            alert("Edit function will be available after Firebase integration.");

        });

    }

});

// ===============================
// ADD BUTTONS
// ===============================

const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach(button => {

    button.addEventListener("click", function(){

        alert("This feature will be connected to Firebase Database.");

    });

});

// ===============================
// FORM SUBMISSION
// ===============================

const forms = document.querySelectorAll("form");

forms.forEach(form => {

    if(form.id !== "loginForm" && form.id !== "registerForm"){

        form.addEventListener("submit", function(e){

            e.preventDefault();

            alert("Changes saved successfully!");

        });

    }

});

// ===============================
// DEFAULT SECTION
// ===============================

window.addEventListener("load", function(){

    const dashboard = document.getElementById("dashboard");

    if(dashboard){

        const sections = document.querySelectorAll(".page-section");

        sections.forEach(section => {

            section.style.display = "none";

        });

        dashboard.style.display = "block";

    }

});

// ===============================
// END OF SCRIPT
// ===============================