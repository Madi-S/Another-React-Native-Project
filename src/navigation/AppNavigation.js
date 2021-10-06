import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { Platform } from 'react-native'

import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { THEME } from '../theme'

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

export const AppNavigation = createAppContainer(PostNavigator)
