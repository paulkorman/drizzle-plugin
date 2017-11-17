// @flow

import React from 'react';
import { render } from 'react-dom';
import Login from './pages/Login';
import GiftCardsList from './pages/GiftCardsList';
import Payment from './pages/Payment';
import OrderAccepted from './pages/OrderAccepted';
import OrderAcceptedInviteFriends from './pages/OrderAcceptedInviteFriends';
import InfGroup from './pages/InfGroup';
import PaymentBuyNow from './pages/PaymentBuyNow';
import PaymentBuyTogether from './pages/PaymentBuyTogether';
import SignUp from './pages/SignUp';

import { HashRouter,Route} from 'react-router-dom';

export default class Index extends React.Component {


    render(){
        return (
            <div>
                <HashRouter>
                    <div>
                        <Route exact path="/" component={Login}></Route>
                        <Route exact path="/sign-up" component={SignUp}></Route>
                        <Route exact path="/gift-cards-list" component={GiftCardsList}></Route>
                        <Route exact path="/inf-group" component={InfGroup}></Route>
                        <Route exact path="/payment" component={Payment}></Route>
                        <Route exact path="/payment-buy-now" component={PaymentBuyNow}></Route>
                        <Route exact path="/payment-buy-together" component={PaymentBuyTogether}></Route>
                        <Route exact path="/order-accepted" component={OrderAccepted}></Route>
                        <Route exact path="/order-accepted-invite-friends" component={OrderAcceptedInviteFriends}></Route>
                    </div>
                </HashRouter>
            </div>
        )
    }
}

render(<Index />, document.querySelector('#root'));
