import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const reRender = (state, getState, dispatch) => { 
    root.render(
        <App 
            state = {state}
            getState = {getState.bind(store)}
            dispatch = {dispatch.bind(store)}
            reRender = {reRender}
        />
    );
}

reRender(store.getState(), store.getState, store.dispatch)

reportWebVitals();
