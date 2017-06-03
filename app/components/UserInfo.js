import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MacrosRangeSlider from './MacrosRangeSlider';
import StyledText from './StyledText';

const userStyles = StyleSheet.create({
    flexWrap: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      marginTop: '20px',
      justifyContent: 'space-around',
    },
    input: {
          border: '1px solid #333',
          padding: '5px',
          marginTop: '7px',
          textAlign: 'left',
          marginRight: '20px',
      }
});

const UserInfo = () => (
  <View>
    <View style={userStyles.flexWrap}>
      <View style={{ flex: '1', marginLeft: '10px' }}>
        <StyledText type="title">Welcome <br />Name</StyledText>
      </View>
      <View style={{ flex: '2', marginLeft: '10px' }}>
        <StyledText type="infoSubtitle">Calories Per Day</StyledText>
        <TextInput style={userStyles.input} />
        <StyledText type="infoSubtitle">Days To Meal Plan</StyledText>
        <TextInput style={userStyles.input} />
      </View>
    </View>
    <View style={userStyles.flexWrap}>
      <MacrosRangeSlider title="protein" grams="140" />
      <MacrosRangeSlider title="fats" grams="120" />
      <MacrosRangeSlider title="carbs" grams="40" />
    </View>
  </View>
);

export default UserInfo;
