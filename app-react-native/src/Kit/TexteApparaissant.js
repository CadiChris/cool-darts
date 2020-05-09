import React, {Component} from 'react';
import {Animated} from 'react-native';
import PropTypes from 'prop-types';

class TexteApparaissant extends Component {
  constructor(props) {
    super(props);
    const {departDuDecalage = 40} = props;
    this.state = {
      animations: {
        fade: new Animated.Value(0),
        decalage: new Animated.Value(departDuDecalage),
      },
    };
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.state.animations.decalage, {
        toValue: 0,
        duration: 100,
      }),
      Animated.timing(this.state.animations.fade, {toValue: 1, duration: 80}),
    ]).start();
  }

  render() {
    const {decalage, fade} = this.state.animations;
    const {style = [], children} = this.props;
    return (
      <Animated.Text style={[...style, {top: decalage, opacity: fade}]}>
        {children}
      </Animated.Text>
    );
  }
}

TexteApparaissant.propTypes = {
  departDuDecalage: PropTypes.number,
  style: PropTypes.array,
};

export default TexteApparaissant;
