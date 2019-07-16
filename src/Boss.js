import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group'

class Boss extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
    this.toToggole = this.toToggole.bind(this)
  }
  render() { 
    return ( 
      <Fragment>
        <CSSTransition
          in={this.state.isShow} // 用于判断时候出现的状态
          timeout={2000}         // 动画持续的时间
          classNames="boss-text" // className值, 防止重复   需要注意的是classNames这个属性是由s的，如果你忘记写，会和原来的ClassName混淆出错，这个一定要注意。
          unmountOnExit
          >
          <div>Boss级人物--孙悟空</div>
        </CSSTransition>
        
        <div>
          <div className={this.state.isShow ? 'show' : 'hide'}>Boss级人物-Boss</div>
          <div><button onClick={this.toToggole}>召唤Boss</button></div>
        </div>
      </Fragment>
     );
  }

  toToggole(){
    this.setState({
      isShow:this.state.isShow ? false : true
    })
  }
}
 
export default Boss;