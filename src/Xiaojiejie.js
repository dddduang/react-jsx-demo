import React, { Component, Fragment } from 'react'
import XiaojiejieItem from './XiaojiejieItem'
import './xiaojiejie.css'
import axios from 'axios'
import Boss from './Boss';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

class Xiaojiejie extends Component {
  // 在某一时刻, 可以自动执行的函数就是生命周期函数

  // js的构造函数，由于其他任何函数执行
  constructor (props) {
    super(props) // 调用父类的构造函数，固定写法
    this.state = {
      inputValue: '<h1>一号标题</h1>', // input中的值
      list: [], // 服务列表  list是只读的,单项数据流
      dd: 9999
    }
  }

  componentDidMount() {
    axios.get('https://www.easy-mock.com/mock/5d0c9a712f214f4e82726c20/ReactDemo01/xiaojiejie').then(res => {
      // console.log(res)
      this.setState({
        list: res.data.data,
        dd: res.status
      })
    }).catch(err => {
      // console.log(err)
    })
  }
 
  render () {

    return (
      <Fragment>
        <Boss></Boss>
        {/* 注释的正确写法 */}
        <div>
          <a href=":;">123 --- {this.state.dd}</a>
          <label htmlFor="ddd">增加科目: </label>
          <input 
            id="ddd" 
            className="input" 
            value={this.state.inputValue} 
            onChange={this.inputChange.bind(this)}
            ref = {(input) => { this.input = input }}
          /> 
          <button onClick={this.addList.bind(this)}> 增加add </button>
        </div>
        <ul ref={(ul) => {this.ul=ul}}>
          <TransitionGroup>
            {
              this.state.list.map((item, index) => {
                return (
                  <CSSTransition
                    timeout={1000}
                    classNames='boss-text'
                    unmountOnExit
                    appear={true}
                    key={index+item}
                  >
                    <XiaojiejieItem 
                    content={item} 
                    index={index} 
                    deleteItem={this.deleteItem.bind(this)}
                    />
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup>
        </ul>
      </Fragment>
    )
  }

  inputChange(e) {
    // console.log(e)
    this.setState({ // 改变值的方法
      // inputValue: e.target.value // e.target.value 当前框里输入的值
      inputValue: this.input.value
    })
  }

  // 增加列表
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    }, () => {
      console.log(this.ul.querySelectorAll('div').length) // 因为是异步,所以还等虚拟dom渲染,console就已经执行你,所以要这样写
    })
    
  }

  deleteItem(index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }

}

export default Xiaojiejie
