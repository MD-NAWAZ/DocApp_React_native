import React, { useState } from "react";
import {View, StyleSheet,ImageBackground,Animated,Image} from "react-native";
import LottieView from 'lottie-react-native';
import ServicesView from "../components/ServicesView";
import HighLightsView from "../components/HighLightsView";
import { Text,Icon} from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({navigation}) => {
    
    const fadeInAnimation = new Animated.Value(0);
    const zoom = new Animated.Value(0);
    const height = new Animated.Value(0);
    const AnimatedIBG = Animated.createAnimatedComponent(ImageBackground);
    

    
    return (
      
        <View style={styles.outerContainer}>
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
         <Text h5 style={{color:"#bbab9b",paddingLeft:15 }}>Current Location is 142,Picnic Garden Road, Kasba</Text> 
            
              <ScrollView>
              <HighLightsView
              />
              <ServicesView
              />
              <HighLightsView
              />
              <ServicesView
              />
              <HighLightsView
              />
              <ServicesView
              />
              <HighLightsView
              />
              <ServicesView
              />
              
              </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
      flexDirection:"column",
      alignItems:"stretch"
        
        //paddingTop: Platform.OS === 'android' ? 100 : 0   
    }
})

export default Home;