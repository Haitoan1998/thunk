import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import mystore from './Redux/Redux-store.jsx';
// import store from './Redux/reduxcore/storeReduxcore.jsx';
import { Provider } from 'react-redux';
import FileCha from './Redux/prop/FileCha.jsx';
import storeThunk from './Redux/ReduxThunkTK/storeThunk.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={storeThunk}>
            <App />
        </Provider>
    </React.StrictMode>,
);
