import React from 'react';
import { Text } from 'react-native';
import Colors from './Colors';

const StyledText = (props) => (
  <Text
    style={{
      fontFamily: '',
      fontSize: '',
      color: Colors.black,
    }}
  >
    {props.children}
  </Text>
);

export default StyledText;
