import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import App from './App';
// import Biodata from './App';
// import HelloComponent from './component/HelloCopmponent'
// import StateFullComponent from './container/StateFullComponent';
import FormLogin from './form_login/index';

ReactDOM.render(<FormLogin />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
