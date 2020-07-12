import React from "react";
import ReactDOM from "react-dom";

import App from "./App"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { QueryParamProvider } from "use-query-params";

/*
 * El método `ReactDOM.render` es el que nos permite convertir nuestros componentes de React
 * al DOM de nuestro navegador, en el container especificado.
 * Ver https://reactjs.org/docs/react-dom.html#render
 */
ReactDOM.render(
    /*
     * El componente `QueryParamProvider` es un auxiliar para poder usar los Tabs en nuestra
     * aplicación de ejemplo.
     * El componente principal que nos interesa renderear es `App`
     */
    <Router>
        <QueryParamProvider ReactRouterRoute={ Route }>
            <App />
        </QueryParamProvider>
    </Router>,
    document.getElementById("root")
);
