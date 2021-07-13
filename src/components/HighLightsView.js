import React from "react";
import {Animated,View,StyleSheet,FlatList,TouchableOpacity,Image,Dimensions} from "react-native";
import {Text} from "react-native-elements";
import {withNavigation} from "@react-navigation/compat";
import Highlights from "./Highlights";
import Services from "../components/Services";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


const {width,height} = Dimensions.get("window");
const item_width = width;
const item_height = height*0.25;
const dot_size = 8;
const dot_spacing = 8;
const dot_indicator_size = dot_size + dot_spacing;

const service = {
    subServiceid:"1A",
    image:[
      {
          id:1,
          url:"https://images-na.ssl-images-amazon.com/images/G/31/img21/Luggage/Brandday/eoss/3000x770-PC-eng._CB664876432_.jpg"     
      },
      {
          id:2,
          url:"https://images-na.ssl-images-amazon.com/images/G/31/img21/Luggage/May/BBS/Headers/3000x770-PC-BBD-Mens-1._CB668263928_.jpg"
      },
      {
          id:3,
          url:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Mayactivation/Accessoriesday1/D23140543_IN_CEPC_Electronicsaccessories_underRs999_1500x300.jpg"
      },
      {
          id:4,
          url:"https://m.media-amazon.com/images/G/31/Pay/CBCC/BOX._CB433739796_.png"
      },
      {
          id:5,
          url:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Mayactivation/Accessoriesday1/D23140543_IN_CEPC_Electronicsaccessories_underRs999_1500x300.jpg"
      }
  ],
    serviceName:"Gents Hair Cut",
    price:"100",
    detail:"ABCD",
    rating:"5",
    review:"Sanitized Equipment"

};

const HighlightsView = ({navigation}) => {

    const scrollX = React.useRef(new Animated.Value(0)).current;
    
    return (
        <Animated.View style= {{...styles.rowContainer}}>
            <Text h5 style={styles.Text}>Best Offers</Text>
            <Animated.FlatList
            data={Highlights}
            keyExtractor={(item)=>item.id.toString()}
            horizontal={true }
            showsHorizontalScrollIndicator={false}
            snapToInterval={item_width}
            decelerationRate="fast"
            bounces={false}
            pagingEnabled
            onScroll={Animated.event(
                [{nativeEvent:{contentOffset:{x:scrollX}}}],
                {useNativeDriver:true}
            )}
            renderItem={({item})=>{
                return (
                    <View >                        
                        <TouchableWithoutFeedback onPress={()=>{navigation.navigate("ConsultDoc",{data:service})}}>
                            <Image style={styles.image}
                            source={{uri:item.url}}
                            
                            />
                        </TouchableWithoutFeedback>
                    </View>
                    
                )                
            }}
            />
            <View style={styles.pagination}>
                {Highlights.map((index,i)=>{
                     return <View key ={i} style={styles.dot}/>
                })}
                <Animated.View
                style={[styles.dotIndicator,{
                    transform: [{
                        translateX:Animated.divide(scrollX,item_width).interpolate({
                            inputRange:[0,1],
                            outputRange:[0,dot_indicator_size]
                        })
                    }]
                }]}
                />
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    image : {
        width : item_width,
        height : item_height,
        resizeMode:"stretch"
    },
    rowContainer:{
        flexDirection:"column",
        justifyContent:"flex-end"
    },
    Text:{
        color:"#bbab9b",
        fontWeight:"bold",
        fontFamily:"serif",
        fontStyle:"italic",
        paddingLeft:15
    },
    pagination : {
        flexDirection:"row",
        position:"absolute",
        top: item_height,
        left:item_width/2.55
    },
    dot : {
        width: dot_size,
        height : dot_size,
        borderRadius : dot_size,
        backgroundColor : "#eaece5",
        marginLeft: dot_spacing

    },
    dotIndicator : {
        width: dot_indicator_size,
        height : dot_indicator_size,
        borderRadius : dot_indicator_size,
        borderColor : "#bbab9b",
        borderWidth: 2,
        marginLeft: dot_spacing,
        position:"absolute",
        flexDirection:"row",
        top : -dot_size/2,
        left : -dot_size/2

    }
})

export default withNavigation(HighlightsView);