/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Snackbar from 'material-ui/Snackbar';

import MyLinkStyled from '../components/MyLink';
import HeaderLineStyled from '../components/HeaderLineStyled';

import { Link } from "react-router-dom";

import styles from '../theme/pages/Login'

class Login extends Component {
  state = {
    open: false,
  };


  render() {
    //const { vertical, horizontal, open } = this.state;
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.wrapper}>
          <div className={this.props.classes.wrap}>

            <div className={this.props.classes.wrapContent}>
              <div className={this.props.classes.title}>DRIZZLE</div>
              <div className={this.props.classes.subTitle}>Buy gift card with friends and saving</div>
              <TextField
                  placeholder="Your Email"
                  fullWidth={true}
                  InputProps={{
                disableUnderline: true,
                classes: {
                  root: this.props.classes.textFieldRoot,
                  input: this.props.classes.textFieldInput,
                },
              }}
              />
              <TextField
                  type="password"
                  placeholder="Password"
                  fullWidth={true}
                  InputProps={{
                disableUnderline: true,
                classes: {
                  root: this.props.classes.textFieldRoot,
                  input: this.props.classes.textFieldInput,
                },
              }}
              />
              <Link to='/intro'><Button raised className={this.props.classes.button}>Login</Button></Link>
              <Grid container style={{fontSize: 11, marginBottom: 45}}>
                <Grid item xs={6} >
                  <MyLinkStyled href="#" className={this.props.classes.link}>Forgot password?</MyLinkStyled>
                </Grid>
                <Grid item xs={6} style={{textAlign: 'right'}}>
                  <MyLinkStyled href="#sign-up" className={this.props.classes.link}>New here? Sign Up</MyLinkStyled>
                </Grid>
              </Grid>
              <HeaderLineStyled className={this.props.classes.horDivid} >or Login with</HeaderLineStyled>
              <Grid container spacing={0} style={{fontSize: 11}}>
                <Grid item xs={12} sm={6} className={this.props.classes.gridItem}>
                  <Button className={this.props.classes.btnfacebook}><span className={this.props.classes.facebookIco}></span>facebook</Button>
                </Grid>
                <Grid item xs={12} sm={6} className={this.props.classes.gridItem}>
                  <Button className={this.props.classes.btntwitter}><span className={this.props.classes.twitter}></span>twitter</Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <Snackbar
            className={this.props.classes.message}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={true}
            onRequestClose={this.handleRequestClose}
            SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
            message={<span id="message-id">Error</span>}
        />
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(Login));
