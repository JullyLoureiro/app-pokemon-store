import React, {useState, useEffect} from 'react'
import {Container, SearchBar, SearchContainer, Input, ContainerShop} from '../styles/theme/ThemeTemplate'
import { Grid} from '@material-ui/core'
import api from '../services/api'
import CardPokemon from './CardPokemon'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Options  from './Options'
import ShopModal from './Modal/ShopModal'
import FinishedBuyModal from './Modal/FinishedBuyModal'
import Bag from './Bag'
import SnackBar from './SnackBar'

export default function Principal(props){
    const [search, setSearch] = useState('')
    const [pokemon, setPokemon] = useState([])
    const [pokemonAll, setPokemonAll] = useState([])
    const [shopItems, setShopItems] = useState([])
    const [showShop, setShowShop] = useState(false)
    const [total, setTotal] = useState(0)
    const [openSnack, setOpenSnack] = useState(false)
    const [messageSnack, setMessageSnack] = useState('')
    const [showFinishedBuy, setShowFinishedBuy] = useState('')

    useEffect(()=>{

        api.get(`type/${props.tipo}/`).then(response =>{
            setPokemon(response.data.pokemon)
            setPokemonAll(response.data.pokemon)
        })
    }, [])

    function returnPrice(){
        const rand = Math.floor(Math.random() * (200 - 10)) + 10
        return rand
    }

    function filterPokemon(event){
        setSearch(event.target.value)
        const items = pokemonAll
        var array = items.filter(item=> item.pokemon.name.toLowerCase().includes(search.toLowerCase()))
        setPokemon(array)
    }

    function finishedBuy(){
        if(shopItems.length === 0) {
            setOpenSnack(true)
            setMessageSnack('Adicione um pokemon no carrinho para finalizar a compra!')
        }
        else setShowFinishedBuy(true)
    }

    return(
        <Container>
            {/* SEARCH BAR */}
            <SearchBar isHeading={true}>
               <SearchContainer>
                    <Grid container spacing={2} style={{display: 'flex', alignItems: 'center'}}>
                        <Grid item xs={9} sm={9} md={9}><Input type="text" value={search} onChange={(event) => filterPokemon(event)} id="search" name="search" placeholder="Digite sua pesquisa..." ></Input></Grid>
                        <Grid item xs={3} sm={3} md={3}><Options tipo={props.tipo}/></Grid>
                    </Grid>
               </SearchContainer>
            </SearchBar>
            
            {/* LISTA DE POKEMONS */}
            <Grid container spacing={2} style={{marginTop: 0}}>
                 {/* CARDS */}
                <Grid item xs={12} md={showShop ? 9 : 12} style={{marginTop: 70}}>
                    <Grid container spacing={0} >
                        {pokemon.map((element, index) => (
                            <Grid item xs={6} sm={showShop ? 4 : 3} md={showShop ? 4 : 3} key={index} >
                                <CardPokemon element={element} index={index} preco={returnPrice()}>
                                    {(result)=>{
                                        var pokemon = {pokemon: result.element.pokemon, preco: result.preco}
                                        setShopItems([...shopItems, pokemon]);
                                        setTotal(parseFloat(total) + parseFloat(result.preco))
                                        setOpenSnack(true)
                                        setMessageSnack(`${result.element.pokemon.name} adicionado com sucesso!`)
                                    }}
                                </CardPokemon>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
               
                {/* CARRINHO LATERAL */}
                {showShop && 
                <Grid item xs={12} md={3} style={{marginTop: 70}}>
                    <Bag total={total} shopItems={shopItems} closeShop={()=>setShowShop(false)}>
                        {(result)=>{
                            if(result.finalizar) finishedBuy()
                            else setShopItems(shopItems.filter((e, i)=>(i !== result.deletar)))
                        }}
                    </Bag>
                </Grid>
                }
                
                {/* FLOATING BUTTON CARRINHO */}
                {!showShop && 
                    <ContainerShop onClick={()=>setShowShop(true)}>
                        <div><ShoppingCartIcon fontSize={"large"}/></div>
                        <div style={{fontSize: 20}}>{shopItems.length}</div>
                    </ContainerShop>
                }
            </Grid>

            {/* MODAL COMPRA FINALIZADA */}
            <FinishedBuyModal 
                itens={shopItems} 
                open={showFinishedBuy} 
                close={()=>{
                    setShowFinishedBuy(false)
                    setShopItems([])
                    setTotal(0)
                }}
            />

            {/* <ShopModal open={showShop} closeShop={()=>setShowShop(false)} />  */}
            
            {/* ALERT DE MENSAGEM */}
            <SnackBar open={openSnack} message={messageSnack}>
                {(result=>{
                    setOpenSnack(false)
                })}
            </SnackBar>
        </Container>
    )
}