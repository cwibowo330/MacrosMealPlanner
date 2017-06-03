import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserMacrosInput from './UserMacrosInput';
import UserMealPlanInput from './UserMealPlanInput';

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
      <UserMacrosInput title="protein" grams="140" />
      <UserMacrosInput title="fats" grams="120" />
      <UserMacrosInput title="carbs" grams="40" />
    </View>
  </View>
);

export default UserInfo;
