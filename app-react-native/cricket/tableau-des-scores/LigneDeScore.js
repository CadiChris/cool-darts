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
        ['X', '', '', 'XXX', '', '', 'XX'].map((touches, index) => (
          <Col style={[Styles.contenuAuMilieu, Styles.bordureDroite]} key={index}>
            <Text style={{textAlign: 'center'}}>{touches}</Text>
          </Col>
        ))
      }
    </Row>
  )
}
