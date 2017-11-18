import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import styles from '../theme/components/MyButtonType2';

function MyButtonType2(props) {
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

MyButtonType2.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
};

export default withStyles(styles)(MyButtonType2);
