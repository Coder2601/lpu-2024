import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MainRoute from './components/routing/MainRoute.jsx'
import './index.css'
import { myStore } from './components/redux/store/store.js'
import {Provider} from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={myStore}>
    <App />
  </Provider>
    
    // <MainRoute />
)
