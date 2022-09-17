import { combineReducers } from 'redux'
import counter from './counter'
import token from './token'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['counter', 'token'],
}

export const rootReducer = combineReducers({
  counter,
  token,
})

export default persistReducer(persistConfig, rootReducer)
