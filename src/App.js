import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './listItem';
import Dialog from './dialog';

class App extends Component {

    constructor (props) {
        super(props);

        this.state = {
            finished: 0,
            list:[]
            // list: [{
            //     id: 0,
            //     name: '吃饭',
            //     status: 0
            // }, {
            //     id: 1,
            //     name: '睡觉',
            //     status: 0
            // }, {
            //     id: 2,
            //     name: '打豆豆',
            //     status : 0
            // }]
        };
    }

    addTask = (newitem) => {
        var allTask = this.state.list;
        allTask.push(newitem);
        this.setState({
            list: allTask
        });
    }

    updateFinished = (todoItem)=> {
        var sum = 0;
        this.state.list.forEach( (item) => {
            if (item.id === todoItem.id) {
                item.status = todoItem.status;
            }
            if (item.status === 1) {
                sum++;
            }
        });
        this.setState({
            finished: sum
        });
    }

    updateTotal = (todoItem) =>{
        var obj = [], sum = 0;
        this.state.list.forEach((item) => {
            if (item.id !== todoItem.id) {
                obj.push(item);
                if (item.status === 1 ) {
                    sum++;
                }
            }
        });
        this.setState({
            list: obj,
            finished: sum
        });
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <div className="container">
              <h1>TodoList</h1>
              <ul>
                  { this.state.list.map ((item) =>
                      <ListItem
                          item={item}
                          finishedChange={this.updateFinished}
                          totalChange={this.updateTotal}
                          key={item.id}
                      />
                  )}
                  <li>{this.state.finished}已完成&nbsp;/&nbsp;{this.state.list.length}总数</li>
              </ul>
              <Dialog addNewTask={this.addTask} nums={this.state.list.length}/>
          </div>

      }
      </div>
    );
  }
}

export default App;
