'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/app';

// Assets
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './styles/app.less';

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);

// For Development
if (module.hot) {
  module.hot.accept('./components/app', () => {
    const NextApp = require('./components/app').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.querySelector('#app')
    );
  });
}
