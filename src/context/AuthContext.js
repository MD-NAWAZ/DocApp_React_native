import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreateDataContext from "./CreateDataContext";
import {navigate} from "../navigation/navigationRef";
import Api from "../Api/Api";

const authReducer = (state,action) => {
    switch(action.type) {
        case "signin":
            return {token:action.payload}
        case "error":
            return {...state,errorMessage:action.payload}
        default:
            return state;
    }
}

const Signin = (dispatch,navigation) => {
    return async ({Email,Password}) => {
        try {
            const response = await Api.post("/Login",{Email:Email,Password:Password});
            await AsyncStorage.setItem("token",response.data.Token);
            dispatch({
                type:"signin",
                payload:response.data.token
            });
            console.log(response.status);
            navigate("Home");
            
            
        }
        catch(e){
            dispatch ({
                type:"error",
                payload:"Error Occured during Signin"
            })
        }

    };
};

export const {Provider,Context} = CreateDataContext(
    authReducer,
    {Signin},
    {token:null,errorMessage:""}
);
