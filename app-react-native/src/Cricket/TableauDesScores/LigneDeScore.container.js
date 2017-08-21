import React from 'react'
import { connect } from 'react-redux'
import { lancerFlechette } from '../Cricket.actions'
import LigneDeScore from './LigneDeScore'
import { Vibration } from "react-native"

class LigneDeScoreContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <LigneDeScore {...this.props} declencherLancerSimpleDans={(chiffre) => this.lancerSimpleDans(chiffre)}/>
  }

  lancerSimpleDans(chiffre) {
    const {dispatch, score} = this.props
    dispatch(lancerFlechette(score.joueur, chiffre, 1))
    Vibration.vibrate(50)
  }
}

export default connect()(LigneDeScoreContainer)