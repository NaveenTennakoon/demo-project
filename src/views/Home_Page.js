import React from "react";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Home = () => {
    const history = useHistory();

    const signOut = () => {
        localStorage.clear();
        history.push('/');
    };

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