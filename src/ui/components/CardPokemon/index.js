import React, {useState, useEffect} from 'react'
import { Card, InfoCard, Button} from '../../../styles/theme/ThemeTemplate'
import api from '../../../services/api'
import CircularProgress from '@material-ui/core/CircularProgress'

export default function CardPokemon(props){
    const [image, setImage] = useState('')
    const [preco, setPreco] = useState(0)

    useEffect(()=>{
        const url = props.element.pokemon.url.split("v2")[1]

        api.get(`${url}`).then(response =>{

            //Seta Imagem de cada Pokemon
            setImage(response.data.sprites.front_default)

            //Gera Preço
            let price = props.element.pokemon.name.charCodeAt(0) * 6 / props.element.pokemon.name.length
            setPreco(parseFloat(price).toFixed(1))
        })
    }, [props.element])

    //Retorna informações do pokemon para ser adicionado ao carrinho
    function adicionaPokemon(){
        return props.children({element: props.element, preco: preco})
    }

    return(
        <Card key={props.index}>
            <InfoCard>
                <div>
                    {image !== '' ? 
                        <img src={image ? image : `https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1`} width={150} height={image ? 150 : 70} alt={props.element.pokemon.name} /> 
                        :
                        <CircularProgress />
                    }  
                </div>
                <div>
                    {props.element.pokemon.name}
                </div>
                <div style={{marginBottom: 20}}>
                    {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(preco)}
                </div>
                <Button onClick={adicionaPokemon}>Adicionar</Button>
            </InfoCard>
        </Card>
    )
}