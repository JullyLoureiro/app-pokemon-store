import React, {useState, useEffect} from 'react'
import {Container, SearchBar, SearchContainer, Input, CardShop, ModalBag, ButtonShop} from '../../../styles/theme/ThemeTemplate'
import { Grid} from '@material-ui/core'
import api from '../../../services/api'
import CatalogPokemon from '../CatalogPokemon'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Options  from '../Options'
import FinishedBuyModal from '../Modal'
import Bag from '../Bag'
import SnackBar from '../SnackBar'

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
        if(!showFinishedBuy) {
            setShopItems([])
            setTotal(0)
            setShowShop(false)
        }
    }, [showFinishedBuy])

    useEffect(()=>{
        api.get(`type/${props.tipo}/`).then(response =>{
            setPokemon(response.data.pokemon)
            setPokemonAll(response.data.pokemon)
        })
    }, [])

    useEffect(() => {
        var total = 0
        shopItems.forEach(item => {
            total += parseFloat(item.preco)
        })
        setTotal(total)
    }, [shopItems]);

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

    function returnResult(result){
        if(result.finalizar) finishedBuy()
        else setShopItems(shopItems.filter((e, i)=>(i !== result.deletar)))
    }

    return(
        <Container>
            
            <SearchBar isHeading={true}>
               <SearchContainer>
                    <Input type="text" value={search} onChange={(event) => filterPokemon(event)} id="search" name="search" placeholder="O que está procurando?" ></Input>
               </SearchContainer>
            </SearchBar>

            <Grid container className='optionsStore'>
                <Options tipo={props.tipo}/>
            </Grid>

            <Grid container spacing={0}>
                <Grid item xs={12} md={showShop ? 9 : 12} style={{marginTop: 90}}>
                    <Grid container spacing={0} >
                        {pokemon.map((element, index) => (
                            <Grid item xs={6} sm={showShop ? 4 : 3} md={showShop ? 4 : 3} key={index} >
                                <CatalogPokemon element={element} index={index}>
                                    {(result)=>{
                                        var pokemon = {pokemon: result.element.pokemon, preco: result.preco}
                                        setShopItems([...shopItems, pokemon]);
                                        setOpenSnack(true)
                                        setMessageSnack(`${result.element.pokemon.name} adicionado com sucesso!`)
                                    }}
                                </CatalogPokemon>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
               
                {showShop && 
                <Grid item xs={12} md={3} style={{marginTop: 90}}>
                    <CardShop>
                        <Bag total={total} shopItems={shopItems} closeShop={()=>setShowShop(false)}>
                            {(result)=>{
                                returnResult(result)
                            }}
                        </Bag>
                    </CardShop>
                </Grid>
                }
                
                {!showShop && 
                    <ButtonShop onClick={()=>setShowShop(true)}>
                        <div><ShoppingCartIcon fontSize={"large"}/></div>
                        <div style={{fontSize: 20}}>{shopItems.length}</div>
                    </ButtonShop>
                }
            </Grid>

            <FinishedBuyModal 
                open={showFinishedBuy} 
                close={()=>{setShowFinishedBuy(false)}}
            />

           {showShop &&
                <ModalBag>
                    <Bag total={total} shopItems={shopItems} closeShop={()=>setShowShop(false)}>
                        {(result)=>{
                            returnResult(result)
                        }}
                    </Bag>
                </ModalBag>
            }

            <SnackBar open={openSnack} message={messageSnack}>
                {(result=>{
                    setOpenSnack(false)
                })}
            </SnackBar>
        </Container>
    )
}