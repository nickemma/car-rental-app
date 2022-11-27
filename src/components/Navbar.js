/* eslint-disable */
import { useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import { CgLogOut } from 'react-icons/cg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../assets/logo.gif';
import { auth, navbarItems } from '../data';
import { logout } from '../redux/actions/UserAction';

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const user = useSelector((state) => state.userLogin);
  const { userInfo } = user;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <>
      <div className="flex max-h-[95vh]">
        <div
          className={`${
            open ? 'w-56' : 'w-10'
          } h-screen border-r-2 border-slate-300 bg-white relative duration-300 `}
        >
          <AiOutlineBars
            className={`absolute cursor-pointer -right-3 top-9 w-9 font-medium text-2xl ${
              !open && 'rotate-180'
            }`}
            onClick={() => setOpen(!open)}
          />
          <div
            className={`${
              open ? 'w-36' : 'w-10'
            } cursor-pointer duration-300 my-4 mx-auto border-rounded`}
          >
            <img src={logo} alt="logo" />
          </div>
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
                  <span className="text-black font-extrabold text-xl">
                    {item.icon}
                  </span>
                  <span
                    className={`${
                      !open && 'hidden'
                    } origin-left duration-200 text-base font-extrabold text-center text-slate-800`}
                  >
                    {item.name}
                  </span>
                </NavLink>
              ))}
            </ul>
            {!userInfo ? (
              <ul className="pt-6">
                {auth.map((item) => (
                  <NavLink
                    key={item.name}
                    className={`text-white text-sm flex items-center duration-500 gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-bl-lg ${
                      item.gap ? 'mt-9' : 'mt-2'
                    }`}
                    to={item.path}
                  >
                    <span className="text-black font-extrabold text-xl">
                      {item.icon}
                    </span>
                    <span
                      className={`${
                        !open && 'hidden'
                      } origin-left duration-200 text-base font-extrabold text-center text-slate-800`}
                    >
                      {item.name}
                    </span>
                  </NavLink>
                ))}
              </ul>
            ) : (
              <ul className="pt-6">
                <button
                  className={`text-white text-sm flex items-center duration-500 gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-bl-lg 
                    `}
                  onClick={onLogoutHandler}
                >
                  <span className="text-black font-extrabold text-xl">
                    <CgLogOut />
                  </span>
                  <span
                    className={`${
                      !open && 'hidden'
                    } origin-left duration-200 text-base font-extrabold text-center text-slate-800`}
                  >
                    Logout
                  </span>
                </button>
              </ul>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
