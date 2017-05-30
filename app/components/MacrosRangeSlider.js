import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Colors from './Colors';

const rangeStyles = StyleSheet.create({
  wrap: {display: 'inline'},
  input: {
      border: '1px solid #333',
      padding: '5px',
      marginTop: '7px',
      textAlign: 'right',
      fontSize: '10px',
      display: 'block'
  },
  container: {display: 'inline-block', width: '30%', fontSize: '10px', marginTop: '30px'},
  grams: {paddingLeft: '10px'}
});

const MacrosRangeSlider = (props) => (
  <View style={rangeStyles.wrap}>
    <View style={rangeStyles.container}>
      <Text>{props.title}</Text>
      <Text style={rangeStyles.grams}>{props.grams}</Text>
      <TextInput style={rangeStyles.input}/>
    </View>
  </View>
);

export default MacrosRangeSlider;
