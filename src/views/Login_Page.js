import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Login = () => {
    const [ username , setUsername ] = useState('');
    const [ password , setPassword ] = useState('');
    const history = useHistory();
 
    const login = (event) => {

        event.preventDefault();

        let xhr = new XMLHttpRequest();

        xhr.addEventListener('load', () => {
            if (JSON.parse(xhr.response).success) {
                localStorage.setItem("token", "T");
                localStorage.setItem("username", username);
                history.push('/');
            }
        });
        xhr.open('POST', 'https://d7tbmlp4xb.execute-api.us-west-2.amazonaws.com/dev/logintest');
        xhr.send(JSON.stringify({ username: username, password: password }))   ;
    };

    if (localStorage.getItem("token")) {
        return <Redirect to="/" />;
    }
    return (
    <Container component="main" maxWidth="xs">
        <Avatar/>
        <Typography component="h1" variant="h5">
            Sign in
        </Typography>
        <form noValidate onSubmit={login}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Username"
                id="username"
                autoFocus
                onChange={ (event) => { setUsername(event.target.value) }}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                type="password"
                onChange={ (event) => { setPassword(event.target.value) }}
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

export default Login;