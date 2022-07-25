import React, { Component,Fragment } from 'react'

// import Demo from './components/01_setState'
// import Demo from './components/03_useState'
// import Demo from './components/04_useEffect'
// import Demo from './components/05_useRef'
// import Demo from './components/06_Fragment'
// import Demo from './components/07_Context'
// import Demo from './components/08_optimize'
import Demo from './components/09_renderProps'

export default class App extends Component {
    state = {
        show:true
    }
    changeShow = ()=>{
        const { show } = this.state
        this.setState({
            show:!show
        })
    }
    render() {
        return (
            <Fragment>
                {
                    this.state.show ? <Demo /> : ''
                }
                <button onClick={this.changeShow}>组件卸载/显示</button>
            </Fragment>
        )
    }
}
