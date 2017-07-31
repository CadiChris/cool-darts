import { DEMARRER_PARTIE, VOLEE } from "./burma.actions";
import { lanceur } from "./lanceur";

function chiffreCourant(state, action) {
  switch (action.type) {

    case DEMARRER_PARTIE :
      return 15

    case VOLEE :
      const prochainLanceur = lanceur(state, action)
      const changementDeChiffre = prochainLanceur === state.joueurs[0]

      return changementDeChiffre
          ? CHIFFRES_DU_BURMA[CHIFFRES_DU_BURMA.indexOf(state.chiffreCourant) + 1]
          : state.chiffreCourant
  }
}

const CHIFFRES_DU_BURMA = [15, 16, 'D', 17, 18, 'T', 19, 20, 'B']

export {
  chiffreCourant
}