import React from 'react'
import { useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { PostList } from '../components/PostList'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const BookedScreen = ({ navigation }) => {
    const bookedPosts = useSelector(state => state.post.bookedPosts)

    const openPostHandler = post => {
        navigation.navigate('Post', {
            date: post.date,
            postId: post.id,
            booked: post.booked
        })
    }

    return <PostList data={bookedPosts} onOpen={openPostHandler} />
}

BookedScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Bookmarks',
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
