import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import MyAppBar from '../components/MyAppBar';
import TextGroup from '../components/TextGroup/TextGroup';
import MyButtonType2 from '../components/MyButtonType2';
import Card, { CardContent } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import NumberFormat from 'react-number-format';
import classNames from 'classnames';


import bgCard from '../img/bg-card.png'

let cardHeadHeight = 38;


let width=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

const styles = theme => ({
    root: {
        minHeight: 'inherit',
        paddingTop: 25,
        paddingBottom: 44,
        height: (width>320)?scrollHeight:'100%'
    },
    card: {
        borderRadius: 6,
        boxShadow: 'none',
        backgroundColor: '#877650',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 45,
        position: 'relative'
    },
    cardheader: {
        minHeight: cardHeadHeight,
        backgroundImage: 'url(' + bgCard + ')',
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 -50px',
        padding: 18,
        marginBottom: 16,
    },
    cardcontent: {
        padding: '0 18px 10px'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
        lineHeight: 1,
        verticalAlign: 'middle',
        marginRight: 10,
        marginBottom: 24,
    },
    param: {
        lineHeight: 1.4,
    },
    param__prop: {
        position: 'relative',
        display: 'block',
        overflow: 'hidden',
        '&:after': {
            content: "''",
            position: 'absolute',
            marginLeft: '.3em',
            bottom: '.35em',
            width: '100%',
            height: 1,
            //borderBottom: '.105em dotted',
            background: "url('data:image/png;base64,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UmVhZHlxyWU8AAADdmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzIgNzkuMTU5Mjg0LCAyMDE2LzA0LzE5LTEzOjEzOjQwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmI0N2VlNmFlLWRkZmItNzM0OS04N2I3LTQzZjU0NzNiYTJjYiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNEYxRUREN0MzRDQxMUU3OTU3OTgxQUNCOEJBMTlDQSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNEYxRURENkMzRDQxMUU3OTU3OTgxQUNCOEJBMTlDQSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkNGIxYWVhNy1mM2ZmLTE3NDMtOWJmNC0wZTRhYzRlN2RlYjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6YjQ3ZWU2YWUtZGRmYi03MzQ5LTg3YjctNDNmNTQ3M2JhMmNiIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hqIqzgAAABJJREFUeNpi/P//PwMWsAogwABFlwOpYiHO8gAAAABJRU5ErkJggg==') repeat-x",
        },
    },
    param__value: {
        float: 'right',
        paddingLeft: '.2em',
        opacity: 0.5,
        boxSizing: 'border-box',
    },
    param__align: {
        '&:after': {
            content: "''",
            display: 'table',
            clear: 'both'
        },
    },
    list: {
        listStyleType: 'none',
    },
    list__item: {
        marginBottom: 7,
    },
    ul: {
        listStyleType: 'none',
        paddingLeft: 0,
        margin: 0,
        color: '#fff',
        fontSize: 11,
        fontWeight: 500,
        marginTop: 15,
        marginBottom: 20,
    },
    divider: {
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
    row: {
        color: '#fff',
        marginBottom: theme.spacing.unit * 2
    },
    textFieldRoot: {
        padding: 0,
        'label + &': {
            marginTop: theme.spacing.unit * 4,
        },
    },
    textFieldInput: {
        borderRadius: 4,
        background: theme.palette.common.white,
        border: '1px solid #fff',
        fontSize: 11,
        fontWeight: 500,
        textTransform: 'uppercase',
        padding: '15px 10px',
        marginBottom: theme.spacing.unit * 2,
        color: 'rgba(136,118,80,0.7)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
        '& input': {
            padding: 0
        }
    },
    textFieldFormLabel: {
        fontSize: 14.66666,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase'
    },
    inputLabel: {
        fontSize: 11,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 8,
        display: 'inline-flex'
    },
    wrapNumberFormat: {
        display: 'flex'
    },
    numberFormat: {
        "border": "1px solid #fff",
        "padding": "15px 10px",
        "fontSize": "11px",
        "background": "#fff",
        "transition": "border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        "fontWeight": "500",
        "borderRadius": "4px",
        "marginBottom": "10px",
        "textTransform": "uppercase",
        color: 'rgba(136,118,80,0.7);',
        width: '100%',
    },
    circlebutton: {
        boxShadow: 'none',
        backgroundColor: '#bca060',
        minWidth: 'auto',
        minHeight: 'auto',
        width: 18,
        height: 18,
        lineHeight: 1,
        borderRadius: '50%',
        padding: 0,
        '&:hover': {
            backgroundColor: '#bca060',
        },
        position: 'absolute',
        right: 9,
        top: '50%',
        bottom: '50%',
        marginTop: -13.5,
        cursor: 'pointer',
    }
});


class Payment extends Component {
    state = {

    };

    render() {

        return (
            <div className={this.props.classes.root}>
                <MyAppBar
                    title="Your order"
                />
                <Card className={this.props.classes.card}>
                    <div className={this.props.classes.cardheader}>
                    </div>
                    <CardContent className={this.props.classes.cardcontent}>
                        <div className={this.props.classes.title}>
                            Welcome, xxx
                        </div>
                        <Divider className={this.props.classes.divider} />
                        <ul className={this.props.classes.ul}>
                            <li className={this.props.classes.list__item}>
                                <div className={classNames(this.props.classes.param)}>
                                    <span className={this.props.classes.param__value}>90 usd</span>
                                    <span className={this.props.classes.param__prop}>starbacks $100 gift card</span>
                                </div>
                            </li>
                        </ul>
                        <Divider className={this.props.classes.divider} style={{marginBottom: 51}} />
                        <TextGroup groupName="Payment selection">
                            <div className={this.props.classes.row}>
                                <label className={this.props.classes.inputLabel} style={{fontSize: 11}}>card number</label>
                                <div className={this.props.classes.wrapNumberFormat}>
                                    <NumberFormat className={this.props.classes.numberFormat} style={{letterSpacing:2}} format="####  ####  ####  ####" placeholder="0000  0000  0000  0000" mask="_"/>
                                </div>
                            </div>
                            <div className={this.props.classes.row}>
                                <TextField
                                    label="name on card"
                                    defaultValue="Jerry Jiang"
                                    fullWidth={true}
                                    InputProps={{
                                      disableUnderline: true,
                                      classes: {
                                        root: this.props.classes.textFieldRoot,
                                        input: this.props.classes.textFieldInput,
                                      },
                                    }}
                                    InputLabelProps={{
                                      shrink: true,
                                      className: this.props.classes.textFieldFormLabel,
                                    }}
                                />
                            </div>
                            <div className={this.props.classes.row}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <label className={this.props.classes.inputLabel}>expiry date</label>
                                        <div className={this.props.classes.wrapNumberFormat}>
                                            <NumberFormat className={this.props.classes.numberFormat} format="## / ##" placeholder="MM / YY" mask="_"/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <label className={this.props.classes.inputLabel} style={{marginLeft: -5}}>CVV code</label>
                                        <div className={this.props.classes.wrapNumberFormat} style={{marginLeft: -5, position: 'relative'}}>
                                            <NumberFormat className={this.props.classes.numberFormat} style={{letterSpacing: 1.5}} type="password" format="###" placeholder="•••" mask="_"/>
                                            <Button aria-label="inf" className={this.props.classes.circlebutton}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="5.2045636" height="8.5019345" viewBox="0 0 5.2045636 8.5019345" id="svg2"><path d="M2.377.002c-.42 0-.818.08-1.193.24C.816.395.494.615.22.898c-.147.146-.22.307-.22.483 0 .208.1.387.3.54.114.092.244.14.39.14.2 0 .39-.087.574-.255.32-.284.692-.424 1.113-.424.413 0 .76.127 1.035.38.276.252.412.57.412.953 0 .498-.152.866-.46 1.103-.305.238-.71.356-1.216.356-.2 0-.364.07-.494.207-.13.13-.195.294-.195.493v.873c0 .2.064.366.194.504.13.13.295.195.494.195.2 0 .364-.065.495-.195.13-.138.195-.305.195-.504V5.32c0-.023.018-.04.057-.056.696-.108 1.256-.376 1.677-.805.42-.43.63-1.012.63-1.747 0-.498-.125-.954-.378-1.367-.252-.42-.592-.75-1.02-.99C3.373.12 2.897.003 2.376.003zM2.09 6.928c-.222 0-.393.06-.516.183-.115.116-.174.285-.174.507v.196c0 .222.06.395.174.517.123.115.294.172.516.172h.15c.222 0 .39-.057.506-.172.123-.122.184-.295.184-.518v-.195c0-.222-.06-.39-.184-.506-.115-.12-.284-.182-.506-.182h-.15z" fill="#fff"/></svg>
                                            </Button>
                                        </div>

                                    </Grid>
                                </Grid>
                                <div style={{textAlign: 'center', marginTop: 30}}>
                                    <MyButtonType2>complete order</MyButtonType2>
                                </div>
                            </div>
                        </TextGroup>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

Payment.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Payment));

