import React, { useState } from 'react'
import { AppLoading } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { boostrap } from './src/bootstrap'

export default function App() {
    const [isReady, setIsReady] = useState(false)

    if (!isReady) {
        return (
            <AppLoading
                startAsync={boostrap}
                onFinish={() => setIsReady(true)}
                onError={console.warn}
            />
        )
    }

    return (
        <View>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style='auto' />
        </View>
    )
}
