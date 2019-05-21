//Import create store and apply middleware
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import moduleName from '../components/reducers'

const initialState = {};

const middleware = [thunk];

const storeReducer = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)