import React from 'react'
import {CardShop} from '../../styles/theme/ThemeTemplate'
import { ButtonBase, Button} from '@material-ui/core'
import CloseOutlined from '@material-ui/icons/CloseOutlined'
import CardPokemonBag from '../CardPokemonBag'

export default function Bag(props) {

   return(
        <CardShop>
            <ButtonBase onClick={props.closeShop}>
                <CloseOutlined/>
            </ButtonBase>
            Quantidade de itens : {props.shopItems.length}
            {props.shopItems.map((e, i)=>{
                return(
                    <CardPokemonBag exibeDelete index={i} item={e}>
                        {(result)=>{
                            return props.children({deletar: result})
                        }}
                    </CardPokemonBag>
                )
            })}
            Total : {props.total}
            <Button onClick={()=>{return props.children({finalizar: true})}}>Finalizar</Button>
        </CardShop>
   )
}