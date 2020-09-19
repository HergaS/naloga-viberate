import { createStore, combineReducers } from 'redux';

import artists from './reducers/artistReducer';

export default createStore (
    combineReducers({
        artists
    })
);