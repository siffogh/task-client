import React from 'react'
import {Route,IndexRoute} from 'react-router'
import App from './components/App'
import Records from './components/Records'
import Actor from './components/Actor'

const routes = (
    <Route path='/' component={App}>
        <IndexRoute component={Records}/>
        <Route path='/actor' component={Actor}/>
    </Route>
)


export default routes;