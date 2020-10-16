import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Home = () => {
    const[logout, setLogout] = useState(false);

    const signOut = () => {
        localStorage.clear();
        setLogout(true);
    };

    if (logout) {
        return <Redirect to="/login" />;
    }
    return (
    <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
            Welcome {localStorage.getItem("username")}
        </Typography>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={signOut}
        >
            Sign Out
        </Button>
    </Container>
    );
}
 
export default withRouter(Home);