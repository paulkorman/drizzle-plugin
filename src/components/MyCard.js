import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import classNames from 'classnames';
import Card, { CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import MyButton from './MyButton';
import MyDialog from './MyDialog';
import MyDialogAmount from './MyDialog';
import InputWithPrefix from '../components/InputWithPrefix';
import MyButtonType2 from '../components/MyButtonType2';


import styles from '../theme/components/MyCard';

class MyCard extends React.Component {
    //const { classes, name, giftcard, sell, buytogether, avatar, href, onclick } = props;



    constructor(props){
        super(props);
        //console.log(props);
        this.state = {
            classes: '',
            opendialog1: typeof props.opendialog1 !== 'undefined' ? props.opendialog1 : false,
            opendialog2: typeof props.opendialog2 !== 'undefined' ? props.opendialog2 : false,
            open: typeof props.open !== 'undefined' ? props.open : false,
            //children: typeof props.children !== 'undefined' ? props.children : '',
            name: typeof props.name !== 'undefined' ? props.name : '',
            giftcard: typeof props.giftcard !== 'undefined' ? props.giftcard : '',
            sell: typeof props.sell !== 'undefined' ? props.sell : '',
            buytogether: typeof props.buytogether !== 'undefined' ? props.buytogether : '',
            avatar: typeof props.avatar !== 'undefined' ? props.avatar : '',
            infbutt: typeof props.infbutt !== 'undefined' ? props.infbutt : '',
            titlecontent: typeof props.titlecontent !== 'undefined' ? props.titlecontent : '',
            subtitlecontent: typeof props.subtitlecontent !== 'undefined' ? props.subtitlecontent : '',
            selValue: typeof props.selValue !== 'undefined' ? props.selValue : '25'
        };
    };

    handleClickOpenDialog1() {
        //console.log(this.state)
        this.setState({
            opendialog1: true,
            opendialog2: false
        });
        //console.log(this.state);
    }

    handleClickOpenDialog2() {
        //console.log(this.state)
        this.setState({
            opendialog2: true,
            opendialog1: false
        });
        //console.log(this.state);
    }


    goToPayment(){
        return window.location.href = '#payment';
    }

    render (){
        return(
            <div>
                <Card className={this.props.classes.card}>
                    <div className={this.props.classes.cardHeader}>
                        <Avatar
                            alt={this.state.name}
                            src={this.state.avatar}
                            className={this.props.classes.avatar}
                        />
                        <Grid container className={this.props.classes.wrapTitle}>
                            <Grid item xs={9}>
                                <span className={this.props.classes.title}>{this.state.name}</span>
                            </Grid>
                            <Grid item xs={3} style={{textAlign: 'right'}}>
                                <div className={this.props.classes.wrapButton}>
                                    <div className={this.props.classes.bgCircle}></div>
                                    <IconButton className={this.props.classes.inButton} aria-label="Menu" href={this.state.infbutt}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="3.48171" height="8.4999788" viewBox="0 0 3.48171 8.4999788" id="svg2"><path d="M2.5 0c-.27 0-.5.097-.694.29-.193.196-.29.43-.29.703 0 .274.097.508.29.702.194.19.424.285.694.285.27 0 .5-.094.69-.285.194-.194.292-.428.292-.702 0-.273-.098-.507-.292-.702C3 .098 2.77 0 2.5 0zm-.915 2.878c-.22 0-.453.042-.7.13-.246.08-.505.18-.776.3L0 3.795c.08-.033.175-.068.285-.104.114-.035.222-.052.33-.052.216 0 .364.038.44.117.077.08.116.22.116.423 0 .11-.013.234-.04.37-.023.134-.053.276-.09.427L.63 6.55c-.037.166-.064.316-.08.45-.017.128-.026.256-.026.382 0 .324.11.593.33.805.224.21.537.313.937.313.26 0 .488-.038.685-.113.197-.072.462-.18.792-.32l.11-.486c-.058.03-.15.065-.276.105-.126.036-.24.053-.34.053-.213 0-.363-.036-.45-.112-.086-.075-.13-.22-.13-.428 0-.083.014-.204.04-.366.028-.16.057-.306.09-.432l.41-1.57c.04-.143.068-.302.082-.474.016-.173.025-.294.025-.362 0-.33-.11-.6-.327-.804-.213-.208-.518-.312-.914-.312z" fill="#877650"/></svg>
                                    </IconButton>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <CardContent className={this.props.classes.cardContent}>

                        <p className={this.props.classes.wrapPrice}>
                            <span className={this.props.classes.wrapGiftCard}>
                                <span className={this.props.classes.dollars}>{this.state.giftcard}</span>
                                <span className={classNames(this.props.classes.label, this.props.classes.mt)}>gift <br/>card</span>
                            </span>
                            <span>
                                <span className={this.props.classes.dollars}>{this.state.sell}</span>
                                <span className={classNames(this.props.classes.label, this.props.classes.mt)}>sell</span>
                            </span>
                        </p>

                        <Grid container>
                            <Grid item xs={6}><MyButton onClick={(this.state.buytogether==='true')?(this.handleClickOpenDialog1.bind(this)):(this.goToPayment.bind(this))}>buy now</MyButton></Grid>
                            <Grid item xs={6}>
                                <MyButton onClick={this.handleClickOpenDialog2.bind(this)} className={classNames(this.props.classes.hidden, {[this.props.classes.show]: this.state.buytogether==='true'})} >buy together</MyButton>
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>
                <MyDialogAmount open={this.state.opendialog1} name={this.state.name} avatar={this.state.avatar} titlecontent={this.state.titlecontent} subtitlecontent={this.state.subtitlecontent} >

                    <div className={this.props.classes.wrapsoc}>

                        <InputWithPrefix type="number" prefix="$" defaultValue="25" />

                        <div style={{textAlign: 'center'}}>
                            <MyButtonType2 href="#payment-buy-now" style={{minWidth: 163}}>buy now</MyButtonType2>
                        </div>
                    </div>
                </MyDialogAmount>
                <MyDialog open={this.state.opendialog2} name={this.state.name} avatar={this.state.avatar} titlecontent={this.state.titlecontent} subtitlecontent={this.state.subtitlecontent} >
                    <div className={this.props.classes.wrapsoc}>
                        <div style={{textAlign: 'center'}}>
                            <MyButtonType2 href="#payment-buy-together" style={{minWidth: 163}}>buy now</MyButtonType2>
                        </div>
                    </div>
                </MyDialog>
            </div>
        );
    }

}

MyCard.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    giftcard: PropTypes.string.isRequired,
    sell: PropTypes.string.isRequired,
    buytogether: PropTypes.string,
    infbutt: PropTypes.string,
    titlecontent: PropTypes.string,
    subtitlecontent: PropTypes.array,
};

export default withStyles(styles)(MyCard);