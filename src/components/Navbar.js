import { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import logo from '../assests/logo.gif';

const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="flex">
        <div
          className={`${
            open ? 'w-72' : 'w-20'
          } h-screen bg-secondary relative duration-300 `}
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
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
          <h1>Homepage</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
