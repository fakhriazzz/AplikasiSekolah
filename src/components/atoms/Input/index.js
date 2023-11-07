import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { colors } from '../../../utils/colors';

const Input = ({ placeholder, value, onChangeText }) => {
    const [activecolor, setactivecolor] = useState(colors.black);

    const onBlur = () => {
        setactivecolor(colors.black)
    }

    const onFocus = () => {
        setactivecolor(colors.yellow)
    }

    return (
        <TextInput onFocus={onFocus} onBlur={onBlur} style={styles.input(activecolor)} placeholder={placeholder} placeholderTextColor={colors.black} value={value} onChangeText={onChangeText} />
    )
}

export default Input

const styles = StyleSheet.create({
    input: activecolor => ({
        fontSize: 14,
        color: colors.black,
        padding: 12,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: activecolor
    })
})