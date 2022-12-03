/* eslint-disable */
import { useState } from 'react';
import { CgLogOut } from 'react-icons/cg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../assets/logo.gif';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, navbarItems, NavItemsAdmin, socialIcons } from '../data';
import { logout } from '../redux/actions/UserAction';
import { FiChevronsLeft } from 'react-icons/fi';

const Navbar = () => {
  const notify = () => {
    toast.success('Logout successful');
  };
  const [open, setOpen] = useState(true);
  const user = useSelector((state) => state.userLogin);
  const { userInfo } = user;
  const admin = userInfo?.admin;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutHandler = () => {
    dispatch(logout());
    notify();
    navigate('/');
  };
  return (
    <>
      <div className="flex max-h-[95vh]">
        <div
          className={`${
            open ? 'w-[15rem]' : 'w-[3.2rem]'
          } h-screen border-r-2 border-slate-300 bg-white relative duration-300 `}
        >
          <div className="bg-white rounded-full max-w-[70px] -right-4 top-2  shadow-lg  p-5 absolute">
            <FiChevronsLeft
              className={`cursor-pointer -right-0 top-9 w-9 font-medium text-2xl ${
                !open && 'rotate-180'
              }`}
              onClick={() => setOpen(!open)}
            />
          </div>
          <div
            className={`${
              open ? 'w-20' : 'w-12'
            } cursor-pointer duration-300 my-4 mx-auto border-rounded`}
          >
            <img src={logo} alt="logo" />
          </div>
          {userInfo ? (
            <div className="flex flex-row items-center mt-[3rem]">
              {/* call avatar */}
              <div
                className={`flex items-center justify-center  rounded-full bg-white ml-1
              ${open ? 'w-[55px] h-[55px]' : 'w-[40px] h-[40px]'}
              `}
              >
                <img
                  src={userInfo?.avatar?.url}
                  alt="avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <p
                className={`${
                  !open && 'hidden'
                } origin-left duration-200 text-sm mx-3 font-medium`}
              >
                {userInfo?.name}
              </p>
            </div>
          ) : null}

          <nav>
            <ul className="pt-6">
              {navbarItems.map((item) => (
                <NavLink
                  key={item.name}
                  className={`text-white text-sm flex items-center duration-500 gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-bl-lg ${
                    item.gap ? 'mt-9' : 'mt-2'
                  }`}
                  to={item.path}
                >
                  <span className="text-black font-extrabold text-xl ml-1">
                    {item.icon}
                  </span>
                  <span
                    className={`${
                      !open && 'hidden'
                    } origin-left duration-200 text-base font-semibold text-center text-slate-800`}
                  >
                    {item.name}
                  </span>
                </NavLink>
              ))}
            </ul>
            {/* Admin section */}
            {/* ********************************* */}
            <div>
              {admin ? (
                <ul className="pt-6">
                  <li
                    className={`${
                      !open && 'hidden'
                    } origin-left duration-200 text-base font-bold text-center text-slate-800`}
                  >
                    Admin
                  </li>
                  {NavItemsAdmin.map((item) => (
                    <NavLink
                      key={item.name}
                      className={`text-white text-sm flex items-center duration-500 gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-bl-lg ${
                        item.gap ? 'mt-9' : 'mt-2'
                      }`}
                      to={item.path}
                    >
                      <span className="text-black font-extrabold text-xl ml-1">
                        {item.icon}
                      </span>
                      <span
                        className={`${
                          !open && 'hidden'
                        } origin-left duration-200 text-base font-semibold text-center text-slate-800`}
                      >
                        {item.name}
                      </span>
                    </NavLink>
                  ))}
                </ul>
              ) : null}
            </div>
            {/* ********************************* */}
            {/* End Admin section */}
            {!userInfo ? (
              <ul className="pt-6">
                {auth.map((item) => (
                  <NavLink
                    key={item.name}
                    className={`text-white text-sm flex items-center duration-500 gap-x-4 cursor-pointer p-2 hover:bg-gray-500 rounded-bl-lg ${
                      item.gap ? 'mt-9' : 'mt-2'
                    }`}
                    to={item.path}
                  >
                    <span className="text-black font-extrabold text-xl ml-1">
                      {item.icon}
                    </span>
                    <span
                      className={`${
                        !open && 'hidden'
                      } origin-left duration-200 text-base font-semibold text-center text-slate-800`}
                    >
                      {item.name}
                    </span>
                  </NavLink>
                ))}
              </ul>
            ) : (
              <ul className="pt-6">
                <button
                  className={`text-white text-sm flex items-center duration-500 gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-bl-lg w-full
                    `}
                  onClick={onLogoutHandler}
                >
                  <span className="text-black font-extrabold text-xl ml-1">
                    <CgLogOut />
                  </span>
                  <span
                    className={`${
                      !open && 'hidden'
                    } origin-left duration-200 text-base font-semibold text-center text-slate-800`}
                  >
                    Logout
                  </span>
                </button>
              </ul>
            )}
            <div className="flex flex-col items-center">
              <ul
                className={`pt-6 flex items-center
              ${!open ? 'flex-col' : 'flex-row'}
              `}
              >
                {socialIcons.map((icons, index) => (
                  <li
                    key={index}
                    className={`text-white text-sm flex items-center duration-500 gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-bl-lg ${
                      icons.gap ? 'mt-9' : 'mt-2'
                    }`}
                  >
                    <span
                      className={`text-black font-extrabold text-xl ml-1  
                     ${!open && 'hidden'}`}
                    >
                      {icons.icon}
                    </span>
                  </li>
                ))}
              </ul>
              <p
                className={`${
                  !open && 'hidden'
                } origin-left duration-200 text-sm mx-3 font-medium`}
              >
                Microverse Copyright 2022
              </p>
            </div>
          </nav>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Navbar;
