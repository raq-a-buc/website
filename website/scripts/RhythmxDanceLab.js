    // Mobile menu functionality
    function toggleMenu() {
        const menu = document.getElementById('mobileMenu');
        const burger = document.getElementById('hamburger');
        menu.classList.toggle('active');
        burger.classList.toggle('active');
      }
  
      // Close menu on resize
      function checkWindowSize() {
        const menu = document.getElementById('mobileMenu');
        const burger = document.getElementById('hamburger');
        const stickyTop = document.querySelector(".header");
        const stickyBottom = document.querySelector("nav");
        const stickyTopHeight = stickyTop.offsetHeight;
        
        if (window.innerWidth > 768) {
          stickyBottom.style.top = '0px';

          if (menu.classList.contains('active')) {
             menu.classList.remove('active');
             burger.classList.remove('active');
          }
        } else {
          stickyBottom.style.top = `${stickyTopHeight}px`;
        };
      }

      let highlightTimeout;
      function HighlightNav(name) {
        const navLinks = document.querySelectorAll(".nav-links a");
          clearTimeout(highlightTimeout);
          navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(name)) {
          link.classList.add("active");
          highlightTimeout = setTimeout(() => {
          link.classList.remove("active");
          }, 5000);
        }
        });
      }

      document.addEventListener("DOMContentLoaded", () => {
        const stickyTop = document.querySelector(".header");
        const stickyBottom = document.querySelector("nav");
        const stickyTopHeight = stickyTop.offsetHeight;
        if (window.innerWidth < 768) {
          stickyBottom.style.top = `${stickyTopHeight}px`;
        } else {
          stickyBottom.style.top = '0px';
        }
      });

      function expand(name) {
        const sections = document.querySelectorAll('.bio div'); // Select all person divs
        sections.forEach((person) => {
            person.classList.remove("expand");
            person.classList.remove("minimize");
          if (person.id === name) {
            person.classList.add("expand");
            person.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            person.classList.add("minimize");
          }
        });
      }

      function minimize(name) {
        const sections = document.querySelectorAll('.bio div'); // Select all person divs
        sections.forEach((person) => {
            person.classList.remove("expand");
            person.classList.remove("minimize");
            if (person.id === name) {
                person.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        })
      }
  
      window.addEventListener('resize', checkWindowSize);

  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  
    // Initialize VANTA background with performance optimizations
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => initializeVanta());
    } else {
      setTimeout(() => initializeVanta(), 200); // Fallback for older browsers
    }
  
    function initializeVanta() {
      VANTA.TOPOLOGY({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        color: 0x1d342c,
        backgroundColor: 0xfdedc9,
      });
    }


    setTimeout(() => {
        vantaEffect.pause(); // Pauses the animation
      }, 5000); // 5 seconds