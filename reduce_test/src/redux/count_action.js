
import { DELITEM,DELSELECT,CHANGESELECT,ADDITEM,SELECTALL } from './count_constant'

// 删除
export const createDelItemAction = data => ({type:DELITEM,data})
//改变勾选
export const createChangeSelectAction = data => ({type:CHANGESELECT,data})
//新增
export const createAddItemAction = data => ({type:ADDITEM,data})
//全选
export const  createSelectAllAction = data => ({type:SELECTALL,data})
// 减
export const createDelSelectAction = data => ({type:DELSELECT,data})