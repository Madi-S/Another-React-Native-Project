import React, { useState } from 'react'
import { View, StyleSheet, Image, Button, Alert, Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

export const PhotoPicker = ({ onPick }) => {
    const [image, setImage] = useState(null)

    const takePhoto = async () => {
        const hasPermissions = await askForPermissions()

        if (!hasPermissions) {
            return
        }

        const img = await ImagePicker.launchCameraAsync({
            quality: 0.7,
            allowsEditing: false,
            aspect: [16, 9]
        })

        if (img.uri) {
            setImage(img.uri)
            onPick (img.uri)
        }
    }

    return (
        <View style={styles.wrapper}>
            <Button title='Take a photo' onPress={takePhoto} />
            {image && <Image style={styles.image} source={{ uri: image }} />}
        </View>
    )
}

async function askForPermissions() {
    if (Platform.OS !== 'web') {
        const { status } =
            await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
            Alert.alert(
                'Error',
                'Sorry, we need camera roll permissions to make this work!'
            )
            return false
        }
        return true
    }
    return false
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 10
    }
})
