import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

const id = Number(window.location.pathname.slice(1, window.location.pathname.length - 1));

ReactDOM.render(<App id = {id} />, document.getElementById('app'));