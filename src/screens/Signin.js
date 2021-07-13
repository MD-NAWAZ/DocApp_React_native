import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const Signin = ({navigation}) => {
    return (
        <View>
            <Text>
                Sign In!
            </Text>
            <Button
            title = "Signup"
            onPress = {()=>navigation.navigate("Signup")}
            />
            <Button
            title = "Home"
            onPress = {()=>navigation.navigate("Home")}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default Signin;