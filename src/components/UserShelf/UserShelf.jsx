import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserShelfItem from '../UserShelfItem/UserShelfItem';

class UserShelf extends Component {

    componentDidMount() {
        this.getUserShelf();
    }

    getUserShelf() {
        this.props.dispatch({ type: 'FETCH_USER_ITEMS', payload:  this.props.reduxStore.user.id})
    }//end getShelf

    render() {
        return (
            <div>
            <h1 class="header-text">User Shelf</h1>
                {this.props.reduxStore.userShelfItem.map((each) => {
                    return (<UserShelfItem id={each.id} key={each.id} image={each.image_url} description={each.description} person={each.person_id}/>);
                })}
            </div>
        )
    }
}

// Instead of taking everything from state, we just want the shelf info.
const mapStateToProps = reduxStore => ({
    reduxStore,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserShelf);
