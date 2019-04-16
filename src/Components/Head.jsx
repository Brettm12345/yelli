import React from 'react';
import { Helmet } from 'react-helmet';
import { useTheme } from '@material-ui/styles';

const Head = () => {
  const theme = useTheme();
  const isDark = theme.palette.type === 'dark';
  return (
    <Helmet defaultTitle="Yelli" titleTemplate="Yelli - %s">
      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1, user-scalable=no"
        name="viewport"
      />
      <meta content="Yelli" property="og:title" />
      <meta
        content="A directory for progressive web apps"
        property="og:description"
      />
      <meta
        content="Yelli - A directory for progressive web apps"
        property="og:image:alt"
      />
      <meta content="https://yelli.com" property="og:url" />
      <meta content="website" property="og:type" />
      <meta content="A directory for progressive web apps" name="Description" />
      <meta content={isDark ? '#161a2a' : '#ffffff'} name="theme-color" />
      <meta content="yes" name="mobile-web-app-capable" />
      <meta content="Yelli" name="apple-mobile-web-app-title" />
      <meta content="yes" name="apple-mobile-web-app-capable" />
      <meta content="default" name="apple-mobile-web-app-status-bar-style" />
      <meta content="Yelli" name="application-name" />
      <meta
        content={isDark ? '#161a2a' : '#ffffff'}
        name="msapplication-TileColor"
      />
      <link href="https://api.yelli.com" rel="preconnect" />
    </Helmet>
  );
};

export default Head;
