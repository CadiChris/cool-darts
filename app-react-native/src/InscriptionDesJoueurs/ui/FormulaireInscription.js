import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'apsl-react-native-button';
import {TextInput, View} from 'react-native';
import {Boutons, FontSizes, Textes} from '../../styles';
import LocalizedStrings from 'react-native-localization';
import {scale} from 'react-native-size-matters';

class FormulaireInscription extends Component {
  state = {
    joueur: '',
  };

  inscrire() {
    const {joueur} = this.state;
    if (joueur === '') return;

    this.props.onSubmit(joueur);
    this.setState({joueur: ''});
  }

  render() {
    const {joueur} = this.state;
    return (
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TextInput
          value={joueur}
          onChangeText={text => this.setState({joueur: text})}
          onSubmitEditing={() => this.inscrire()}
          style={[
            {flexGrow: 1, color: 'white', fontSize: FontSizes.standard},
            Textes.basique,
          ]}
          underlineColorAndroid="transparent"
          placeholderTextColor="rgba(255,255,255,.7)"
          placeholder={textes.joueur}
          autoCapitalize="words"
          autoCorrect={false}
        />

        <Button
          onPress={() => this.inscrire()}
          style={[{width: scale(80), alignSelf: 'center'}, Boutons.secondaire]}
          textStyle={Textes.bouton}
          isDisabled={joueur === ''}>
          {textes.inscrire}
        </Button>
      </View>
    );
  }
}

FormulaireInscription.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const textes = new LocalizedStrings({
  en: {
    joueur: 'Player...',
    inscrire: 'Add',
  },
  fr: {
    joueur: 'Joueur...',
    inscrire: 'Inscrire',
  },
});

export default FormulaireInscription;
