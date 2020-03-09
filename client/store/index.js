import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user, {logout} from './user'
import experience from './experience'
import cart from './cart'
import admin from './admins'

const reducer = combineReducers({user, experience, cart, admin})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export {logout}
export * from './user'
export * from './experience'
export * from './cart'
