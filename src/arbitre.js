"use strict";
module.exports = {

	scorer: function(scoresActuels, lancer){ 
		let penalite = penalitePourAdversairesOuverts(scoresActuels, lancer);
		
		return scoresActuels.map(s => {
			return scorer(s, lancer, penalite)
		});
	}
}

const LIMITE = 3;

function penalitePourAdversairesOuverts(scores, lancer) {
	let scoreDuLanceur = trouverLeScoreDuLanceur(scores, lancer.lanceur);
	return calculerLaPenalitePourAdversairesOuverts(scoreDuLanceur.cible, lancer);
}

function trouverLeScoreDuLanceur(scores, lanceur) {
	return scores.filter(s => { return s.joueur === lanceur })[0];
}

function calculerLaPenalitePourAdversairesOuverts(cibleDuLanceur, lancer) {
	let impactsExistants = cibleDuLanceur[lancer.chiffre].impacts;
	let chiffreFermeApresImpacts = impactsExistants + lancer.impacts >= LIMITE;
	let surplusDimpacts = (impactsExistants + lancer.impacts) - LIMITE;
	
	return chiffreFermeApresImpacts ? surplusDimpacts * lancer.chiffre : 0;
}

function scorer(score, lancer, penalite) {
	return score.joueur === lancer.lanceur
		? scorerLeLanceur(score, lancer.chiffre, lancer.impacts)
		: scorerUnAdversaire(score, lancer.chiffre, penalite);
}

function scorerLeLanceur(scoreActuel, chiffre, nombreDimpacts) {
	let cibleDuLanceur = scoreActuel.cible;
	
	let nouveauxImpacts = impactsApresLeLancer(scoreActuel.cible, chiffre, nombreDimpacts);
	let nouvelleCible = impacterLaCible(cibleDuLanceur, chiffre, nouveauxImpacts);
	
	let nouveauScore = Object.assign({}, scoreActuel, {
		cible: nouvelleCible
	});
	
	return nouveauScore;
}

function impactsApresLeLancer(cible, chiffre, impactsDuLancer) {
	let impactsExistants = cible[chiffre].impacts;
	let nouveauxImpacts = Math.min(impactsExistants + impactsDuLancer, LIMITE);
	return nouveauxImpacts;
}

function impacterLaCible(cible, chiffreTouche, impacts) {
	return Object.assign({}, cible, {
		[chiffreTouche] : {
			impacts: impacts,
			ferme: impacts >= LIMITE
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
