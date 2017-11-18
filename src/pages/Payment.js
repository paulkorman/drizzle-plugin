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

import styles from '../theme/pages/Payment';

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
                    <div className={this.props.classes.cardHeader}>
                    </div>
                    <CardContent className={this.props.classes.cardContent}>
                        <div className={this.props.classes.title}>
                            Welcome, xxx
                        </div>
                        <Divider className={this.props.classes.divider} />
                        <ul className={this.props.classes.ul}>
                            <li className={this.props.classes.listItem}>
                                <div className={classNames(this.props.classes.param)}>
                                    <span className={this.props.classes.paramValue}>$90</span>
                                    <span className={this.props.classes.paramProp}>starbacks $100 gift card</span>
                                </div>
                            </li>
                        </ul>
                        <Divider className={this.props.classes.divider} style={{marginBottom: 51}} />
                        <TextGroup groupName="Payment information">
                            <div className={this.props.classes.subTextGroup}>safe money tur bank account. Visa, Maestro, Discover, American Express</div>
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
                                            <Button aria-label="inf" className={this.props.classes.circleButton}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="5.2045636" height="8.5019345" viewBox="0 0 5.2045636 8.5019345" id="svg2"><path d="M2.377.002c-.42 0-.818.08-1.193.24C.816.395.494.615.22.898c-.147.146-.22.307-.22.483 0 .208.1.387.3.54.114.092.244.14.39.14.2 0 .39-.087.574-.255.32-.284.692-.424 1.113-.424.413 0 .76.127 1.035.38.276.252.412.57.412.953 0 .498-.152.866-.46 1.103-.305.238-.71.356-1.216.356-.2 0-.364.07-.494.207-.13.13-.195.294-.195.493v.873c0 .2.064.366.194.504.13.13.295.195.494.195.2 0 .364-.065.495-.195.13-.138.195-.305.195-.504V5.32c0-.023.018-.04.057-.056.696-.108 1.256-.376 1.677-.805.42-.43.63-1.012.63-1.747 0-.498-.125-.954-.378-1.367-.252-.42-.592-.75-1.02-.99C3.373.12 2.897.003 2.376.003zM2.09 6.928c-.222 0-.393.06-.516.183-.115.116-.174.285-.174.507v.196c0 .222.06.395.174.517.123.115.294.172.516.172h.15c.222 0 .39-.057.506-.172.123-.122.184-.295.184-.518v-.195c0-.222-.06-.39-.184-.506-.115-.12-.284-.182-.506-.182h-.15z" fill="#fff"/></svg>
                                            </Button>
                                        </div>

                                    </Grid>
                                </Grid>
                                <div style={{textAlign: 'center', marginTop: 30}}>
                                    <MyButtonType2 href="#order-accepted">complete order</MyButtonType2>
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
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(Payment));

