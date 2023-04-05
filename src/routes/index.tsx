import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { DetailsPage } from "../pages/DetailsPage";
import { IndexPage } from "../pages/IndexPage";
import { Root } from "../Root";
import DataService from "../services/DataService";
import { Article } from "../models";
import { API_KEY } from "../config";

const endpoint = `top-headlines?country=us&category=business&apiKey=${API_KEY}`
const endpointForFirebase = `articles`
const service = new DataService<Article>()

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root/>}>
        <Route index element={<IndexPage/>} loader={async ()=>{return await service.getDataWithFireBase(endpointForFirebase)}}/>
    <Route path="/details/:id" element={<DetailsPage/>} loader={async ()=>{return await service.getDataWithFireBase(endpointForFirebase)}}    />
    </Route>
));

  export default router;