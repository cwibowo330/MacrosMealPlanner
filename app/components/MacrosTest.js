import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { MACROS_LOADED } from '../actions';
import macrosData from '../data/macros.json';

class MacrosTest extends Component {
  // constructor() {
  //   super();

  //   this.onPress = this.onPress.bind(this);
  // }

  componentDidMount() {
    this.props.dispatch({
      type:    MACROS_LOADED,
      payload: macrosData,
    });
  }


  render() {
    console.log('ALLMACROS::::');
    console.log(this.props.macros);

    console.log('PROTEINS::::');
    const proteinsData = this.props.macros.proteins;

    console.log(proteinsData);

    console.log('CARBS:::::');
    const carbsData = this.props.macros.carbs;

    console.log(carbsData);

    console.log('FATS::::');
    const fatsData = this.props.macros.fats;

    console.log(fatsData);

    // const fatsArray = Object.keys(fatsData).map(k => fatsData[k]);

    // console.log(fatsArray);

    // fatsArray.map(i => console.log(fatsArray[i].name));

    return (
      <View />
    );
  }

}

function mapStateToProps(state) {
  return { macros: state.macros };
}

MacrosTest.defaultProps = {
  macros: {},
};

MacrosTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  macros:   React.PropTypes.shape({
    proteins: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id:     PropTypes.number,
      name:   PropTypes.string,
      image:  PropTypes.string,
      amt:    PropTypes.number,
      pgrams: PropTypes.number,
      fgrams: PropTypes.number,
      cgrams: PropTypes.number,
      count:  PropTypes.number,
    }),
    ),
    carbs: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id:     PropTypes.number,
      name:   PropTypes.string,
      image:  PropTypes.string,
      amt:    PropTypes.number,
      pgrams: PropTypes.number,
      fgrams: PropTypes.number,
      cgrams: PropTypes.number,
      count:  PropTypes.number,
    }),
    ),
    fats: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id:     PropTypes.number,
      name:   PropTypes.string,
      image:  PropTypes.string,
      amt:    PropTypes.number,
      pgrams: PropTypes.number,
      fgrams: PropTypes.number,
      cgrams: PropTypes.number,
      count:  PropTypes.number,
    }),
    ),
  }),
};

export default connect(mapStateToProps)(MacrosTest);
