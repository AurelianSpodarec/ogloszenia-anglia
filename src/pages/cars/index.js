import React, { Component } from 'react';
import Layout from './../Layout.js'
import Link from 'next/link'

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
                <PostLink id="Audi" />
                <PostLink id="BWM" />
            </Layout>
        )
    }
}

export default Cars;