import {View, Text, Button} from 'react-native'
import React from 'react'
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

export default function SignIn() {
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

            <CustomButton />
        </View>
    )
}
