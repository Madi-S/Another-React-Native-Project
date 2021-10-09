import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'

import { Post } from './Post'

export const PostList = ({ data, onOpen }) => {
    if (!data.length) {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.noItems}>There are no posts yet</Text>
            </View>
        )
    }

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
    },
    noItems: {
        fontFamily: 'open-bold',
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 24
    }
})
