import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from 'next/link';


import { Container, Grid, Paper, withStyles } from "@material-ui/core";



const styles = theme => ({
    "@global": {
        body: {
            height: "100%",
            margin: 0,
            marginTop: '64px',
        },

    }
});


const PostLink = props => (
    <li>
        <Link href="cars/[car]" as={`cars/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
)


class Layout extends Component {
    render() {

        return (
            <div className="app">
                <Header />

                <nav>
                    <PostLink id="cars" />
                    <PostLink id="housing" />
                    <PostLink id="services" />
                    <PostLink id="work" />
                    <PostLink id="free" />
                    <PostLink id="sport" />
                </nav>

                <div>
                    {this.props.children}
                </div>

                <Footer />
            </div>
        );
    }
}


export default withStyles(styles)(Layout);
