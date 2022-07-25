import React, { Component } from 'react'
import Count from './containers/Count'
import store from './redux/store'

export default class App extends Component {

    //使用react-redux不用更新也可以更新页面
    // componentDidMount(){
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }

    render() {
        return (
            <div>
                <Count store={store}/>
            </div>
        )
    }
}
