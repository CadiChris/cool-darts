import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import Lanceur from './Lanceur'
import InscriptionDesJoueurs from './InscriptionDesJoueurs'

class Partie extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {phase, lanceur} = this.props
    return (
      <View style={{height: 100}}>
        {
          phase === 'INSCRIPTION'
            ? <InscriptionDesJoueurs />
            : <Lanceur lanceur={lanceur}/>
        }
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    phase: state.partie.phase,
    lanceur: state.partie.lanceur
  }
}

export default connect(mapStateToProps)(Partie)