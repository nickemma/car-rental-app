/* eslint-disable */
import { useState } from "react";
import { CgLogOut } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/exotic.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, NavItemsAdmin, socialIcons } from "../data";
import { logout } from "../redux/actions/UserAction";
import { FiChevronsLeft } from "react-icons/fi";
import { GrUpdate } from 'react-icons/gr';
import { BsBookHalf } from 'react-icons/bs';
import { AiFillCar } from 'react-icons/ai';
import { BsFillPersonFill } from "react-icons/bs";

const Navbar = () => {
  const notify = () => {
    toast.success("Logout successful");
  };
  const [open, setOpen] = useState(true);
  const user = useSelector((state) => state.userLogin);
  const { userInfo } = user;
  const admin = userInfo?.admin;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navbarItems = [
      {
        name: 'MODELS',
        path: '/',
        icon: <AiFillCar />,
      },
      {
        name: 'RESERVATIONS',
        path: `${userInfo ? '/reservations' : '/login'}`,
        icon: <GrUpdate />,
      },
      {
        name: 'BOOKING',
        path: `${userInfo ? '/booking' : '/login'}`,
        icon: <BsBookHalf />,
      },
    ];

  const onLogoutHandler = () => {
    dispatch(logout());
    notify();
    navigate("/");
  };
  return (
    <>
      <div className="max-h-[95vh] hidden md:block">
        <div
          className={`${
            open ? "w-[15rem]" : "w-[3.2rem]"
          } h-screen border-r-2 border-slate-300 bg-white relative duration-300 `}
        ></div>
      </div>
      <div className="md:fixed hidden md:block max-h-[95vh]">
        <div
          className={`${
            open ? "w-[15rem]" : "w-[3.2rem]"
          } h-screen border-r-2 border-slate-300 bg-white relative duration-300 `}
        >
          <div className="bg-white rounded-full max-w-[70px] -right-4 top-2  shadow-lg  p-3 absolute">
            <FiChevronsLeft
              className={`cursor-pointer -right-0 top-9 w-9 font-medium text-2xl ${
                !open && "rotate-180"
              }`}
              onClick={() => setOpen(!open)}
            />
          </div>
          <div
            className={`${
              open ? "w-20" : "w-12"
            } cursor-pointer duration-300 my-4 mx-auto border-rounded`}
          >
            <img src={logo} alt="logo" />
          </div>
          {userInfo ? (
            <div className="flex flex-row items-center mt-[3rem]">
              {/* call avatar */}
              <div
                className={`flex items-center justify-center  rounded-full bg-white ml-1
              ${open ? "w-[55px] h-[55px]" : "w-[40px] h-[40px]"}
              `}
              >
                                {
                userInfo?.avatar?.url ? (
                  <img
                    src={userInfo?.avatar?.url}
                    alt="avatar"
                    className={`rounded-full ${
                      open ? 'w-[55px] h-[55px]' : 'w-[40px] h-[40px]'
                    }`}
                  />
                ) : (
                  <BsFillPersonFill
                    className={`${
                      open ? 'w-[55px] h-[55px]' : 'w-[40px] h-[40px]'
                    } text-slate-500 p-2 bg-white shadow-lg rounded-full m-1`}
                  />
                )
              }
              </div>
              <p
                className={`${
                  !open && "hidden"
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
                    item.gap ? "mt-9" : "mt-2"
                  }`}
                  to={item.path}
                >
                  <span className="text-black font-extrabold text-xl ml-1">
                    {item.icon}
                  </span>
                  <span
                    className={`${
                      !open && "hidden"
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
                      !open && "hidden"
                    } origin-left duration-200 text-base font-bold text-center text-slate-800`}
                  >
                    Admin
                  </li>
                  {NavItemsAdmin.map((item) => (
                    <NavLink
                      key={item.name}
                      className={`text-white text-sm flex items-center duration-500 gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-bl-lg ${
                        item.gap ? "mt-9" : "mt-2"
                      }`}
                      to={item.path}
                    >
                      <span className="text-black font-extrabold text-xl ml-1">
                        {item.icon}
                      </span>
                      <span
                        className={`${
                          !open && "hidden"
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
                      item.gap ? "mt-9" : "mt-2"
                    }`}
                    to={item.path}
                  >
                    <span className="text-black font-extrabold text-xl ml-1">
                      {item.icon}
                    </span>
                    <span
                      className={`${
                        !open && "hidden"
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
                      !open && "hidden"
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
              ${!open ? "flex-col" : "flex-row"}
              `}
              >
                {socialIcons.map((icons, index) => (
                  <li
                    key={index}
                    className={`text-white text-sm flex items-center duration-500 gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-bl-lg ${
                      icons.gap ? "mt-9" : "mt-2"
                    }`}
                  >
                    <span
                      className={`text-black font-extrabold text-xl ml-1  
                     ${!open && "hidden"}`}
                    >
                      {icons.icon}
                    </span>
                  </li>
                ))}
              </ul>
              <p
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-sm mx-3 font-medium`}
              >
                Microverse Copyright 2022
              </p>
            </div>
          </nav>
        </div>
        <ToastContainer />
      </div>
      <div className="fixed bottom-0 w-full bg-gray-50 rounded-t-3xl shadow-lg h-[4rem] z-[999] md:hidden ">
        <div className="flex flex-row justify-between items-center p-2">
          <div className="flex flex-row justify-around items-center w-full">
            {navbarItems?.map((item, index) => (
              <NavLink
                key={index}
                className="text-black text-sm flex items-center duration-500 p-4 shadow-lg cursor-pointer bg-white  z-[999] hover:bg-gray-400 rounded-full"
                to={item.path}
              >
                <span className="text-black font-extrabold text-xl ml-1">
                  {item.icon}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
