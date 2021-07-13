import React from "react";
import {View, Text, StyleSheet,FlatList,SafeAreaView} from "react-native";
import {Card,Icon,Button} from "react-native-elements";
import Users from "../components/Users";
import Spacer from "../components/Spacer";

const CartScreen = ({navigation}) => {


    return (
        <SafeAreaView>
            <FlatList
            data={Users[0].cart}
            keyExtractor = {(item) => item.subServiceid.toString()}
            renderItem = {({item})=>{
                return (
                    <View>
                        <Card>
                    <Card.Title title="Gents Hair Cut"/>
                    <Card.Image 
                    style={{resizeMode:"stretch"}}
                    source={{ uri: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Mayactivation/Accessoriesday1/D23140543_IN_CEPC_Electronicsaccessories_underRs999_1500x300.jpg" }} />
                    <Button
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,color:"rgb(255, 204, 0)"}}
      title='Book Appointment' />
                    </Card>
                    </View>
                )
            }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default CartScreen;