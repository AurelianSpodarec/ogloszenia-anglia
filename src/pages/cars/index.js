import React, { Component } from 'react';
import Layout from './../Layout.js'
import Link from 'next/link'
import { Container, Grid, Paper, withStyles } from "@material-ui/core";


const PostLink = props => (
    <li>
        <Link href="cars/[car]" as={`cars/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
)

class Cars extends Component {
    render() {
        return (
            <Layout>


                <Container>
                    <Grid container spacing={5}>
                        <Grid item xs={6} sm={4}>
                            <Paper>Sidebar</Paper>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <PostLink id="Audi" />
                            <PostLink id="BWM" />
                        </Grid>
                    </Grid>
                </Container>
            </Layout>
        )
    }
}

export default Cars;