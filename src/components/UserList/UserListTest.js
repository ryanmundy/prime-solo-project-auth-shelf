import React from 'react';
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
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class UserList extends Component {

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER_LIST" })
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Items Added</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.users.map( (user, i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="right">{user.username}</TableCell>
                  <TableCell align="right">{user.count}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>

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
