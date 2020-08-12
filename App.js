import * as React from 'react';
import {connect} from 'react-redux';
import {DefaultTheme} from 'react-native-paper';
import {configureStore} from './src/store';
import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from './src/screen/DetailScreen';
import HomeScreen from './src/screen/HomeScreen';

const store = configureStore();

const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: '#9c2bdb',
    text: '#343434',
    accent: '#f1c40f',
    background: '#b2554a',
  },
};

const Stack = createStackNavigator();

const App = (props) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(App);
