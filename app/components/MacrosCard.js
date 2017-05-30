import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Colors from './Colors';

const cardStyles = StyleSheet.create({
  wrap: {
    display: 'inline-block', width: '200px', marginLeft: '10px', position: 'relative'
  },
  info: {
    backgroundColor: '#e60000', width: '50px', height: '55px', position: 'absolute', top: '10px', right: '0', zIndex: '10', color: '#fff', textAlign: 'right', fontSize: '11px'
  },
  macroInfo: {
    paddingTop: '3px', paddingRight: '3px'
  },
  image: {
    width: 200, height: 200, marginTop: '10px'
  },
  desc: {
    display: 'block', fontSize: '12px', padding: '10px', textTransform: 'uppercase', textAlign: 'center'
  },
  countWrap: {
  	textAlign: 'center', display: 'block', margin: '10px auto 0'
  },
  countNum: {
  	display: 'inline-block', padding: '10px'
  },
  count: {
  	borderRadius: '13px', height: '26px', width: '26px', backgroundColor: '#333', display: 'inline-block', color: '#fff', textAlign: 'center', fontSize: '21px'
  }
});


const MacrosCard = (props) => (
  <View style={cardStyles.wrap}>
    <View style={cardStyles.info}>
      <Text style={cardStyles.macroInfo}>P: 120G</Text>
      <Text style={cardStyles.macroInfo}>F: 120G</Text>
      <Text style={cardStyles.macroInfo}>C: 120G</Text>
    </View>
    <Image
      style={cardStyles.image}
      source={{uri: 'http://www.mansfieldgolfclub.com.au/wp-content/uploads/2016/05/steak-2-200x200.jpg'}}
    />
    <Text style={cardStyles.desc}>Macro Description</Text>
    <View style={cardStyles.countWrap}>
  		<Text style={cardStyles.count}>-</Text>
  		<Text style={cardStyles.countNum}>0</Text>
  		<Text style={cardStyles.count}>+</Text>
	  </View>
  </View>
);

export default MacrosCard;
