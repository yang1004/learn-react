
import { INCREMENT,DECREMENT } from './count_constant'

// 加
export const createIncrementAction = data => ({type:INCREMENT,data})
// 减
export const createDecrementAction = data => ({type:DECREMENT,data})
