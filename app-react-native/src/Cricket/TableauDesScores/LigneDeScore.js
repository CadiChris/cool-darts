import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { Col, Row } from "react-native-easy-grid"
import Touches from "./Touches"
import { Styles, Tailles, Textes } from '../styles'

export default ({ score, declencherLancerSimpleDans: lancerDans }) => (

    <Row style={Styles.bordureHaute}>

      <Col style={{ justifyContent: 'center' }} size={Tailles.largeurDeLaColonneJoueur}>
        <Text style={[Textes.light, { paddingLeft: 10 }]}>{score.joueur} - {score.points}</Text>
      </Col>

      {
        Object.keys(score.cible).map((chiffre, index) => {
          const { touches, ferme } = score.cible[chiffre]

          return (
              <Col style={[{ flex: 1 }, Styles.bordureGauche, ferme ? Styles.chiffreFerme : {}]} key={index}>
                <TouchableHighlight onPress={() => lancerDans(chiffre)}
                                    underlayColor="transparent"
                                    style={[{ flex: 1, alignSelf: 'stretch' }, Styles.contenuAuMilieu]}>
                  <View>
                    <Touches symbole="X" nombre={touches}/>
                  </View>
                </TouchableHighlight>
              </Col>
          )
        })
      }
    </Row>
)
