import React from 'react';
import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import Raven from 'raven-js';
import { sentry_url } from './data/config'

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

Raven.config(sentry_url, {
    tags: {
        version: '0.0.1',
        userLevel: 'entry'
    }
}).install();

const router = (
    <Provider store={store}>    
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
);

render (router, document.getElementById('root') );