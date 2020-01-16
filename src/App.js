import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';
import Item from './components/Item';
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {

  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem = () => {
    this.props.shopping.addItem(this.state.newItem)
  }

  render() {
    return (
      <div className="App">
        <DevTools/>
        <input onChange = {this.handleChange}/>
        <button onClick = {this.addItem}>Add</button>
      {/* your code here
          You should map each grocery item into an Item component  
      */}  
        {this.props.shopping.list.map((i,ind) => <Item item = {i} 
                                                    key = {ind}
                                                    shopping = {this.props.shopping}/>
          )}
      </div>
    );
  }
}

export default App;
