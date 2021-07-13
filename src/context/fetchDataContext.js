import React from "react";
import CreateDataContext from "./CreateDataContext";
import {navigate} from "../navigation/navigationRef";
import Api from "../Api/Api";

const fetchDataReducer = (state,action) => {
    switch(action.type)   {
        case "fetchDataByCategory":
            return {Result:action.payload,...state}
        case "error":
            return {errorMeaasge:action.payload}

        default:
            return state;


    } 
}

const fetchDataByCategory = (dispatch) => {
    return async ({category}) => {
        try {
            console.log(category);
            navigate("Signup",{data:"Success"})
            const response = await Api.get("/Service_by_category",{
                params: {
                    category
                }
            });
            
            dispatch({
                type:fetchDataByCategory,
                payload:response.data.Result
            })
            console.log(response.data.Result);
            navigate("ServicesScreen",{data:response.data.Result});
        }
        catch(e){
            dispatch ({
                type:"error",
                payload:"Error Occured during Signin"
            })            
        }
    }
}


export const {Provider,Context} = CreateDataContext(
    fetchDataReducer,
    {fetchDataByCategory},
    {Result:[],errorMeaasge:""}
);