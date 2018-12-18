import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import SEO from '../../atoms/seo';
import '../../../nucleon/nucleon.scss';

const Layout = (props) => {
  const {children} = props
  return (
    <>
      <SEO {...props} />
      <main className="layout">
        {children}
      </main>
    </>)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
