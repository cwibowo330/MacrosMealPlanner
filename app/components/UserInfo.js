import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MacrosRangeSlider from './MacrosRangeSlider';
import StyledText from './StyledText';

const userStyles = StyleSheet.create({
    infoWrap: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      marginTop: '20px',
    },
    input: {
          border: '1px solid #333',
          padding: '5px',
          marginTop: '7px',
          textAlign: 'right',
          width: '250px',
      }
});

const UserInfo = () => (
  <View>
    <View style={userStyles.infoWrap}>
      <View style={{ flex: '1 1 auto', marginLeft: '10px' }}>
        <StyledText type="title">Welcome <br />Name</StyledText>
      </View>
      <View style={{ flex: '1 2 auto', marginLeft: '10px' }}>
        <StyledText type="infoSubtitle">Calories Per Day</StyledText>
        <TextInput style={userStyles.input} />
        <StyledText type="infoSubtitle">Days To Meal Plan</StyledText>
        <TextInput style={userStyles.input} />
      </View>
    </View>
    <MacrosRangeSlider title="protein" grams="140" />
    <MacrosRangeSlider title="fats" grams="120" />
    <MacrosRangeSlider title="carbs" grams="40" />
  </View>
);

export default UserInfo;
