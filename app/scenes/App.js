import React, { Component } from 'react';
import { View } from 'react-native';
import StyledText from '../components/StyledText';

export default class App extends Component {
  render() {
    return (
      <View>
        <StyledText>
          Welcome to React Native Web!
        </StyledText>
        <StyledText>
          Welcome to React Native Web!
        </StyledText>
      </View>
    );
  }
}
