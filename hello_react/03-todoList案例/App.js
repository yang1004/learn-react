import React,{ Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component{

    state = {
        list:[
            {id:1,name:'吃饭',isSelect:false},
            {id:2,name:'睡觉',isSelect:false},
            {id:3,name:'打豆豆',isSelect:false}
        ]
    }

    render(){
        let { list } = this.state
        return (
            <div className="app">
                <Header addItem={this.addItem}/>
                <List list={list} changeSelect={this.changeSelect} delItem={this.delItem}/>
                <Footer list={list} updateList={this.updateList} delSelect={this.delSelect}/>
            </div>
        )
    }

    addItem = (item)=>{
        let { list } = this.state
        let newItem = {
            id:list.length+1,
            name:item,
            isSelect:false
        }
        this.setState({
            list:[newItem,...list],
        })
    }

    changeSelect = (id)=>{
        let { list } = this.state
        list.forEach((i)=>{
            if(i.id === id) i.isSelect = !i.isSelect
        })
        this.setState({ list })
    }

    delItem = (id)=>{
        if(window.confirm('确实要删除吗?')){
            let { list } = this.state
            for(let i=0 ; i<list.length ; i++){
                if(list[i].id === id){
                    list.splice(i,1)
                    this.setState({list})
                    break;
                }
            }
        }
    }

    updateList = (list)=>{
        this.setState({ list })
    }

    delSelect = ()=>{
        let arr = []
        let { list } = this.state
        list.forEach((item)=>{
            if(!item.isSelect) arr.push(item)
        })
        this.setState({ list:arr })
    }

}