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
    const {scores} = this.props
    return (
      <View style={{flex: 1}}>
        <Grid style={{flexDirection: 'column'}}>
          <EnTete />
          {
            scores.map((score, index) => <LigneDeScore score={score} key={index}/>)
          }
        </Grid>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    scores: [...state.tableauDesScores.scores]
  }
}

export default connect(mapStateToProps)(TableauDesScores)
