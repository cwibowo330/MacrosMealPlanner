import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import StyledText from './StyledText';
import { MACROS_LOADED } from '../actions';
import macrosData from '../data/macros.json';

class MacrosTest extends Component {

  constructor(props) {
    super(props);
    props.dispatch({
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
    console.log(proteinsData[0]);
    console.log('CARBS:::::');

    const names = Object.keys(proteinsData)
                  .map(key =>
                    <StyledText>{proteinsData[key].name}</StyledText>);

    console.log(names);
    // const fatsArray = Object.keys(fatsData).map(k => fatsData[k]);

    // console.log(fatsArray);

    // fatsArray.map(i => console.log(fatsArray[i].name));

    return (
      <View>
        {names}
      </View>
    );
  }

}

function mapStateToProps(state) {
  return { macros: state.macros };
}


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
