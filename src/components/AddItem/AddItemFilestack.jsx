

import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';






class AddItem extends Component {
  state = {
    description: '',
    url: ''
  }

  handleChange = (name) => ({ target: { value } }) => {
    this.setState({
      [name]: value
    })
  }
  handleSubmit = () => {
    this.props.dispatch({ type: 'ADD_ITEM', payload: this.state })
    this.setState({
      description: '',
      url: ''
    })
  }

  render() {
    return (
      <form >
        <TextField
          id="outlined-name"
          label="description"
          value={this.state.description}
          onChange={this.handleChange('description')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="url"
          value={this.state.url}
          onChange={this.handleChange('url')}
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" color="primary" type='submit' onClick={this.handleSubmit}>Add Item</Button>
      </form>
    )
  }
}

export default connect()(AddItem);
