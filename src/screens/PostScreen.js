import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const PostScreen = () => {
    return (
        <View style={styles.center}>
            <Text>Post Screen</Text>
        </View>
    )
}

PostScreen.navigationOptions = {
    headerTitle: 'Post #42'
    /*
    Header customization for particular screen
    headerStyle: {
        backgroundColor: 'red'
    },
    headerTintColor: 'blue'
    */
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
