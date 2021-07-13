import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Search from "../components/Search";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from 'lottie-react-native';

const SearchScreen = () => {
    return (
        <SafeAreaView style={styles.search}>
        <LottieView
          source={require('../lotties/SigninLottie.json')}
          colorFilters={[{
          keypath: "button",
          color: "#F00000"},
          {
          keypath: "Sending Loader",
          color: "#F00000"
          }]}
          autoPlay
          loop
          style={{flexDirection:"column"}}
         />      
            <Search/> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    search: {
        paddingTop:20,
        flex:1
    }
})

export default SearchScreen;