import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View , Image} from 'react-native';
import StyledText from '../_styles/StyledText';
import { MACROS_LOADED } from '../../actions';
import macrosData from '../../data/macros.json';


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
        <View>
        <Image source={{uri: proteinsData[key].image}} style= {{ height:200, width: 200 }}/>
        <StyledText>{proteinsData[key].name}</StyledText>
        </View>);

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
};

export default connect(mapStateToProps)(MacrosTest);
