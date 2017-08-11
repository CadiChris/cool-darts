import React from 'react'
import FadeInView from './../Technique/FadeInView'
import { StyleSheet, Text } from 'react-native'
import { Grid } from "react-native-easy-grid"
import EnTete from './EnTete'
import LigneDeScore from './LigneDeScore.container'
import { Styles } from "../styles";


export default ({scores}) => (
  <FadeInView style={[{flex: 1}]} dureeDuFade={200}>
    <Grid style={[{flexDirection: 'column'}, Styles.bordureBasse]}>
      <EnTete />
      {
        scores.map((score, index) => <LigneDeScore score={score} key={index}/>)
      }
    </Grid>
  </FadeInView>
)