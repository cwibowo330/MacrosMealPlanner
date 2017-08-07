import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Colors from '../_styles/Colors';
import StyledText from '../_styles/StyledText';

const cardStyles = StyleSheet.create({
  info: {
    backgroundColor: Colors.red,
    width:           50,
    height:          55,
    position:        'absolute',
    top:             10,
    right:           0,
    zIndex:          10,
  },
  image: {
    width:     200,
    height:    200,
    marginTop: 10,
  },
});

const uri = 'http://www.mansfieldgolfclub.com.au/wp-content/' +
  'uploads/2016/05/steak-2-200x200.jpg';

const MacrosCard = () => (
  <View style={{ width: 200 }}>
    <View style={cardStyles.info}>
      <StyledText type="macroInfo">P: 120G</StyledText>
      <StyledText type="macroInfo">F: 120G</StyledText>
      <StyledText type="macroInfo">C: 120G</StyledText>
    </View>
    <Image
      style={cardStyles.image}
      source={{ uri }}
    />
    <StyledText type="macroDesc">Macro Description</StyledText>
    <View
      style={{
        display:        'flex',
        flexDirection:  'row',
        justifyContent: 'center',
      }}
    >
      <StyledText type="count">-</StyledText>
      <StyledText type="countNum">0</StyledText>
      <StyledText type="count">+</StyledText>
    </View>
  </View>
);

export default MacrosCard;
