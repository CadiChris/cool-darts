import React from "react";
import Orientation from "react-native-orientation";

export default class Portrait extends React.Component {
  componentDidMount() {
    Orientation.lockToPortrait();
  }

  componentWillUnmount() {
    Orientation.unlockAllOrientations();
  }

  render() {
    return this.props.children;
  }
}
