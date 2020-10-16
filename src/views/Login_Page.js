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
            login_params: {
                username: "",
                password: ""
            }
        };
    }

    handleFormChange = event => {
        let login_params_new = { ...this.state.login_params };
        let val = event.target.value;
        login_params_new[event.target.name] = val;
        this.setState({
            login_params: login_params_new
        });
    };
 
    login = event => {
        let username = this.state.login_params.username;
        let password = this.state.login_params.password;
        if (username === "admin" && password === "123") {
            localStorage.setItem("token", "T");
            localStorage.setItem("username", username);
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
                    name="username"
                    autoFocus
                    onChange={this.handleFormChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
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