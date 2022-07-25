import { DELITEM,DELSELECT,CHANGESELECT,ADDITEM,SELECTALL } from './count_constant'

const initData = [
    {id:1,name:'吃饭',isSelect:false},
    {id:2,name:'睡觉',isSelect:false},
    {id:3,name:'打豆豆',isSelect:false}
]
export default function countReducer(pre,action){
    if(pre === undefined) pre = initData
    const { type,data } = action
    let arr = []
    switch(type){
        case DELITEM:
            for(let i=0 ; i<pre.length ; i++){
                if(pre[i].id !== data){
                    arr.push(pre[i])
                }
            }
            return arr
        case CHANGESELECT:
            pre.forEach((i)=>{
                if(i.id === data) i.isSelect = !i.isSelect
                arr.push(i)
            })
            return arr
        case ADDITEM://新增
            let newItem = {
                id:pre.length+1,
                name:data,
                isSelect:false
            }
            return [newItem,...pre]
        
        case SELECTALL://全选
            pre.forEach((i)=>{
                i.isSelect = data
                arr.push(i)
            })
            return arr
        case DELSELECT:
            pre.forEach((item)=>{
                if(!item.isSelect) arr.push(item)
            })
            return arr
        default :
            return pre
    }
}