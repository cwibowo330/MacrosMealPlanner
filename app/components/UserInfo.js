import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { UPDATE_MACRO,
         UPDATE_DAYS,
         UPDATE_PROTEINS,
         UPDATE_FATS,
         UPDATE_CARBS,
       } from '../actions';
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
    this.onDaysChange = this.onDaysChange.bind(this);
    this.onProteinChange = this.onProteinChange.bind(this);
    this.onFatChange = this.onFatChange.bind(this);
    this.onCarbChange = this.onCarbChange.bind(this);
  }

  onCaloriesChange(e) {
    console.log('this is onCaloriesChange');
    // this.props.dispatch({
    //   type:  UPDATE_MACRO,
    //   macro: 'calories',
    //   value: Number(e.target.value),
    // });

    this.props.dispatch({
      type:  UPDATE_MACRO,
      macro: 'calories',
      value: Number(e.target.value),
    });
  }
  onDaysChange(e) {
    console.log('this is onDaysChange');
    this.props.dispatch({
      type: UPDATE_DAYS,
      days: Number(e.target.value),
    });
  }
  onProteinChange(e) {
    console.log('this is onProteinChange');
    this.props.dispatch({
      type:     UPDATE_PROTEINS,
      proteins: Number(e.target.value),
    });
  }
  onFatChange(e) {
    console.log('this is onFatChange');
    this.props.dispatch({
      type: UPDATE_FATS,
      fats: Number(e.target.value),
    });
  }
  onCarbChange(e) {
    console.log('this is onCarbChange');
    this.props.dispatch({
      type:  UPDATE_CARBS,
      carbs: Number(e.target.value),
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
              value={String(this.props.macros.days)}
              name="mealPlanningDays"
              textStyle="infoSubtitle"
              type="userInput"
              title="Days of Meal Planning"
              onChange={this.onDaysChange}
            />
          </View>
        </View>
        <View style={userInfoStyles.flexWrap}>
          <LabeledInput
            value={String(this.props.macros.proteins)}
            name="proteinsPercent"
            textStyle="macrosInfoSubtitle"
            title="protein 140"
            onChange={this.onProteinChange}
          />
          <LabeledInput
            value={String(this.props.macros.fats)}
            name="fatsPercent"
            textStyle="macrosInfoSubtitle"
            title="fats 120"
            onChange={this.onFatChange}
          />
          <LabeledInput
            value={String(this.props.macros.carbs)}
            name="carbsPercent"
            textStyle="macrosInfoSubtitle"
            title="carbs 40"
            onChange={this.onCarbChange}
          />
        </View>
      </View>
    );
  }
}

UserInfo.defaultProps = {
  macros: {
    calories: 0,
    days:     0,
    proteins: 0,
    fats:     0,
    carbs:    0,
  },
};

UserInfo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  macros:   PropTypes.shape({
    calories: PropTypes.number,
    days:     PropTypes.number,
    proteins: PropTypes.number,
    fats:     PropTypes.number,
    carbs:    PropTypes.number,
  }),
};

function mapStateToProps(state, ownProps) {
  console.log('mapStateToProps()::state', state);
  console.log('mapStateToProps()::ownProps', ownProps);

  return { macros: state.macros };
}

export default connect(mapStateToProps)(UserInfo);
