import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import moviesReducer from './state/movies/duck'
import thunk from 'redux-thunk'

const store = createStore(moviesReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store