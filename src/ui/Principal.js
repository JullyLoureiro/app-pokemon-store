import React, {useState, useEffect} from 'react'
import {Container, SearchBar, SearchContainer, Input, Card, CardCarrinho} from '../styles/theme/ThemeTemplate'
import Grid from '@material-ui/core/Grid'
import api from '../services/api'
import CardPokemon from './CardPokemon'


export default function Principal(props){
    const [search, setSearch] = useState('')
    const [pokemon, setPokemon] = useState([])
 
    useEffect(()=>{
        api.get(`type/${props.tipo}/`).then(response =>{
            setPokemon(response.data.pokemon)
            console.log(response.data.pokemon)
        })
    }, [])


    return(
        <Container>
            {/* SEARCH BAR */}
            <SearchBar isHeading={true}>
               <SearchContainer>
                    <Grid container spacing={2} style={{display: 'flex', alignItems: 'center'}}>
                        <Grid item xs={7} md={8}><Input type="text" value={search} onChange={(event) => setSearch(event.target.value)} id="search" name="search" placeholder="Digite sua pesquisa..." ></Input></Grid>
                        <Grid item xs={5} md={4} style={{display: 'flex', justifyContent: 'flex-end'}}>teste</Grid>
                    </Grid>
               </SearchContainer>
            </SearchBar>
            
            {/* CONTAINER */}
            <Grid container spacing={2} style={{marginTop: 0}}>
                 {/* CARDS */}
                <Grid item xs={12} md={12} style={{marginTop: 70}}>
                    <Grid container spacing={2} >
                        {pokemon.map((element, index) => (
                            <Grid item xs={12} sm={3} md={3} key={index} >
                                <CardPokemon element={element} index={index} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}