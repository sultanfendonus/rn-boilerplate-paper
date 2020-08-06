import React from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native-paper';

const Tab1 = (props) => {
  return <Text>Tab1</Text>;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Tab1);
