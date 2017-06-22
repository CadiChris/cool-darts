import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Col, Row } from "react-native-easy-grid";

export default () => (
  <Row style={{borderBottomWidth: 1, alignItems:'center'}}>
    <Col style={{backgroundColor: 'blue'}} size={3}></Col>
    {[15,16,17,18,19,20,'Bull'].map(chiffre => (
      <Col key={chiffre}>
        <Text style={{textAlign: 'center'}}>{chiffre}</Text>
      </Col>
    ))}
  </Row>
)