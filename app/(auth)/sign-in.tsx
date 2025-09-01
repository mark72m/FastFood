import {View, Alert, Text} from 'react-native'
import React, {useState} from 'react'
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import {Link} from "expo-router";

export default function SignIn() {
    const [isSubmitting, setIsSubmitting ] = useState(false);
    const [form, setForm] = useState({email: '', password: ''});

    const submit = async () => {
        if(!form.email || !form.password) Alert.alert('Error','Please Input a Valid Email Address and Password!!')
        setIsSubmitting(true)

        try{

        }catch{

        }
    }
    return (
        <View className={"gap-10 bg-white rounded-lg p-5 mt-5"}>
            <CustomInput
                placeholder={"Enter Your Email"}
                value={''}
                onChangeText={(text) => {}}
                label={"Email"}
                keyboardType={"email-address"}/>

            <CustomInput
                placeholder={"Enter Your Password"}
                value={''}
                onChangeText={(text) => {}}
                label={"Password"}
                secureTextEntry={true}/>

            <CustomButton title={"Sign In"}/>

            <View className={"flex justify-center mt-5 flex-row gap-2"}>
                <Text className={"base-regular text-gray-100"}>
                    Don't have an account ?
                </Text>
                <Link href={"/sign-up"} className={"base-bold text-primary"}>Sign Up</Link>
            </View>
        </View>
    )
}
