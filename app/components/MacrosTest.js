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
      payload: JSON.stringify(macrosData),
    });
  }

  render() {
    // shows macros object
    console.log(`MACROS NOT SHOWING:::::${this.props.macros}`);

    // shows Object object
    console.log(`MACROS SHOWING:::::${JSON.stringify(this.props.macros)}`);


    return (
      <View>
        <Text>
          macros loading test
        </Text>
      </View>
      // {
      //   // grabs each item in key
      //   Object.keys(this.props.macros)
      //   .map((key) =>
      //     console.log(this.props.macros[key]));

      //   // console logs every object
      //   Object.keys(this.props.macros)
      //     .map(key => {
      //       this.props.macros[key].map( index => console.log(index))
      //     })

      //   // specifies macro and narrows down with name
      //   Object.keys(macros.proteins)
      //     .map(key => {
      //       console.log(this.props.macros.proteins[key].name)
      //     })

      //   // specifies macro using .map() instead
      //   this.props.macros.proteins.map(index => {
      //     console.log(index)
      //   })
      // }
    );
  }

}

function mapStateToProps(state) {
  const macros = state.macros ? state.macros : null;

  return { macros };
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
