import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import ScreenThree from './screens/ScreenThree';
import DisplayCountries from './screens/DisplayCountries';

//Screen names
const screenOne = 'First Screen';
const screenTwo = 'Second Screen';
const screenThree = 'Third Screen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Root = props => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenOne} component={ScreenOne} />
      <Stack.Screen name="two" component={DisplayCountries} />
    </Stack.Navigator>
  );
};

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={screenOne}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === screenOne) {
              iconName = focused ? 'cog' : 'cog-outline';
            } else if (rn === screenTwo) {
              iconName = focused ? 'hammer' : 'hammer-outline';
            } else if (rn === screenThree) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}
        tabBarOptions={{
          activeTintColor: '#5F0B65',
          inactiveTintColor: 'grey',
          labelStyle: {paddingBottom: 10, fontSize: 12},
          style: {padding: 15, height: 80},
        }}>
        <Tab.Screen name={screenOne} component={Root} />
        <Tab.Screen name={screenTwo} component={ScreenTwo} />
        <Tab.Screen name={screenThree} component={ScreenThree} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
