document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne tous les éléments li qui ne sont pas des boutons
    const liElements = document.querySelectorAll('li:not(.btn)');
    let lastLi = null; // Garde une référence du dernier li cliqué
    let lastColorDiv = null; // Garde une référence de la dernière div de couleur
  
    // Parcours tous les liElements
    liElements.forEach(function(liElement) {
        const colorDiv = liElement.querySelector(".color"); // Sélectionne la div de couleur de chaque li
  
        // Ajoute un écouteur d'événement de clic à chaque li
        liElement.addEventListener('click', function() {
            if (lastLi !== liElement) { // Vérifie si le li actuel est différent du dernier li cliqué
                if (lastLi !== null && lastColorDiv !== null) {
                    // Animation de transition pour le dernier li cliqué et la dernière div de couleur
                    lastLi.style.transition = 'width 1s ease';
                    lastLi.style.width = '140px';
                    lastColorDiv.style.left = '140px';
                }
  
                // Animation de transition pour le li actuel et sa div de couleur
                liElement.style.transition = 'width 1s ease';
                liElement.style.width = '420px';
                colorDiv.style.left = '0';
  
                lastLi = liElement; // Met à jour la référence du dernier li cliqué
                lastColorDiv = colorDiv; // Met à jour la référence de la dernière div de couleur
            }
        });
    });
  
    // Sélectionne le bouton btn1 et l'élément li contenant l'img1
    const btn1 = document.getElementById("btn1");
    const img1Li = document.getElementById("img1").closest('li');
  
    // Ajoute un écouteur d'événement de clic au bouton btn1
    btn1.addEventListener('click', function() {
        img1Li.click(); // Déclenche un clic sur l'élément li contenant l'img1
    });
  
    // Répète les étapes précédentes pour les autres boutons et leurs éléments li correspondants
    const btn2 = document.getElementById("btn2");
    const img2Li = document.getElementById("img2").closest('li');
  
    btn2.addEventListener('click', function() {
        img2Li.click();
    });
  
    const btn3 = document.getElementById("btn3");
    const img3Li = document.getElementById("img3").closest('li');
  
    btn3.addEventListener('click', function() {
        img3Li.click();
    });
  
    const btn4 = document.getElementById("btn4");
    const img4Li = document.getElementById("img4").closest('li');
  
    btn4.addEventListener('click', function() {
        img4Li.click();
    });
  
    const btn5 = document.getElementById("btn5");
    const img5Li = document.getElementById("img5").closest('li');
  
    btn5.addEventListener('click', function() {
        img5Li.click();
    });
  
    // Sélectionne l'élément li correspondant à l'img3 et la card3
    const img3 = document.querySelector('#img3').closest('li');
  
    // Déclenche le clic sur l'élément li correspondant à l'img3 et la card3
    img3.click();
});

  