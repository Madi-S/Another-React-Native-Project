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

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor:
            Platform.OS === 'android' ? THEME.PRIMARY_COLOR : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : THEME.SECONDARY_COLOR
}

const PostNavigator = createStackNavigator(
    { Main: MainScreen, Post: PostScreen },
    { initialRouteName: 'Main', defaultNavigationOptions }
)

const BookedNavigator = createStackNavigator(
    { Booked: BookedScreen, Post: PostScreen },
    { initialRouteName: 'Booked', defaultNavigationOptions }
)

const AboutNavigator = createStackNavigator(
    { About: AboutScreen },
    { defaultNavigationOptions }
)

const CreateNavigator = createStackNavigator(
    { Create: CreateScreen },
    { defaultNavigationOptions }
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

const MainNavigator = createDrawerNavigator(
    {
        PostTabs: {
            screen: bottomNavigator,
            navigationOptions: {
                drawerLabel: 'Main',
                drawerIcon: (
                    <Ionicons
                        size={20}
                        name='ios-home'
                        color={THEME.PRIMARY_COLOR}
                    />
                )
            }
        },
        About: {
            screen: AboutNavigator,
            navigationOptions: {
                drawerLabel: 'About us',
                drawerIcon: (
                    <Ionicons
                        size={20}
                        name='information-circle'
                        color={THEME.PRIMARY_COLOR}
                    />
                )
            }
        },
        Create: {
            screen: CreateNavigator,
            navigationOptions: {
                drawerLabel: 'Create Post',
                drawerIcon: (
                    <Ionicons
                        size={20}
                        name='add-circle'
                        color={THEME.PRIMARY_COLOR}
                    />
                )
            }
        }
    },
    {
        contentOptions: {
            activeTintColor: THEME.PRIMARY_COLOR,
            labelStyle: {
                fontFamily: 'open-regular'
            }
        }
    }
)

export const AppNavigation = createAppContainer(MainNavigator)
