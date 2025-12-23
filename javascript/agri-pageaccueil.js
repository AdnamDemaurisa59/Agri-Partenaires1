document.addEventListener('DOMContentLoaded', () => {
  const images = Array.from(document.querySelectorAll('.carousel-images img'));
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const drawer = document.querySelector('.mobile-drawer');
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  let currentIndex = 0;
  let autoSlide;

  if (menuToggle && drawer) {
    menuToggle.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });
  }

  const setActiveImage = (index) => {
    images.forEach((img, i) => img.classList.toggle('active', i === index));
  };

  const startAutoSlide = () => {
    autoSlide = setInterval(() => nextImage(), 5200);
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlide);
    startAutoSlide();
  };

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    setActiveImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    setActiveImage(currentIndex);
  }

  if (images.length) {
    setActiveImage(currentIndex);
    if (nextButton) nextButton.addEventListener('click', () => { nextImage(); resetAutoSlide(); });
    if (prevButton) prevButton.addEventListener('click', () => { prevImage(); resetAutoSlide(); });
    startAutoSlide();
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const nom = document.getElementById('nom')?.value || '';
      const prenom = document.getElementById('prenom')?.value || '';
      const num = document.getElementById('num')?.value || '';
      const email = document.getElementById('email')?.value || '';
      const subject = document.getElementById('objet')?.value || 'Prise de contact';
      const message = document.getElementById('message')?.value || '';
      afficherEmail(nom, prenom, num, email, subject, message);
    });
  }
});

function afficherEmail(nom, prenom, num, email, subject, message) {
  const contact = 'contact-agri-partenaires@gmail.com';
  const body = `${message}\n\nCoordonnées :\n${nom} ${prenom}\n${num}\n${email}`;
  const mailto = `mailto:${contact}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
}
