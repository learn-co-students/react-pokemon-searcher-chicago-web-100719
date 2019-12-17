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
  handleSubmit = (event) =>{
    event.preventDefault()
    const {name, hp, frontUrl, backUrl} = this.state
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        stats: [
          {
          value: parseInt(hp, 10),
          name: 'hp'
         }
        ],
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })
    })
    .then(resp => resp.json())
    .then(pokemon => this.props.addPokemon(pokemon))

    document.getElementById("pokemon-form").reset()
  }

  handleChange = (event, {name, value}) => {
    this.setState({ [name]: value})
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit} id="pokemon-form">
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
