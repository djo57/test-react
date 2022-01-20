import React from "react";
import ReactDOMServer from "react-dom/server";
import axios from 'axios';
import DataApi from "DataApi";

import App from "./components/App";

const serverRender = async () => {
    const rawData = await axios.get('http://localhost:4242/data');
    /*const api = new DataApi(rawData.data);
    const initialData = {
        articles: api.getArticles(),
        authors: api.getAuthors(),
    };*/
    const store = new DataApi(rawData.data);

    return{
        initialMarkup: ReactDOMServer.renderToString(
        <App store={store} />
        ),
        initialData: rawData.data,
    };
};

export default serverRender;