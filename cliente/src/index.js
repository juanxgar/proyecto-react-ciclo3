import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Auth0Provider} from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider domain="dev-w3039v4s.us.auth0.com"
  clientId="MjDgkNK1bm5KPdEKkIpn27nWq04i4VI3"
  redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>,
  document.getElementById('root')
);

