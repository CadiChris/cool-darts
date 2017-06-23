import React from 'react'
import { Text, View } from 'react-native'
import { Col, Row } from "react-native-easy-grid"
import { Styles, Tailles } from './Styles'

export default ({score}) => {
  return (
    <Row style={Styles.bordureBasse}>
      <Col style={{backgroundColor: 'blue', justifyContent: 'center'}} size={Tailles.largeurDeLaColonneJoueur}>
        <Text style={{paddingLeft: 10}}>{score.joueur}</Text>
      </Col>

      {
        Object.keys(score.cible).map((chiffre, index) => {
          const {touches, ferme} = score.cible[chiffre]
          return (
            <Col style={[Styles.contenuAuMilieu, Styles.bordureDroite, ferme ? Styles.chiffreFerme: {}]} key={index}>
              <Text style={{textAlign: 'center'}}>{'X'.repeat(touches)}</Text>
            </Col>
          )
        })
      }
    </Row>
  )
}
