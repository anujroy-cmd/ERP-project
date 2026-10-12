const navbar = document.querySelector(".navbar");
const backToTop = document.getElementById("backToTop");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link, .nav-cta");
const navCollapse = document.getElementById("navbarContent");
const demoForm = document.getElementById("demoForm");
const formNote = document.getElementById("formNote");

const updateChrome = () => {
    const isScrolled = window.scrollY > 24;
    navbar.classList.toggle("scrolled", isScrolled);
    backToTop.classList.toggle("visible", window.scrollY > 520);
};

window.addEventListener("scroll", updateChrome);
updateChrome();

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (navCollapse.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
        }
    });
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

demoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent = "Thank you. Your demo request has been captured for follow-up.";
    demoForm.reset();
});
