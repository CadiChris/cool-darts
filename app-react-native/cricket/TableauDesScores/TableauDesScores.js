import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { Grid } from "react-native-easy-grid"
import EnTete from './EnTete'
import LigneDeScore from './LigneDeScore'


class TableauDesScores extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {tableauDesScores} = this.props
    return (
      <View style={{flex: 1}}>
        <Grid style={{flexDirection: 'column'}}>
          <EnTete />
          {
            tableauDesScores.map((score, index) => <LigneDeScore score={score} key={index}/>)
          }
        </Grid>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    tableauDesScores: [...state.tableauDesScores]
  }
}

export default connect(mapStateToProps)(TableauDesScores)
