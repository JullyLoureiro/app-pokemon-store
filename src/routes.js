import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import Fire from './ui/Store/Fire'
import Eletric from './ui/Store/Eletric'
import Water from './ui/Store/Water'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Eletric}/>
                <Route path="/eletric" component={Eletric}/>
                <Route path="/water" component={Water}/>
                <Route path="/fire" component={Fire}/>
            </Switch>
        </BrowserRouter>
    )
}
