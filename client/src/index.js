import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import StockApp from './workflows/StockApp/StockApp';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/configureStore';
import './index.css';



let initStore = store();


ReactDOM.render(
    <Provider store={initStore}>
        <StockApp />
    </Provider>
    , document.getElementById('root'));



registerServiceWorker();
