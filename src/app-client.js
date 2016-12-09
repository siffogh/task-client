import React from 'react'
import {Router,browserHistory} from 'react-router'
import ReactDom from 'react-dom'
import routes from './routes'


window.onload = ()=>{
    ReactDom.render(
        <Router routes={routes} history={browserHistory}/>,
        document.getElementById('main')
    )
}
