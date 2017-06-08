import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserMealPlanInput from './UserMealPlanInput';
import LabeledInput from './LabeledInput';

const userStyles = StyleSheet.create({
  flexWrap: {
    display:        'flex',
    flexWrap:       'wrap',
    flexDirection:  'row',
    marginTop:      '20px',
    justifyContent: 'space-around',
  },
});

const UserInfo = () => (
  <View>
    <UserMealPlanInput />
    <View style={userStyles.flexWrap}>
      <LabeledInput textStyle="macrosInfoSubtitle" title="protein" grams="140" />
      <LabeledInput textStyle="macrosInfoSubtitle" title="fats" grams="120" />
      <LabeledInput textStyle="macrosInfoSubtitle" title="carbs" grams="40" />
    </View>
  </View>
);

export default UserInfo;
