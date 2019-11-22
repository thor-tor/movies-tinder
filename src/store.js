import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import moviesReducer from './state/movies/ducks'
import { thunk } from 'react-redux'

const store = createStore(moviesReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store