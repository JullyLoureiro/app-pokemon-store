import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import LojaFire from './ui/Loja/LojaFire'
import LojaEletric from './ui/Loja/LojaEletric'
import LojaWater from './ui/Loja/LojaWater'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LojaEletric}/>
                <Route path="/eletric" component={LojaEletric}/>
                <Route path="/water" component={LojaWater}/>
                <Route path="/fire" component={LojaFire}/>
            </Switch>
        </BrowserRouter>
    )
}
