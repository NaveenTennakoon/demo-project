import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            islogged: false,
            loginParams: {
                user_name: "",
                user_password: ""
            }
        };
    }

    handleFormChange = event => {
        let loginParamsNew = { ...this.state.loginParams };
        let val = event.target.value;
        loginParamsNew[event.target.name] = val;
        this.setState({
            loginParams: loginParamsNew
        });
    };
 
    login = event => {
        let user_name = this.state.loginParams.user_name;
        let user_password = this.state.loginParams.user_password;
        if (user_name === "admin" && user_password === "123") {
            localStorage.setItem("token", "T");
            this.setState({
                islogged: true
            });
        }
        event.preventDefault();
    };

    render() {
        if (localStorage.getItem("token")) {
            return <Redirect to="/" />;
        }
        return (
        <Container component="main" maxWidth="xs">
            <Avatar/>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <form noValidate onSubmit={this.login}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Username"
                    name="user_name"
                    autoFocus
                    onChange={this.handleFormChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="user_password"
                    label="Password"
                    type="password"
                    onChange={this.handleFormChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Sign In
                </Button>
            </form>
        </Container>
        );
    }
}

export default Login;