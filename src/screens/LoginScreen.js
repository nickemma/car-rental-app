/* eslint-disable */

import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../components/Loader';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../redux/actions/UserAction';
import { validateEmail, validatePassword } from '../components/validation';
import InlineError from '../components/InlineError';

const LoginScreen = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submited, setSubmited] = useState(false);
  const [valid, setValid] = useState(false);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const notify = () => {
    toast.error(error);
  };

  const snotify = () => {
    toast.success('Login successful');
  };

  useEffect(() => {
    validateEmail({ email, setEmailError });
    validatePassword({ password, setPasswordError });

    if (emailError || passwordError || !email || !password) {
      setValid(false);
    } else {
      setValid(true);
    }
    if (userInfo) {
      navigate('/');
    }
  }, [emailError, passwordError, userInfo, navigate, email, password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmited(true);
    if (valid) {
      dispatch(login(email, password));
      snotify();
    } else {
      notify();
    }
  };

  return (
    <div>
      {loading && <Loader />}
      <form
        className="login shadow-md rounded px-8 pt-6 pb-8 mb-4  w-full max-w-sm mx-auto "
        onSubmit={handleSubmit}
      >
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
            ref={emailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <InlineError error={emailError} />}
        </div>
        <div className="mb-6">
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
            placeholder="**********"
            ref={passwordRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && password && <InlineError error={passwordError} />}
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={error && notify()}
          >
            Sign In
          </button>
        </div>
        <div className="flex items-center justify-center mt-4">
          <p className="text-gray-500 text-sm italic p-3">
            Don&#39;t have an account yet?
          </p>
          <NavLink
            className="align-baseline underline font-bold text-sm text-blue-500 hover:text-blue-800 decoration-transparent hover:decoration-black"
            to="/register"
          >
            Sign Up now
          </NavLink>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginScreen;
