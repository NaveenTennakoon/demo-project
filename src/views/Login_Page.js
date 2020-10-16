import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Login = () => {
    const [ state , setState ] = useState({
        username : "",
        password : "",
        isLogged: false
    })

    const handleFormChange = event => {
        const { id , value } = event.target   
        setState( prevState => ({
            ...prevState,
            [id] : value
        }))
    };
 
    const login = event => {
        let username = state.username;
        let password = state.password;
        if (username === "admin" && password === "123") {
            localStorage.setItem("token", "T");
            localStorage.setItem("username", username);
            setState( prevState => ({
                ...prevState,
                isLogged : true
            }))
        }
        event.preventDefault();
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
                onChange={handleFormChange}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                type="password"
                onChange={handleFormChange}
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