import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Tailles, Styles } from '../styles'

import { Col, Row } from "react-native-easy-grid";

export default () => (
  <Row style={{height: Tailles.hauteurEnTete}}>

    <Col size={Tailles.largeurDeLaColonneJoueur}></Col>
    {
      [15, 16, 17, 18, 19, 20, 'Bull'].map(chiffre => (
        <Col key={chiffre} style={[Styles.bordureDroite, Styles.bordureBasse, Styles.contenuAuMilieu]}>
          <Text style={{textAlign: 'center'}}>{chiffre}</Text>
        </Col>
      ))
    }
  </Row>
)