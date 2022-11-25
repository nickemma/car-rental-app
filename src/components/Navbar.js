import { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <nav className="flex">
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
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
          <h1>Homepage</h1>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
