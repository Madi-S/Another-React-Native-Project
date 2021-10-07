import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { DATA } from '../data'
import { PostList } from '../components/PostList'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const MainScreen = ({ navigation }) => {
    const openPostHandler = post => {
        /* navigation.push('Main')
        Creates new stack (e.g., navigation to the same screen acts like navigation to a new screen)
        */
        navigation.navigate('Post', {
            date: post.date,
            postId: post.id,
            booked: post.booked
        })
    }

    return <PostList data={DATA} onOpen={openPostHandler} />
}

MainScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'My Blog',
    headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title='Take photo'
                iconName='ios-camera'
                onPress={() => navigation.push('Create')}
            />
        </HeaderButtons>
    ),
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title='Toggle drawer'
                iconName='ios-menu'
                onPress={navigation.toggleDrawer}
            />
        </HeaderButtons>
    )
})
