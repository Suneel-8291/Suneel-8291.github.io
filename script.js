// Contact form alert
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  this.reset();
});

// Smooth scroll already enabled via CSS

// Burger menu toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

