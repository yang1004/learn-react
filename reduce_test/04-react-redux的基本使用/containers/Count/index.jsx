//引入连接方法connect
import { connect } from 'react-redux'

//引入UI组件Count
import Count from '../../components/Count'

import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action'

/**
 * 1.connet的第一个参数mapStateToProps，接受到store的state值
 * 2.mapStateToProps返回值为对象，key为state的名称，value为state
 */
function mapStateToProps(state){
    return { count:state }
}

/**
 * 1.connet的第二个参数mapDispatchToProps，接受到store的dispatch
 * 2.mapDispatchToProps返回值为对象，key为修改状态的方法名称，value为修改状态的方法
 */
function mapDispatchToProps(dispatch){
    return {
        jia: number => dispatch(createIncrementAction(number)),
        jian: number => dispatch(createDecrementAction(number)),
        jiaAsync: (number,time) => dispatch(createIncrementAsyncAction(number,time)),
    }
}

//创建并暴露react-redux容器
export default connect(mapStateToProps,mapDispatchToProps)(Count)