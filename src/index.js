import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { createStore } from './app/store/createStore'
import { Provider } from 'react-redux'

const store = createStore()
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
