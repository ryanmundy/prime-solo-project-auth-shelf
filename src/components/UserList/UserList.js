import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '30%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 200,
    // maxWidth:
  },
});

class UserList extends Component {

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER_LIST" })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1 class="header-text">User List</h1>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>Items Added</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.users.map((user, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell >{user.username}</TableCell>
                    <TableCell>{user.count}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}


UserList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = reduxStore => ({
  users: reduxStore.userListReducer
});

export default connect(mapStateToProps)(withStyles(styles)(UserList));

