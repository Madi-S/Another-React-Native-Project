import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { DATA } from '../data'
import { Post } from '../components/Post'

export const MainScreen = ({ navigation }) => {
    const openPostHandler = post => {
        /* navigation.push('Main')
        Creates new stack (e.g., navigation to the same screen acts like navigation to a new screen)
        */
        navigation.navigate('Post', {
            date: post.date,
            postId: post.id,
            booked: post.booked,
        })
    }

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => {
                    return <Post post={item} onPress={openPostHandler} />
                }}
            />
        </View>
    )
}

MainScreen.navigationOptions = {
    headerTitle: 'My Blog',
    headerRight: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title='Take photo'
                iconName='ios-camera'
                onPress={() => console.log('Take photo')}
            />
        </HeaderButtons>
    ),
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

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})
