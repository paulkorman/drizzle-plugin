import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

// 1. We define the styles.
const styles = theme => ({
    root: {
        color: '#fff',
        fontSize: 11.13,
        fontWeight: 'bold',
        backgroundColor: '#bca060',
        borderRadius: 13,
        width: '100%',
        '&:hover': {
            backgroundColor: '#bca060',
            opacity: 0.8
        }
    },

});

function MyButton(props) {
    const { children, classes, className, ...other } = props;

    return (
        <Button
            className={classNames(
        classes.root,
        className,
      )}
            {...other}
        >
            {children}
        </Button>
    );
}

MyButton.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withStyles(styles)(MyButton);
