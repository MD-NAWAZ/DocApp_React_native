import React from 'react';
import {Text,View} from "react-native";
import LottieView from 'lottie-react-native';
import {Avatar,icon} from "react-native-elements";

const Signup = ({route,navigation}) => {
  const {data} = route.params;

    return (
        <View style={{width:"100%",height:"40%"}}>
      
      <Avatar
                size="large"
                icon={{name: 'rocket', color: 'orange', type: 'font-awesome'}}
                overlayContainerStyle={{backgroundColor: 'grey'}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={{flex: 1, marginTop: 75}}
                />
                
      <Text>{data.length}</Text>          
      </View>
      
      
    )
}

export default Signup;
