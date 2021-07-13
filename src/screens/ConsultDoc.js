import React from "react";
import {Animated,View,StyleSheet,FlatList,Image,Dimensions} from "react-native";
import {Text} from "react-native-elements";
import {withNavigation} from "@react-navigation/compat";
import {Icon} from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";


const {width,height} = Dimensions.get("window");
const item_width = width;
const item_height = height*0.4;
const dot_size = 8;
const dot_spacing = 8;
const dot_indicator_size = dot_size + dot_spacing;

const ConsultDoc = ({route,navigation}) => {
    const {data} = route.params;
    const scrollX = React.useRef(new Animated.Value(0)).current;
    
    return (
        <SafeAreaView>
        <Animated.View style= {{...styles.rowContainer}}>
            
            <Animated.FlatList
            data={data.image}
            keyExtractor={(item)=>item._id.toString()}
            horizontal={true }
            showsHorizontalScrollIndicator={false}
            snapToInterval={item_width}
            decelerationRate="fast"
            bounces={false}
            decelerationRate={0.7}
            onScroll={Animated.event(
                [{nativeEvent:{contentOffset:{x:scrollX}}}],
                {useNativeDriver:true}
            )}
            renderItem={({item})=>{
                return (
                    <View >                        
                            <Image style={styles.image}
                            source={{uri:item.url}}
                            
                            />
                    </View>
                    
                )                
            }}
            />
            <View style={styles.pagination}>
                {data.image.map((index,i)=>{
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
        <Icon
        raised
        name='chevron-left'
        type='font-awesome'
        color='rgb(255, 204, 0)'
        size={20}
        onPress={() => navigation.goBack()} 
        containerStyle={{flex:1,position:"absolute",left:item_width*0.0005,top:item_height*0.1}}/>
        </SafeAreaView>
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
        justifyContent:"flex-end",
    },
    Text:{
        color:"rgb(255, 204, 0)",
        fontWeight:"bold",
        fontFamily:"serif",
        fontStyle:"italic",
        paddingLeft:15
    },
    pagination : {
        flexDirection:"row",
        position:"absolute",
        top: item_height*0.95,
        left:item_width/2.55
    },
    dot : {
        width: dot_size,
        height : dot_size,
        borderRadius : dot_size,
        backgroundColor : "#33d6ff",
        marginLeft: dot_spacing

    },
    dotIndicator : {
        width: dot_indicator_size,
        height : dot_indicator_size,
        borderRadius : dot_indicator_size,
        borderColor : "rgb(255, 204, 0)",
        borderWidth: 2,
        marginLeft: dot_spacing,
        position:"absolute",
        flexDirection:"row",
        top : -dot_size/2,
        left : -dot_size/2

    }
})

export default withNavigation(ConsultDoc);