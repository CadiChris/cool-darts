import React from 'react';
import PropTypes from 'prop-types';
import {Animated} from 'react-native';

class FadeInView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animations: {
        fade: new Animated.Value(0),
      },
    };
  }

  componentDidMount() {
    const {dureeDuFade} = this.props;
    Animated.timing(this.state.animations.fade, {
      toValue: 1,
      duration: dureeDuFade,
    }).start();
  }

  render() {
    const {fade} = this.state.animations;
    const {style = [], children} = this.props;
    return (
      <Animated.View style={[...style, {opacity: fade}]}>
        {children}
      </Animated.View>
    );
  }
}

FadeInView.propTypes = {
  dureeDuFade: PropTypes.number.isRequired,
  style: PropTypes.array,
};

export default FadeInView;
