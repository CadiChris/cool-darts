import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EnTete from './EnTete'
import LigneDeScore from './LigneDeScore'

import { Grid, Row } from "react-native-easy-grid";

export default () => {
  return (
    <View style={{flex:1, alignItems:'stretch'}}>
      <Grid>
        <Row style={{height: 45}}><EnTete /></Row>
        <Row><LigneDeScore /></Row>
      </Grid>
    </View>
  )
}