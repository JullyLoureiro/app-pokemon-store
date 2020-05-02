import React, {useState, useEffect} from 'react'
import { CardBag, BagImgPokemon} from '../../styles/theme/ThemeTemplate'
import api from '../../services/api'
import CircularProgress from '@material-ui/core/CircularProgress'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import { ButtonBase } from '@material-ui/core'

export default function CardPokemon(props){
    const [image, setImage] = useState('')

    useEffect(()=>{
        const url = props.item.pokemon.url.split("v2")[1]

        api.get(`${url}`).then(response =>{
            setImage(response.data.sprites.front_default)
        })
    }, [props.item.pokemon])

    function deletaPokemon(index){
        return props.children(index)
    }

    return(
        <CardBag key={props.index}>
            <div>
                {image === '' && <CircularProgress />}
                {image !== '' && <BagImgPokemon src={image} alt={props.item.pokemon.name}></BagImgPokemon>}  
                {props.item.pokemon.name}
                {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(props.item.preco)}
                {props.exibeDelete && <ButtonBase onClick={()=>deletaPokemon(props.index)}>
                    <DeleteOutline />
                </ButtonBase>
                }
            </div>
        </CardBag>
    )
}