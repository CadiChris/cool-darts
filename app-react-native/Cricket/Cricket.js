import React from 'react'
import { connect } from 'react-redux'
import TableauDesScores from './TableauDesScores/TableauDesScores'
import { StyleSheet, Text, View } from 'react-native'

import Partie from './Partie/Partie'

class Cricket extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Partie style={{height: '40%'}}/>
        <TableauDesScores />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    paddingTop: 25
  },
})

function mapStateToProps(state) {
  return {
    phase: state.cricket.phase
  }
}

export default connect(mapStateToProps)(Cricket)