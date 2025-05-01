// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // Offset for fixed navbar
        behavior: 'smooth'
      });
    }
  });
});

// Buy Now buttons functionality
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Thank you for your interest! Checkout feature coming soon.');
  });
});

// Dynamic footer year
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer p');
  const year = new Date().getFullYear();
  footer.innerHTML = `&copy; ${year} Bramley. All Rights Reserved.`;
});
