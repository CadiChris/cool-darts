import React from 'react';
import {Image, Text, View} from 'react-native';
import {Textes} from '../styles';
import FadeInView from './FadeInView';

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      splashScreenActif: true,
    };
  }

  componentDidMount() {
    const {dureeDuSplash} = this.props;
    setTimeout(() => {
      this.setState({splashScreenActif: false});
    }, dureeDuSplash);
  }

  render() {
    const {splashScreenActif} = this.state;
    const {dureeDuSplash, children} = this.props;

    const splashScreen = (
      <FadeInView
        dureeDuFade={dureeDuSplash / 1.5}
        style={[{flex: 1, backgroundColor: 'rgb(58,127,144)'}]}>
        <View
          style={[
            {height: '75%', alignItems: 'center', justifyContent: 'center'},
          ]}>
          <Image
            source={require('../../assets/splashscreen.png')}
            style={{width: '66%'}}
            resizeMode="contain"
          />
          <Text
            style={[
              Textes.titre,
              {fontSize: 15, textAlign: 'center', color: 'white'},
            ]}>
            Développeurs de produits sur mesure
          </Text>
        </View>
      </FadeInView>
    );

    return splashScreenActif ? splashScreen : children;
  }
}

export default SplashScreen;
