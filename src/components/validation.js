/* eslint-disable */
import { DatePicker } from "react-responsive-datepicker";

const validateEmail = ({ email, setEmailError }) => {
  const emailRegular =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return email && !email.match(emailRegular)
    ? setEmailError("Please enter a valid email")
    : setEmailError("");
};

const validatePassword = ({ password, setPasswordError }) => {
  return password && password.length < 6
    ? setPasswordError("Password must be at least 6 characters")
    : setPasswordError("");
};

const validateFullName = ({ fullName, setFullNameError }) => {
  return fullName && fullName.length < 5
    ? setFullNameError(`${fullName.length}/5`)
    : fullName && fullName.length > 25
    ? setFullNameError(`${fullName.length}/25`)
    : setFullNameError("");
};

const validateComfirmePassword = ({
  password,
  cpassword,
  setCPasswordError,
}) => {
  return password !== cpassword
    ? setCPasswordError("Password does not match")
    : setCPasswordError("");
};

const validateAge = ({ date, setDateError }) => {
  if (date) {
    const age = new Date().getFullYear() - new Date(date).getFullYear();
    return age < 18
      ? setDateError("You must be at least 18 years old")
      : setDateError("");
  }
};

export {
  validateEmail,
  validatePassword,
  validateFullName,
  validateComfirmePassword,
  validateAge,
};
