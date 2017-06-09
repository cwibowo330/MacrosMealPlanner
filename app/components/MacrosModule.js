import React, { PropTypes } from 'react';
import { View } from 'react-native';
import MacrosCard from './MacrosCard';
import StyledText from './StyledText';


const MacrosModule = props => (
  <View style={{ marginTop: '10px' }}>
    <StyledText type="macrosTitle">{`${props.title} 0%`}</StyledText>
    <View
      style={{
        display:        'flex',
        flexWrap:       'wrap',
        flexDirection:  'row',
        justifyContent: 'space-around',
      }}
    >
      <MacrosCard />
      <MacrosCard />
      <MacrosCard />
      <MacrosCard />
    </View>
  </View>
);

MacrosModule.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MacrosModule;
