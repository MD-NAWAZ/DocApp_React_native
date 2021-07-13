import React, { useContext } from "react";
import {Animated,View,StyleSheet,FlatList,TouchableOpacity} from "react-native";
import {Text} from "react-native-elements";
import {withNavigation} from "@react-navigation/compat";
import Services from "./Services";
import Logo from "./Logo";
import {Context as FetchDataContext} from "../context/fetchDataContext";
import {navigate} from "../navigation/navigationRef";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ServicesView = ({navigation}) => {
    const {state,Result,fetchDataByCategory} = useContext(FetchDataContext);

    return (
        <Animated.View style= {{...styles.rowContainer}}>
            <Text h5 style={{color:"#bbab9b",fontWeight:"bold", fontFamily:"serif",fontStyle:"italic",paddingLeft:15}}>Swipe to check our services</Text> 
                <FlatList
                data={Services}
                keyExtractor={(item)=>item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                decelerationRate="fast"
                bounces={true}
                renderItem={({item})=>{
                    return (
                        <View >
                            <Text>{item.category}</Text>
                            <TouchableWithoutFeedback onPress={()=>{navigate("ServicesScreen",{category:item.category})}}>

                <Logo logo={item.logo}
                title={item.category}
                />
                </TouchableWithoutFeedback>
                </View>
                    )
                }}
                />
                
            </Animated.View>
    )
}

const styles = StyleSheet.create({
    rowContainer:{
        flexDirection:"column",
        justifyContent:"flex-start",
        paddingTop:15,
        paddingBottom:20     
    },
})

export default withNavigation(ServicesView);