import { Divider, Grid } from '@material-ui/core'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import React from 'react'

import FeaturedAppCard from 'components/featuredAppCard'
import AppComponent from 'components/appComponent'
import HomeSection from 'components/homeSection'
import { spacing } from 'util/theme'
import SEO from 'components/seo'

const Root = styled(Grid)`
  padding-top: ${spacing(1)};
`

const Home = ({ data: { latest, top, featured } }) => (
  <>
    <SEO title="Home" />
    <Root container direction="column">
      <HomeSection
        title="Featured Apps"
        apps={featured.applications}
        AppComponent={FeaturedAppCard}
      />
      <Divider variant="fullWidth" />
      <HomeSection
        title="Top Apps"
        link="/top-apps"
        apps={top.applications}
        AppComponent={AppComponent}
      />
      <Divider variant="fullWidth" />
      <HomeSection
        title="New Apps"
        link="/new-apps"
        apps={latest.applications}
        AppComponent={AppComponent}
      />
    </Root>
  </>
)

export const query = graphql`
  query homePage {
    featured: graphcms {
      applications(where: { featured: true }) {
        ...FeaturedAppCard
      }
    }
    latest: graphcms {
      applications(first: 15, orderBy: createdAt_DESC) {
        ...AppCard
      }
    }
    top: graphcms {
      applications(first: 15, orderBy: rank_ASC) {
        ...AppCard
      }
    }
  }
`

export default Home
