import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';
//import {composeWithDevTools} from 'remote-redux-devtools';

const middleware = [thunk];

const composeWithEnhancer = composeWithDevTools({});
const configureStore = createStore(rootReducer,composeWithEnhancer(applyMiddleware(...middleware)));

// const composeWithEnhancer = composeWithDevTools({realtime:true,port:8000});
// const configureStore = createStore(rootReducer,composeWithEnhancer(applyMiddleware(...middleware)));


export default configureStore;