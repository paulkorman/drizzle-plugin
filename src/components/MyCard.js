import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import classNames from 'classnames';
import Card, { CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import MyButton from './MyButton';

import bgCard from '../img/bg-card.png'

let cardHeadHeight = 70;
let inButtDiam = 26;
let inButtDiam1 = (inButtDiam*65)/100;
let paddStatus = 5;
let fontSizeStatus = 7;

const styles = theme => ({
    card: {
        borderRadius: 6,
        boxShadow: 'none',
        backgroundColor: '#877650',
        marginBottom: 45,
        position: 'relative'
    },
    cardheader: {
        minHeight: cardHeadHeight,
        backgroundImage: 'url(' + bgCard + ')',
        backgroundSize: 'cover',
        padding: 18,
    },
    cardcontent: {
        padding: '0 18px 10px',
        paddingBottom: '20px !important'
    },
    avatar: {
        marginTop: -42,
        border: '3px solid #fff',
        width: 49,
        height: 49
    },
    wraptitle: {
        paddingTop: 7,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
        lineHeight: '27px',
        marginRight: 10,
        verticalAlign: 'middle'
    },
    status: {
        display: 'inline-block',
        minWidth: 56,
        fontSize: fontSizeStatus,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        lineHeight: 1,
        padding: paddStatus + 'px 7px',
        borderRadius: (fontSizeStatus + paddStatus*2)/2,
        textAlign: 'center',
        letterSpacing: 1.5,
        boxSizing: 'border-box',
    },
    ongoingStatus: {
        backgroundColor: '#77bf5e',
    },
    boughtStatus: {
        backgroundColor: '#6ba0dd',
    },
    expiredStatus: {
        backgroundColor: '#a4a1a1',
    },
    wrapgiftcard: {
        marginRight: 25,
    },
    dollars: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#fff',
        marginRight: 8
    },
    label: {
        display: 'inline-block',
        verticalAlign: 'top',
        lineHeight: 1.23,
        fontSize: 9,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
        opacity: 0.3
    },
    wrapprice: {
        marginBottom: 20,
    },
    mt: {
        marginTop: 5,
    },
    groupbuyowner: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 9,
        fontWeight: 'bold',
        lineHeight: 1.23,
        verticalAlign: 'top',
    },
    wrapbutton: {
        display: 'inline-block',
        position: 'relative',
        height: inButtDiam,
        width: inButtDiam,
        lineHeight: inButtDiam,
        verticalAlign: 'middle'
    },
    bgcircle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: '#fff',
        opacity: 0.2
    },
    inButton: {
        position: 'absolute',
        width: inButtDiam1,
        height: inButtDiam1,
        left: '50%',
        top: '50%',
        marginTop: -inButtDiam1/2,
        marginLeft: -inButtDiam1/2,
        backgroundColor: '#fff',
        textAlign: 'center',
        color: '#887650'
    },
    hidden: {
        display: 'none',
    },
    show: {
        display: 'block'
    }

});

function MyCard(props) {
    const { classes, name, giftcard, sell, buytogether, avatar, href, onclick } = props;

    return (
        <div>
            <Card className={classes.card}>
                <div className={classes.cardheader}>
                    <Avatar
                        alt={name}
                        src={avatar}
                        className={classes.avatar}
                    />
                    <Grid container className={classes.wraptitle}>
                        <Grid item xs={9}>
                            <span className={classes.title}>{name}</span>
                        </Grid>
                        <Grid item xs={3} style={{textAlign: 'right'}}>
                            <div className={classes.wrapbutton}>
                                <div className={classes.bgcircle}></div>
                                <IconButton className={classes.inButton} aria-label="Menu" href={href}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="3.48171" height="8.4999788" viewBox="0 0 3.48171 8.4999788" id="svg2"><path d="M2.5 0c-.27 0-.5.097-.694.29-.193.196-.29.43-.29.703 0 .274.097.508.29.702.194.19.424.285.694.285.27 0 .5-.094.69-.285.194-.194.292-.428.292-.702 0-.273-.098-.507-.292-.702C3 .098 2.77 0 2.5 0zm-.915 2.878c-.22 0-.453.042-.7.13-.246.08-.505.18-.776.3L0 3.795c.08-.033.175-.068.285-.104.114-.035.222-.052.33-.052.216 0 .364.038.44.117.077.08.116.22.116.423 0 .11-.013.234-.04.37-.023.134-.053.276-.09.427L.63 6.55c-.037.166-.064.316-.08.45-.017.128-.026.256-.026.382 0 .324.11.593.33.805.224.21.537.313.937.313.26 0 .488-.038.685-.113.197-.072.462-.18.792-.32l.11-.486c-.058.03-.15.065-.276.105-.126.036-.24.053-.34.053-.213 0-.363-.036-.45-.112-.086-.075-.13-.22-.13-.428 0-.083.014-.204.04-.366.028-.16.057-.306.09-.432l.41-1.57c.04-.143.068-.302.082-.474.016-.173.025-.294.025-.362 0-.33-.11-.6-.327-.804-.213-.208-.518-.312-.914-.312z" fill="#877650"/></svg>
                                </IconButton>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <CardContent className={classes.cardcontent}>

                        <p className={classes.wrapprice}>
                            <span className={classes.wrapgiftcard}>
                                <span className={classes.dollars}>{giftcard}</span>
                                <span className={classNames(classes.label, classes.mt)}>gift <br/>card</span>
                            </span>
                            <span>
                                <span className={classes.dollars}>{sell}</span>
                                <span className={classNames(classes.label, classes.mt)}>sell</span>
                            </span>
                        </p>

                        <Grid container>
                            <Grid item xs={6}><MyButton onClick={onclick}>buy now</MyButton></Grid>
                            <Grid item xs={6}>
                                <MyButton className={classNames(classes.hidden, {[classes.show]: buytogether==='true'})} >buy together</MyButton>
                            </Grid>
                        </Grid>

                </CardContent>
            </Card>
        </div>
    );
}

MyCard.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired,
    avatar: PropTypes.string.isRequired,
    giftcard: PropTypes.string.isRequired,
    sell: PropTypes.string.isRequired,
    buytogether: PropTypes.string,
    href: PropTypes.string.isRequired,
};

export default withStyles(styles)(MyCard);