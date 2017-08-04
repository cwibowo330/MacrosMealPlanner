import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import StyledText from '../StyledText';
import { MACROS_LOADED } from '../../actions';
import macrosData from '../../data/macros.json';
import MacrosModule from './MacrosModule';


// const MacrosWrapper = props => (
//   <View style={{ marginTop: '10px' }}>
//       <MacrosModule title="proteins" />
//       <MacrosModule title="fats" />
//       <MacrosModule title="carbs" />
//   </View>
// );

// export default MacrosWrapper;

class MacrosWrapper extends Component {

  constructor(props) {
    super(props);
    props.dispatch({
      type:    MACROS_LOADED,
      payload: macrosData,
    });
  }

  render() {
    console.log('ALLMACROSWRAPPER::::');
    console.log(this.props);
    console.log(this.props.macros);
    console.log('PROTEINS::::');
    const proteinsData = this.props.macros.proteins;
    const fatsData = this.props.macros.fats;
    const carbsData = this.props.macros.carbs;
    

    const names = Object.keys(proteinsData)
      .map(key =>
        <View>
          <Image source={{ uri: proteinsData[key].image }} style={{ height: 200, width: 200 }} />
          <StyledText>{proteinsData[key].name}</StyledText>
        </View>);

    console.log(names);

    return (
      <View>
        {/* {names} */}
        <View style={{ marginTop: '10px' }}>
          <MacrosModule title="proteins" data={proteinsData}/>
          <MacrosModule title="fats" data={fatsData}/>
          <MacrosModule title="carbs" data={carbsData}/>
        </View>
      </View>
    );
  }

}

function mapStateToProps(state) {
  return { macros:       state.macros,
    userSettings: state.userSettings };
}

MacrosWrapper.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(MacrosWrapper);
