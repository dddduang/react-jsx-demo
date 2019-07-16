import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionType'

const defaultState = {
  inputValue: 'Wirte Someting',
  list: []
}  // 默认数据

export default (state = defaultState, action) => { // 就是一个方法函数
  // console.log(state, action) // state: 指的是原始仓库里的状态。 action: 指的是action新传递的状态。
  if (action.type === CHANGE_INPUT) { // 记住: Reducer里只能接收state,不能改变state
    let newState = {...state}// 深度拷贝state
    newState.inputValue = action.value
    return newState
  }

  if (action.type === ADD_ITEM) {
    // console.log(state, action)
    let newState = JSON.parse(JSON.stringify(state))// 深度拷贝state
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }

  if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data.list
    return newState
  }

  return state
}