import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from "./todo/todo.reducer"

const rootReducer = combineReducers({
    Todo: reducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

