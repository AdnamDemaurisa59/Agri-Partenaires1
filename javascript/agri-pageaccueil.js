
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel-images img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    // Afficher l'image numéro 1 par défaut
    images[0].classList.add('active');

    // Fonction pour afficher l'image suivante
    function nextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        images[currentIndex].classList.add('active');
    }

    // Fonction pour afficher l'image précédente
    function prevImage() {
        images[currentIndex].classList.remove('active');
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        images[currentIndex].classList.add('active');
    }

    // Événement de clic sur les boutons de navigation
    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);
});


function afficherEmail(nom, prenom, num, email, subject, message) {
    let contact = "contact-agri-partenaires@gmail.com";
    let body = message;
    let mailto = `mailto:${contact}?subject=${encodeURIComponent(subject)}&body=Bonjour,%0A%0A${encodeURIComponent(body)}%0A%0ABien Cordialement%0A%0A${nom} ${prenom}%0A%0A${num}`;
    window.location.href = mailto;
}

function script() {
    let contactForm = document.getElementById("contactForm");
    document.getElementById("btnEnvoyerMail").addEventListener("click", (event) => {
        event.preventDefault();
        let nom = document.getElementById("nom").value;
        let prenom = document.getElementById("prenom").value;
        let num = document.getElementById("num").value;
        let email = document.getElementById("email").value;
        let subject = document.getElementById("objet").value; 
        let message = document.getElementById("message").value;
        afficherEmail(nom, prenom, num, email, subject, message);
    });
}

script();


