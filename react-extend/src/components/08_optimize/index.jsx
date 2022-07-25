import React, { PureComponent } from 'react'
import './index.css'


/*
//当父组件state发生改变时会默认调用子组件render,改写shouldComponentUpdate可解决此问题，但数据字段量大的时候就会代码臃肿
export default class Parent extends Component {

  state = {
    carName:'奔驰C63'
  }

  changeCar = ()=>{
    this.setState({
      carName:'迈巴赫'
    })
    // this.setState({})
  }

  //即将改变的新props--nextProps；即将改变的新state--nextState
  //当carName没有发生改变时不更新页面
  shouldComponentUpdate(nextProps,nextState){
    console.log('shouldComponentUpdate===>',nextProps,nextState)
    return !(this.state.carName===nextState.carName)
  }

  render() {
    console.log('Parent----render')
    const { carName } = this.state
    return (
      <div className="parent">
        <h2>Parent...</h2>
        <p>车名称为{carName}</p>
        <button onClick={this.changeCar}>点击换车</button>
        <Child carName="奥拓"/>
      </div>
    )
  }
}


class Child extends Component {

  //即将改变的新props--nextProps；即将改变的新state--nextState
  //当carName没有发生改变时不更新页面
  shouldComponentUpdate(nextProps,nextState){
    console.log('shouldComponentUpdate===>',nextProps,nextState)
    return !(this.props.carName === nextProps.carName)
  }

  render() {
    console.log('Child----render')
    const { carName } = this.props
    return (
      <div className="child">
        <h2>Child...</h2>
        <p>车名称为{carName}</p>
      </div>
    )
  }
}

*/


//PureComponent-->当组件值发生改变时会判断子组件是否需要render或者setState是否改变的是空对象
export default class Parent extends PureComponent {

  state = {
    carName:'奔驰C63'
  }

  changeCar = ()=>{
    this.setState({
      carName:'迈巴赫'
    })
    // this.setState({})//不会进行更新render

    /*
    //setState的值与原state值有关联时不会更新render，类似obj指向赋值、数组操作并直接setState该数组
    //不要直接修改state中的数据，而是要产生新的数据进行setState
    let obj = this.state
    obj.carName = '奥迪'
    this.setState(obj)
    */
  }

  render() {
    console.log('Parent----render')
    const { carName } = this.state
    return (
      <div className="parent">
        <h2>Parent...</h2>
        <p>车名称为{carName}</p>
        <button onClick={this.changeCar}>点击换车</button>
        <Child carName={carName}/>
      </div>
    )
  }
}


class Child extends PureComponent {

  render() {
    console.log('Child----render')
    const { carName } = this.props
    return (
      <div className="child">
        <h2>Child...</h2>
        <p>车名称为{carName}</p>
      </div>
    )
  }
}

