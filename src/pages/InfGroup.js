/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import MyAppBar from '../components/MyAppBar';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import classNames from 'classnames';
import MyButtonType2 from '../components/MyButtonType2';

import Avatar1 from '../img/avatar-1.jpg';

import styles from '../theme/pages/InfGroup';

class InfGroup extends Component {
    state = {
        open: false,
    };

    render() {

        return (
            <div className={this.props.classes.root}>
                <MyAppBar title="My Group Buy"/>
                <div className={this.props.classes.bgImg}>
                    <div className={this.props.classes.wrapCard}>
                        <Avatar
                            src={Avatar1}
                            className={this.props.classes.avatar}
                        />
                        <div className={this.props.classes.container}>
                            <div className={this.props.classes.wrapTitle}>
                                <p className={this.props.classes.title}>Starbucks</p>
                                <p className={this.props.classes.subTitle}>100 USD gift card</p>
                            </div>
                        </div>
                        <div className={this.props.classes.wrapAbs}>
                            <div className={this.props.classes.card}>
                                <p className={this.props.classes.name}>Dave invites you buy Starbucks <br/>$100 Gift card together</p>
                                <p className={this.props.classes.subName} style={{textTransform: 'none'}}>to buy this gift card successfully, <br/>Dave need to find someone <br/>to buy another $90</p>
                                <Grid container>
                                    <Grid item xs={6} className={classNames(this.props.classes.gridItem, this.props.classes.vertD)} >
                                        <p className={this.props.classes.bigFs}>$90</p>
                                        <p className={this.props.classes.subName}>sell</p>
                                    </Grid>
                                    <Grid item xs={6} className={this.props.classes.gridItem}>
                                        <p className={this.props.classes.bigFs}>$10</p>
                                        <p className={this.props.classes.subName}>Dave paid</p>
                                    </Grid>
                                </Grid>
                                <div className={this.props.classes.time}>14:27:43</div>
                                <div className={this.props.classes.progressBar}>
                                    <div className={this.props.classes.indicator}></div>
                                </div>
                                <div className={classNames(this.props.classes.subName, this.props.classes.horizD)}>10% of $100 goal</div>
                                <div className={this.props.classes.subName}>$10 bought by Dave</div>
                                <div className={this.props.classes.wrapButton}>
                                    <div style={{textAlign: 'center'}}>
                                        <MyButtonType2 href="#" style={{minWidth: 165}}>group buy</MyButtonType2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

InfGroup.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(InfGroup));
