import React from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableHighlight } from 'react-native'
import { Col, Row } from "react-native-easy-grid"
import { Styles, Tailles, Textes } from '../styles'
import { lancerFlechette } from '../Cricket.actions'

class LigneDeScore extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {score} = this.props
    return (
      <Row style={Styles.bordureBasse}>
        <Col style={{justifyContent: 'center'}} size={Tailles.largeurDeLaColonneJoueur}>
          <Text style={[Textes.light, {paddingLeft: 10}]}>{score.joueur} - {score.points}</Text>
        </Col>

        {
          Object.keys(score.cible).map((chiffre, index) => {
            const {touches, ferme} = score.cible[chiffre]
            return (
              <Col style={[{flex:1}, Styles.bordureDroite, ferme ? Styles.chiffreFerme : {}]} key={index}>
                <TouchableHighlight onPress={() => this.lancerSimpleDans(chiffre)} style={[{flex:1, alignSelf: 'stretch'}, Styles.contenuAuMilieu]}>
                  <View>
                    <Text style={[Textes.basique, {fontSize: 17, textAlign: 'center', letterSpacing: 3}]}>{'X'.repeat(touches)}</Text>
                  </View>
                </TouchableHighlight>
              </Col>
            )
          })
        }
      </Row>
    )
  }

  lancerSimpleDans(chiffre) {
    const {dispatch, score} = this.props
    dispatch(lancerFlechette(score.joueur, chiffre, 1))
  }
}

export default connect()(LigneDeScore)