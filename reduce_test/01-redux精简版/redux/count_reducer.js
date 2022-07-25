

const initData = 0
export default function countReducer(pre,action){
    if(pre === undefined) pre = initData
    const { type,data } = action
    switch(type){
        case 'increment':
            return pre + data
        case 'decrement':
            return pre - data
        default :
            return pre
    }
}