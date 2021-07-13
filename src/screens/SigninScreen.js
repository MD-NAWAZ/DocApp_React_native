import React, { useContext, useState } from "react";
import {View,StyleSheet,Button,ImageBackground,KeyboardAvoidingView, Dimensions,Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Spacer from "../components/Spacer";
const {height,width} = Dimensions.get("window");
import {Context as AuthContext} from "../context/AuthContext";
import { LinearGradient } from 'expo-linear-gradient';
import { Input,Text,Chip } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import {navigate} from "../navigation/navigationRef";
import { SafeAreaView } from "react-native-safe-area-context";

const SigninScreen = ({navigation}) => {
    const {state,Signin} = useContext(AuthContext);
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");

//    const {Signin} = useContext(AuthContext);//
    return (
        <KeyboardAvoidingView style={styles.container}>
            <LinearGradient
        // Background Linear Gradient
            colors={['#eaece5', 'transparent']}
            style={styles.background}
           />
            {/*
            <ImageBackground 
            source={require("../../assets/Signin.jpg")} 
            style={styles.image} 
            resizeMode="stretch"
            blurRadius={0}>
            */}
            <View style={{flex:4, justifyContent:"center"}}>
                    <View style={{flexDirection:"column",justifyContent:"space-around",height:"50%",width:"100%"}}>
                        
                    <LottieView
        source={require('../lotties/Makeup.json')}
        colorFilters={[{
          keypath: "button",
          color: "#F00000"
        },{
          keypath: "Sending Loader",
          color: "#F00000"
        }]}
        autoPlay
        loop
        style={{flexDirection:"column",flex:1}}
      />    
                        </View>
            
            </View>
                
                <View style={{flex:1,justifyContent:"flex-end"}}>
                    
            <Input
            placeholder="  email@address.com"
            leftIcon={{ type: 'font-awesome', name: 'envelope',color:"#eaece5" }}
            value = {Email}
            onChangeText={setEmail}
            style={{color:"#eaece5",fontWeight:"700"}}
            />
            <Input placeholder="  Password" 
            leftIcon={{ type: 'font-awesome', name: 'lock', size:35,color:"#eaece5"}}
            secureTextEntry={true} 
            value = {Password}
            onChangeText = {setPassword}
            style={{color:"#eaece5",fontWeight:"700"}}
            />


            <View style={{flexDirection:"column",alignItems:"center"}}>
            <TouchableOpacity
            onPress = {()=>Signin({Email,Password})}
            >
                <Chip
                title="Signin Here"
                type="solid"
                disabled
                color="#eaece5"
                />
            </TouchableOpacity>
            <Spacer/>
            <TouchableOpacity
            onPress = {()=>navigate("Signup",{data:"Success"})}>
                <Text style={{color:"#e6b800"}}>Don't have an account? Register Here!</Text>
            </TouchableOpacity>
            </View>
            
            
            </View>
           {/* </ImageBackground>*/}
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        backgroundColor: "#667292"
    },
    image: {
        height:"100%",
        width:"100%"
        ,
      },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 500
      }
})

export default SigninScreen;