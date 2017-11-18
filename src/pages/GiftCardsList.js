/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import MyAppBar from '../components/MyAppBar';

import MyCard from '../components/MyCard';

import Avatar1 from '../img/avatar-1.jpg';

import styles from '../theme/pages/GiftCardsList';

class GiftCardsList extends Component {
    state = {
        open: false,
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
                infbutt="#inf-group"
                titlecontent="$100 Gift Card Group Buy"
                subtitlecontent={["input the ammount you", <br key="0"/>, "want to buy (min. $25; max $75)"]}
            />
            <MyCard
                name="Starbucks"
                avatar={Avatar1}
                giftcard="$200"
                sell="$200"
                groupbuyowner="yourself"
                infbutt="#inf-group"
                titlecontent="second dialog"
                subtitlecontent={["select the ammount you", <br key="0"/>, "want to buy"]}
            />
        </div>
  );
  }
}

GiftCardsList.propTypes = {
  classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(GiftCardsList));
