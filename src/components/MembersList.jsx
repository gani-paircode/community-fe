import React from 'react';
import _get from 'lodash/get';
import { useAppStore } from '../store';

export const MembersList = () => {
    const { data: { members }, actions: { getMembers } } = useAppStore((state) => state);
    console.log('getMembers in component ', members)

    const isFetching = _get(members, 'isFetching', false);
    const errMsg = _get(members, 'errMsg', '');
    const data = _get(members, 'data', null);
    return (
        <div>
            {isFetching ? <h2>Fetching...</h2> : null}
            {errMsg ? <div className='error'>{errMsg}</div> : null}
            <button disabled={isFetching} onClick={getMembers}>Fetch Members</button>
            {data ? <pre>{JSON.stringify(data, "", 2)}</pre> : null}
        </div>
    )
};