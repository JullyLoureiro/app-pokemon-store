import React, {useState} from 'react'
import {Container, SearchBar, SearchContainer, Input} from '../styles/theme/ThemeTemplate'
import Grid from '@material-ui/core/Grid'

export default function Loja(){
    const [search, setSearch] = useState('')
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
            {/* <Teste isHeading={true}>Hello World</Teste> */}
            {/* <Heading isHeading={true}>By the power of styled-components!</Heading> */}
        </Container>
    )
}