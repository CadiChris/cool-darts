import React from 'react'
import { View, Modal, Text } from 'react-native'
import Button from 'apsl-react-native-button'
import { ConfirmDialog } from 'react-native-simple-dialogs'

export default class BoutonAvecConfirmation extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      confirmationVisible: false
    }
  }

  render() {
    const { titre, message, apresConfirmation } = this.props
    const { confirmationVisible } = this.state

    return (
        <View>
          <Button {...this.props}
                  onPress={() => this.demanderConfirmation()}>
            {this.props.children}
          </Button>

          <ConfirmDialog
              title={titre}
              message={message}
              visible={confirmationVisible}
              onTouchOutside={() => this.masquerConfirmation()}
              positiveButton={{
                title: "OUI",
                onPress: () => apresConfirmation()
              }}
              negativeButton={{
                title: "NON",
                onPress: () => this.masquerConfirmation()
              }}
          />
        </View>
    )
  }

  demanderConfirmation() {
    this.setState({ confirmationVisible: true })
  }

  masquerConfirmation() {
    this.setState({ confirmationVisible: false })
  }
}