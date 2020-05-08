import React, {useState, useEffect} from 'react'
import { Card, InfoCard, Button, Progress} from '../../../styles/theme/ThemeTemplate'
import api from '../../../services/api'
import CircularProgress from '@material-ui/core/CircularProgress'

export default function CatalogPokemon(props){
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
                {/* <div className={'iconPhotos'}>
                    <PhotoLibraryIcon />
                </div> */}
                <div>
                    {image !== '' ? 
                        <img src={image ? image : `https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1`} width={130} height={image ? 130 : 70} alt={props.element.pokemon.name} /> 
                        :
                        <Progress style={{ width:130, height:130 }} ><CircularProgress className={'Progress'} /></Progress>
                    }  
                </div>
                <div>
                    {props.element.pokemon.name}
                </div>
                <div className='price'>
                    {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(preco)}
                </div>
                <Button onClick={adicionaPokemon}>Adicionar</Button>
            </InfoCard>
        </Card>
    )
}