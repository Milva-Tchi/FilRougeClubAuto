
// Fonction pour masquer l'image sur les petits écrans
function masquerImageSurPetitsEcrans() {
    // Sélection de l'élément image par sa classe
    var images = document.getElementsByClassName("bgNav ['url']");

    // Boucle à travers toutes les images sélectionnées
    for (var i = 0; i < images.length; i++) {
        // Vérifier la largeur de l'écran
        if (window.innerWidth < 576) { // 576px correspond à la largeur de l'écran des petits appareils (SM)
            // Ajouter la classe pour masquer l'image
            images[i].classList.add("d-none");
        } else {
            // Supprimer la classe pour afficher l'image
            images[i].classList.remove("d-none");
        }
    }
}

// Appeler la fonction lorsque la page est chargée et redimensionnée
window.addEventListener("load", masquerImageSurPetitsEcrans);
window.addEventListener("resize", masquerImageSurPetitsEcrans);

