import React from 'react';
import { View, StyleSheet } from 'react-native';
import StyledText from './StyledText';
import StyledInput from './StyledInput';

const UserMealPlan = StyleSheet.create({
  flexWrap: {
    display:        'flex',
    flexWrap:       'wrap',
    flexDirection:  'row',
    marginTop:      '20px',
    justifyContent: 'space-around',
  },
});

const UserMealPlanInput = () => (
  <View style={UserMealPlan.flexWrap}>
    <View style={{ flex: '1', marginLeft: '10px' }}>
      <StyledText type="title">Welcome <br />Name</StyledText>
    </View>
    <View style={{ flex: '2', marginLeft: '10px' }}>
      <StyledText type="infoSubtitle">Calories Per Day</StyledText>
      <StyledInput type="userInput" />
      <StyledText type="infoSubtitle">Days To Meal Plan</StyledText>
      <StyledInput type="userInput" />
    </View>
  </View>
);

export default UserMealPlanInput;
