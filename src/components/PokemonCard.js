import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    flipped:false
  }

  flip = () => {
    this.state.flipped === false ? this.setState({flipped:true}) : this.setState({flipped:false})
  }

  
  render() {
    // debugger
    const { pokemon } = this.props
    const hp = pokemon.stats.find(stat => stat.name === 'hp').value
    return (
      <Card>
        <div>
          <div className="image" onClick={this.flip}>
            <img src={
                this.state.flipped === false ?
                  pokemon.sprites.front:
                  pokemon.sprites.back
            } alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
               {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
