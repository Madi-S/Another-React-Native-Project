import React, { useState } from 'react'
import {
    View,
    Text,
    Image,
    Button,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import { useDispatch } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { THEME } from '../theme'
import { addPost } from '../store/actions/post'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const CreateScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')

    const img =
        'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg'

    const saveHandler = () => {
        const post = {
            img,
            text,
            booked: false,
            date: new Date().toJSON()
        }
        dispatch(addPost(post))
        navigation.navigate('Main')
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Create a new Post!</Text>
                    <TextInput
                        multiline
                        value={text}
                        onChangeText={setText}
                        style={styles.textarea}
                        placeholder='Enter post body ...'
                    />
                    <Image
                        style={{ width: '100%', height: 200, marginBottom: 20 }}
                        source={{ uri: img }}
                    />
                    <Button
                        title='Create'
                        onPress={saveHandler}
                        color={THEME.PRIMARY_COLOR}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

CreateScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Create Post',
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title='Toggle drawer'
                iconName='ios-menu'
                onPress={navigation.toggleDrawer}
            />
        </HeaderButtons>
    )
})

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'open-regular',
        marginVertical: 10
    },
    textarea: {
        padding: 10,
        marginBottom: 10,
        borderColor: THEME.PRIMARY_COLOR,
        borderWidth: 1
    }
})
