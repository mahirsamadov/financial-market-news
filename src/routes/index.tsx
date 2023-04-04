import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { DetailsPage } from "../pages/DetailsPage";
import { IndexPage } from "../pages/IndexPage";
import { Root } from "../Root";
import DataService from "../services/DataService";
import { Article } from "../models";


const service = new DataService<Article>()

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root/>}>
        <Route index element={<IndexPage/>} loader={()=>{return service.getData('articles.json')}}/>
    <Route path="/details/:id" element={<DetailsPage/>} loader={()=>{return service.getData('articles.json')}}    />
    </Route>
));

  export default router;