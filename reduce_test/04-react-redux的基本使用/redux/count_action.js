
import { INCREMENT,DECREMENT } from './count_constant'

// 加
export const createIncrementAction = data => ({type:INCREMENT,data})
// 减
export const createDecrementAction = data => ({type:DECREMENT,data})
// 异步action
export const createIncrementAsyncAction = (data,time) => {
    //异步action传入函数，store自动调用该函数并参数为dispatch
    return (dispatch) => {
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },time)
    }
}