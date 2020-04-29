import React, {useState, useEffect} from 'react'
import {Container, SearchBar, SearchContainer, Input, Card} from '../styles/theme/ThemeTemplate'
import Grid from '@material-ui/core/Grid'
import api from '../services/api'

export default function Loja(){
    const [search, setSearch] = useState('')
    const [pokemon, setPokemon] = useState([])
 
    useEffect(()=>{
        api.get(`type/13/`).then(response =>{
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
            

            <Grid container spacing={2}>
                <Grid item xs={12} md={9}>
                    {/* CARDS */}
                    <Grid container spacing={2}>
                        {pokemon.map((element, index) => (
                            <Grid item xs={12} sm={3} md={3} key={index}>
                                <Card key={index}>
                                    {element.pokemon.name}
                                    {/* <img src={element.pokemon.url} alt={element.pokemon.name} height="42" width="42"></img> */}
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>

                </Grid>
                
            </Grid>
        </Container>
    )
}