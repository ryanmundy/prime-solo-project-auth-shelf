import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        width: 345,
    },
    media: {
        height: 150,
    },
};

class ShelfItem extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className="shelfItem">
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={this.props.image}
                        />
                        <CardContent>

                            <Typography variant="h5" component="p">
                                {this.props.description}
                            </Typography>
                            <Typography component="p">
                                {this.props.person}
                            </Typography>
                        </CardContent>
                        <Button size="small" color="primary">
                            Delete
                        </Button>
                    </CardActionArea>
                </Card>
            </div>

        );

    }

}

// Instead of taking everything from state, we just want the shelf info.
const mapStateToProps = reduxStore => ({
    reduxStore,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(ShelfItem));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






// function ShelfItem(props) {
//     const { classes } = props;
//     return (<div></div>)

// }

// // ShelfItem.propTypes = {
// //     classes: PropTypes.object.isRequired,
// // };





