import React from "react";
import {View,SafeAreaView} from "react-native";
import {Text,Icon} from "react-native-elements";
import {withNavigation} from "@react-navigation/compat";

const Header = ({navigation}) => {
    return (
        <SafeAreaView style={{flexDirection:"row",justifyContent:"space-between",alignContent:"center"}}>
            <Text h3 style={{color:"#e6b800",fontFamily:"sans-serif-condensed",fontStyle:"italic",alignItems:"center",paddingTop:10}}>Welcome to Shop</Text>
            <Icon
            raised
            name='search'
            type='font-awesome'
            color='#e6b800'
            size={20}
           onPress={() => {navigation.navigate("SearchScreen")}} />
            </SafeAreaView>
    )
}

export default withNavigation(Header);