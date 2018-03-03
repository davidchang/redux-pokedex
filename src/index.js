import React from 'react';
import ReactDOM from 'react-dom';
import DataProvider from './DataProvider';
import DataConsumer from './DataConsumer';
import App from './App';

ReactDOM.render(
  <DataProvider>
    <DataConsumer>
      <App />
    </DataConsumer>
  </DataProvider>,
  document.getElementById('root'),
);
