import React,{useEffect} from "react";
import {View,StyleSheet} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';

const NoScreen = ({navigation}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate("Signin");
        }, 2000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <View style={styles.container}>
            <LottieView
        source={require('../lotties/woman.json')}
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
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1, 
        flexDirection:"column",
        justifyContent:"center",
        height:"50%",
        width:"100%",
        backgroundColor: "#bbab9b"}
})

export default NoScreen;