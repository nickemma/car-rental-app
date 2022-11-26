import { GrUpdate } from 'react-icons/gr';
import { BsBookHalf } from 'react-icons/bs';
import { AiFillCar } from 'react-icons/ai';

const navbarItems = [
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
  {
    name: 'Login',
    path: '/login',
    gap: true,
  },
  {
    name: 'Sign Up',
    path: '/signup',
  },
];

export default navbarItems;
