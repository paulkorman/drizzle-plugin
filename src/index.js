// @flow

import React from 'react';
import { render } from 'react-dom';
import GiftCardsList from './pages/giftcardslist';
import Payment from './pages/payment';
import OrderAccepted from './pages/orderaccepted';
import OrderAcceptedInviteFriends from './pages/orderacceptedinvitefriends'

import { HashRouter,Route} from 'react-router-dom';

export default class Index extends React.Component {


    render(){
        return (
            <div>
                <HashRouter>
                    <div>
                        <Route exact path="/" component={GiftCardsList}></Route>
                        <Route exact path="/payment" component={Payment}></Route>
                        <Route exact path="/orderaccepted" component={OrderAccepted}></Route>
                        <Route exact path="/orderacceptedinvitefriends" component={OrderAcceptedInviteFriends}></Route>
                    </div>
                </HashRouter>
            </div>
        )
    }
}

render(<Index />, document.querySelector('#root'));
