import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            islogout: false
        };
    }

    signOut = () => {
        localStorage.removeItem("token");
        this.setState({
            islogout: true
        });
    };

    render() {
        if (this.state.islogout) {
            return <Redirect to="/login" />;
        }
        const { match } = this.props;
        return (
        <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
                Welcome
            </Typography>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.signOut}
            >
                Sign Out
            </Button>
        </Container>
        );
    }
}
 
export default withRouter(Home);