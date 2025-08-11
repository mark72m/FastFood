import {View, Text} from 'react-native'
import React from 'react'

const CustomInput = ({
    placeholder = 'Enter Text...',
    value,
    onChangeText,
    label,
    secureTextEntry = false,
    keyboardType = 'default',
                     }) => {
    return (
        <View>
            <Text>CustomInput</Text>
        </View>
    )
}
export default CustomInput
