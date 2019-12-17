import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.listPokemon()}
      </Card.Group>
    )
  }

  listPokemon = () => {
    return this.props.pokemon.map(poke => {
      return <PokemonCard {...poke} key={poke.id}/>
    })
  }
}

export default PokemonCollection
