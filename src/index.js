import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import './styles/app.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <div className='app'>
            <App />
        </div>
    </Provider>, 
    document.getElementById('root') 
);
