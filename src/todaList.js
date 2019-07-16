import React, { Component } from 'react';
import store from './store'
import { changeInputAction, addItemAction, deleteItemAction, getListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)  // 转变this指向

    this.clickBtn = this.clickBtn.bind(this)

    this.deleteItem = this.deleteItem.bind(this)
  }

  render() { 
    return ( 
      <div>
        <TodoListUI
          inputValue={this.state.inputValue}
          list={this.state.list}
          changeInputValue={this.changeInputValue}
          clickBtn={this.clickBtn}
          deleteItem={this.deleteItem}
        />
      </div>
     );
  }

  changeInputValue(e) {
    // 想改变Redux里边State的值就要创建Action了. Action就是一个对象,这个对象一般有两个属性, 第一个是对Action 的描述, 第二个是要改变的值
    const action = changeInputAction(e.target.value)
    store.dispatch(action) // action创建好了, 要通过diapatch()方法传递给store. 这时Action就已经完全创建完成了,也和store有了联系  store只是一个仓库,并没有管理能力,会把收到的action自动转发给Reducer  1. store是唯一的,多个store是不被允许的   2. 只有store能改变自己的内容, Reducer不能改变  3. Reducer必须是纯函数
  }

  storeChange() {
    this.setState(store.getState())
  }

  clickBtn() {
    const action = addItemAction()
    store.dispatch(action)
  }

  deleteItem(index) {
    console.log('deleteItem', index)
    const action = deleteItemAction(index)
    store.dispatch(action)
  }

  componentDidMount() {
    axios.get('https://www.easy-mock.com/mock/5d0c9a712f214f4e82726c20/ReactDemo01/list').then(res => {
      const data = res.data.data
      const action = getListAction(data)
      store.dispatch(action)
    })
  }
}
 
export default TodoList;