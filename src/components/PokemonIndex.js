import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state= {
    pokemon: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokes => this.setState({pokemon: pokes}))
  }

  handleSearchInput = event => {
    this.setState({searchTerm: event.target.value})
  }

  addPokemon = (newPoke) => {
    this.setState({pokemon: [...this.state.pokemon, newPoke]})
  }

  
  
  render() {
    const displayPokes = this.state.pokemon.filter(poke => {return poke.name.includes(this.state.searchTerm)})
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.handleSearchInput} />
        <br />
        <PokemonCollection pokemon={displayPokes}/>
      </Container>
    )
  }
}



export default PokemonPage
