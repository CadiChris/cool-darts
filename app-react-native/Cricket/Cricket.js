import React from 'react'
import { connect } from 'react-redux'
import TableauDesScores from './TableauDesScores/TableauDesScores'
import InscriptionDesJoueurs from './InscriptionDesJoueurs/InscriptionDesJoueurs'
import { StyleSheet, Text, View } from 'react-native'

class Cricket extends React.Component {
  render() {
    const {phase} = this.props
    return (
      <View style={styles.container}>
        {
          phase === 'INSCRIPTION'
            ? <InscriptionDesJoueurs />
            : null
        }
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