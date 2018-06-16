import React from "react";
import LocalizedStrings from "react-native-localization";
import { View, Modal, Text } from "react-native";
import Button from "apsl-react-native-button";
import { ConfirmDialog } from "react-native-simple-dialogs";

export default class BoutonAvecConfirmation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmationVisible: false
    };
  }

  render() {
    const { titre, message, apresConfirmation } = this.props;
    const { confirmationVisible } = this.state;

    return (
      <View>
        <Button {...this.props} onPress={() => this.demanderConfirmation()}>
          {this.props.children}
        </Button>

        <ConfirmDialog
          title={titre}
          message={message}
          visible={confirmationVisible}
          onTouchOutside={() => this.masquerConfirmation()}
          positiveButton={{
            title: textes.oui,
            onPress: () => apresConfirmation()
          }}
          negativeButton={{
            title: textes.non,
            onPress: () => this.masquerConfirmation()
          }}
        />
      </View>
    );
  }

  demanderConfirmation() {
    this.setState({ confirmationVisible: true });
  }

  masquerConfirmation() {
    this.setState({ confirmationVisible: false });
  }
}

const textes = new LocalizedStrings({
  en: {
    oui: "YES",
    non: "NO"
  },
  fr: {
    oui: "OUI",
    non: "NON"
  }
});
