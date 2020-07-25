import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { GlobalStyle } from '@/presentation/styles/GlobalStyle';
import Login from '@/presentation/pages/Login';

const App = () => {
  return (
    <Router>
      <RecoilRoot>
        <Login />
        <GlobalStyle />
      </RecoilRoot>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));
