import Layout from './Layout';
import Link from 'next/link';
// import fetch from 'isomorphic-unfetch';
import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

const Index = props => (
    <Layout>

        <h1>Layout</h1>
    </Layout>
);

export default Index;