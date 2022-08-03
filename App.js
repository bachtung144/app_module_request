/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { Login } from "./src/screens/login";
import { HomeTab } from "./src/navigations/bottomTab";

const NaviStack = createStackNavigator();

export const App = () => {
  return(
    <NavigationContainer>
      <NaviStack.Navigator headerMode="none">
        <NaviStack.Screen
          name={'Login'}
          component={Login}
          options={{headerShown: false}}
        />
        <NaviStack.Screen
          name={'HomeTab'}
          component={HomeTab}
          options={{headerShown: false}}
        />
      </NaviStack.Navigator>
    </NavigationContainer>
  )
}
