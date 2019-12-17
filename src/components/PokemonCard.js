import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  constructor() {
    super()

    this.state = {
      clicked: false
    }
  }

  image = () => {
      if(this.state.clicked === false) {
       return <img src={this.props.pokemon.sprites.front} alt='image' /> 
      } else if (this.state.clicked === true ) {
       return <img src={this.props.pokemon.sprites.back} alt='image' />
      }
  }

  toggleImage = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }



  render() {
    console.log(this.props.pokemon)
    return (
      <Card onClick={this.toggleImage}>
        <div >
          <div className="image">
            {this.image()}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
