import React from "react";
import PropTypes from "prop-types";
import { Animated } from "react-native";

class ViewQuiDecale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animations: {
        decalage: new Animated.Value(1000)
      }
    };
  }

  componentDidMount() {
    const { dureeDuDecalage } = this.props;
    Animated.timing(this.state.animations.decalage, {
      toValue: 0,
      duration: dureeDuDecalage
    }).start();
  }

  render() {
    const { decalage } = this.state.animations;
    const { coteDeDepart, style = [], children } = this.props;

    return (
      <Animated.View style={[...style, { [coteDeDepart]: decalage }]}>
        {children}
      </Animated.View>
    );
  }
}

ViewQuiDecale.propTypes = {
  dureeDuDecalage: PropTypes.number.isRequired,
  coteDeDepart: PropTypes.oneOf(["right", "left"]).isRequired,
  style: PropTypes.array
};

export default ViewQuiDecale;
