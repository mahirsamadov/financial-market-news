import axios from "axios";
import { machineIp } from "../config";

const baseURL = `http://${machineIp}:5173/src/data/`;

export const instance = axios.create({
    baseURL,
    timeout: 1000,
  });

