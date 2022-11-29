/* eslint-disable */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listUsers } from '../redux/actions/UserAction';

const UsersScreen = () => {
    const users = useSelector((state) => state.userList);
    const { loading, error, userLists } = users;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listUsers())
    }, [])

    return (
        <div>
            <h1>Users</h1>
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ADMIN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userLists?.map((user) => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.isAdmin ? 'Yes' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default UsersScreen;
