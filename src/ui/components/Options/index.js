import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'
import {DivOptions} from '../../../styles/theme/ThemeTemplate'
import {useHistory} from 'react-router-dom'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import OpacityIcon from '@material-ui/icons/Opacity'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import Flare from '@material-ui/icons/Flare'

export default function Options(props) {
    const history = useHistory()

    function ListItemLink(props) {
        return <ListItem button component="a" {...props}/>;
    }

    return (
        <DivOptions>
           
            <div style={{display: 'flex', flexDirection: 'row' }}>
                <div className="info">            
                    {props.tipo === 10 && <h5>Loja Fogo</h5>}
                    {props.tipo === 11 && <h5>Loja Água</h5>}
                    {props.tipo === 13 && <h5>Loja Elétrica</h5>}
                    {props.tipo === 4 && <h5>Loja Poção</h5>}
                </div>

                <div className="icon">
                    {props.tipo === 10 && <WhatshotIcon />}
                    {props.tipo === 11 && <OpacityIcon />}
                    {props.tipo === 13 && <FlashOnIcon />}
                    {props.tipo === 4 && <Flare />}
                </div>
               
            </div>

            <div className="content" >
                <List component='nav'>
                    <ListItemLink className="item_empresa" onClick={()=>{history.push('/water')}}>
                        <ListItemText primary={'Água'} />
                    </ListItemLink>
                    <ListItemLink className="item_empresa" onClick={()=>{history.push('/fire')}}>
                        <ListItemText primary={'Fogo'} />
                    </ListItemLink> 
                    <ListItemLink className="item_empresa" onClick={()=>{history.push('/eletric')}}>
                        <ListItemText primary={'Elétrico'} />
                    </ListItemLink>
                    <ListItemLink className="item_empresa" onClick={()=>{history.push('/poison')}}>
                        <ListItemText primary={'Poção'} />
                    </ListItemLink>
                </List>
            </div>
        </DivOptions>
    )
}


