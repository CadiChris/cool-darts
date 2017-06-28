import React from 'react'
import { connect } from 'react-redux'
import FadeInView from './../Technique/FadeInView'
import { StyleSheet, Text } from 'react-native'
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
      <FadeInView style={[{flex: 1}]} dureeDuFade={200}>
        <Grid style={{flexDirection: 'column'}}>
          <EnTete />
          {
            scores.map((score, index) => <LigneDeScore score={score} key={index}/>)
          }
        </Grid>
      </FadeInView>
    )
  }
}

function mapStateToProps(state) {
  return {
    scores: [...state.cricket.actuel.scores]
  }
}

export default connect(mapStateToProps)(TableauDesScores)
