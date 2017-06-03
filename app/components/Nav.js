import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from './Colors';
import StyledText from './StyledText';

// https://facebook.github.io/react-native/releases/0.45/docs/flexbox.html
const navStyles = StyleSheet.create({
  wrap: {
    backgroundColor: Colors.grey,
    display:         'flex',
    flexWrap:        'wrap',
    padding:         '10px',
    flexDirection:   'row',
  },
});

const Nav = () => (
  <View style={navStyles.wrap}>
    <View style={{ flex: 10 }}>
      <StyledText type="nav" onPress={() => console.log('meal planner')}>
       Macro Meal Planner
     </StyledText>
    </View>
    <View style={{ flex: 10 }}>
      <StyledText type="nav" onPress={() => console.log('groceries')}>
       Groceries
     </StyledText>
    </View>
    <View style={{ flex: 1 }}>
      <StyledText type="nav" onPress={() => console.log('logout')}>
       Log Out
     </StyledText>
    </View>
  </View>

);

export default Nav;
