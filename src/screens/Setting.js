import React from 'react';
import {Text,View,StyleSheet} from "react-native";
import LottieView from 'lottie-react-native';
import { ListItem, Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer',
    type: ""
  },
  {
    title: 'Account',
    icon: 'user',
    type: "font-awesome"
  },
  {
    title: 'Invoice',
    icon: 'receipt',
    type: "font-awesome5"
  },
  {
    title: 'Customer Care',
    icon: 'headset',
    type: "font-awesome5"
  },
  {
    title: 'Sign-out',
    icon: 'log-out',
    type: "feather"
  }
]

const Setting = ({navigation}) => {
    return (
        <SafeAreaView style={styles.outerContainer}>
  {
    list.map((item, i) => (
      <ListItem key={i} bottomDivider>
        <Icon name={item.icon} type={item.type}/>
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }
</SafeAreaView>

      
      
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        flex:1,
        justifyContent:"flex-start" ,
        padding:15
        //paddingTop: Platform.OS === 'android' ? 100 : 0   
    }
})

export default Setting;