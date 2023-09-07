import './index.css';
import reportWebVitals from './reportWebVitals';
// import store from "./redux/reduxStore";
import ReactDOM from "react-dom/client";
import React from "react";
// import {BrowserRouter} from "react-router-dom";
import MainApp from "./App";
// import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <MainApp/>
    // <React.StrictMode>
    //     <BrowserRouter>
    //         <Provider store={store}>
    //             <App/>
    //         </Provider>
    //     </BrowserRouter>
    // </React.StrictMode>
);

reportWebVitals();
