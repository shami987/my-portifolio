const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.nav ul');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
    navUl.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navUl.classList.remove('active');
});



document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault();// Prevant a default behaviour of the button
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    if (fname === "" || lname === "" || email === "" || message === "") {
        errorMsg.textContent = "All fields marked * are required.";
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        errorMsg.textContent = "Please enter a valid email address.";
        return;
    }
    

    if (message.length < 10) {
        errorMsg.textContent = "Message must be at least 10 characters long.";
        return;
    }

    errorMsg.textContent = "";
    alert("Form submitted successfully!");// This will show a popup validation
});


