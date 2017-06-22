import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EnTete from './EnTete'
import LigneDeScore from './LigneDeScore'

import { Grid } from "react-native-easy-grid";

export default () => {
  return (
    <View style={{flex:1}}>
      <Grid style={{flexDirection: 'column'}}>
        <EnTete />
        <LigneDeScore score={{joueur: 'Goundar'}}/>
        <LigneDeScore score={{joueur: 'Romain'}}/>
        <LigneDeScore score={{joueur: 'Christophe'}}/>
      </Grid>
    </View>
  )
}