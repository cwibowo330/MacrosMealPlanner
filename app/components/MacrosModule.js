import React from 'react';
import { View, TextInput } from 'react-native';
import Colors from './Colors';
import MacrosCard from './MacrosCard';
import StyledText from './StyledText';


const MacrosModule = (props) => (
  <View style={{ marginTop: '10px' }}>
    <StyledText type="macrosTitle">{props.title}</StyledText>
      <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around' }}>
        <MacrosCard />
        <MacrosCard />
        <MacrosCard />
        <MacrosCard />
      </View>
  </View>
);

export default MacrosModule;
