import 'react-native-gesture-handler';
import * as React from 'react';
import {AppRegistry} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {name as appName} from './app.json';
import App from './src/App';
import {configureStore} from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from './src/screen/DetailScreen';

const store = configureStore();

const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: '#9c2bdb',
    text: '#090',
    accent: '#f1c40f',
    background: '#b2554a',
  },
};

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={App}
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
        </PaperProvider>
      </StoreProvider>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Main);
