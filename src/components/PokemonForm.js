import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  onChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit=(e)=>{

    e.preventDefault()
    const pokemonData= {
      name: this.state.name,
      hp: this.state.hp,
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    }
    const reqObj={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(pokemonData)
    }

    fetch('http://localhost:3000/pokemon',reqObj)
    .then(resp => resp.json())
    .then(pokemonObj => this.props.addPokemon(pokemonObj))
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid onChange={this.onChange}label="Name" placeholder="Name" name="name" value={this.state.name} />
            <Form.Input fluid onChange={this.onChange}label="hp" placeholder="hp" name="hp" value={this.state.hp}/>
            <Form.Input fluid onChange={this.onChange}label="Front Image URL" placeholder="url" name="frontUrl"value={this.state.frontUrl} />
            <Form.Input fluid onChange={this.onChange}label="Back Image URL" placeholder="url" name="backUrl"value={this.state.backUrl} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
