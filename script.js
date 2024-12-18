// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60, // Offset to account for header height
            behavior: 'smooth'
        });
    });
});

// Active Link Highlighting on Scroll
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Mobile Navigation Toggle (Optional)
const menuToggleButton = document.createElement('button');
menuToggleButton.innerText = '☰'; // Hamburger icon for mobile menu
menuToggleButton.classList.add('menu-toggle');
document.querySelector('header').appendChild(menuToggleButton);

const navMenu = document.querySelector('nav');
menuToggleButton.addEventListener('click', function () {
    navMenu.classList.toggle('active'); // Toggle the menu visibility on small screens
});

// Add some styles for the mobile menu toggle (optional)
const style = document.createElement('style');
style.innerHTML = `
    .menu-toggle {
        display: none;
        background: none;
        border: none;
        font-size: 2rem;
        color: #fff;
        cursor: pointer;
        position: absolute;
        top: 20px;
        right: 20px;
    }

    @media (max-width: 768px) {
        .menu-toggle {
            display: block;
        }
        nav {
            display: none;
            text-align: center;
            width: 100%;
            position: absolute;
            top: 60px;
            left: 0;
            background-color: #333;
        }
        nav.active {
            display: block;
        }
        nav a {
            display: block;
            padding: 15px;
        }
    }
`;
document.head.appendChild(style);