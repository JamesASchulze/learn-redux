import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// this file combines the posts and comments reducer files.
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({ posts, comments, router: routerReducer });

export default rootReducer;