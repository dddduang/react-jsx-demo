import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'

class TodoListUi extends Component {
  render() { 
      return ( 
        <div style={{ margin: '20px' }}>
          <div>123</div>
          <div>
            <Input placeholder={this.inputValue} style={{ width: '250px', marginRight: '10px' }} onChange={ this.props.changeInputValue.bind(this) }/>
            <Button type="primary" onClick={this.props.clickBtn.bind(this)}>Add</Button>
          </div>

          <div style={{ marginTop: '20px', width: '400px' }}>
            <List 
              bordered 
              dataSource={this.props.list}
              renderItem={(item, index) => (<List.Item onClick={this.props.deleteItem.bind(this, index)}>{item}</List.Item>)}
            ></List>
          </div>
        </div>
      )
  }
}
 
export default TodoListUi;