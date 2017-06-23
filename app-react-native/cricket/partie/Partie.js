import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import Lanceur from './Lanceur'

class Partie extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Lanceur lanceur={{nom:'Christophe'}}/>
      </View>
    )
  }
}

export default connect()(Partie)