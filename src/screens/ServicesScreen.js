import React, { useEffect,useContext } from "react";
import { View, Text, StyleSheet,Dimensions,FlatList} from "react-native";
import { Chip,Card,Button } from 'react-native-elements';
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';
import Services from "../components/Services";
import {navigate} from "../navigation/navigationRef";
import {Context as FetchDataContext} from "../context/fetchDataContext";
import { PricingCard } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';


const ServicesScreen = ({route,navigation}) => {
    const {state,Result,fetchDataByCategory} = useContext(FetchDataContext);
    const height = Dimensions.get("window").height;
    const width = Dimensions.get("window").width;
    const {category} = route.params;

    useEffect(()=>{
        const data = fetchDataByCategory(category);
    },[])
    return (
        <View style={styles.container}>
            {data.length > 0?
            <>
            <LinearGradient
        // Background Linear Gradient
            colors={['	rgb(255, 204, 0)', 'transparent']}
            style={styles.background}
           />
            <FlatList
            data={data}
            keyExtractor={(item)=>item._id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>{
                return (
                    <View style={{height:height}}>
                    <Card containerStyle={{borderRadius:40,width:width*0.85}} wrapperStyle={{borderRadius:20}}>
                        <Card.Image 
                        style={{borderRadius:20,resizeMode:"stretch",marginTop:10,height:height*0.25}}
                        source={{uri:"https://images-na.ssl-images-amazon.com/images/G/31/img21/Luggage/Brandday/eoss/3000x770-PC-eng._CB664876432_.jpg"}}>
                        </Card.Image>

  
                    <PricingCard
                    color="#33d6ff"
                    title={item.serviceName}
                    price={item.price + "₹"}
                    info={['100+ Satiesfied User', 'Sanitized Equipment',item.rating]}
                    button={{ title: 'Get Details' }}
                    containerStyle={{borderColor:"rgb(255, 204, 0)",borderWidth:3}}
                    onButtonPress={()=>{navigate("ConsultDoc",{data:item})}}
                    />   
  
                    </Card>
                    </View>
                )
            }}
            />
            </>:null}

        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        backgroundColor: "#ccffff"
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
        height: 250
      }
})

export default ServicesScreen;