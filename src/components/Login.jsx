import React, { useRef } from 'react';
import { useAppStore } from '../store';

export const Login = () => {
    const { data: { admin }, actions: { login } } = useAppStore((state) => state);
    const idRef = useRef(null);
    const passRef = useRef(null);
    const adminData = localStorage.getItem('admin');
    if (adminData) {
        return (
            <h1>Already Logged in...</h1>
        )
    }

    const isFetcing = admin && admin.isFetching;
    return (
        <div>
            <input disabled={isFetcing} type='text' ref={idRef} placeholder='Enter id' />
            <br />
            <input disabled={isFetcing} type='password' ref={passRef} placeholder='Enter password' />
            <br />
            <button
                type='button'
                onClick={() => login(idRef.current.value, passRef.current.value)}
                disabled={isFetcing}
            >
                    Login
            </button>
        </div>
    )
}