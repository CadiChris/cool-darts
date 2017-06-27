import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'

class Vainqueurs extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {vainqueurs} = this.props
    return (
      <View>
        <Text>GAGNÉ par {vainqueurs.map(v => v)}</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    vainqueurs: state.cricket.vainqueurs
  }
}

export default connect(mapStateToProps)(Vainqueurs)