import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserList extends Component {
    render(){

        let userRow = this.props.users.map(user=>{
            <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.itemCount}</td>
            </tr>
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
    users: reduxStore.users
});

export default connect(mapStateToProps)(UserList);