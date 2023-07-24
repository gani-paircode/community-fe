import React, { useRef } from 'react';
import { useAppStore } from '../store';

export const Login = () => {
    const { data: { admin }, actions: { login } } = useAppStore((state) => state);
    const idRef = useRef(null);
    const passRef = useRef(null);
    const adminData = localStorage.getItem('admin');
    
    console.log('admin in Login.jsx ', admin)

    if (adminData) {
        return (
            <h1>Already Logged in...</h1>
        )
    }
    return (
        <div>
            <input type='text' ref={idRef} placeholder='Enter id' />
            <br />
            <input type='password' ref={passRef} placeholder='Enter password' />
            <br />
            <button type='button' onClick={login} disabled={admin && admin.isFetching}> Login </button>
        </div>
    )
}