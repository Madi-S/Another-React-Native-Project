import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const PostScreen = ({ navigation }) => {
    const postId = navigation.getParam('postId')
    console.log('postId', postId)
    return (
        <View style={styles.center}>
            <Text>{postId}</Text>
        </View>
    )
}

PostScreen.navigationOptions = ({ navigation }) => {
    const date = new Date(navigation.getParam('date')).toLocaleDateString()
    return {
        headerTitle: `Post of ${date}`
        /*
        Header customization for particular screen
        headerStyle: {
            backgroundColor: 'red'
        },
        headerTintColor: 'blue'
        */
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
