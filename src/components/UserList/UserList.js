import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserList extends Component {

    componentDidMount(){
        this.props.dispatch({type: "FETCH_USER_LIST"})
    }

    render(){

        let userRow = this.props.users.map((user, i)=>{
           return( <tr key={i}>
            <td>{user.username}</td>
            <td>{user.count}</td>
            </tr>
           );
        })

        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Items Added</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userRow}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = reduxStore => ({
    users: reduxStore.userListReducer
});

export default connect(mapStateToProps)(UserList);