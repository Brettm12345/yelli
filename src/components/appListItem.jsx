import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import Img from 'graphcms-image'

const useStyles = makeStyles(theme => ({
  category: {
    fontWeight: 500,
  },
  icon: {
    height: 50,
    width: 50,
  },
  text: {
    marginLeft: theme.spacing(1),
  },
  root: {
    padding: theme.spacing(2),
  },
}))

const AppListItem = ({ handleClick, category, title, icon }) => {
  const classes = useStyles()
  return (
    <ListItem
      button
      className={classes.root}
      disableGutters
      divider
      onClick={handleClick}
    >
      <ListItemIcon>
        <Img
          alt="Application Icon"
          className={classes.icon}
          image={icon}
          maxWidth={50}
          title={title}
          withWebp
        />
      </ListItemIcon>
      <ListItemText
        className={classes.text}
        primary={title}
        primaryTypographyProps={{ variant: 'h6' }}
        secondary={category.name}
        secondaryTypographyProps={{
          className: classes.category,
          color: 'textSecondary',
          variant: 'subtitle2',
        }}
      />
    </ListItem>
  )
}
AppListItem.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.shape({
    handle: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
}

export default AppListItem