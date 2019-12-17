import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const URL = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemons: [],
      search: ''
    }
  }
 
  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => this.setState({ pokemons: data }))
  }

  onChange = (event) => {
    this.setState({ search: event.target.value })
  }

  addPokemon = (pokemon) => {
    this.setState({ pokemons: [...this.state.pokemons, pokemon] })
  }

  render() {
    const filteredPokemons = this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.search))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.onChange} />
        <br />
        <PokemonCollection pokemons={filteredPokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
