import { BaseData } from "../models";
import { instance } from "./network";


class DataService<T extends BaseData> {

    getData(endpoint: string): Promise<T[]> {
        return instance.get(`${endpoint}`)
            .then(response => response.data)
            .catch(error => console.log(error));
    }

    getDataById(endpoint: string, id: number): Promise<T> {
        return instance.get(`${endpoint}`)
            .then(response => response.data.find((data:T) => data.id === id))
            .catch(error => console.log(error));
    }


}

export default DataService