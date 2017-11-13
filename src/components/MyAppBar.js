import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';

//import twitterIco from '../img/menu.svg';

const styles = theme => ({
    root: {
        //marginTop: theme.spacing.unit * 3,
        width: '100%',
        height: 52,
    },
    logo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#bababa',
        marginLeft: -1,
        lineHeight: 1,
    },
    flex: {
        flex: 1,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#bababa',
        textAlign: 'center',
        lineHeight: 1,
        marginLeft: -40
    },
    close: {
        marginRight: -10,
    },
    appbar: {
        height: 52,
        background: 'none',
        boxShadow: 'none',
        backgroundColor: '#fbfbfb',
        width: document.body.offsetWidth,
        maxWidth: 414,
        left: '50%',
        marginLeft: -(document.body.offsetWidth/2),
        zIndex: 998,
    },
});



class MyAppBar extends React.Component {

    render(){
        const { classes, title } = this.props;
        return (
            <div>
                <AppBar position="fixed" className={classes.appbar}>
                    <Toolbar>
                        <Typography className={classes.logo}>
                            DRIZZLE
                        </Typography>
                        <Typography className={classes.flex}>
                            {title}
                        </Typography>
                        <IconButton className={classes.close}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="svg2" viewBox="0 0 12 12" height="12" width="12"><path id="rect4301" d="M1.242 0C.948 0 .652.112.427.337L.42.343C-.03.793-.032 1.517.417 1.97l3.974 4L.34 9.993c-.45.45-.454 1.174-.004 1.626l.006.008c.45.452 1.174.454 1.626.005l4.05-4.027 4.027 4.052c.45.452 1.175.454 1.627.005l.008-.006c.45-.45.454-1.174.005-1.626L7.658 5.978l3.998-3.973c.452-.45.455-1.175.005-1.627L11.656.37c-.45-.452-1.174-.455-1.626-.006l-4 3.976L2.054.342C1.83.116 1.535.002 1.242 0z" fill="#bababa"/></svg>
                        </IconButton>
                    </Toolbar>
                </AppBar>

            </div>
        );
    }

}

MyAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
};

export default withStyles(styles)(MyAppBar);