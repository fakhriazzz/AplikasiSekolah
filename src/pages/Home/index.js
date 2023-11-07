import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MMKVLoader } from 'react-native-mmkv-storage'
import { PrabubimaTech } from '../../assets'
import { Gap } from '../../components'
import { colors } from '../../utils/colors'

const Home = ({ navigation }) => {
    const storage = new MMKVLoader().initialize();
    const onLogout = () => {
        storage.clearStore(),
            navigation.replace('Login')
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={PrabubimaTech} style={styles.image} />
                <Gap width={8} />
                <View>
                    <Text>{storage.getString('name')}</Text>
                    <Text>{storage.getString('email')}</Text>
                </View>
            </View>
            <View style={{ flex: 1 }} />
            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={onLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 24
    },
    image: {
        width: 56,
        height: 56
    }
})