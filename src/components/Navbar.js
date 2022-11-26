import { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import logo from '../assets/logo.gif';
import navbarItems from '../data';

const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="flex max-h-[90vh]">
        <div
          className={`${
            open ? 'w-72' : 'w-20'
          } h-screen  relative duration-300 `}
        >
          <FaAngleDoubleRight
            className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-secondary ${
              !open && 'rotate-180'
            }`}
            onClick={() => setOpen(!open)}
          />
          <div
            className={`${
              open ? 'w-36' : 'w-20'
            } cursor-pointer duration-300 my-4 mx-auto border-rounded`}
          >
            <img src={logo} alt="logo" />
          </div>
          <ul className="pt-6">
            {navbarItems.map((item) => (
              <li
                key={item.name}
                className={`text-gray-300 text:sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-slate-300 rounded-md ${
                  item.gap ? 'mt-9' : 'mt-2'
                }`}
              >
                <FaAngleDoubleRight />
                <span
                  className={`${!open && 'hidden'} origin-left duration-200`}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
          <h1>Homepage</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
