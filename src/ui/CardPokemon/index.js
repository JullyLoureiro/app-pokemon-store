import React, {useState, useEffect} from 'react'
import { Card, InfoCard, ImgPokemon, Button} from '../../styles/theme/ThemeTemplate'
import api from '../../services/api'
import CircularProgress from '@material-ui/core/CircularProgress'

export default function CardPokemon(props){
    const [image, setImage] = useState('')

    useEffect(()=>{
        const url = props.element.pokemon.url.split("v2")[1]

        api.get(`${url}`).then(response =>{
            setImage(response.data.sprites.front_default)
        })
    }, [props.element])

    function adicionaPokemon(){
        return props.children(props)
    }

    return(
        <Card key={props.index}>
            <InfoCard>
                <div>
                    {image === '' && <CircularProgress />}
                </div>
                <div>
                    {image !== '' && <ImgPokemon src={image} alt={props.element.pokemon.name}></ImgPokemon>}  
                </div>
                <div>
                    {props.element.pokemon.name}
                </div>
                <div style={{marginBottom: 20}}>
                    {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(props.preco)}
                </div>
                    <Button onClick={adicionaPokemon}>Adicionar</Button>
            </InfoCard>
        </Card>
    )
}