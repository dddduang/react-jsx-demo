import React from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <div className="Comment">
        <div className="UserInfo">
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div>{false ? 'aaa' : 'bbb'}</div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Welcome name="Sara" author={{name:'UserInfo-name1'}} text="Comment-text4"/>
        <Welcome name="Cahal" author={{name:'UserInfo-name2'}} text="Comment-text5"/>
        <Welcome name="Edite" author={{name:'UserInfo-name3'}} text="Comment-text6"/>
      </header>
    </div>
  );
}

export default App;
