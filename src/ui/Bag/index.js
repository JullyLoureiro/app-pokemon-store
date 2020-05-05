import React from 'react'
import {CardShop, Button, HeaderBag} from '../../styles/theme/ThemeTemplate'
import { ButtonBase, Chip} from '@material-ui/core'
import CloseOutlined from '@material-ui/icons/CloseOutlined'
import CardPokemonBag from '../CardPokemonBag'
import { makeStyles } from '@material-ui/core/styles';
import ReactList from 'react-list';

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#fff'
    }
}));

export default function Bag(props) {
    const classes = useStyles();

    function renderItem(index, key) {
        return <CardPokemonBag exibeDelete index={index} item={props.shopItems[index]}>
            {(result)=>{
                return props.children({deletar: result})
            }}
        </CardPokemonBag>
    }

   return(
        <CardShop>
            {/* HEADER */}
            <HeaderBag>
                <div style={{color: '#fff'}}>Carrinho</div>
                <ButtonBase onClick={props.closeShop}>
                    <CloseOutlined className={classes.root} />
                </ButtonBase>
            </HeaderBag>

            {/* QUANTITY ITEMS */}
            <div style={{margin: 10, display: 'flex', justifyContent: 'flex-end'}}>
                <Chip label={`${props.shopItems.length} item(s)`} />
            </div>

            {/* ITEMS */}

            <div style={{overflow: 'auto'}}>
                <ReactList
                    itemRenderer={renderItem}
                    length={props.shopItems.length}
                    type='uniform'
                />
            </div>
            

            {/* TOTAL */}
            <div style={{display: 'flex', justifyContent: 'flex-end', margin: 10,  fontSize: 17, fontWeight: 'bold'}}>
                Total : {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(props.total)}
            </div>

            {/* BUTTON */}
            <div>
                <Button onClick={()=>{return props.children({finalizar: true})}}>Finalizar</Button>
            </div>
        </CardShop>
   )
}