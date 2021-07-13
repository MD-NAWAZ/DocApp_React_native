import React,{useRef} from 'react';
import SigninScreen from "./src/screens/SigninScreen";
import Home from "./src/screens/Home";
import Signup from "./src/screens/Signup";
import NoScreen from "./src/screens/NoScreen";
import CartScreen from "./src/screens/CartScreen";
import ServicesScreen from "./src/screens/ServicesScreen";
import ConsultDoc from "./src/screens/ConsultDoc";
import SearchScreen from "./src/screens/SearchScreen";
import Setting from "./src/screens/Setting";
import Header from "./src/components/Header";
import {setNavigator} from "./src/navigation/navigationRef";
import {Provider as AuthProvider} from "./src/context/AuthContext";
import {Provider as FetchDataProvider} from "./src/context/fetchDataContext";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from 'react-native-elements';

const AuthStack = createStackNavigator();
const AuthFlow = () => {
  return (
    <AuthStack.Navigator>
        <AuthStack.Screen name = "NoScreen" component={NoScreen}options={{headerShown:false}}/>
        <AuthStack.Screen name = "Signin" component={SigninScreen}options={{headerShown:false}}/>
        <AuthStack.Screen name = "Signup" component={Signup} options={{headerShown:false}}/>
      </AuthStack.Navigator>
  )
}


const HomeStack = createStackNavigator();
const HomeBottomTab = createBottomTabNavigator();

const HomePage= createStackNavigator();
const HomePageFlow = () => {
  return (
      <HomePage.Navigator
      >
        <HomePage.Screen name = "Home" component={Home} options={{headerTitle: ()=><Header/>,headerLeft:false}}/>
        <HomePage.Screen name = "ServicesScreen" component={ServicesScreen} options={{headerTitle: ()=><Header/>,headerLeft:false}}/>
        <HomePage.Screen name = "CartScreen" component={CartScreen} options={{headerTitle: ()=><Header/>,headerLeft:false}}/>
        <HomePage.Screen name = "ConsultDoc" component={ConsultDoc} options={{headerShown:false,headerLeft:false}}/>
        <HomePage.Screen name = "SearchScreen" component={SearchScreen} options={{headerShown:false,headerLeft:false}}/>
        <HomePage.Screen name = "Setting" component={Setting} options={{headerShown:false,headerLeft:false}}/>
      </HomePage.Navigator>
  )
}

const HomeBottomTabFlow = () => {
  return (
    <HomeBottomTab.Navigator
    initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'blue',
        style: { position: "relative" },
        showLabel:false
      }}      
    >
      <HomeBottomTab.Screen name = "CartScreen" component={CartScreen} options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Icon
            brand
            name = "cart-plus"
            type = "font-awesome-5"
            size = {30}
            underlayColor="blue"
            />
          ),
          tabBarBadge:"My Cart",
          
        }}/>
      <HomeBottomTab.Screen name = "Home" component={HomePageFlow} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
            brand
            raised
            name = "house-user"
            type = "font-awesome-5"
            size = {40}
            underlayColor="blue"
            />
          ),
          headerShown:false
        }}/>
      <HomeBottomTab.Screen name = "Setting" component={Setting} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon
          brand
          name = "cogs"
          type = "font-awesome-5"
          size = {30}
          underlayColor="blue"
          />
        ),
        tabBarBadge:"Setting",
        tabBarBadgeStyle:{backgroundColor:"#9966ff",color:"#ffffff"}
      }}/>
    </HomeBottomTab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer ref ={(navigator)=>{setNavigator(navigator)}}>
      <HomeStack.Navigator>
        <HomeStack.Screen name = "Auth" component={AuthFlow} 
        options={{headerShown:false,
          headerTitle:"Docs App",
          headerLeft:false,
          headerStyle: {
            backgroundColor: '#4ddbff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <HomeStack.Screen name = "Home" 
        component={HomeBottomTabFlow} 
        options={{headerShown:false,
          headerTitle:"Welcome To your Shop",
          headerLeft:false,
          headerStyle: {
            backgroundColor: '#4ddbff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>        
      </HomeStack.Navigator>      
    </NavigationContainer>
  )
}

export default () => {
  return (
    <AuthProvider>
      <FetchDataProvider>
    <App
    />
    </FetchDataProvider>
      </AuthProvider>
  )
}

