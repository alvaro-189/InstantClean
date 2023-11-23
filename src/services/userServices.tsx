//import { instantCleanApi } from "../api/instantCleanApi";
import axios from "axios"; 
const baseURL='http://localhost:3001/'


export const getUsers = async ()=>{
    try {
        const request = await axios.get(baseURL+"/users/getUsers")
        return request.data
    } catch (error) {
        console.log('Error getting users',error);
        return null
    }
}