import { useMediaQuery, useTheme } from '@material-ui/core'
import { graphql } from 'gatsby'
import React, { memo } from 'react'

import Grid from 'src/templates/appGrid.template'
import List from 'src/templates/appList.template'
import {
  AppPageProps,
  CategoryTemplateProps,
} from 'src/types'

const Category: React.FC<CategoryTemplateProps> = ({
  data: {
    yelli: { applications },
  },
  pageContext: { name },
}) => {
  const props: AppPageProps = {
    apps: applications,
    name,
  }
  const theme = useTheme()
  const matches = useMediaQuery(
    theme.breakpoints.down('sm')
  )
  return matches ? <List {...props} /> : <Grid {...props} />
}

export const pageQuery = graphql`
  query applicationsByCategory($id: String!) {
    yelli {
      applications(
        where: {
          published: { equals: true }
          category: { id: { equals: $id } }
        }
      ) {
        ...Application
      }
    }
  }
`

export default memo(Category)
