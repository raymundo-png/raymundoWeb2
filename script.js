document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll("#navMenu a");
    const sections = document.querySelectorAll("main section[id]");

   
    menuToggle.addEventListener("click", function () {
        const isOpen = navMenu.classList.toggle("show");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

   
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("show");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });

    
    function updateActiveLink() {
        let currentSection = "home";

        sections.forEach(function (section) {
            if (window.scrollY >= section.offsetTop - 150) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(function (link) {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + currentSection
            );
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();
});