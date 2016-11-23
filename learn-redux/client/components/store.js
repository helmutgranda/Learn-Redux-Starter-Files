import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory} from 'react-router';

import routeReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
  posts,
  comments: comments
}

const store = createStore(rooteReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
