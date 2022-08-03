import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Setting} from '../../screens/setting';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Add } from "../../screens/add";
import { Home } from "../../screens/home";

const Tab = createMaterialBottomTabNavigator();

export const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'carryout';
          }  else if (route.name === 'Add') {
            iconName = 'pluscircleo';
          }  else if (route.name === 'Setting') {
            iconName = 'user';
          }

          return <AntDesign name={iconName} size={25} color={color} />;
        },
      })}
      barStyle={{backgroundColor: '#65AAEA'}}
      activeColor={'#FFFFFF'}
      inactiveColor={'#909090'}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{title: 'Danh sách'}}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{title: 'Thêm yêu cầu'}}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{title: 'Cá nhân'}}
      />
    </Tab.Navigator>
  );
};
