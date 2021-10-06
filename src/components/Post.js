import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

export const Post = ({ post }) => {
    return (
        <View style={styles.post}>
            <ImageBackground style={styles.bgImage} source={{ uri: post.img }}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>
                        {new Date(post.date).toLocaleDateString()}
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    post: {
        marginBottom: 15,
        overflow: 'hidden'
    },
    bgImage: {
        width: '100%',
        height: 200
    },
    textWrapper: {
        backgroundColor: 'rgba(0, 0, 0, .4)',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%'
    },
    title: {
        color: 'white',
        fontFamily: 'open-regular'
    }
})
