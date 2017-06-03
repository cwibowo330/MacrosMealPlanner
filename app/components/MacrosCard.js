import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Colors from './Colors';
import StyledText from './StyledText';

const cardStyles = StyleSheet.create({
  info: {
    backgroundColor: Colors.red,
    width:           '50px',
    height:          '55px',
    position:        'absolute',
    top:             '10px',
    right:           '0',
    zIndex:          '10',
    color:           '#fff',
    textAlign:       'right',
    fontSize:        '11px',
  },
  image: {
    width:     '200px',
    height:    '200px',
    marginTop: '10px',
  },
});


const MacrosCard = () => (
  <View style={{ width: '200px' }}>
    <View style={cardStyles.info}>
      <StyledText type="macroInfo">P: 120G</StyledText>
      <StyledText type="macroInfo">F: 120G</StyledText>
      <StyledText type="macroInfo">C: 120G</StyledText>
    </View>
    <Image style={cardStyles.image} source={{ uri: 'http://www.mansfieldgolfclub.com.au/wp-content/uploads/2016/05/steak-2-200x200.jpg' }} />
    <StyledText type="macroDesc">Macro Description</StyledText>
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <StyledText type="count">-</StyledText>
      <StyledText type="countNum">0</StyledText>
      <StyledText type="count">+</StyledText>
    </View>
  </View>
);

export default MacrosCard;
