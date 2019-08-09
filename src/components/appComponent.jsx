import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import AppCard from 'components/appCard'
import AppListItem from 'components/appListItem'

const AppComponent = ({ type, slug, ...props }) => {
  const AppItem = type === 'list' ? AppListItem : AppCard
  return <AppItem slug={slug} {...props} />
}

export const query = graphql`
  fragment AppCard on GraphCMS_Application {
    id
    title
    slug
    category {
      name
    }
    icon {
      handle
      width
      height
    }
  }
`

AppComponent.defaultProps = {
  type: 'card',
}

AppComponent.propTypes = {
  slug: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['list', 'card']),
}

export default AppComponent
