import React from 'react';
import {Dimensions, Text, TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';
import SideSwipe from 'react-native-sideswipe';
import Icon from 'react-native-vector-icons/FontAwesome';
import LocalizedStrings from 'react-native-localization';
import {verticalScale} from 'react-native-size-matters';
import {FontSizes, Textes} from '../../styles';
import {elementPrecedent, elementSuivant} from '../../utils/tableau';

const ChoixDuJeu = ({jeuxDisponibles, jeuChoisi, onChangementDeJeu}) => (
  <View style={{marginBottom: 25}}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableHighlight
        style={{paddingVertical: 10, paddingHorizontal: 10}}
        onPress={() =>
          onChangementDeJeu(elementPrecedent(jeuChoisi, jeuxDisponibles))
        }>
        <Icon
          name="angle-double-left"
          size={30}
          style={{color: 'rgba(255,255,255,0.4)'}}
        />
      </TouchableHighlight>
      <SideSwipe
        data={jeuxDisponibles}
        itemWidth={Dimensions.get('window').width * 0.4}
        style={{width: '50%', height: verticalScale(50)}}
        index={jeuxDisponibles.indexOf(jeuChoisi)}
        onIndexChange={index => onChangementDeJeu(jeuxDisponibles[index])}
        renderItem={({item: jeu}) => (
          <View
            style={{
              width: Dimensions.get('window').width * 0.4,
              justifyContent: 'center',
            }}>
            <Text
              style={[
                Textes.basique,
                {fontSize: FontSizes.standard, textAlign: 'center'},
              ]}>
              {textes[jeu]}
            </Text>
          </View>
        )}
      />
      <TouchableHighlight
        onPress={() =>
          onChangementDeJeu(elementSuivant(jeuChoisi, jeuxDisponibles))
        }
        style={{paddingVertical: 10, paddingHorizontal: 10}}>
        <Icon
          name="angle-double-right"
          size={30}
          style={{color: 'rgba(255,255,255,0.4)'}}
        />
      </TouchableHighlight>
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: verticalScale(12),
      }}>
      {jeuxDisponibles.map(j => (
        <Icon
          key={j}
          name="circle"
          size={10}
          style={{
            marginHorizontal: 5,
            color: j === jeuChoisi ? 'white' : 'rgba(255,255,255,0.3)',
          }}
        />
      ))}
    </View>
  </View>
);

ChoixDuJeu.propTypes = {
  jeuxDisponibles: PropTypes.array.isRequired,
  jeuChoisi: PropTypes.string.isRequired,
  onChangementDeJeu: PropTypes.func.isRequired,
};

const textes = new LocalizedStrings({
  en: {
    cricket: 'Cut-Throat\nCricket',
    burma: 'Burma',
  },
  fr: {
    cricket: 'Cricket\nCut-Throat',
    burma: 'Burma',
  },
});

export default ChoixDuJeu;
