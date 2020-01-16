import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Item } from '../src/stores/Item'
import { ShoppingList } from '../src/stores/ShoppingList'


let potatoes = new Item("Potatoes")
let shoppingList = new ShoppingList()
shoppingList.list.push(potatoes, potatoes, potatoes)

// Use the prop "store" for your store
ReactDOM.render(<App shopping={shoppingList}/>, document.getElementById('root'));
registerServiceWorker();
