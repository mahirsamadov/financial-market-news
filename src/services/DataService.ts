import { instance } from "./network";
import { onValue, ref, remove, get, update } from "firebase/database";
import { db } from "../config/firebase";

class DataService<T> {
  getData(endpoint: string): Promise<T[]> {
    return instance
      .get(`${endpoint}`)
      .then((response) => response.data)
      .catch((error) => null);
  }

 async getDataWithFireBase(endpoint: string): Promise<T[]> {
    let loadedData: T[] = [];
    const dataRef = ref(db, endpoint);

    await get(dataRef)
      .then((snapshot) => {
        const data = snapshot.val();
        loadedData = data;
      })
      .catch((error) => {
        console.error(error);
      });
      console.log(loadedData)
      return loadedData as T[];
  }
}

export default DataService;
