import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css'; // If you have any CSS


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)


/*const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);*/
