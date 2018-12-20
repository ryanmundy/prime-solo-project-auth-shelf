import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddItem extends Component {
    state = {
        description: '',
        url: ''
    }

    handleChange = (name) => ({target:{value}}) => {
        this.setState({
            [name]: value
        })
    }
    handleSubmit = () => {
        this.props.dispatch({type: 'ADD_ITEM', payload: this.state})
        this.setState({
            description: '',
            url: ''
        })
    }
    
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange('description')} value={this.state.description} placeholder='Description' />
                <input type="text" onChange={this.handleChange('url')} value={this.state.url} placeholder='Image URL' />
                <button onClick={this.handleSubmit}>Add Item</button>
            </div>
        )
    }
}

export default connect()(AddItem);