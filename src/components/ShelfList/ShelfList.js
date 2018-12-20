import React, {Component} from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import ShelfItem from '../ShelfItem/ShelfItem';

class ShelfList extends Component{

    componentDidMount() {
        this.getShelf();
    }

    getShelf( ) {
        console.log('getShelf');
        
        this.props.dispatch({ type: 'FETCH_SHELF'})
    }//end getShelf

    render(){
        return(
            // <div>
            //     <p>SHELF LIST</p>
            //     {JSON.stringify(this.props.reduxStore.shelf)}
            // </div>
            <table className="ShelfList">
                <thead>
                    <tr>
                        <th className="shelfImage">Image</th>
                        <th>Description</th>
                        <th>Person</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Render each item from the shelf reducer */}
                    {this.props.reduxStore.shelf.map((each) => {
                        return (<ShelfItem key={each.id} image= {each.image_url} description={each.description} person={each.person_id} />);
                    })}
                </tbody>
            </table>
        )
    }
}

// Instead of taking everything from state, we just want the shelf info.
const mapStateToProps = reduxStore => ({
    reduxStore,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ShelfList);