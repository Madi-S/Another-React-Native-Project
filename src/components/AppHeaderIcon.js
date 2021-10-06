import React from 'react'
import { Platform } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

import { THEME } from '../theme'

export const AppHeaderIcon = props => {
    return (
        <HeaderButton
            iconSize={24}
            color={Platform.OS === 'android' ? 'white' : THEME.PRIMARY_COLOR}
            IconComponent={Ionicons}
            {...props}
        />
    )
}
