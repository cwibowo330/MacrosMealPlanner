import React, { PropTypes } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Colors from './Colors';

const baseStyle = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: Colors.grey,
  marginTop:   '10px',
  padding:     '5px',
  color:       Colors.grey,
  fontSize:    '10px',
  fontWeight:  'bold',
};


const styles = StyleSheet.create({
  standard: {
    ...baseStyle,
  },
  userInput: {
    ...baseStyle,
    textAlign:   'left',
    marginRight: '20px',
  },
});

const StyledInput = ({ children, type, onPress }) => (
  <TextInput
    style={styles[type]}
    onPress={onPress}
  >
    {children}
  </TextInput>
);

StyledInput.defaultProps = {
  onPress: null,
  type:    'standard',
};

StyledInput.propTypes = {
  children: PropTypes.string.isRequired,
  type:     PropTypes.oneOf([
    'userInput',
    'standard',
  ]),
  onPress: PropTypes.func,
};

export default StyledInput;
