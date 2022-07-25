import { INCREMENT,DECREMENT } from './count_constant'

const initData = 0
export default function countReducer(pre,action){
    if(pre === undefined) pre = initData
    const { type,data } = action
    switch(type){
        case INCREMENT:
            return pre + data
        case DECREMENT:
            return pre - data
        default :
            return pre
    }
}