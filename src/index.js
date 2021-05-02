import React from 'react';
import ReactDOM from 'react-dom';
import AppScene from './scenes/AppScene';
import Layout from './components/Layout';
import { CssBaseline } from '@material-ui/core';
import { DisplacementsProvider } from './contexts/DisplacementsContext'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <DisplacementsProvider>
      <Layout>
        <AppScene />
      </Layout>
    </DisplacementsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
