import React from 'react';
import ReactDOM from 'react-dom';
import AppScene from './scenes/AppScene';
import Layout from './components/Layout';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Layout>
      <AppScene />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);
