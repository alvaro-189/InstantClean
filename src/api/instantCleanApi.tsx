import axios from "axios"; 
import AsyncStorage from "@react-native-async-storage/async-storage";
const baseURL='http://localhost:3001/'

export const instantCleanApi = axios.create({baseURL})
