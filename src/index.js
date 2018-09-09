import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";

import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk';

import loginReducer from '../src/store/reducer/LoginReducer';
import loadingReducer from '../src/store/reducer/LoadingBarReducer';
import registerReducer from '../src/store/reducer/RegisterReducer';
import imageReducer from '../src/store/reducer/ImageReducer';


const rootReducer = combineReducers({

    isLoginReducer: loginReducer,
    isLoad: loadingReducer,
    isImageReducer:imageReducer,
    isRegister:registerReducer

});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (

    <Provider store={store}>
        <BrowserRouter basename="/">
            <App/>
        </BrowserRouter>
    </Provider>

);

ReactDOM.render(app, document.getElementById('root'));

