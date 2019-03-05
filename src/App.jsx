import { CssBaseline } from '@material-ui/core';
import { Router, View } from 'react-navi';
import { hot } from 'react-hot-loader/root';
import { makeStyles } from '@material-ui/styles';
import React, { Suspense } from 'react';

import Auth from 'Containers/Auth';
import CenterProgress from 'Components/CenterProgress';
import CreateApp from 'Containers/CreateApp';
import Header from 'Containers/Header';
import SideDrawer from 'Containers/SideDrawer';
import routes from 'Routes';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router routes={routes}>
        <Header />
        <CreateApp />
        <SideDrawer />
        <Auth />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Suspense fallback={CenterProgress}>
            <View />
          </Suspense>
        </main>
      </Router>
    </div>
  );
};

export default hot(App);
