import React, { PropTypes } from 'react';
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

const LabeledInput = ({ title, grams, textStyle, children, type, onPress }) => (
  <View>
    <StyledText type={textStyle}>{title} {grams}</StyledText>
    <TextInput
      style={styles[type]}
      onPress={onPress}
    >
    </TextInput>
  </View>
);

LabeledInput.defaultProps = {
  onPress: null,
  type:    'standard',
};

LabeledInput.propTypes = {
  children:  PropTypes.string.isRequired,
  title:     PropTypes.string.isRequired,
  grams:     PropTypes.string.isRequired,
  textStyle: PropTypes.string.isRequired,
  type:      PropTypes.oneOf([
    'userInput',
    'standard',
  ]),
  onPress: PropTypes.func,
};

export default LabeledInput;
