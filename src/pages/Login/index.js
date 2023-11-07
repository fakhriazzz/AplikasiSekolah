import CheckBox from '@react-native-community/checkbox'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { MMKVLoader } from 'react-native-mmkv-storage'
import Api from '../../Api'
import { PrabubimaTech } from '../../assets'
import { Gap, Input } from '../../components'
import Button from '../../components/atoms/Button'
import { colors } from '../../utils/colors'

const Login = ({ navigation }) => {
    const storage = new MMKVLoader().initialize();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [erroremail, seterroremail] = useState(false)
    const [errorpassword, seterrorpassword] = useState(false)
    const [akunerror, setakunerror] = useState(false)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const Login = async () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
        if (reg.test(email) == false) {
            seterroremail(true)
        }
        if (password == '') {
            seterrorpassword(true)
        }
        if (password.length < 6) {
            seterrorpassword(true)
        } else {
            seterroremail(false)
            seterrorpassword(false)
            setakunerror(false)
            try {
                const response = await Api.login(email, password)
                storage.setString('name', response.data.name)
                storage.setString('email', response.data.email)
                navigation.replace('Home')
            } catch (error) {
                setakunerror(true)
            }
        }
    }

    const onCheck = (value) => {
        setToggleCheckBox(value)
        if (value == true) {
            storage.setString('auth', 'auth')
        } else {
            storage.clearStore()
        }
    }

    return (
        <View style={styles.container}>
            <Image source={PrabubimaTech} style={styles.image} />
            <Gap height={36} />
            <Input placeholder='Masukkan Email' value={email} onChangeText={(value) => setemail(value)} />
            {
                erroremail && <Text>Email Salah</Text>
            }
            <Gap height={12} />
            <Input placeholder='Masukkan Password' value={password} onChangeText={(value) => setpassword(value)} />
            {
                errorpassword && <Text>Password Salah, Password minimal 8 karakter</Text>
            }
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => onCheck(newValue)}
                />
                <Text>Remember Me</Text>
            </View>
            <Button text='Login' onPress={Login} />
            {
                akunerror && <Text>Akun salah</Text>
            }
            <Gap height={12} />
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                <Text style={styles.text}>Tidak punya akun?</Text>
                <Gap width={2} />
                <TouchableOpacity>
                    <Text style={styles.text}>Buat Akun</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    image: {
        width: 160,
        height: 160,
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 24
    },
    text: {
        fontSize: 14,
        color: colors.black
    }
})