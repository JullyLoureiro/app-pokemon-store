import React, {useState, useEffect} from 'react'
import { Card, InfoCard, ImgPokemon, Button} from '../../styles/theme/ThemeTemplate'
import api from '../../services/api'
import CircularProgress from '@material-ui/core/CircularProgress'

export default function CardPokemon({element, index, preco}){
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
                <div>
                    {image === '' && <CircularProgress />}
                </div>
                <div>
                    {image !== '' && <ImgPokemon src={image} alt={element.pokemon.name}></ImgPokemon>}  
                </div>
                <div>
                    {element.pokemon.name}
                </div>
                <div>
                    {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(preco)}
                </div>
                <div>
                    <Button>Adicionar</Button>
                </div>
            </InfoCard>
        </Card>
    )
}