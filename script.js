/* -------------------------
   CONTACT FORM VALIDATION
-------------------------- */
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("❗ Please fill all fields.");
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)){
        alert("❗ Enter a valid email.");
        return;
    }

    alert("✔ Message sent successfully!");
    this.reset();
});

/* -------------------------
   DARK / LIGHT THEME TOGGLE
-------------------------- */
function toggleTheme(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem("theme","dark");
    } else{
        localStorage.setItem("theme","light");
    }
}

// Load theme on refresh
window.onload = function(){
    if(localStorage.getItem("theme")==="dark"){
        document.body.classList.add("dark-theme");
    }
};

/* -------------------------
   TYPING ANIMATION
-------------------------- */
const text = ["Web Developer", "UI/UX Designer", "Programmer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
(function type(){
    if(count === text.length) count = 0;
    currentText = text[count];
    letter = currentText.slice(0, ++index);
    document.querySelector(".typing").textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index=0;
        setTimeout(type,1500);
    } else{
        setTimeout(type,150);
    }
}());

/* -------------------------
   AOS ANIMATION INIT
-------------------------- */
AOS.init({
    duration: 1200,
    once: true,
});

/* -------------------------
   SMOOTH SCROLL FOR NAV LINKS
-------------------------- */
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function(){
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({behavior: "smooth", block: "start"});
    });
});

/* -------------------------
   MOBILE NAV CLOSE ON CLICK
-------------------------- */
const navLinks = document.querySelectorAll(".nav-link");
const navCollapse = document.querySelector(".navbar-collapse");
navLinks.forEach(link => {
    link.addEventListener("click", ()=>{
        if(navCollapse.classList.contains("show")){
            navCollapse.classList.remove("show");
        }
    });
});
