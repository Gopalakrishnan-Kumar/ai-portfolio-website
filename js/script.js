// ===============================
// AI Portfolio Website Script
// ===============================


// Welcome Message
console.log("Welcome to Gopalakrishnan Kumar AI Portfolio Website");


// ========================================
// Hero Button Interaction
// ========================================

function exploreProjects() {

    alert("Explore AI, Machine Learning, Data Science, and Generative AI Projects!");

    window.location.href = "projects.html";

}


// ========================================
// Contact Form Submission
// ========================================

function submitForm(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Basic Validation

    if(name === "" || email === "" || message === "") {

        alert("Please fill all fields.");

        return false;

    }

    // Email Validation

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)) {

        alert("Please enter a valid email address.");

        return false;

    }

    // Success Message

    alert("Thank you " + name + "! Your message has been submitted successfully.");

    // Reset Form

    document.getElementById("contactForm").reset();

}


// ========================================
// Smooth Scrolling
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior: 'smooth'

        });

    });

});


// ========================================
// Scroll Animation Effect
// ========================================

window.addEventListener("scroll", function () {

    let cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {

        let position = card.getBoundingClientRect().top;

        let screenPosition = window.innerHeight / 1.2;

        if(position < screenPosition){

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }

    });

});


// ========================================
// Initialize Project Cards Animation
// ========================================

document.querySelectorAll(".project-card").forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.6s ease";

});


// ========================================
// Dark Mode Toggle
// ========================================

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

}


// ========================================
// Current Year in Footer
// ========================================

document.addEventListener("DOMContentLoaded", function(){

    let footerYear = document.getElementById("year");

    if(footerYear){

        footerYear.innerHTML = new Date().getFullYear();

    }

});


// ========================================
// Typing Animation
// ========================================

const text = "AI Engineer | Data Scientist | Generative AI Developer";

let index = 0;

function typingEffect() {

    let typingElement = document.getElementById("typing");

    if(typingElement){

        if(index < text.length){

            typingElement.innerHTML += text.charAt(index);

            index++;

            setTimeout(typingEffect, 100);

        }

    }

}

typingEffect();


// ========================================
// Back To Top Button
// ========================================

window.onscroll = function () {

    let topButton = document.getElementById("topBtn");

    if(topButton){

        if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";

        }

    }

};


// Scroll To Top Function

function scrollToTop(){

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

}
