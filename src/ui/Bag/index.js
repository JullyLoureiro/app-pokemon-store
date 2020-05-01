import React, {useState, useEffect} from 'react'
import {CardShop} from '../../styles/theme/ThemeTemplate'
import { ButtonBase} from '@material-ui/core'
import CloseOutlined from '@material-ui/icons/CloseOutlined'
import CardPokemonBag from '../CardPokemonBag'

export default function Bag(props) {

   return(
        <CardShop>
            <ButtonBase onClick={props.closeShop}>
                <CloseOutlined/>
            </ButtonBase>
            {props.shopItems.map((e, i)=>{
                return(
                    <CardPokemonBag index={i} item={e}>
                        {(result)=>{
                            return props.children(result)
                        }}
                    </CardPokemonBag>
                )
            })}
            Total : {props.total}
        </CardShop>
   )
}