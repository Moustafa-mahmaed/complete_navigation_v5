  import * as React from 'react';
  import { Text, View ,SafeAreaView ,Image ,TouchableOpacity ,ScrollView } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import { createStackNavigator } from '@react-navigation/stack';
  import { createDrawerNavigator } from '@react-navigation/drawer';

import {CustomHeader ,CustomDrawerContent } from "./src"
import {HomeScreen ,HomeScreenDetails ,SettingsScreen , SettingsScreenDetails } from "./src/tab"
import {NotificationsScreen } from "./src/drawer"
import {RegisterScreen ,LoginScreen } from "./src/auth"


import {IMAGES} from "./src/constants/img"

  





  const Tab = createBottomTabNavigator();
  
  const  navOptionHandler = () =>({
    headerShown :false 
  })

  const StackHome = createStackNavigator();

  function HomeStack() {
    return (
      <StackHome.Navigator initialRouteName="Home">
        <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler} />
        <StackHome.Screen name="HomeDetails" component={HomeScreenDetails} options={navOptionHandler} />
      
      </StackHome.Navigator>
    );
  }





  const StackSetting = createStackNavigator();

  function SettingStack() {
    return (
      <StackSetting.Navigator initialRouteName="Setting">
        <StackSetting.Screen name="Setting" component={SettingsScreen} options={navOptionHandler} />
        <StackSetting.Screen name="SettingDetails" component={SettingsScreenDetails} options={navOptionHandler} />
      
      </StackSetting.Navigator>
    );
  }


const Drawer = createDrawerNavigator(); 

  function TabNavigator() {
    return(
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? IMAGES.ICON_HOME_WHITE
                : IMAGES.ICON_HOME_BLACK
            } else if (route.name === 'Settings') {
              iconName = focused ?
              IMAGES.ICON_SETTING_WHITE
                : IMAGES.ICON_SETTING_BLACK;
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={{width:20 ,height:20}} 
            resizeMode="contain" />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'black',
        }}
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Settings" component={SettingStack} />
        </Tab.Navigator>
    )
  }



function DrawerNavigation({navigation}) {
  return(
     <Drawer.Navigator initialRouteName="MainMenu"
       
       drawerContent={()=> <CustomDrawerContent  navigation={navigation} />}
       >
        <Drawer.Screen name="MainMenu" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>

  )
}


  const StackApp = createStackNavigator();

  export default function App() {
    return (
      <NavigationContainer>
       <StackApp.Navigator initialRouteName="Login">
        <StackApp.Screen name="HomeApp" component={DrawerNavigation} options={navOptionHandler} />
        <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler} />
        <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler} />
      
      </StackApp.Navigator>
      
        
      </NavigationContainer>
    );
  }