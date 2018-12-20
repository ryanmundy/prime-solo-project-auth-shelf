import React, {Component} from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

class ShelfList extends Component{

    componentDidMount() {
        this.getShelf();
    }

    getShelf( ) {
        this.props.dispatch({ type: 'FETCH_SHELF'})
    }//end getShelf

    render(){
        return(
            <div>
                <p>SHELF LIST</p>
                {JSON.stringify(this.props.reduxStore.shelfReducer)}
            </div>
        )
    }
}




// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = reduxStore => ({
    reduxStore,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ShelfList);