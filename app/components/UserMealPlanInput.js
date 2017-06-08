import React from 'react';
import { View, StyleSheet } from 'react-native';
import StyledText from './StyledText';
import LabeledInput from './LabeledInput';

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
      <LabeledInput textStyle="infoSubtitle" type="userInput" title="Calories Per Day" />
      <LabeledInput textStyle="infoSubtitle" type="userInput" title="Days of Meal Planning" />
    </View>
  </View>
);

export default UserMealPlanInput;
