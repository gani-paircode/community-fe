import React, { useRef } from 'react';
import { useAppStore } from '../store';

export const Login = () => {
    const { data: { admin }, actions: { login } } = useAppStore((state) => state);
    const idRef = useRef(null);
    const passRef = useRef(null);
    const adminData = localStorage.getItem('admin');
    console.log('adminData vs admin ', { admin, adminData });
    if (adminData) {
        return (
            <h1>Already Logged in...</h1>
        )
    }

    const isFetching = admin && admin.isFetching;
    const errMsg = admin && admin.errMsg ? admin.errMsg : '';
    return (
        <div>
            <input disabled={isFetching} type='text' ref={idRef} placeholder='Enter id' />
            <br />
            <input disabled={isFetching} type='password' ref={passRef} placeholder='Enter password' />
            <br />
            { isFetching ? <h3>Fetcing ....</h3> : null}
            { errMsg ? <div className='error'>{errMsg}</div> : null }
            <button
                type='button'
                onClick={() => login(idRef.current.value, passRef.current.value)}
                disabled={isFetching}
            >
                    Login
            </button>
        </div>
    )
}