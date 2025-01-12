// Vedic Theme JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll to explore
  const footerText = document.querySelector('.footer p');
  footerText.addEventListener('click', () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  });


})
