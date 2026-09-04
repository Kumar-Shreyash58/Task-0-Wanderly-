// ================= MOBILE MENU =================

function openMenu() {
    document.getElementById("mobileMenu").classList.add("active");
}

function closeMenu() {
    document.getElementById("mobileMenu").classList.remove("active");
}


// ================= NEWSLETTER =================

document
    .getElementById("newsletterForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value;

        if (email.includes("@")) {
            alert("Thank you for subscribing!");
        } else {
            alert("Please enter a valid email.");
        }
    });