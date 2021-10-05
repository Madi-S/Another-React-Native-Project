import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {} from 'react-native'

import { boostrap } from './src/bootstrap'
import { AppNavigation } from './src/navigation/AppNavigation'

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
        <>
            <AppNavigation />
            <StatusBar style='auto' />
        </>
    )
}
