import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

// 1. We define the styles.
const styles = theme => ({
    root: {
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: 3,
        position: 'relative',
        padding: '40px 25px 20px',
        marginBottom: 0,
        fontSize: 11,
        fontWeight: 500,
    },
    groupname: {
        left: 15,
        top: -19,
        padding: 9,
        display: 'inline-block',
        position: 'absolute',
        backgroundColor: '#877650',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
    },
    list: {
        listStyleType: 'none',
        paddingLeft: 0,
        margin: 0,
    },


});

function TextGroup(props) {
    const { groupName, children, classes, className } = props;

    return (
        <div
            className={classNames(
        classes.root,
        className,
      )}
        >
            <div className={classes.groupname}>{groupName}</div>
            <ul className={classes.list}>
                {children}
            </ul>

        </div>
    );
}

TextGroup.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    groupName: PropTypes.string,
};

export default withStyles(styles)(TextGroup);
