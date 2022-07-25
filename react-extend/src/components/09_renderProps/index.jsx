import React, { Component } from 'react'
import './index.css'
import Count from '../01_setState'


export default class A extends Component {
  state = {
    username:'Tom'
  }
  render() {
    const { username } = this.state
    return (
      <div className="parent">
        <h2>A组件</h2>
        <h3>用户名是：{username}</h3>
        {/**
         *  <B>
              <C username={username}/>
            </B>
         */}

        {/* <B render={name => <C username={name}/>}/> */}
        
        <B render={name => <Count username={name}/>}/>
      </div>
    )
  }
}

class B extends Component {
  state = {
    username:'Jun'
  }
  render() {
    console.log(this.props)
    return (
      <div className="child">
        <h2>B组件,{this.state.username}</h2>
        {/* {this.props.children} */}
        {this.props.render(this.state.username)}
      </div>
    )
  }
}


class C extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="grand">
        <h2>C组件,{this.props.username}</h2>
      </div>
    )
  }
}