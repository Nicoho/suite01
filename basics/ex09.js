/*
    Ecrire une fonction "boostedEvenAddition",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre étant l'addition de tous les nombres PAIRS du tableau

*/

//  écrire votre code sous ce commentaire
function boostedEvenAddition (tableau){
    let resultat = 0;
  for ( let i=0; i < tableau.length; i++){
    if (tableau[i]%2 === 0) {
      resultat = resultat + tableau[i];
    }
  }
  return resultat
}


/*
  Test 1
  Résultat attendu : 10
*/

boostedEvenAddition([4, 5, 6]);

/*
  Test 2
  Résultat attendu : 44
*/

boostedEvenAddition([1, 3, 4, 5, 4, 6, 9, 8, 11, 10, 11, 12]);

/* DO NOT TOUCH */
module.exports = {
  boostedEvenAddition: boostedEvenAddition
}
