import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import Link from 'next/link';

import { DriveEta, House } from "@material-ui/icons";

import { Icon, Container, Grid, Fab, Paper, withStyles } from "@material-ui/core";


import { makeStyles } from '@material-ui/core/styles';







const styles = theme => ({
    "@global": {
        body: {
            height: "100%",
            margin: 0,
            marginTop: '64px',
        },

    }
});


class Layout extends Component {

    render() {

        return (
            <div className="app">
                <Header />
                <Categories />
                {/* <nav>
                        <Fab color="secondary" aria-label="edit">
                            <DriveEta />
                        </Fab>
                        <Fab color="secondary" aria-label="edit">
                            <House />
                        </Fab>


                        <PostLink id="cars" />
                        <PostLink id="housing" />
                        <PostLink id="services" />
                        <PostLink id="work" />
                        <PostLink id="free" />
                        <PostLink id="sport" />
                    </nav> */}

                <div>
                    {this.props.children}
                </div>

                <Footer />
            </div>
        );
    }
}


export default withStyles(styles)(Layout);
