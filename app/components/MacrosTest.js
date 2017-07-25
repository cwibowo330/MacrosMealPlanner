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
    console.log(`macrosData INFO:::::::${JSON.stringify(macrosData)}`);
  }

  // onPress() {
  //   this.props.dispatch({
  //     type:    USER_UPDATED,
  //     payload: {
  //       userId:     this.props.user.userId,
  //       attributes: { count: this.props.user.count + 1 },
  //     },
  //   });
  // }

  render() {
    return (
      <View>
        <Text>
          macros loading test
        </Text>
        {
            Object.keys(this.props.macros)
              .map((key, index) =>
                <Text key={key}>{this.props.macros[key][index].name}</Text>)
         }
      </View>
    );
  }
}

function mapStateToProps(state) {
  // if the next two lines were to be commonly used across different components,
  // they could be moved into a (for example) UserService.getUser function
  // const user = getUser(ownProps.userId);

  // const macros = ownProps;
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
