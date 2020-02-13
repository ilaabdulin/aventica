import React from 'react'

import classes from './App.module.css'
import {GlobalState} from 'context/globalState'
import {Navbar} from 'components/Navbar'
import {Form} from 'components/Form'
import {Draft} from 'components/Draft'
import {Main} from 'components/Main'

// Принимаем глобальное состояние

 const App = () => {
    return (
        <GlobalState>
            <div className = {classes.App}>
                <Navbar/>
                <Form/>
                <Draft/>
                <Main/>
            </div>
        </GlobalState>
    )
}

export default App;