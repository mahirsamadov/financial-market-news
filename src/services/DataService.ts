
import { instance } from "./network";


class DataService<T> {

    getData(endpoint: string): Promise<T[]> {
        return instance.get(`${endpoint}`)
            .then(response => response.data)
            .catch(error => null);
    }

}

export default DataService