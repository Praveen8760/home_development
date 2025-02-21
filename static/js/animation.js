document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Animation
    gsap.to("#navbar", {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        onComplete: function () {
            animateHeroSection();
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    let menuOpen = false;

    menuBtn.addEventListener("click", function () {
        menuOpen = !menuOpen;
        gsap.to(mobileMenu, {
            opacity: menuOpen ? 1 : 0,
            scale: menuOpen ? 1 : 0.95,
            display: menuOpen ? "flex" : "none",
            duration: 0.5,
            ease: "power2.out"
        });
    });

    // Hero Section Animation
    function animateHeroSection() {
        gsap.to(["#bg-image-mobile", "#bg-image-desktop"], {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power4"
        });

        gsap.to("#hero-section", { opacity: 1, duration: 1, ease: "power2.out" });

        gsap.to("#head1", {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            delay: 0.2
        });

        gsap.to("#hero-section p", {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            delay: 0.4
        });
    }

    // Stats Section Animation
    gsap.to("#stats-section", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: "#stats-section", start: "top 80%" }
    });

    gsap.from(".stats-card", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: { trigger: "#stats-section", start: "top 80%" }
    });

    gsap.from(".stats-icon", {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "bounce.out",
        stagger: 0.3,
        scrollTrigger: { trigger: "#stats-section", start: "top 80%" }
    });

    document.querySelectorAll(".stats-number").forEach((el) => {
        gsap.to(el, {
            innerText: el.getAttribute("data-value") + "%",
            duration: 2,
            snap: { innerText: 1 },
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%" }
        });
    });

    // Why Choose Us Section
    gsap.from("#choose-us-title", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: "#choose-us-title", start: "top 80%" }
    });

    gsap.from(".choose-us-image", {
        x: 100,
        opacity: 0,
        rotate: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: { trigger: ".choose-us-image", start: "top 85%" }
    });

    gsap.from(".choose-us-text", {
        x: -100,
        opacity: 0,
        duration: 1.6,
        ease: "power3.out",
        scrollTrigger: { trigger: ".choose-us-text", start: "top 85%" }
    });

    // Gallery Carousel
    const carousel = document.querySelector("#gallery");
    const items = carousel.querySelectorAll("[data-carousel-item]");
    let currentIndex = 0;
    const totalItems = items.length;
    let autoSlideInterval;

    function updateCarousel(newIndex) {
        items.forEach((item, index) => {
            item.classList.toggle("hidden", index !== newIndex);
            item.classList.toggle("opacity-100", index === newIndex);
            item.classList.toggle("scale-100", index === newIndex);
            item.classList.toggle("animate-fade-in", index === newIndex);
        });
        currentIndex = newIndex;
    }

    function nextSlide() {
        updateCarousel((currentIndex + 1) % totalItems);
    }

    function prevSlide() {
        updateCarousel((currentIndex - 1 + totalItems) % totalItems);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    carousel.querySelector("[data-carousel-next]").addEventListener("click", () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    carousel.querySelector("[data-carousel-prev]").addEventListener("click", () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    startAutoSlide();
});



document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Animate Section Headings
    gsap.from("#service-title, #service-subtitle", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#services-section",
            start: "top 80%",
        }
    });

    // Animate First 3 Cards
    gsap.from("#service-card-1, #service-card-2, #service-card-3", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#services-section",
            start: "top 85%",
        }
    });

    // More Services Button Animation
    const showMoreBtn = document.getElementById("show-more-btn");
    const moreCards = document.getElementById("more-cards");
    let isExpanded = false;

    showMoreBtn.addEventListener("click", function () {
        isExpanded = !isExpanded;

        if (isExpanded) {
            gsap.fromTo(moreCards,
                { opacity: 0, y: 50, display: "grid" },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
            );
            showMoreBtn.textContent = "Show Less";
        } else {
            gsap.to(moreCards, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power2.in",
                onComplete: () => {
                    moreCards.style.display = "none";
                }
            });
            showMoreBtn.textContent = "More Services";
        }
    });

    // Hover Animation for Button
    gsap.to("#show-more-btn", {
        scale: 1.05,
        backgroundColor: "#282A36",
        color: "#fff",
        duration: 0.3,
        paused: true,
        ease: "power2.out",
    });

    showMoreBtn.addEventListener("mouseenter", () => gsap.to(showMoreBtn, { scale: 1.05, backgroundColor: "#282A36", color: "#fff" }));
    showMoreBtn.addEventListener("mouseleave", () => gsap.to(showMoreBtn, { scale: 1, backgroundColor: "", color: "" }));
});


// footer 
    gsap.from("#animated-footer", {
        opacity: 0,
        y: 50,
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#animated-footer",
            start: "top 90%", 
            toggleActions: "play none none none"
        }
    });



