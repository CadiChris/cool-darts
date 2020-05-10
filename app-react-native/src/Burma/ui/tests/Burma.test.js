import React from 'react';
import Burma from '../Burma';
import {renderAvecStore} from '../../../utils/test-utils/react-testing-library';
import {inscrireJoueur} from '../../../InscriptionDesJoueurs/domaine/actions';
import {storeInitialise} from '../../../utils/test-utils/redux';

describe('<Burma />', () => {
  it('affiche le nom de chaque joueur', () => {
    const deuxJoueurs = storeInitialise([
      inscrireJoueur('Noemie'),
      inscrireJoueur('Telma'),
    ]);

    const ui = renderAvecStore(<Burma />, deuxJoueurs);

    expect(ui.queryByText('Noemie')).not.toBeNull();
    expect(ui.queryByText('Telma')).not.toBeNull();
  });
});
