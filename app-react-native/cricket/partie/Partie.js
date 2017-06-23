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
    const {peutDemarrer, phase} = this.props
    console.log(phase)
    return (
      <View>
        {
          phase === 'INSCRIPTION'
            ? <InscriptionDesJoueurs />
            : <Lanceur lanceur={{nom: 'Christophe'}}/>

        }
        <Text>{peutDemarrer ? 'READY' : 'Pas encore'}</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    peutDemarrer: state.partie.peutDemarrer,
    phase: state.partie.phase
  }
}

export default connect(mapStateToProps)(Partie)