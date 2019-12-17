import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state= {
    hp: '',
    showFront: true
  }

   
  render() {
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={this.state.showFront ? this.props.sprites.front : this.props.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" /> {this.state.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }

  handleClick = () => {
    this.setState({showFront: !this.state.showFront})
  }

  componentDidMount(){
    this.getHp()
  }
  getHp() {
    let hp =this.props.stats.find(stat => {
     return stat.name === 'hp'
    })
    this.setState({hp: hp.value})
  }
}

export default PokemonCard
