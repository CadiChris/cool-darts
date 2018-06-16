import React from "react";
import { connect } from "react-redux";
import { Animated } from "react-native";

class TexteApparaissant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animations: {
        fade: new Animated.Value(0),
        decalage: new Animated.Value(40)
      }
    };
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.state.animations.decalage, {
        toValue: 0,
        duration: 100
      }),
      Animated.timing(this.state.animations.fade, { toValue: 1, duration: 80 })
    ]).start();
  }

  render() {
    const { decalage, fade } = this.state.animations;
    return (
      <Animated.Text
        style={
          this.props.style
            ? [[...this.props.style], { top: decalage, opacity: fade }]
            : {
                top: decalage,
                opacity: fade
              }
        }
      >
        {this.props.children}
      </Animated.Text>
    );
  }
}

export default TexteApparaissant;
