import React, { PropTypes, Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { UPDATE_MACRO } from '../actions';
import StyledText from './StyledText';
import LabeledInput from './LabeledInput';

const userInfoStyles = StyleSheet.create({
  flexWrap: {
    display:        'flex',
    flexWrap:       'wrap',
    flexDirection:  'row',
    marginTop:      20,
    justifyContent: 'space-around',
  },
});

class UserInfo extends Component {
  constructor() {
    super();

    this.onCaloriesChange = this.onCaloriesChange.bind(this);
  }

  onCaloriesChange(e) {
    this.props.dispatch({
      type:     UPDATE_MACRO,
      calories: Number(e.target.value),
    });
  }

  render() {
    return (
      <View>
        <View style={userInfoStyles.flexWrap}>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <StyledText type="title">Welcome Name</StyledText>
          </View>
          <View style={{ flex: 2, marginLeft: 10 }}>
            <LabeledInput
              value={String(this.props.macros.calories)}
              name="caloriesAmount"
              textStyle="infoSubtitle"
              type="userInput"
              title="Calories Per Day"
              onChange={this.onCaloriesChange}
            />
            <LabeledInput
              name="mealPlanningDays"
              textStyle="infoSubtitle"
              type="userInput"
              title="Days of Meal Planning"
            />
          </View>
        </View>
        <View style={userInfoStyles.flexWrap}>
          <LabeledInput
            name="proteinsPercent"
            textStyle="macrosInfoSubtitle"
            title="protein 140"
          />
          <LabeledInput
            name="fatsPercent"
            textStyle="macrosInfoSubtitle"
            title="fats 120"
          />
          <LabeledInput
            name="carbsPercent"
            textStyle="macrosInfoSubtitle"
            title="carbs 40"
          />
        </View>
      </View>
    );
  }
}

UserInfo.defaultProps = {
  macros: {
    calories: 0,
    fats:     0,
  },
};

UserInfo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  macros:   PropTypes.shape({
    calories: PropTypes.number,
    fats:     PropTypes.number,
  }),
};

function mapStateToProps(state, ownProps) {
  console.log('mapStateToProps()::state', state);
  console.log('mapStateToProps()::ownProps', ownProps);

  return { macros: state.macros };
}

export default connect(mapStateToProps)(UserInfo);
