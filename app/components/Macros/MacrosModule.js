import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet } from 'react-native';
import StyledText from '../_styles/StyledText';
import Colors from '../_styles/Colors';

const cardStyles = StyleSheet.create({
  info: {
    backgroundColor: Colors.grey,
    width:           60,
    height:          55,
    position:        'absolute',
    top:             0,
    right:           0,
    zIndex:          10,
    color:           Colors.white,
  },
  image: {
    width:  200,
    height: 200,
  },
});

class MacrosModule extends React.Component {
  constructor(props) {
    super(props);
    // console.log('MACROSMODULE::::', this.props);
  }
  render() {
    const macroCards = Object.keys(this.props.data)
      .map(key =>
        <View>
          <View style={cardStyles.info}>
            <StyledText type="macroInfo"> P: {this.props.data[key].pgrams}</StyledText>
            <StyledText type="macroInfo"> F: {this.props.data[key].fgrams}</StyledText>
            <StyledText type="macroInfo"> C: {this.props.data[key].cgrams}</StyledText>
          </View>
          <Image
            style={cardStyles.image}
            source={{ uri: this.props.data[key].image }}
          />
          <StyledText type="macroDesc">{this.props.data[key].name} - {this.props.data[key].amt}</StyledText>
          <View style={{
            display:        'flex',
            flexWrap:       'wrap',
            flexDirection:  'row',
            justifyContent: 'center',
          }}>
            <StyledText type="count">-</StyledText>
            <StyledText type="countNum">{this.props.data[key].count}</StyledText>
            <StyledText type="count">+</StyledText>
          </View>
        </View>);

    return (
      <View style={{ marginTop: '10px' }}>
        <StyledText type="macrosTitle">{this.props.title}</StyledText>
        <View
          style={{
            display:        'flex',
            flexWrap:       'wrap',
            flexDirection:  'row',
            justifyContent: 'space-around',
          }}
        >
          {macroCards}
        </View>
      </View>
    );
  }
}
MacrosModule.propTypes = {
  title: PropTypes.string.isRequired,
  data:  PropTypes.object.isRequired,
};

export default MacrosModule;
