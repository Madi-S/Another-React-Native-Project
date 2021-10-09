import * as FileSystem from 'expo-file-system'

import { DB } from '../../db'
import { LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST, ADD_POST } from '../types'

export const loadPosts = () => {
    return async dispatch => {
        const posts = await DB.getPosts()
        dispatch({
            type: LOAD_POSTS,
            payload: posts
        })
    }
}

export const toggleBooked = id => {
    return {
        type: TOGGLE_BOOKED,
        payload: id
    }
}

export const removePost = id => {
    return {
        type: REMOVE_POST,
        payload: id
    }
}

export const addPost = post => async dispatch => {
    const fileName = post.img.split('/').pop()
    const newPath = FileSystem.documentDirectory + fileName

    try {
        await FileSystem.moveAsync({
            to: newPath,
            from: post.img
        })
    } catch (err) {
        console.warn('Failed to move image', err)
    }

    const payload = { ...post, img: newPath }

    const id = await DB.createPost(payload)

    payload.id = id

    dispatch({
        type: ADD_POST,
        payload
    })
}
