import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import LojaFire from './ui/Loja/LojaFire'
import LojaWater from './ui/Loja/LojaWater'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/water" component={LojaWater}/>
                <Route path="/fire" component={LojaFire}/>
            </Switch>
        </BrowserRouter>
    )
}