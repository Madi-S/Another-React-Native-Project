import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export const MainScreen = ({ navigation }) => {
    const goToPostScreen = () => {
        /* navigation.push('Main')
        Creates new stack (e.g., navigation to the same screen acts like navigation to a new screen)
        */
        navigation.navigate('Post')
    }

    return (
        <View style={styles.center}>
            <Text>Main Screen</Text>
            <Button title='Go to post #42' onPress={goToPostScreen} />
        </View>
    )
}

MainScreen.navigationOptions = {
    headerTitle: 'My Blog'
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
