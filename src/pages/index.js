import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Link to="/about/">Go to About Page</Link>
    <br />
    <Link to="/store/">Go to Store Page</Link>
  </Layout>
)

export default IndexPage
