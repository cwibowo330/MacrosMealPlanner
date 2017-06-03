import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import StyledText from './StyledText';

const rangeStyles = StyleSheet.create({
  input: {
      border: '1px solid #333',
      padding: '5px',
      marginTop: '7px',
      textAlign: 'center',
      fontSize: '10px',
      width: '200px',
  },
});

const MacrosRangeSlider = (props) => (
  <View style={{ flex: '1', alignItems: 'center', marginTop: '10px', width: '200px' }}>
      <StyledText type="macrosInfoSubtitle">{props.title} - {props.grams}G</StyledText>
      <TextInput style={rangeStyles.input}/>
  </View>
);


export default MacrosRangeSlider;
