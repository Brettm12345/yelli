import { Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import { mount, route } from 'navi';
import { useQuery } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import gql from 'graphql-tag';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import APP_CARD from 'Graphql/AppCard.gql';
import AppCard from 'Containers/AppCard';
import AppListItem from 'Containers/AppListItem';

export default mount({
  '/:name': route(async req => ({
    title: `Yelli - ${req.params.name}`,
    view: <Category name={req.params.name} />
  }))
});

const GET_APPS = gql`
  query category($name: String!) {
    apps(where: { category: { name: $name } }) {
      ...AppCard
    }
  }
  ${APP_CARD}
`;

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.background.paper,
      padding: {
        top: theme.spacing(3)
      },
      paddingInlineStart: `${theme.spacing(1)}px`
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: {
        bottom: theme.spacing(3),
        left: theme.spacing(4),
        right: theme.spacing(4),
        top: theme.spacing(3)
      }
    },
    listStyle: 'none'
  }
}));

const Category = memo(({ name }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { data, loading } = useQuery(GET_APPS, {
    variables: { name }
  });

  const AppComponent = matches ? AppCard : AppListItem;

  if (loading || !data.apps) {
    return (
      <Grid className={classes.root} component="ul" container spacing={2}>
        {[...new Array(20).keys()].map(key => (
          <AppComponent key={key} loading />
        ))}
      </Grid>
    );
  }

  return (
    <Grid className={classes.root} component="ul" container spacing={2}>
      {data.apps.map(app => (
        <AppComponent
          key={app.id}
          category={app.category}
          icon={app.icon}
          id={app.id}
          name={app.name}
        />
      ))}
    </Grid>
  );
});

Category.propTypes = {
  name: PropTypes.string.isRequired
};
