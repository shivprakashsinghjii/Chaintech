// navbar responsiveness
function toggleNavbar() {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}
// Smooth scrolling function --scroll to "Services we offer"
function scrollToServices() {
  var servicesSection = document.getElementById("services_section");
  servicesSection.scrollIntoView({ behavior: "smooth" });
}

// Function to toggle active class for navbar hovoring
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".navbar a");
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      links.forEach(function (link) {
        link.style.color = ""; // Reset color for all links
      });
      this.style.color = "rgba(100, 300, 500, 2)"; // Set color for clicked link
    });
  });
});
