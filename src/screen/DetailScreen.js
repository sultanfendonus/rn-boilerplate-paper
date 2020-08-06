import React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab2 from './Tab2';
import Tab1 from './Tab1';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const DetailScreen = ({navigation}) => {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)}>Press</Button>
      ),
    });
  }, [navigation, setCount]);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'orange',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="tab1"
        component={Tab1}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="info" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="tab2"
        component={Tab2}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="settings" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(DetailScreen);
