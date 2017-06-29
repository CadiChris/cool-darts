import React from 'react'
import { connect } from 'react-redux'
import { lancerFlechette } from '../Cricket.actions'
import LigneDeScore from './LigneDeScore'

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
  }
}

export default connect()(LigneDeScoreContainer)