import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import Colors from './Colors';

const baseStyle = {
  fontFamily:    'Arial',
  fontSize:      14,
  textTransform: 'uppercase',
};

const subTitleBase = {
  fontSize:      11,
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
    flex:       1,
    width:      200,
    flexShrink: 1,
    padding:    5,
  },
  title: {
    ...baseStyle,
    marginTop:    20,
    fontSize:     35,
    color:        Colors.grey,
    fontWeight:   '600',
    paddingRight: 20,
    flexShrink:   1,
  },
  infoSubtitle: {
    ...subTitleBase,
    marginTop: 10,
  },
  macrosInfoSubtitle: {
    ...subTitleBase,
    textAlign: 'center',
  },
  macrosTitle: {
    ...baseStyle,
    marginTop:      20,
    fontSize:       24,
    fontWeight:     '600',
    display:        'flex',
    flex:           1,
    justifyContent: 'center',
  },
  count: {
    borderRadius:    13,
    height:          26,
    width:           26,
    backgroundColor: Colors.grey,
    color:           Colors.white,
    textAlign:       'center',
    fontSize:        21,
  },
  countNum: {
    paddingLeft:  10,
    paddingRight: 10,
    paddingTop:   5,
  },
  macroDesc: {
    display:       'block',
    fontSize:      12,
    padding:       10,
    textTransform: 'uppercase',
    textAlign:     'center',
  },
  macroInfo: {
    paddingTop:   3,
    paddingRight: 3,
  },
});

const StyledText = ({ children, type, onChange }) => (
  <Text
    style={styles[type]}
    onChange={onChange}
  >
    {children}
  </Text>
);

StyledText.defaultProps = {
  onChange: null,
  type:     'standard',
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
    'macroInfo',
    'macrosTitle',
  ]),
  onChange: PropTypes.func,
};

export default StyledText;
