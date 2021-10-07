import React from 'react'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import { THEME } from '../theme'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { AboutScreen } from '../screens/AboutScreen'
import { BookedScreen } from '../screens/BookedScreen'
import { CreateScreen } from '../screens/CreateScreen'

const defaultNavigorOptions = {
    headerStyle: {
        backgroundColor:
            Platform.OS === 'android' ? THEME.PRIMARY_COLOR : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : THEME.SECONDARY_COLOR
}

const PostNavigator = createStackNavigator(
    {
        Main: MainScreen,
        Post: PostScreen
    },
    {
        initialRouteName: 'Main',
        defaultNavigationOptions: defaultNavigorOptions
    }
)

const BookedNavigator = createStackNavigator(
    {
        Booked: BookedScreen,
        Post: PostScreen
    },
    {
        initialRouteName: 'Booked',
        defaultNavigationOptions: defaultNavigorOptions
    }
)

const bottomTabsConfig = {
    Post: {
        screen: PostNavigator,
        navigationOptions: {
            tabBarLabel: 'All',
            tabBarIcon: info => (
                <Ionicons name='ios-albums' color={info.tintColor} size={24} />
            )
        }
    },
    Booked: {
        screen: BookedNavigator,
        navigationOptions: {
            tabBarLabel: 'Bookmarked',
            tabBarIcon: info => (
                <Ionicons name='ios-star' color={info.tintColor} size={24} />
            )
        }
    }
}

const bottomNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(bottomTabsConfig, {
              activeTintColor: 'white',
              shifting: true,
              barStyle: {
                  backgroundColor: THEME.PRIMARY_COLOR
              }
          })
        : createBottomTabNavigator(bottomTabsConfig, {
              tabBarOptions: {
                  activeTintColor: THEME.PRIMARY_COLOR
              }
          })

const MainNavigator = createDrawerNavigator({
    PostTabs: {
        screen: bottomNavigator
    },
    About: {
        screen: AboutScreen
    },
    Create: CreateScreen
})

export const AppNavigation = createAppContainer(MainNavigator)
