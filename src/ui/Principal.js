import React, {useState, useEffect} from 'react'
import {Container, SearchBar, SearchContainer, Input, ContainerShop} from '../styles/theme/ThemeTemplate'
import { Grid } from '@material-ui/core'
import api from '../services/api'
import CardPokemon from './CardPokemon'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Options  from './Options'

export default function Principal(props){
    const [search, setSearch] = useState('')
    const [pokemon, setPokemon] = useState([])
    const [pokemonAll, setPokemonAll] = useState([])
 
    useEffect(()=>{
        api.get(`type/${props.tipo}/`).then(response =>{
            setPokemon(response.data.pokemon)
            setPokemonAll(response.data.pokemon)
        })
    }, [])

    function retornaPreco(){
        const rand = Math.floor(Math.random() * (1000 - 100)) + 100;
        return rand
    }

    function filtrar(event){
        setSearch(event.target.value)
        const items = pokemonAll
        var array = items.filter(item=> item.pokemon.name.toLowerCase().includes(search.toLowerCase()))
        setPokemon(array)
    }

    return(
        <Container>
            {/* SEARCH BAR */}
            <SearchBar isHeading={true}>
               <SearchContainer>
                    <Grid container spacing={2} style={{display: 'flex', alignItems: 'center'}}>
                        <Grid item xs={6} sm={6} md={9}><Input type="text" value={search} onChange={(event) => filtrar(event)} id="search" name="search" placeholder="Digite sua pesquisa..." ></Input></Grid>
                        <Grid item xs={6} sm={6} md={3}><Options tipo={props.tipo}/></Grid>
                    </Grid>
               </SearchContainer>
            </SearchBar>
            
            {/* BODY */}
            <Grid container spacing={2} style={{marginTop: 0}}>
                 {/* CARDS */}
                <Grid item xs={12} md={12} style={{marginTop: 70}}>
                    <Grid container spacing={0} >
                        {pokemon.map((element, index) => (
                            <Grid item xs={12} sm={3} md={3} key={index} >
                                <CardPokemon element={element} index={index} preco={retornaPreco()}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                {/* FLOATING BUTTON SHOP */}
                <ContainerShop>
                    <div>
                        <ShoppingCartIcon fontSize={"large"}/>
                        <label className='teste' style={{fontSize: 20, fontWeight: 'bold'}}>R$ 450,90</label>
                    </div>
                </ContainerShop>
            </Grid>
        </Container>
    )
}