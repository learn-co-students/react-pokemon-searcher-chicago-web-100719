import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    clicked: false
  }

  handleClick=()=>{this.setState({
    clicked: !this.state.clicked
    })
  }

  handleImage=()=>{return !this.state.clicked ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back}

  render() {
  return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={this.handleImage()} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value }
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

// "front": "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
// "back": "https://img.pokemondb.net/sprites/black-white/back-normal/bulbasaur.png"
