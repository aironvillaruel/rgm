window.scrollCarousel = scrollCarousel;
window.openForm = openForm;
window.closeForm = closeForm;
window.homePage = homePage;
window.productPage = productPage;


function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const cardWidth = carousel.querySelector('.flex-shrink-0').offsetWidth + 20; // Card width + gap
    carousel.scrollBy({ left: direction * cardWidth * 4, behavior: 'smooth' });
}
function openForm(){
    console.log('HELLO');
    const div = document.getElementById('contactDiv');
    const btn = document.getElementById('btnForm');
      div.classList.toggle('hidden'); // Toggles the visibility of the div
    //   div.classList.toggle('slide-top'); // Toggles the visibility of the div
      btn.classList.add('hidden'); // Toggles the visibility of the div
}

function closeForm(){
    const div = document.getElementById('contactDiv');
    const btn = document.getElementById('btnForm');
      div.classList.add('hidden'); // Toggles the visibility of the div
      div.classList.add('slide-bck-center'); // Toggles the visibility of the div
      btn.classList.remove('hidden'); // Toggles the visibility of the div
      
}

function homePage(){
    localStorage.setItem('page', 'home');
        const product = document.getElementById('product_page');
        const about = document.getElementById('about_page');
        const contact = document.getElementById('contact_page');

        product.style.borderBottom = '';
        about.style.borderBottom = '';
        contact.style.borderBottom = '';

}

function productPage(){
    localStorage.setItem('page', 'product');
    const home = document.getElementById('home_page');
    const about = document.getElementById('about_page');
    const contact = document.getElementById('contact_page');

    home.style.borderBottom = '';
    about.style.borderBottom = '';
    contact.style.borderBottom = '';

}

window.addEventListener('scroll', () => {
    const boxes = document.querySelectorAll('.box');
    const triggerPoint = window.innerHeight / 1.5;

    boxes.forEach((box) => {
        const boxPosition = box.getBoundingClientRect().top;

        if (boxPosition < triggerPoint) {
            box.classList.add('visible');
        }
    });

    
});


document.addEventListener('DOMContentLoaded', () => {
 let lastScrollTop = 0;
    let navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scroll down - hide navbar
            navbar.style.top = "-80px";  // You can adjust this value based on the navbar height
        } else {
            // Scroll up - show navbar
            navbar.style.top = "0";
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;  // Prevent negative scroll values
    });

    // Detect when the user stops scrolling (for smooth behavior)
    let scrollTimeout;

    window.addEventListener("scroll", function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            // Show the navbar after a brief pause in scrolling
            navbar.style.top = "0";
        }, 150); // Delay after user stops scrolling (in milliseconds)
    });

});
