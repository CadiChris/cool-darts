// https://github.com/xotahal/react-native-motion/blob/master/src/AnimatedNumber.js
import React from "react";
import { Animated, Easing } from "react-native";
import PropTypes from "prop-types";

class AnimatedNumber extends React.PureComponent {
  constructor(props) {
    super(props);

    const animatedValue = new Animated.Value(props.value);
    animatedValue.addListener(this.onValueChanged);

    this.state = {
      animatedValue,
      value: props.value
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.move(nextProps);
    }
  }
  onValueChanged = e => {
    this.setState({
      value: e.value
    });
  };
  move = props => {
    const { value, type, easing, ...rest } = props;

    Animated[type](this.state.animatedValue, {
      toValue: value,
      easing,
      ...rest
    }).start();
  };
  render() {
    const { children } = this.props;
    const { value } = this.state;

    return children(value);
  }
}

AnimatedNumber.propTypes = {
  value: PropTypes.number,
  type: PropTypes.string,
  children: PropTypes.func.isRequired,
  easing: PropTypes.func,
  duration: PropTypes.number
};
AnimatedNumber.defaultProps = {
  type: "timing",
  easing: Easing.linear,
  duration: 750
};

export default AnimatedNumber;
