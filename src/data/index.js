import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { BiLogInCircle } from 'react-icons/bi';
import { MdOutlineLibraryAdd } from 'react-icons/md';

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

export const socialIcons = [
  {
    icon: <AiFillYoutube />,
  },
  {
    icon: <AiFillTwitterCircle />,
  },
  {
    icon: <AiFillLinkedin />,
  },
  {
    icon: <AiFillGithub />,
  },
  {
    icon: <AiFillFacebook />,
  },
];

export const NavItemsAdmin = [
  {
    name: 'Add Cars',
    path: '/cars',
    icon: <MdOutlineLibraryAdd />,
  },
  {
    name: 'Users',
    path: '/users',
    icon: <FaUsers />,
  },
];
