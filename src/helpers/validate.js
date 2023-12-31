// ** Third Party
import toast from 'react-hot-toast';

/** validate password */
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);

  return errors;
}

/** Validate Password  */
function passwordVerify(errors = {}, values) {
  /* eslint-disable no-useless-escape */
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.password) {
    errors.password = toast.error('Password Required...!');
  } else if (values.password.includes(' ')) {
    errors.password = toast.error('Wrong Password...!');
  } else if (values.password.length < 4) {
    errors.password = toast.error(
      'Password must be more than 4 characters long'
    );
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error('Password must have special character');
  }

  return errors;
}

/** Validate Reset Password */
export async function resetPasswordValidation(values) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirm_password) {
    errors.exist = toast.error('Password does not match...!');
  }

  return errors;
}

/** Validate register form */
export async function registerValidation(values) {
  const errors = usernameValidate({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);

  return errors;
}

/** Validate profile form */
export async function profileValidation(values) {
  const errors = emailVerify({}, values);

  return errors;
}

/************************************************************** */

// ** Validate login page username
export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);

  return errors;
}

/** Validate Username  */
function usernameVerify(error = {}, values) {
  if (!values.email) {
    error.username = toast.error('Email is required...!');
  } else if (values.username.includes(' ')) {
    error.username = toast.error('Invalid Email...!');
  }
  return error;
}

/** Validate Email */
function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error('Email Required');
  } else if (!values.email.includes(' ')) {
    error.email = toast.error('Wrong Email...!');
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error('Invalid Email Address .....');
  }
  return error;
}
