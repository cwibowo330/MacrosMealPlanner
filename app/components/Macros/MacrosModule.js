import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import StyledText from '../StyledText';
import Colors from '../Colors';

// const cardStyles = StyleSheet.create({
//   info: {
//     backgroundColor: Colors.red,
//     width:           50,
//     height:          55,
//     position:        'absolute',
//     top:             10,
//     right:           0,
//     zIndex:          10,
//   },
//   image: {
//     width:     200,
//     height:    200,
//     marginTop: 10,
//   },
// });

class MacrosModule extends React.Component {
  constructor(props) {
    super(props);
    console.log('MACROSMODULE::::', this.props);
    // Object.keys(this.props.data).map(k => console.log(this.props.data[k].name));
  }
  render() {
    // const macroCards = Object.keys(this.props.data)
    //   .map(key =>
    //     <View>
    //     <Image source={{uri: this.props.data[key].image}} style= {{ height:200, width: 200 }}/>
    //     <StyledText>{this.props.data[key].name}</StyledText>
    //     </View>);
    const macroCards = Object.keys(this.props.data)
      .map(key =>
        <View>
            <View>
            <StyledText type="macroInfo">P: {this.props.data[key].pgrams}</StyledText>
            <StyledText type="macroInfo">F: {this.props.data[key].fgrams}</StyledText>
            <StyledText type="macroInfo">C: {this.props.data[key].cgrams}</StyledText>
            </View>
            <Image
            source={{uri: this.props.data[key].image}} style= {{ height:200, width: 200 }}
            />
            <StyledText type="macroDesc">{this.props.data[key].name} - {this.props.data[key].amt}</StyledText>
            <View>
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
