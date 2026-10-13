import './style.css'

class Des {
  constructor(nbrFace){
    this.nbrFace = nbrFace ;
    this.score = 0;
  }
  lancer () {
    const résultat = Math.floor((Math.random() * this.nbrFace ) + 1);
    this.score += résultat ; 
    return résultat ;
  }
}

class Joueur {
  constructor (nom, Des){
    this.nom = nom ;
    this.valeurLancé = 0 ;
    this.des = Des ;
  }
  lancerDes() {
    this.valeurLancé = this.des.lancer() ;
    return this.valeurLancé;
  }
}

class Partie {
  constructor (joueur1, joueur2, nbrTour = 5 ){
    this.joueur1 = joueur1 ;
    this.joueur2 = joueur2 ;
    this.nbrTour = nbrTour ;
    this.scoreJ1 = 0 ;
    this.scoreJ2 = 0 ;
  }
  lancerPartie(){
    for(let i = 0 ; i < this.nbrTour ; i++){
      this.scoreJ1 += this.joueur1.lancerDes();
      this.scoreJ2 += this.joueur2.lancerDes();
    }

    if (this.scoreJ1 > this.scoreJ2){
      return `Félicitation à ${this.joueur1.nom} qui remporte la partie avec un score de ${this.scoreJ1} contre ${this.scoreJ2} pour ${this.joueur2.nom} !`

    }else if (this.scoreJ2 > this.scoreJ1){
       return `Félicitation à ${this.joueur2.nom} qui remporte la partie avec un score de ${this.scoreJ2} contre ${this.scoreJ1} pour ${this.joueur1.nom} ! `
    
    }else {
      return `Egalité : ${this.scoreJ1} partout ! Malheureusement aucun joueur n'a pu se départager. Relancer la partie ? ` 
    } 
  }
}

const des = new Des(6);
const joueur1 = new Joueur("Terence", des);
const joueur2 = new Joueur("Bud", des);
const partie = new Partie (joueur1, joueur2, 5)

console.log(partie.lancerPartie());

const btn = document.querySelector(".js-btn");
const description = document.querySelector(".js-description");

btn.addEventListener("click" , function(){
  const des = new Des(6);
  const joueur1 = new Joueur("Terence", des);
  const joueur2 = new Joueur("Bud", des);
  const partie = new Partie (joueur1, joueur2, 5)
  description.textContent = partie.lancerPartie(); 
})