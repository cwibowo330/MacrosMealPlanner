import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet } from 'react-native';
import Colors from './Colors';
import StyledText from './StyledText';

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

const LabeledInput = ({ value, title, textStyle, type, onChange }) => (
  <View>
    <StyledText type={textStyle}>{title}</StyledText>
    <TextInput
      value={value}
      style={styles[type]}
      onChange={onChange}
    />
  </View>
);

LabeledInput.defaultProps = {
  onChange: null,
  type:     'standard',
  value:    '',
};

LabeledInput.propTypes = {
  title:     PropTypes.string.isRequired,
  textStyle: PropTypes.string.isRequired,
  value:     PropTypes.string,
  type:      PropTypes.oneOf([
    'userInput',
    'standard',
  ]),
  onChange: PropTypes.func,
};

export default LabeledInput;
