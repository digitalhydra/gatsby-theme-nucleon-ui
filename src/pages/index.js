import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/organisms/layout'

const IndexPage = ({children}) => (
  <Layout title="Home" keywords={['gatsby', 'application', 'react']} >
    <div className="grid-container">
      <h1 className="u-text--primary">Start using Nucleon UI</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas id, vitae illum nostrum rerum sequi soluta recusandae nulla et aperiam, in harum aliquid dolorem adipisci repudiandae fuga esse maiores saepe!</p>
      <Link to="/page-2/">Go to page 2</Link>
      {children}
    </div>

  </Layout>
)

export default IndexPage
