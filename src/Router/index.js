import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../Screen/HomeScreen';
import NotificationScreen from '../Screen/NotificationScreen';
import ExploreScreen from '../Screen/ExploreScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import CardListScreen from '../Screen/CardListScreen';
import CardItemDetails from '../Screen/CardItemDetails';
import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RandomList from '../Screen/RandomList';
const Tab = createMaterialBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#FF6347',
        tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarColor: '#FF6347',
        tabBarIcon: ({color}) => (
          <Icon name="notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Search',
        tabBarColor: '#FF6347',
        tabBarIcon: ({color}) => <Icon name="search" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#FF6347',
        tabBarIcon: ({color}) => <Icon name="person" color={color} size={26} />,
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background,
          elevation: 0,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'TheMealDB',
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="settings-outline"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => {}}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 5}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri: 'https://i.pinimg.com/564x/33/f0/8e/33f08eec401f43fe9c7656511a7099ae.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="CardListScreen"
        component={CardListScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen name="RandomList" component={RandomList} />
      <HomeStack.Screen name="CardItemDetails" component={CardItemDetails} />
    </HomeStack.Navigator>
  );
};
