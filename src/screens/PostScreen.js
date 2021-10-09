import React, { useEffect, useCallback } from 'react'
import {
    View,
    Text,
    Image,
    Alert,
    Button,
    ScrollView,
    StyleSheet
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { THEME } from '../theme'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { toggleBooked, removePost } from '../store/actions/post'

export const PostScreen = ({ navigation }) => {
    const postId = navigation.getParam('postId')

    const post = useSelector(state =>
        state.post.allPosts.find(p => p.id === postId)
    )

    const dispatch = useDispatch()

    const booked = useSelector(state =>
        state.post.bookedPosts.some(p => p.id === postId)
    )

    const toggleHandler = useCallback(() => {
        dispatch(toggleBooked(post))
    }, [dispatch, post])

    useEffect(() => {
        navigation.setParams({ toggleHandler })
    }, [toggleHandler])

    useEffect(() => {
        navigation.setParams({ booked })
    }, [booked])

    const removeHandler = () => {
        Alert.alert('Post deletion', 'Are you sure?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Remove',
                style: 'destructive',
                onPress() {
                    navigation.navigate('Main')
                    dispatch(removePost(postId))
                }
            }
        ])
    }

    if (!post) {
        return <Text>This post does not exist</Text>
    }

    return (
        <View style={styles.center}>
            <Image style={styles.image} source={{ uri: post.img }} />
            <ScrollView style={styles.textWrapper}>
                <Text style={styles.title}>{post.text}</Text>
                <Button
                    title='Delete'
                    onPress={removeHandler}
                    color={THEME.DANGER_COLOR}
                />
            </ScrollView>
        </View>
    )
}

PostScreen.navigationOptions = ({ navigation }) => {
    const booked = navigation.getParam('booked')
    const toggleHandler = navigation.getParam('toggleHandler')
    const date = new Date(navigation.getParam('date')).toLocaleDateString()

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
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                    title='Bookmark'
                    iconName={iconName}
                    onPress={toggleHandler}
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
