import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faWindowClose,
    faUserCircle,
    faHome,
    faQuestion,
    faUserPlus
} from '@fortawesome/free-solid-svg-icons';

import Routes from './Routes';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';

library.add(
    fab,
    faWindowClose,
    faUserCircle,
    faHome,
    faQuestion,
    faUserPlus
);

const savedUser = () => {
    if (localStorage.getItem('username') === null) {
        return {};
    }

    return { username: localStorage.getItem('username') };
};

const initialState = {
    posts: [],
    user: savedUser()
};

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Routes />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.register();
