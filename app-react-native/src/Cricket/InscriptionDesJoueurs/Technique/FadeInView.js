import React from 'react'
import { Text, View, Animated } from 'react-native'

class FadeInView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      animations: {
        fade: new Animated.Value(0)
      }
    }
  }

  componentDidMount() {
    const {dureeDuFade} = this.props
    Animated.timing(
      this.state.animations.fade,
      {
        toValue: 1,
        duration: dureeDuFade,
      }
    ).start();
  }

  render() {
    const {fade} = this.state.animations
    return (
      <Animated.View style={[[...this.props.style], {opacity: fade}]}>
        {this.props.children}
      </Animated.View>
    )
  }
}

export default FadeInView