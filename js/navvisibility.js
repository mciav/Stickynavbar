window.addEventListener('scroll', function() {
    const sticky-navbar = document.getElementById('sticky-navbar');
    const sectionOne = document.querySelector('.section:nth-of-type(1)');
    const sectionTwo = document.querySelector('.section:nth-of-type(2)');

    const sectionOneBottom = sectionOne.offsetTop + sectionOne.offsetHeight;
    const sectionTwoTop = sectionTwo.offsetTop;

    if (window.scrollY >= sectionTwoTop) {
        sticky-navbar.style.display = 'flex'; // Show navbar in second section
    } else {
        sticky-navbar.style.display = 'none'; // Hide navbar in first section
    }
});
