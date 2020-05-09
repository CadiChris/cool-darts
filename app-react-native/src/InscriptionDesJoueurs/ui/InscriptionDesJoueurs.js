import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import ViewQuiDecale from '../../Kit/ViewQuiDecale';
import ListeDesInscrits from './ListeDesInscrits';
import DemarrerLaPartie from './DemarrerLaPartie';
import FormulaireInscription from './FormulaireInscription';
import ChoixDuJeu from './ChoixDuJeu';
import Titre from './Titre';

function InscriptionDesJoueurs({
  inscrits,
  onInscription,
  onReordonner,
  onDesinscription,
  jeuxDisponibles,
  jeu,
  onChangementDeJeu,
  demarrerLaPartieEstPossible,
}) {
  return (
    <>
      <Titre />
      <View style={[{flex: 1, alignItems: 'center'}]}>
        <ViewQuiDecale
          dureeDuDecalage={900}
          coteDeDepart="right"
          style={[{flex: 1, width: '80%'}]}>
          <FormulaireInscription onSubmit={onInscription} />

          <ListeDesInscrits
            inscrits={inscrits}
            onReordonner={onReordonner}
            onDesinscription={onDesinscription}
          />
          <ChoixDuJeu
            jeuxDisponibles={jeuxDisponibles}
            jeuChoisi={jeu}
            onChangementDeJeu={onChangementDeJeu}
          />
        </ViewQuiDecale>

        <ViewQuiDecale dureeDuDecalage={900} coteDeDepart="left">
          <DemarrerLaPartie
            jeu={jeu}
            isDisabled={!demarrerLaPartieEstPossible}
          />
        </ViewQuiDecale>
      </View>
    </>
  );
}

InscriptionDesJoueurs.propTypes = {
  inscrits: PropTypes.array.isRequired,
  onInscription: PropTypes.func.isRequired,
  onReordonner: PropTypes.func.isRequired,
  onDesinscription: PropTypes.func.isRequired,
  jeu: PropTypes.string.isRequired,
  jeuxDisponibles: PropTypes.array.isRequired,
  onChangementDeJeu: PropTypes.func.isRequired,
  demarrerLaPartieEstPossible: PropTypes.bool.isRequired,
};

export default InscriptionDesJoueurs;
