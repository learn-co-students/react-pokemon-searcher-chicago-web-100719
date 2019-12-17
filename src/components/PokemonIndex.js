import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state={
    pokemon: [],
    search: ''
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemon => this.setState({pokemon:pokemon}))
  }

  handleSearch = (event) =>{
    this.setState({search:event.target.value})
  }

  addPokemon = (pokemon) =>{
    this.setState({pokemon:[...this.state.pokemon, pokemon]})
  }

  render() {
    const filteredPokemon = this.state.pokemon.filter(pokemon =>
      pokemon.name.includes(this.state.search))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.handleSearch} />
        <br />
        <PokemonCollection pokemon={filteredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
