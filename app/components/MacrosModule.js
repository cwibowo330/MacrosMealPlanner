import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Colors from './Colors';
import MacrosCard from './MacrosCard';
const moduleStyles = StyleSheet.create({
  moduleWrap: {
    display: 'inline', marginTop: '30px'
  },
  moduleTitle: {
    display: 'block', marginLeft: '10px', textTransform: 'uppercase', fontSize: '14px', fontWeight: '600'
  },
  cardWrap: {
    display: 'inline', width: '100%'
  }
});


const MacrosModule = (props) => (
  <View style={moduleStyles.moduleWrap}>
    <Text style={moduleStyles.moduleTitle}>{props.title}</Text>
      <View style={moduleStyles.cardWrap}>
        <MacrosCard />
        <MacrosCard />
        <MacrosCard />
        <MacrosCard />
      </View>
  </View>
);

export default MacrosModule;
