import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './redux/configureStore';
import App from './App/App';
import './index.css';

let initStore = store();

ReactDOM.render(
    <Provider store={initStore}>
        <Router>
            <Route exact path="/" component={App} />
        </Router>
    </Provider>
    , document.getElementById('root'));


registerServiceWorker();
