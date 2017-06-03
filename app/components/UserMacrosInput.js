import React from 'react';
import { View } from 'react-native';
import StyledText from './StyledText';
import StyledInput from './StyledInput';


const UserMacrosInput = props => (
  <View style={{ flex: '1', alignItems: 'center', marginTop: '10px', width: '200px' }} >
    <StyledText type="macrosInfoSubtitle">{props.title} - {props.grams}G</StyledText>
    <StyledInput type="userInput" />
  </View>
);

// UserMacrosInput.propTypes = {
//     props.title: PropTypes.string.isRequired,
//     props.grams: PropTypes.number.isRequired,
// };

export default UserMacrosInput;
