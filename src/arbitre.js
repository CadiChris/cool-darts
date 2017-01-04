"use strict";
module.exports = {

	scorer: function(tableauDesScores, lancer){ 
		let penalite = penaliteDuLancer(tableauDesScores, lancer);
		
		return tableauDesScores.map(s => {
			return scorer(s, lancer, penalite)
		});
	}
}

const LIMITE = 3;

function penaliteDuLancer(scores, lancer) {
	let scoreDuLanceur = trouverLeScoreDuLanceur(scores, lancer.lanceur);
	return calculerLaPenalite(scoreDuLanceur.cible, lancer);
}

function trouverLeScoreDuLanceur(scores, lanceur) {
	return scores.filter(s => { return s.joueur === lanceur })[0];
}

function calculerLaPenalite(cibleDuLanceur, lancer) {
	let touches = cibleDuLanceur[lancer.chiffre].touches;
	let leChiffreVaSeFermer = touches + lancer.touches >= LIMITE;
	let surplus = (touches + lancer.touches) - LIMITE;
	
	return leChiffreVaSeFermer ? surplus * lancer.chiffre : 0;
}

function scorer(score, lancer, penalite) {
	return score.joueur === lancer.lanceur
		? scorerLeLanceur(score, lancer.chiffre, lancer.touches)
		: scorerUnAdversaire(score, lancer.chiffre, penalite);
}

function scorerLeLanceur(scoreActuel, chiffre, touches) {
	let cibleDuLanceur = scoreActuel.cible;
	
	let nouvellesTouches = touchesApresLeLancer(scoreActuel.cible, chiffre, touches);
	let nouvelleCible = toucherLaCible(cibleDuLanceur, chiffre, nouvellesTouches);
	
	let nouveauScore = Object.assign({}, scoreActuel, {
		cible: nouvelleCible
	});
	
	return nouveauScore;
}

function touchesApresLeLancer(cible, chiffre, touchesDuLancer) {
	let ancienCompte = cible[chiffre].touches;
	let nouveauCompte = Math.min(ancienCompte + touchesDuLancer, LIMITE);
	return nouveauCompte;
}

function toucherLaCible(cible, chiffreTouche, touches) {
	return Object.assign({}, cible, {
		[chiffreTouche] : {
			touches: touches,
			ferme: touches >= LIMITE
		}
	});
}

function scorerUnAdversaire(score, chiffre, nombreDePoints) {
	let nouveauxPoints = score.cible[chiffre].ferme
			? score.points
			: score.points + nombreDePoints;
	
	return Object.assign({}, score, {
		points: nouveauxPoints
	});
}
