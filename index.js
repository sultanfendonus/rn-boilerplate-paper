import 'react-native-gesture-handler';
import * as React from 'react';
import {AppRegistry} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {name as appName} from './app.json';
import {configureStore} from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import App from './App';

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

export default function Main() {
  return (
    <NavigationContainer>
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <App />
        </PaperProvider>
      </StoreProvider>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Main);
