import React from 'react'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { THEME } from '../theme'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { BookedScreen } from '../screens/BookedScreen'

const PostNavigator = createStackNavigator(
    {
        Main: MainScreen,
        Post: {
            screen: PostScreen
        }
    },
    {
        initialRouteName: 'Main',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor:
                    Platform.OS === 'android' ? THEME.PRIMARY_COLOR : 'white'
            },
            headerTintColor:
                Platform.OS === 'android' ? 'white' : THEME.SECONDARY_COLOR
        }
    }
)

const BookedNavigator = createStackNavigator(
    {
        Booked: BookedScreen,
        Post: PostScreen
    },
    {
        initialRouteName: 'Booked',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor:
                    Platform.OS === 'android' ? THEME.PRIMARY_COLOR : 'white'
            },
            headerTintColor:
                Platform.OS === 'android' ? 'white' : THEME.SECONDARY_COLOR
        }
    }
)

const bottomNavigator = createBottomTabNavigator({
    Post: {
        screen: PostNavigator,
        navigationOptions: {
            tabBarIcon: info => (
                <Ionicons name='ios-albums' color={info.tintColor} size={24} />
            )
        }
    },
    Booked: {
        screen: BookedNavigator,
        navigationOptions: {
            tabBarIcon: info => (
                <Ionicons name='ios-star' color={info.tintColor} size={24} />
            )
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: THEME.PRIMARY_COLOR
    }
})

export const AppNavigation = createAppContainer(bottomNavigator)
