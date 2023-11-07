import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils/colors'

const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.yellow,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 14,
        borderRadius: 12
    },
    text: {
        fontSize: 16,
        color: colors.white,
        fontWeight: 'bold'
    }
})