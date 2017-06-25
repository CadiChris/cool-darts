import React from 'react'
import {connect} from 'react-redux'
import { Text, View, TouchableHighlight } from 'react-native'
import { Col, Row } from "react-native-easy-grid"
import { Styles, Tailles } from './Styles'
import {chiffre} from './TableauDesScores.actions'

class LigneDeScore extends React.Component {
  constructor(props) {
    super(props)
  }

  signaler(c) {
    const {dispatch} = this.props
    dispatch(chiffre(c))
  }
  render() {
    const {score} = this.props
    return (
      <Row style={Styles.bordureBasse}>
        <Col style={{justifyContent: 'center'}} size={Tailles.largeurDeLaColonneJoueur}>
          <Text style={{paddingLeft: 10}}>{score.joueur} - {score.points}</Text>
        </Col>

        {
          Object.keys(score.cible).map((chiffre, index) => {
            const {touches, ferme} = score.cible[chiffre]
            return (
              <Col style={[Styles.contenuAuMilieu, Styles.bordureDroite, ferme ? Styles.chiffreFerme : {}]} key={index}>
                <TouchableHighlight onPress={() => this.signaler(chiffre)}>
                  <View>
                  <Text>ld</Text>
                  <Text style={{textAlign: 'center'}}>{'X'.repeat(touches)}</Text>
                  </View>
                </TouchableHighlight>
              </Col>
            )
          })
        }
      </Row>
    )
  }
}

export default connect()(LigneDeScore)