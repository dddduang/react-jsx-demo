import React, { Component } from 'react'; // immc
import propTypes from 'prop-types';

class XiaojiejieItem extends Component { // cc
  constructor(props) {
    // 在react  通常构造函数用于以下两种
    // 1. 通过给 this.state 赋值对象来初始化内部state
    // 2. 为事件处理函数绑定实例
    super(props) // 在为React.Component子类实现构造函数时,应在其他语句之前调用 super(props). 否则 this.props 在构造函数中可能会出现未定义的bug
    this.handleChilk=this.handleChilk.bind(this) // 在构造函数中绑定性能要高一些,特别是在高级开发中,会有很大的作用
  }
  state = {  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }
 

  render() { 
    return ( 
      <div>
        <li onClick={this.handleChilk}>
          {this.props.name}为你做--{this.props.content}
        </li> 
      </div>
                
     );
  }

  handleChilk() {
    // this.props.list = []
    // console.log(this.props.index) // react 有明确规定 子组件是不能操作父组件中的数据的,需要借助父组件的一个方法,来修改父组件中的内容.
  }
}

XiaojiejieItem.propTypes = { // 验证父组件的值
  name: propTypes.string.isRequired,
  content: propTypes.string,
  index: propTypes.number,
  deleteItem: propTypes.func
}
XiaojiejieItem.defaultProps = { // 默认值
  name: 'jjie'
}
 
export default XiaojiejieItem;

