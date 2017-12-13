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
import Intro from './pages/Intro';

//import { HashRouter,Route} from 'react-router-dom';
//import { Route} from 'react-router-dom';
//import { Router, Route } from 'react-router';
//import { BrowserRouter as Route } from 'react-router-dom';

import { BrowserRouter, Route } from "react-router-dom";




export default class Index extends React.Component {


    render(){
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={Login}></Route>
                        <Route path="/sign-up" component={SignUp}></Route>
                        <Route path="/intro" component={Intro}></Route>
                        <Route path="/gift-cards-list" component={GiftCardsList}></Route>
                        <Route path="/inf-group" component={InfGroup}></Route>
                        <Route path="/payment" component={Payment}></Route>
                        <Route path="/payment-buy-now" component={PaymentBuyNow}></Route>
                        <Route path="/payment-buy-together" component={PaymentBuyTogether}></Route>
                        <Route path="/order-accepted" component={OrderAccepted}></Route>
                        <Route path="/order-accepted-invite-friends" component={OrderAcceptedInviteFriends}></Route>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

const rootElement = document.querySelector('#root');
if (rootElement) {
    render(<Index />, rootElement);
}
