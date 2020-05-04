import '@tmkelly28/tk-css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store/store'
import Game from './Game'

ReactDOM.render(
  <Provider store={store}>
<Game />
  </Provider>,
  document.getElementById('app')
)
