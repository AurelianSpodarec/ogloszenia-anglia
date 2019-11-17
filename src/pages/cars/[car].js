import { useRouter } from 'next/router'
import Layout from './../Layout.js'

export default function Car() {
    const router = useRouter()

    return (
        <Layout>



            <h1>{router.query.id}</h1>
            <p>This is the blog Car content.</p>
        </Layout>
    )
}