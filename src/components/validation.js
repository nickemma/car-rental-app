const validateEmail = ({ email, setEmailError }) => {
  const emailRegular = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email && !email.match(emailRegular)
    ? setEmailError('Please enter a valid email')
    : setEmailError('');
};

const validatePassword = ({ password, setPasswordError }) => (password.length < 6
  ? setPasswordError('Password must be at least 6 characters')
  : setPasswordError(''));

const validateFullName = ({ fullname, setFullNameError }) => (fullname && fullname.length < 5
  ? setFullNameError(`${fullname.length}/5`)
  : fullname && fullname.length > 25
    ? setFullNameError(`${fullname.length}/25`)
    : setFullNameError(''));

const validateAge = ({ age, setAgeError }) => {
  const Age = Math.floor((new Date() - new Date(date)) / 31557600000);
  return age && Age < 18
    ? setAgeError('you are too young to register')
    : setAgeError('');
};

export {
  validateEmail, validatePassword, validateFullName, validateAge,
};
