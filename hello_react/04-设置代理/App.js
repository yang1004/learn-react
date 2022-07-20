import React,{ Component } from 'react'
import axios from 'axios'

export default class App extends Component{

    getStudentsData = ()=>{
        axios.get('http://localhost:3000/api1/students').then(res => {
            console.log(res.data)
        })
    }

    getCarData = ()=>{
        axios.get('http://localhost:3000/api2/cars').then(res => {
            console.log(res.data)
        })
    }

    render(){
        return (
            <div>
                <button onClick={this.getStudentsData}>点我获取学生数据</button>
                <br /><br />
                <button onClick={this.getCarData}>点我获取车数据</button>
            </div>
        )
    }

}