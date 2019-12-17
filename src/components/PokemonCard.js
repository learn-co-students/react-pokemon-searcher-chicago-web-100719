import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    front: true
  }

  toggleDisplay = () => {
    this.setState({
      front: !this.state.front
    })
  }

  render() {
    let pokemon = this.props
    let hp = pokemon.stats.find(stat => stat.name === "hp")
    
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.state.front? pokemon.sprites.front : pokemon.sprites.back} alt="oh no!" onClick={this.toggleDisplay}/>
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
