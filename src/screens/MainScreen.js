import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import { DATA } from '../data'
import { Post } from '../components/Post'

export const MainScreen = ({ navigation }) => {
    const openPostHandler = post => {
        /* navigation.push('Main')
        Creates new stack (e.g., navigation to the same screen acts like navigation to a new screen)
        */
        navigation.navigate('Post', { postId: post.id, date: post.date })
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
    headerTitle: 'My Blog'
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})
