function openMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.add("active");
}
function closeMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.remove("active");
}
const newsletterForm = document.getElementById("newsletterForm");
newsletterForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    if (email.trim() === "") {
        alert("Please enter your email.");
        return;
    }
    alert("Thank you for subscribing!");
    newsletterForm.reset();
});