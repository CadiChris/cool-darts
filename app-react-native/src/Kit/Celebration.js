import React, {Component} from 'react';
import Confetti from 'react-native-confetti';

class Celebration extends Component {
  componentDidMount() {
    if (this._confettiView) {
      this._confettiView.startConfetti();
    }
  }

  componentWillUnmount() {
    if (this._confettiView) {
      this._confettiView.stopConfetti();
    }
  }

  render() {
    return (
      <Confetti
        confettiCount={20}
        duration={1500}
        timeout={10}
        ref={node => (this._confettiView = node)}
      />
    );
  }
}

export default Celebration;
