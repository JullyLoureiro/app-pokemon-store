import React from 'react'
import {Button, HeaderBag} from '../../styles/theme/ThemeTemplate'
import MinimizeIcon from '@material-ui/icons/Remove'
import { ButtonBase, Chip} from '@material-ui/core'
import CardPokemonBag from '../CardPokemonBag'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#fff'
    }
}));

export default function Bag(props) {
    const classes = useStyles();
    
    return(
        <>
            <div>
                {/* HEADER */}
                <HeaderBag>
                    <div style={{color: '#fff'}}>Carrinho</div>
                    <ButtonBase onClick={props.closeShop}>
                        <MinimizeIcon className={classes.root} />
                    </ButtonBase>
                </HeaderBag>

                {/* QUANTITY ITEMS */}
                <div style={{margin: 10, display: 'flex', justifyContent: 'flex-end'}}>
                    <Chip label={`${props.shopItems.length} item(s)`} />
                </div>

               
            </div>
          

            {/* ITEMS */}
            <div style={{overflowY: 'scroll', flex: 1}}>
                {props.shopItems.map((e, i)=>{
                    return(
                        <CardPokemonBag exibeDelete index={i} item={e}>
                            {(result)=>{
                                return props.children({deletar: result})
                            }}
                        </CardPokemonBag>
                    )
                })}
            </div>
            
            <div>
                {/* TOTAL */}
                <div style={{display: 'flex', justifyContent: 'flex-end', margin: 15,  fontSize: 17, fontWeight: 'bold'}}>
                Total : {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(props.total)}
                </div>

                {/* BUTTON */}
                <div>
                    <Button onClick={()=>{return props.children({finalizar: true})}}>Finalizar</Button>
                </div>
            </div>
        
        </>
   )
}