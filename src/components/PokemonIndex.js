import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state={
      pokemons: [],
      searchTerm: ''
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(data => this.setState({
      pokemons: data
    }))
  }

  onChange=(e)=>{
    this.setState({
      searchTerm: e.target.value
    })
  }

  addPokemon=(pokemon)=>{
    this.setState({
      pokemons: [...this.state.pokemons, pokemon]
    })
  }

  render() {

    const pokemon=this.state.pokemons.filter(pokemon =>pokemon.name.includes(this.state.searchTerm))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.onChange} />
        <br />
        <PokemonCollection pokemons={pokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
