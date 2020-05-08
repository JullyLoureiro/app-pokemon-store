import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import Fire from './ui/screens/Store/Fire'
import Eletric from './ui/screens/Store/Eletric'
import Water from './ui/screens/Store/Water'
import Poison from './ui/screens/Store/Poison'
import Home from './ui/screens/Home'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/eletric" component={Eletric}/>
                <Route path="/water" component={Water}/>
                <Route path="/fire" component={Fire}/>
                <Route path="/poison" component={Poison}/>
            </Switch>
        </BrowserRouter>
    )
}
