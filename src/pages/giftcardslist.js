/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import MyAppBar from '../components/MyAppBar';

import MyCard from '../components/MyCard';

import Avatar1 from '../img/avatar-1.jpg';



let width=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

const styles = theme =>  ({
  root: {
    minHeight: 'inherit',
    //paddingTop: 55,
    //paddingBottom: 44,
    //height: (width>320)?scrollHeight:'100%'
      padding: '100px 15px 44px',
      minHeight: scrollHeight,
      '&>div:last-child div': {
          marginBottom: 0
      }
  },

});

class GiftCardsList extends Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };

  render() {

    return (

        <div className={this.props.classes.root}>

            <MyAppBar title="Gift Cards" />
            <MyCard
                name="Starbucks"
                avatar={Avatar1}
                giftcard="$100"
                sell="$90"
                buytogether="true"
                href="#ingroupbuysuccessful"
                onclick={this.handleClickOpen}
            />
            <MyCard
                name="Starbucks"
                avatar={Avatar1}
                giftcard="$200"
                sell="$200"
                groupbuyowner="yourself"
                href="#ingroupbuy"
                onclick={this.handleClickOpen}
            />
        </div>
  );
  }
}

GiftCardsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(GiftCardsList));
