/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { DatePicker } from 'react-responsive-datepicker';
import 'react-responsive-datepicker/dist/index.css';
import Loader from '../components/Loader';
import 'react-toastify/dist/ReactToastify.css';
import InlineError from '../components/InlineError';
import { register } from '../redux/actions/UserAction';
import { validateEmail, validateFullName, validatePassword } from '../components/validation';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [dateError, setDateError] = useState('');
  const [submited, setSubmited] = useState(false);
  const [valid, setValid] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [avatar, setAvatar] = useState(null);

  // add date format
  const dateFormat = (date) => {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const onImageChange = (event) => {
    setAvatar(event.target.files[0]);
  };
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('avatar', avatar);
    formData.append('date_of_birth', date);
    setSubmited(true);
    if (valid) {
      dispatch(register(formData));
      toast.success('Register successful');
    } else {
      toast.error('Please fill all the fields');
    }
  };

  const navigate = useNavigate();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    validateEmail({ email, setEmailError});
    validateFullName({ name, setNameError});
    validatePassword({ password, setPasswordError });

    if (emailError || passwordError || nameError || dateError || !email || !password || !name || !date) {
      setValid(false);
    } else {
      setValid(true);
    }

    if (userInfo) {
      navigate('/login');
    }
  }, [emailError, passwordError, nameError, dateError, userInfo, navigate, email, password, name, date]);

  return (
    <div>
      <ToastContainer />
      {error && <div>{error}</div>}
      {loading && <Loader />}
      <form
        className="register shadow-md rounded px-8 pt-6 pb-4 mb-4 w-full max-w-sm mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 cursor-pointer"
            htmlFor="files"
          >
            Avatar
          </label>
          <input
            type="file"
            accept="image/*"
            multiple={false}
            onChange={onImageChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            FullName
          </label>
          <input
            className={`shadow appearance-none border rounded 
            w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
            ${submited && !name ? 'border-red-500 border-2' : ''}
            `}
            id="username"
            type="name"
            placeholder="FullName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded 
            w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
            ${submited && !email ? 'border-red-500 border-2' : ''}
            `}
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Date Of Birth
          </label>
          <input
            type="text"
            value={dateFormat(date)}
            readOnly
            onClick={() => setIsOpen(true)}
            className={`shadow appearance-none border rounded 
            w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
            `}
          />
          <DatePicker
            value={date}
            onChange={(date) => setDate(date)}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            defaultValue={new Date(2022, 8, 8)}
            maxDate={new Date(2023, 0, 10)}
            headerFormat="DD MM dd"
          />

          {submited && dateError && <InlineError error={dateError} />}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`shadow appearance-none border rounded 
            w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
            ${submited && !password ? 'border-red-500 border-2' : ''}
            `}
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign up
          </button>
        </div>
        <div className="flex items-center justify-center mt-2">
          <p className="text-red-500 text-sm italic p-3">
            Already have an account?
          </p>
          <NavLink
            className="inline-block align-baseline underline font-bold text-sm text-blue-500 hover:text-blue-800"
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
