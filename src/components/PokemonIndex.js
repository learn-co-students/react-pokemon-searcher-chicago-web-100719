import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      pokemon: []
    }
  }

  handleSubmit = state => {
    let reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: state.name,
        stats: [
          {
            value: state.hp,
            name: "hp"
          }
        ],
        sprites: {
          front: state.frontUrl,
          back: state.backUrl
        }
      })
    }

    fetch('http://localhost:3000/pokemon', reqObj)
    .then(resp => resp.json())
    .then(pokemon => {
      this.setState({
        pokemon: this.state.pokemon.concat(pokemon)
      })
    })
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemon => {
      this.setState({
        pokemon: pokemon,
        search: ''
      })
    })

  }

  filterPokemon = () => {
    let pokemon = this.state.pokemon
    if(this.state.search !== '') {
      return pokemon.filter(pokemon => pokemon.name.includes(this.state.search))
    }
    return pokemon
  }

  onChange = e => {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
        <br />
        <Search onChange={this.onChange} handleFilter={this.handleFilter}/>
        <br />
        <PokemonCollection pokemon={this.filterPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
