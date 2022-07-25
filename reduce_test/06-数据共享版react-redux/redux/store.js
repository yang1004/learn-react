import { createStore,applyMiddleware } from 'redux'

import countReducer from './count_reducer.js'

import thunk from 'redux-thunk'

/*
    初始化redux时store自动调用reducer拿到初始值，修改值时调用action，异步action为一个函数，
    store通过中间件调用该函数会将dispatch传入函数内，然后通过dispatch调用store进而调用reducer
*/
export default createStore(countReducer,applyMiddleware(thunk))