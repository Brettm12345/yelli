import { Grid } from '@material-ui/core';
import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import gql from 'graphql-tag';

import AppCard from 'Containers/AppCard';
import CenterProgress from 'Components/CenterProgress';

const GET_APPS = gql`
  query apps {
    apps {
      id
    }
  }
`;

const Home = () => {
  const { data, error, loading } = useQuery(GET_APPS);
  if (loading) {
    return <CenterProgress />;
  }
  if (error) {
    return `Error! ${error.message}`;
  }
  console.log(data);

  return (
    <Grid alignContent="space-between" container spacing={4}>
      {data.apps.map(app => (
        <AppCard key={app.id} id={app.id} />
      ))}
    </Grid>
  );
};

export default Home;
