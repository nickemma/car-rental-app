/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../redux/actions/UserAction";

const UserListScreen = ({
  currentItems,
  updateHandler,
  deleteHandler,
}) => {
  const [toggle, setToggle] = useState(false);
  const usersLists = useSelector((state) => state.usersList);
  const { loading, usersList } = usersLists;

  const dispatch = useDispatch();

  const HandleToggleChange = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-2xl font-bold mb-5">Users List</h1>
      <div className="overflow-x-auto relative w-full max-w-[1200px]">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3">
                Photo
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                Role
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.slice().sort((a , b) => a.admin - b.admin).map((user) => (
              <tr key={user.id} className="bg-white border-b">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="relative w-8 h-8 mr-3 rounded-full ">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src={user.avatar?.url}
                        alt="..."
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                  </div>
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  {user.name}
                </td>
                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                  {user.email}
                </td>
                {user.admin === true ? (
                  <td className="text-[#313131] font-semibold py-4 px-6 ">
                    <button className="bg-red-500 text-white px-2 py-1 rounded-md">
                      Admin
                    </button>
                  </td>
                ) : (
                  <td className="text-[#313131] font-semibold py-4 px-6">
                    User
                  </td>
                )}
                <td className="py-4 px-6 flex items-start  gap-5 font-medium text-gray-900 whitespace-nowrap">
                  {/* delete button */}
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    onClick={() => deleteHandler(user.id)}
                  >
                    Delete
                  </button>
                  <>
                    <div
                      onClick={() => updateHandler(user.id)}
                    >
                      {user.admin === true ? (
                        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                          <input
                            type="checkbox"
                            name="toggle"
                            id="toggle"
                            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 right-0 appearance-none cursor-pointer"
                            checked={toggle}
                            onChange={HandleToggleChange}
                          />
                          <label
                            htmlFor="toggle"
                            className="toggle-label block overflow-hidden h-6 rounded-full bg-blue-300 cursor-pointer"
                          ></label>
                        </div>
                      ) : (
                        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                          <input
                            type="checkbox"
                            name="toggle"
                            id="toggle"
                            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                            checked={toggle}
                            onChange={HandleToggleChange}
                          />
                          <label
                            htmlFor="toggle"
                            className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                          ></label>
                        </div>
                      )}
                    </div>
                  </>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserListScreen;
