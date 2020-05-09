import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {connect} from 'react-redux';
import KeepAwake from 'react-native-keep-awake';
import {demarrerBurma} from '../domaine/actions';
import TableauDesScores from './TableauDesScores/TableauDesScores.container';
import CommandesDeLaPartie from './CommandesDeLaPartie/CommandesDeLaPartie.container';
import Vainqueur from './Vainqueur/Vainqueur';
import Celebration from '../../Kit/Celebration';

class Burma extends Component {
  componentDidMount() {
    const {dispatch, joueurs} = this.props;
    dispatch(demarrerBurma(joueurs));
  }

  render() {
    const {vainqueur} = this.props;

    return (
      <View style={{flex: 1}}>
        {vainqueur && <Celebration />}
        <TableauDesScores />

        <View style={{flexGrow: 1, justifyContent: 'center'}}>
          {!vainqueur ? <CommandesDeLaPartie /> : <Vainqueur nom={vainqueur} />}
        </View>

        <KeepAwake />
      </View>
    );
  }
}

Burma.propTypes = {
  joueurs: PropTypes.array.isRequired,
  vainqueur: PropTypes.string,
};

const mapStateToProps = state => ({
  joueurs: state.inscriptionDesJoueurs.inscrits,
  vainqueur: state.burma.actuel.vainqueur,
});

export default connect(mapStateToProps)(Burma);
