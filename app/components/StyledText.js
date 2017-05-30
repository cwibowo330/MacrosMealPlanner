import React, { PropTypes } from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from './Colors';

const baseStyle = {
    fontFamily: 'Arial',
    fontSize: '12px',
};

const styles = StyleSheet.create({
  standard: {
    ...baseStyle,
    color: Colors.black,
  },
  nav: {
    ...baseStyle,
    color: Colors.white,
    fontWeight: '600',
    textTransform: 'uppercase',
  }
});

const StyledText = ({ children, type, onPress }) => (
  <Text
    style={styles[type]}
    onPress={onPress}
  >
    {children}
  </Text>
);

StyledText.defaultProps = {
  onPress: null,
  type: 'standard',
};

StyledText.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['nav', 'standard']),
  onPress: PropTypes.func,
};

export default StyledText;
