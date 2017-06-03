import React, { PropTypes } from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from './Colors';

const baseStyle = {
  fontFamily:    'Arial',
  fontSize:      '14px',
  textTransform: 'uppercase',
};

const subTitleBase = {
  fontSize:      '11px',
  textTransform: 'uppercase',
  fontWeight:    '600',
};

const styles = StyleSheet.create({
  standard: {
    ...baseStyle,
    color: Colors.black,
  },
  nav: {
    ...baseStyle,
    color:      Colors.white,
    fontWeight: '600',
    flex:       '1',
    width:      '200px',
    flexShrink: '1',
    padding:    '5px',
  },
  title: {
    ...baseStyle,
    verticalAlign: 'top',
    marginTop:     '20px',
    fontSize:      '35px',
    color:         'Colors.grey',
    fontWeight:    '600',
    paddingRight:  '20px',
    flexShrink:    '1',
  },
  infoSubtitle: {
    ...subTitleBase,
    marginTop: '10px',
  },
  macrosInfoSubtitle: {
    ...subTitleBase,
  },
  macrosTitle: {
    ...baseStyle,
    marginTop:      '20px',
    fontSize:       '24px',
    fontWeight:     '600',
    display:        'flex',
    flex:           '1',
    justifyContent: 'center',
  },
  count: {
    borderRadius:    '13px',
    height:          '26px',
    width:           '26px',
    backgroundColor: '#333',
    color:           '#fff',
    textAlign:       'center',
    fontSize:        '21px',
  },
  countNum: {
    paddingLeft:  '10px',
    paddingRight: '10px',
    paddingTop:   '5px',
  },
  macroDesc: {
    display:       'block',
    fontSize:      '12px',
    padding:       '10px',
    textTransform: 'uppercase',
    textAlign:     'center',
  },
  macroInfo: {
    paddingTop:   '3px',
    paddingRight: '3px',
  },
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
  type:    'standard',
};

StyledText.propTypes = {
  children: PropTypes.string.isRequired,
  type:     PropTypes.oneOf([
    'nav',
    'standard',
    'title',
    'infoSubtitle',
    'macrosInfoSubtitle',
    'count',
    'countNum',
    'macroDesc',
  ]),
  onPress: PropTypes.func,
};

export default StyledText;
