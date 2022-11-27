import { GrUpdate } from 'react-icons/gr';
import { BsBookHalf } from 'react-icons/bs';
import { AiFillCar } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { BiLogInCircle } from 'react-icons/bi';

export const navbarItems = [
  {
    name: 'MODELS',
    path: '/',
    icon: <AiFillCar />,
  },
  {
    name: 'RESERVATIONS',
    path: '/reservations',
    icon: <GrUpdate />,
  },
  {
    name: 'BOOKING',
    path: '/booking',
    icon: <BsBookHalf />,
  },
];

export const auth = [
  {
    name: 'Login',
    path: '/login',
    icon: <BiLogInCircle />,
    gap: true,
  },
  {
    name: 'Sign Up',
    path: '/register',
    icon: <FaUsers />,
  },
];
