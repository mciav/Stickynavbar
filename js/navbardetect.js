document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const sectionOne = document.querySelector('.section:nth-of-type(1)');
    const sectionTwo = document.querySelector('.section:nth-of-type(2)');

    const sectionOneBottom = sectionOne.offsetTop + sectionOne.offsetHeight;
    const sectionTwoTop = sectionTwo.offsetTop;

    if (window.scrollY >= sectionTwoTop) {
        navbar.style.display = 'flex'; // Show navbar in second section
    } else {
        navbar.style.display = 'none'; // Hide navbar in first section
    }
});

