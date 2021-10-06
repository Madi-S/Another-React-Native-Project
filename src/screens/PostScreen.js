import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Button,
    Alert
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { THEME } from '../theme'
import { DATA } from '../data'

export const PostScreen = ({ navigation }) => {
    const postId = navigation.getParam('postId')
    const post = DATA.find(p => p.id === postId)

    const removePost = () => {
        Alert.alert('Post deletion', 'Are you sure?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Remove',
                style: 'destructive',
                onPress: () => console.log('OK Pressed')
            }
        ])
    }

    return (
        <View style={styles.center}>
            <Image style={styles.image} source={{ uri: post.img }} />
            <ScrollView style={styles.textWrapper}>
                <Text style={styles.title}>{post.text}</Text>
                <Button
                    title='Delete'
                    onPress={removePost}
                    color={THEME.DANGER_COLOR}
                />
            </ScrollView>
        </View>
    )
}

PostScreen.navigationOptions = ({ navigation }) => {
    const date = new Date(navigation.getParam('date')).toLocaleDateString()

    const booked = navigation.getParam('booked')
    const iconName = booked ? 'ios-star' : 'ios-star-outline'

    return {
        headerTitle: `Post of ${date}`,
        /*
        Header customization for particular screen
        headerStyle: {
            backgroundColor: 'red'
        },
        headerTintColor: 'blue'
        */
        headerRight: (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                    title='Bookmark'
                    iconName={iconName}
                    onPress={() => console.log('Take photo')}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 200
    },
    textWrapper: {
        padding: 10
    },
    title: {
        fontFamily: 'open-regular'
    }
})
