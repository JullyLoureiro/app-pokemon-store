import React, {useState, useEffect} from 'react'
import { Card, InfoCard, ImgPokemon} from '../../styles/theme/ThemeTemplate'
import api from '../../services/api'
import CircularProgress from '@material-ui/core/CircularProgress'

export default function CardPokemon({element, index}){
    const [image, setImage] = useState('')

    useEffect(()=>{
        const url = element.pokemon.url.split("v2")[1]

        api.get(`${url}`).then(response =>{
            setImage(response.data.sprites.front_default)
        })
    }, [element])


    return(
        <Card key={index}>
            <InfoCard>
                {image === '' && <CircularProgress />}
                {image !== '' && <ImgPokemon src={image} alt={element.pokemon.name}></ImgPokemon>}
                {element.pokemon.name}
            </InfoCard>
        </Card>
    
    )
}