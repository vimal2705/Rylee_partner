
import React from 'react'
import store from './src/store'
import {Provider} from 'react-redux'

import Root from './Root'

const App = () => {
    return(
        <Provider store={store}>
            <Root/>
        </Provider>
    )
}

export default App