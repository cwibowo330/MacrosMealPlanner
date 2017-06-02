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
    flex: 1,
    width: '200px',
    flexShrink: '1',
    padding: '5px',
    textTransform: 'uppercase',
  },
  title: {
      display: 'inline-block',
      verticalAlign : 'top',
      marginTop: '20px',
      textTransform: 'uppercase',
      fontSize: '25px',
      color: 'Colors.grey',
      fontWeight: '600',
      paddingRight: '20px',
      flexShrink: '1',
      flex: '1',
  },
  infoSubtitle: {
      fontFamily: 'Arial',
      fontSize: '11px',
      textTransform: 'uppercase',
      fontWeight: '500',
      flex: '1',
      marginTop: '10px',
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
  type: PropTypes.oneOf(['nav', 'standard','title','infoSubtitle']),
  onPress: PropTypes.func,
};

export default StyledText;
