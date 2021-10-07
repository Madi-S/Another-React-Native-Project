import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { DATA } from '../data'
import { PostList } from '../components/PostList'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const BookedScreen = ({ navigation }) => {
    const openPostHandler = post => {
        navigation.navigate('Post', {
            date: post.date,
            postId: post.id,
            booked: post.booked
        })
    }

    return <PostList data={DATA} onOpen={openPostHandler} />
}

BookedScreen.navigationOptions = {
    headerTitle: 'Bookmarked',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title='Toggle drawer'
                iconName='ios-menu'
                onPress={() => console.log('Take a photo')}
            />
        </HeaderButtons>
    )
}
