document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll("a[href^='#']");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinksMenu = document.querySelector(".nav-links");

    if (menuToggle && navLinksMenu) {
        menuToggle.addEventListener("click", () => {
            navLinksMenu.classList.toggle("active");
            const expanded = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", String(!expanded));
        });

        navLinksMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinksMenu.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });
    const form = document.querySelector(".contact-form form");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = form.querySelector("input[type='text']").value.trim();
            const email = form.querySelector("input[type='email']").value.trim();
            const message = form.querySelector("textarea").value.trim();

            if (!name || !email || !message) {
                alert("Please fill all fields!");
                return;
            }

            alert("Message sent successfully (demo only) ✔");
            form.reset();
        });
    }

});