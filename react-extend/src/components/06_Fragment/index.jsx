import React, { Component,Fragment } from 'react'

export default class Demo extends Component {
  render() {
    //Fragment标签react编译后会去掉该标签,只能传一个key参数，其他参数报错
    return (
      <Fragment key={1}>
        <input type="text" />
        <input type="text" />
      </Fragment>
    )
  }
}
