import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
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
    const chiffres = [15, 16, 17, 18, 19, 20].map(c => {
      return {label: c, value: c}
    })
    const touches = [
      {label: 'Simple', value: 1},
      {label: 'Double', value: 2},
      {label: 'Triple', value: 3},
    ]

    const {style, lanceur} = this.props
    const peutLancer = this.laSaisieEstValide()

    return (
      <View style={style}>
        <Text>{lanceur.nom} - {'O'.repeat(lanceur.flechettesRestantes)}</Text>
        <View style={{height: 50}}>
          <RadioForm
            radio_props={chiffres}
            initial={null}
            formHorizontal={true}
            labelHorizontal={false}
            onPress={(value) => {
              this.noterChiffre(value)
            }}
            ref={(radio) => {
              this.radioDuChiffre = radio
            }}
          />
        </View>
        <View style={{height: 50}}>
          <RadioForm
            radio_props={touches}
            initial={null}
            formHorizontal={true}
            labelHorizontal={false}
            onPress={(value) => {
              this.noterTouches(value)
            }}
            ref={(radio) => {
              this.radioDesTouches = radio
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button title="Lancer" onPress={() => this.lancer()} disabled={!peutLancer}/>
          {/*<Button title="Manqué" onPress={() => this.manquer()}/>*/}
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
    return this.state.chiffre !== null && this.state.touches !== null
  }

  lancer() {
    const {dispatch, lanceur} = this.props
    const {chiffre, touches} = this.state
    dispatch(lancerFlechette(lanceur.nom, chiffre, touches))
    // Le setState doit être après les updates des radios.
    this.radioDuChiffre.updateIsActiveIndex(null)
    this.radioDesTouches.updateIsActiveIndex(null)
    this.setState(this.aucuneSaisie())
  }

  manquer() {
    const {dispatch, lanceur} = this.props
    dispatch(lancerFlechette(lanceur.nom, 1, 1))
  }
}

export default connect()(Lanceur)