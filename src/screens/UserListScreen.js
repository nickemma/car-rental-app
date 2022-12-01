/* eslint-disable */

import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../redux/actions/UserAction';

const UserListScreen = () => {
  const usersLists = useSelector((state) => state.usersList) 
  const { loading, error, usersList } = usersLists;
  console.log(usersList);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers());
  }, [])
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
        <h1 className='text-2xl font-bold text-[#313131]'>Users List</h1>
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <table className='w-full h-full'>
                <thead>
                    <tr>
                        <th className='text-[#313131]'>Name</th>
                        <th className='text-[#313131]'>Email</th>
                        <th className='text-[#313131]'>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersList?.map((user) => (
                            <tr key={user.id}>
                                <td className='text-[#313131]'>{user.name}</td>
                                <td className='text-[#313131]'>{user.email}</td>
                                <td className='text-[#313131]'>{user.admin}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserListScreen