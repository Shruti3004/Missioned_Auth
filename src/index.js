import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider} from './Auth';

ReactDOM.render(
<AuthProvider>    
    <Router>
        <App/>
    </Router>
</AuthProvider>, document.querySelector('#root'));