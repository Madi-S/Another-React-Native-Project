import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import { Post } from './Post'

export const PostList = ({ data, onOpen }) => {
    return (
        <View style={styles.wrapper}>
            <FlatList
                data={data}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => {
                    return <Post post={item} onPress={onOpen} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})