import React from 'react'
import { connect } from 'react-redux'
import { Text, View }  from 'react-native'
import Button from 'apsl-react-native-button'
import { Boutons, Textes } from '../styles'
import { nouvellePartie } from './../Cricket.actions'
import Icon from 'react-native-vector-icons/FontAwesome'

class CommandesDeLaPartie extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {aucunPrecedent} = this.props
    return (
      <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}]}>
        <Button
          onPress={() => this.nouvellePartie()}
          style={[Boutons.deCommande, {width: 60, height: 50, marginHorizontal: 30}]}
          textStyle={[Textes.bouton, {fontSize: 12}]}>
          <Icon name="home" size={20} color="white"/>
        </Button>
        <Button
          onPress={() => this.undo()}
          isDisabled={aucunPrecedent}
          style={[Boutons.deCommande, {width: 60, height: 50, marginHorizontal: 30}]}
          textStyle={[Textes.bouton, {fontSize: 12}]}>
          <Icon name="undo" size={20} color="white"/>
        </Button>
      </View>
    )
  }

  nouvellePartie() {
    const {dispatch} = this.props
    dispatch(nouvellePartie())
  }

  undo() {
    const {dispatch} = this.props
    dispatch({type:'UNDO'})
  }
}

const mapStateToProps = (state) => ({
  aucunPrecedent: state.cricket.precedents[state.cricket.precedents.length-1].phase === 'INSCRIPTION'
})

export default connect(mapStateToProps)(CommandesDeLaPartie)