import React, { useState } from "react";
import {View, Text, StyleSheet,Dimensions,Modal,TouchableOpacity,Alert} from "react-native";
import { Icon } from 'react-native-elements';
import {Card} from "react-native-elements";

const Logo = ({logo,title}) => {
    const height = Dimensions.get("window").height;
    const width = Dimensions.get("window").width;
    const iconSize = height*0.05
    const [modalVisible,setModalVisible] = useState(false)
    return (
        <View>            
            <Card 
            containerStyle={styles.wrapperStyle}>
            
            <Icon
            raised
            name = {logo}
            type = "font-awesome-5"
            size = {iconSize}
            /> 
            <Card.Title style={{color:"#3b3a30"}}>{title}</Card.Title>  
           
            </Card>
            
            
        </View>     
    )
}

const styles = StyleSheet.create({

    wrapperStyle:{
        borderRadius:20,
        backgroundColor:"#eaece5"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        }}});

export default Logo;