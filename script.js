// document ready en js

const divs = document.querySelectorAll('div.bw');

    // Vérifiez s'il y a au moins un élément <div>
    if (divs.length > 0) {
      // Affichez l'image en modifiant la propriété "display" du premier élément <div>
    divs[0].style.display = 'block';
    }

    const desc = document.querySelectorAll('div.desc');

    // Vérifiez s'il y a au moins un élément <div>
    if (desc.length > 0) {
      // Affichez l'image en modifiant la propriété "display" du premier élément <div>
    desc[0].style.display = 'block';
    }