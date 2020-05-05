import React from 'react'
import {Button, HeaderBag, Total, QtdItems, TitleBag} from '../../../styles/theme/ThemeTemplate'
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
                    <TitleBag>Carrinho</TitleBag>
                    <ButtonBase onClick={props.closeShop}>
                        <MinimizeIcon className={classes.root} />
                    </ButtonBase>
                </HeaderBag>

                {/* QTD ITEMS */}
                <QtdItems>
                    <Chip label={`${props.shopItems.length} item(s)`} />
                </QtdItems>   
            </div>
          

            {/* LIST ITEMS */}
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
                <Total>
                    Total : {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(props.total)}
                </Total>

                {/* BUTTON */}
                <div>
                    <Button onClick={()=>{return props.children({finalizar: true})}}>Finalizar</Button>
                </div>
            </div>
        
        </>
   )
}