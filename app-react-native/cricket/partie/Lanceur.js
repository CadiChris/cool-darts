import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { lancerFlechette } from '../tableau-des-scores/TableauDesScores.actions'

class Lanceur extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ...this.aucuneSaisie()
    }
  }

  render() {
    const chiffres_radio = [15, 16, 17, 18, 19, 20].map(c => {
      return {label: c, value: c}
    })
    const touches_radio = [
      {label: 'Simple', value: 1},
      {label: 'Double', value: 2},
      {label: 'Triple', value: 3},
    ]

    const {lanceur, chiffre, touches} = this.props
    const peutLancer = this.laSaisieEstValide()

    return (
      <View>
        <Text>{lanceur.nom} - {'O'.repeat(lanceur.flechettesRestantes)}</Text>
        <Text>{chiffre} - {touches ? touches_radio[touches - 1].label : ''}</Text>
        <View style={{flexDirection: 'row'}}>
          <Button title="Lancer" onPress={() => this.lancer()} disabled={!peutLancer}/>
          <Button title="Manqué" onPress={() => this.manquer()}/>
        </View>
      </View>
    )
  }

  aucuneSaisie() {
    return {
      chiffre: null,
      touches: null
    }
  }

  noterChiffre(chiffre) {
    this.setState({
      ...this.state,
      chiffre
    })
  }

  noterTouches(touches) {
    this.setState({
      ...this.state,
      touches
    })
  }

  laSaisieEstValide() {
    return this.props.chiffre !== null && this.props.touches !== null
  }

  lancer() {
    const {dispatch, lanceur, chiffre, touches} = this.props
    dispatch(lancerFlechette(lanceur.nom, chiffre, touches))
    this.setState(this.aucuneSaisie())
  }

  manquer() {
    const {dispatch, lanceur} = this.props
    dispatch(lancerFlechette(lanceur.nom, 0, 1))
  }
}

function mapStateToProps(state) {
  return {
    chiffre: state.partie.lanceur.dernierLancer.chiffre,
    touches: state.partie.lanceur.dernierLancer.touches
  }
}
export default connect(mapStateToProps)(Lanceur)