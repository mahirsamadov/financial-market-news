import axios from "axios";
import { API_KEY, machineIP } from "../config";



const baseURL = `https://newsapi.org/v2/`;

export const instance = axios.create({
    baseURL,
  });

