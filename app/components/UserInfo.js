import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import MacrosRangeSlider from './MacrosRangeSlider';

const userStyles = StyleSheet.create({
  wrap: {
      fontFamily: 'Arial',
      fontSize: '14px',
      textTransform: 'uppercase',
      width: '100%',
      display: 'inline',
      padding: '10px',
      fontWeight: '500'
    },
    welcome: {
      display: 'inline-block',
      verticalAlign : 'top',
      width: '40%',
      fontSize: '20px',
      color: 'Colors.grey',
      fontWeight: '600',
      paddingRight: '20px'
    },
    dataWrap: {
      display: 'inline-block',
      verticalAlign : 'top',
      width: '30%',
      fontSize: '10px'
    },
    input: {
          border: '1px solid #333',
          padding: '5px',
          marginTop: '7px',
          textAlign: 'right',
      }
});

const UserInfo = () => (
  <View style={userStyles.wrap}>
    <View style={userStyles.welcome}>
      <Text>Welcome Name</Text>
    </View>
    <View style={userStyles.dataWrap}>
      <Text>Calories Per Day</Text>
      <TextInput style={userStyles.input} />
    </View>
    <View style={userStyles.dataWrap}>
      <Text>Days To Meal Plan</Text>
      <TextInput style={userStyles.input} />
    </View>
    <MacrosRangeSlider title="protein" grams="140" />
    <MacrosRangeSlider title="fats" grams="120" />
    <MacrosRangeSlider title="carbs" grams="40" />
  </View>
);

export default UserInfo;
