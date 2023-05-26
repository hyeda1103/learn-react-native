/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './screens/DetailScreen';
import MainScreen from './screens/MainScreen'

const RootStack = createNativeStackNavigator()

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home"
  const nameMap = {
    Home: "홈",
    Search: "검색",
    Notification: "알림",
    Message: "메시지"
  }
  return nameMap[routeName]
}

function App() {
  return (
   <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen 
          name="Main" 
          component={MainScreen} 
          options={({ route }) => ({
            title: getHeaderTitle(route)
          })} 
        />
        <RootStack.Screen name="Detail" component={DetailScreen} />
      </RootStack.Navigator>
   </NavigationContainer>
  );
}

export default App;
