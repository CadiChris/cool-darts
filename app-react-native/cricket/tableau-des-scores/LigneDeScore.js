import React from 'react'
import { Text, View } from 'react-native'

import { Col, Row } from "react-native-easy-grid";

export default () => {
  return (
    <Row>
      <Col style={{backgroundColor: 'blue', justifyContent:'center' }} size={3}>
        <Text>Romain</Text>
      </Col>

      {['X', '', '', 'XXX', '', '', 'XX'].map((touches, index) => (
          <Col style={{backgroundColor: 'red', borderColor: 'black', borderWidth:1, alignItems:'center', justifyContent:'center'}} key={index}>
            <Text style={{textAlign: 'center'}}>{touches}</Text>
          </Col>
      ))}
    </Row>
  )
}
