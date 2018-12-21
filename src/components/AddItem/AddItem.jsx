import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ReactFilestack from 'filestack-react';
import './AddItem.css'

const FILESTACK_API_KEY = process.env.REACT_APP_FILESTACK_API_KEY;

const basicOptions = {
  accept: 'image/*',
  fromSources: ['local_file_system'],
  maxSize: 1024 * 1024,
  maxFiles: 1,
}

class AddItem extends Component {
  state = {
    description: '',
    url: ''
  }

  onSuccess = (result) => {
    this.setState({
      url: result.filesUploaded[0].url
    })
  }
  onError = (error) => {
    console.error('error', error);
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
        <br/>
        <ReactFilestack
          apikey={FILESTACK_API_KEY}
          buttonText="Upload Photo"
          buttonClass="upload-button"
          options={basicOptions}
          onSuccess={this.onSuccess}
          onError={this.onError}
        />
        <br />
        <br/>
        <Button variant="contained" color="primary" type='submit' onClick={this.handleSubmit}>Add Item</Button>
      </form>
    )
  }
}

export default connect()(AddItem);
