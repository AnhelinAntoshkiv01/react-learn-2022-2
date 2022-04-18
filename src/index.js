import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'rect-router-dom';

import { App } from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);