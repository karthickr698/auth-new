import * as React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Home from './screens/Home';
import Login from './screens/Login';

const Stack = createStackNavigator();

export default function App() {
  const user = useSelector(state => state.user);
  console.log('user', user);

  const {isAuthenticated} = user;

  console.log('isAuthenticated', isAuthenticated);

  const state = {userToken: null};
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.userToken == null ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <Stack.Screen name="Home" component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
