import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import { Styles, Textes } from '../styles'

class Vainqueurs extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {vainqueurs} = this.props
    return (
      <View style={[Styles.contenuAuMilieu, {justifyContent:'space-around'}]}>
        <Text style={[Textes.titre, {}]} >Fin de partie</Text>
        <View style={{height: '40%', }}>
          <Text style={[Textes.light, {fontSize: 18, opacity: 0.8, textAlign:'center'}]}>Vainqueur</Text>
          <Text style={[Textes.titre, {textAlign:'center'}]}> {vainqueurs.map(v => v)}</Text>
        </View>
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