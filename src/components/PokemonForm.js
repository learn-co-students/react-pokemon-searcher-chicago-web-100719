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

  handleSubmit = (event) => {
    event.preventDefault()
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(
        {
          name: this.state.name,
          stats: [{
            value: parseInt(this.state.hp, 10),
            name: "hp"
          }],
          sprites: {
            front: this.state.frontUrl,
            back: this.state.backUrl
          }
        }
      )
    }

    fetch('http://localhost:3000/pokemon', configObj)
    .then(resp => resp.json())
    .then(newPoke => this.props.addPokemon(newPoke))
    event.target.reset()

  }

  handleChange = event => {
    event.persist()
    this.setState({[event.target.name]: event.target.value})
    
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
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
