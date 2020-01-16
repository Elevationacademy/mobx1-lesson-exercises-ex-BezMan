import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    checkItem = () => {
        //your code here
      }
      editItem = () => {
        //your code here
      }
      deleteItem = () => {
        //your code here
      }
      render() {
        let item = this.props.item
        return (
            <div> {item.name} </div>)
    }

}

export default Item