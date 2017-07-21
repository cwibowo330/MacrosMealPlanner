import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Text, View } from 'react-native';
import { USER_LOADED, USER_UPDATED } from '../actions';
import userData from '../data/user.json';

class Demo extends Component {
  constructor() {
    super();

    this.onPress = this.onPress.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({
      type:    USER_LOADED,
      payload: userData,
    });
  }

  onPress() {
    this.props.dispatch({
      type:    USER_UPDATED,
      payload: {
        userId:     this.props.user.userId,
        attributes: { count: this.props.user.count + 1 },
      },
    });
  }

  render() {
    return (
      <View>
        <Text>
          {
            this.props.user ? this.props.user.count : 'no user available'
          }
        </Text>
        <Button onPress={this.onPress} title="Update" />
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  // if the next two lines were to be commonly used across different components,
  // they could be moved into a (for example) UserService.getUser function
  // const user = getUser(ownProps.userId);
  const { userId } = ownProps;
  const user = state.user ? state.user[userId] : null;

  return { user };
}

Demo.defaultProps = {
  user: {},
};

Demo.propTypes = {
  user: PropTypes.shape({
    userId: PropTypes.number,
    count:  PropTypes.number,
  }),
  // eslint-disable-next-line react/no-unused-prop-types
  userId:   PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Demo);
