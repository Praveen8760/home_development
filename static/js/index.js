const mobileMenu = document.getElementById('mobile-menu');
const menuBtn = document.getElementById('menu-btn');
const mobileLinks = document.querySelectorAll('.nav-link-sm');

// Toggle mobile menu on button click
menuBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
    } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    }
    console.log('Menu classes after toggle:', mobileMenu.classList.value);
});

// Close mobile menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu.classList.contains('flex')) {
            mobileMenu.classList.remove('flex');
            mobileMenu.classList.add('hidden');
        }
    });
});



function openWhatsApp() {
    const phoneNumber = '+447877233699'; // Replace with your phone number in international format, e.g., '919876543210'
    const message = 'Hello!'; // Optional predefined message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}


// Script for Toggle More Cards on Mobile 

document.getElementById("show-more-btn").addEventListener("click", function () {
    const moreCards = document.getElementById("more-cards");
    if (moreCards.classList.contains("hidden")) {
        moreCards.classList.remove("hidden");
        moreCards.classList.add("grid");
        this.innerText = "Show Less";
    } else {
        moreCards.classList.remove("grid");
        moreCards.classList.add("hidden");
        this.innerText = "More Services";
    }
});


document.getElementById("show-more-after-btn").addEventListener("click", function () {
    const moreCards = document.getElementById("more_after");
    if (moreCards.classList.contains("hidden")) {
        moreCards.classList.remove("hidden");
        moreCards.classList.add("grid");
        this.innerText = "Show Less";
    } else {
        moreCards.classList.remove("grid");
        moreCards.classList.add("hidden");
        this.innerText = "More Images";
    }
});

// before/after card

document.querySelectorAll('.container').forEach(container => {
    const slider = container.querySelector('.slider');
    // Swapping before and after
    const beforeText = container.querySelector('.after-text'); // Swapped here
    const afterText = container.querySelector('.before-text'); // Swapped here

    slider.addEventListener('input', (e) => {
      const value = e.target.value;

      // Update --position for image sliding
      container.style.setProperty('--position', `${value}%`);

      // Calculate opacity (fades out text)
      beforeText.style.opacity = 1 - (value / 100);
      afterText.style.opacity = value / 100;

      // Center text when reaching 0% or 100%
      if (value == 0) {
        beforeText.classList.add('center');
        afterText.classList.remove('center');
      } else if (value == 100) {
        afterText.classList.add('center');
        beforeText.classList.remove('center');
      } else {
        beforeText.classList.remove('center');
        afterText.classList.remove('center');
      }
    });
  });