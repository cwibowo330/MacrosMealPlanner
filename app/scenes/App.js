import React, { Component } from 'react';
import { View } from 'react-native';
import Nav from '../components/Nav';
import UserInfo from '../components/UserInfo';
import MacrosModule from '../components/MacrosModule';

export default class App extends Component {
  render() {
    return (
      <View>
        <Nav />
        <UserInfo />
        <MacrosModule title="proteins"/>
        <MacrosModule title="fats"/>
        <MacrosModule title="carbs"/>
      </View>
    );
  }
}
