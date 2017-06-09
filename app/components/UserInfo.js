import React from 'react';
import { View, StyleSheet } from 'react-native';
import StyledText from './StyledText';
import LabeledInput from './LabeledInput';

const userInfoStyles = StyleSheet.create({
  flexWrap: {
    display:        'flex',
    flexWrap:       'wrap',
    flexDirection:  'row',
    marginTop:      '20px',
    justifyContent: 'space-around',
  },
});

const UserInfo = () => (
  <View onChange={e => console.log(e.target.value)}>
    <View style={userInfoStyles.flexWrap}>
      <View style={{ flex: '1', marginLeft: '10px' }}>
        <StyledText type="title">Welcome <br />Name</StyledText>
      </View>
      <View style={{ flex: '2', marginLeft: '10px' }}>
        <LabeledInput name="caloriesAmount" textStyle="infoSubtitle" type="userInput" title="Calories Per Day" />
        <LabeledInput name="mealPlanningDays" textStyle="infoSubtitle" type="userInput" title="Days of Meal Planning" />
      </View>
    </View>
    <View style={userInfoStyles.flexWrap}>
      <LabeledInput name="proteinsPercent" textStyle="macrosInfoSubtitle" title="protein" grams="140" />
      <LabeledInput name="fatsPercent" textStyle="macrosInfoSubtitle" title="fats" grams="120" />
      <LabeledInput name="carbsPercent" textStyle="macrosInfoSubtitle" title="carbs" grams="40" />
    </View>
  </View>
);

export default UserInfo;
