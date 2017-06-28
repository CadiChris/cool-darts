import React from 'react'
import { connect } from 'react-redux'
import TableauDesScores from './TableauDesScores/TableauDesScores'
import InscriptionDesJoueurs from './InscriptionDesJoueurs/InscriptionDesJoueurs'
import CommandesDeLaPartie from './CommandesDeLaPartie/CommandesDeLaPartie'
import Vainqueurs from './Vainqueurs/Vainqueurs'
import { StyleSheet, Text, View } from 'react-native'
import { Styles } from './styles'

class Cricket extends React.Component {

  render() {
    const {phase} = this.props
    const contenus = {
      INSCRIPTION: <InscriptionDesJoueurs/>,
      EN_COURS: <TableauDesScores/>,
      TERMINEE: <Vainqueurs />
    }

    const afficherLesCommandes = phase === 'EN_COURS'

    return (
      <View style={Styles.container}>
        {
          contenus[phase]
        }
        {
          afficherLesCommandes ? <CommandesDeLaPartie /> : null
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  phase: state.cricket.actuel.phase
})

export default connect(mapStateToProps)(Cricket)