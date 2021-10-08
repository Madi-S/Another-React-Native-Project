import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Provider } from 'react-redux'

import store from './src/store'
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
        <Provider store={store}>
            <AppNavigation />
            <StatusBar style='auto' />
        </Provider>
    )
}
