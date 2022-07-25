import React, { Component } from 'react'


/*
//类组件写法
class Demo extends Component {

  state = {
    count:0
  }

  componentDidMount(){
    console.log('componentDidMount')
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  add = ()=>{
    let { count } = this.state
    this.setState({ count:count+1 })
  }

  render() {
    let { count } = this.state
    return (
      <div>
        <h2>当前求和为{count}</h2>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }

}
*/

//函数组件写法
function Demo(){
  const [count,setCount] = React.useState(0)
  const [name,setName] = React.useState('Tom')

  /*
  React.useEffect(()=>{
    //第二个参数不传参默认监控所有值改变，页面初始渲染render时调用一次，state改变时调用
    // 调用次数1+n次
    console.log('@')
  })
  */

  React.useEffect(()=>{
    //第二个参数传入一个空数组默认不监控数据，页面初始渲染render时调用一次
    console.log('@')
    return ()=>{
      //不监控state数据时return一个函数，当组件即将卸载时调用该函数(componentWillUnmount)
      console.log('delete')
    }
  },[])

  /*
  React.useEffect(()=>{
    //第二个参数传入一个数组,监控传入state值的变化，页面初始渲染render时调用一次，监控的state值发生改变时调用
    // 调用次数1+监控的state值发生变化次数
    console.log('@')
  },[count])
  */

  function add(){
    setCount(count+1)
  }

  function changeName(){
    setName('Jun')
  }

  return (
    <div>
      <h2>当前求和为{count}</h2>
      <h2>名称为{name}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={changeName}>点我改名</button>
    </div>
  )
}


export default Demo