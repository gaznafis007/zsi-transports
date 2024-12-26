'use client';
import { store } from '@/redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import Navbar from '../Navbar/Navbar';

const ReduxProvider = ({children}) => {
    return (
        <Provider store={store}>
            <Navbar/>
            {children}
        </Provider>
    );
};

export default ReduxProvider;