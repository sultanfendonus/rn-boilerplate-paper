import React from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native-paper';

const HomeScreen = (props) => {
  return <Text>HomeScreen</Text>;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(HomeScreen);
