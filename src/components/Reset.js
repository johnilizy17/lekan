import React from 'react';
import { Link } from 'react-router-dom';

// ** Image
import avatar from '../assets/profile.png';

// ** Styles
import styles from '../styles/Username.module.css';

// ** Third Party
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';

// ** Helpers
import { resetPasswordValidation } from '../helpers/validate';

const Password = () => {
  const formik = useFormik({
    initialValues: {
      password: 'admin@123',
      confirm_pwd: 'admin@123',
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Reset</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter new password.
            </span>
          </div>
          {/*  */}
          <form onSubmit={formik.handleSubmit} className="py-20">
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps('password')}
                className={styles.textbox}
                type="text"
                placeholder="NewPassword"
              />
              <input
                {...formik.getFieldProps('confirm_pwd')}
                className={styles.textbox}
                type="text"
                placeholder="Repeat Password"
              />
              <button type="submit" className={styles.btn}>
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
