import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import _ from 'lodash';

import {Provider} from 'react-redux';
import {  Route} from 'react-router';
import {BrowserRouter, Switch} from 'react-router-dom';
import {store} from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

window._ = _;

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
                <Switch>
                    <Route exact url ='/' component={App}/>
                </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
