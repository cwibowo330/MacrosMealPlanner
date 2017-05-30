import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from './Colors';

const navStyles = StyleSheet.create({
	wrap: {
      fontFamily: 'Arial',
      fontSize: '12px',
      textTransform: 'uppercase',
      backgroundColor: Colors.grey,
      width: '100%',
      display: 'inline',
      padding: '10px',
      fontWeight: '500',
      color: '#e3e3e3'
    },
    base: {
      display: 'inline-block',
      verticalAlign : 'top',
      color: 'white',
      fontWeight: '600'
    }
});
const Nav = (props) => (
  <View style={navStyles.wrap}>
  	<Text style={navStyles.base} style={{
      width: '40%',
    }}>
    	Macros Meal Planner
  	</Text>
  	<Text style={navStyles.base}  style={{
      width: '37%'
    }}>
    	Groceries
  	</Text>
  	<Text style={navStyles.base}  style={{
      width: '20%'
    }}>
    	Log Out
  	</Text>
  </View>
  
);

export default Nav;
