import { List } from '@material-ui/core'
import Application from 'components/application'
import ListHeader from 'components/listHeader'
import SEO from 'components/seo'
import PropTypes from 'prop-types'
import React from 'react'

const AppList = ({ name, apps }) => (
  <>
    <SEO title={name} />
    <ListHeader>{name}</ListHeader>
    <List>
      {apps.map(app => (
        <Application key={app.id} variant="list" {...app} />
      ))}
    </List>
  </>
)

AppList.propTypes = {
  apps: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
}

export default AppList
