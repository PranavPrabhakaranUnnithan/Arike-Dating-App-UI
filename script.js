// JavaScript to Change Navbar Transparency on Scroll
window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 70) {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.5)"; // Becomes transparent
    } else {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 1)"; // Solid white at the top
    }
});
    function toggleMenu() {
        var icon = document.getElementById("icon");
        icon.classList.toggle("show");
    }