import React, {useState, useEffect} from 'react'
import { CardPokemonBag, BagImgPokemon} from '../../../styles/theme/ThemeTemplate'
import api from '../../../services/api'
import DeleteOutline from '@material-ui/icons/Delete'
import { ButtonBase } from '@material-ui/core'

export default function CardPokemon(props){
    const [image, setImage] = useState('')

    useEffect(()=>{
        const url = props.item.pokemon.url.split("v2")[1]

        api.get(`${url}`).then(response =>{
            setImage(response.data.sprites.front_default)
        })
    }, [props.item.pokemon])

    function removePokemon(index){
        return props.children(index)
    }

    return(
        <CardPokemonBag key={props.index}>
            <BagImgPokemon src={image} alt={props.item.pokemon.name}></BagImgPokemon>
            <div>{props.item.pokemon.name}</div>
            <div>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(props.item.preco)}</div>
            {props.exibeDelete && 
                <ButtonBase onClick={()=>removePokemon(props.index)}>
                    <DeleteOutline />
                </ButtonBase>
            }
        </CardPokemonBag>
    )
}