import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ** Image
import avatar from '../assets/profile.png';

// ** Styles
import styles from '../styles/Username.module.css';
import extend from '../styles/Profile.module.css';

// ** Third Party
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';

// ** Components
import { profileValidation } from '../helpers/validate';

// ** Helpers
import { convertToBase64 } from '../helpers/convert';

const Profile = () => {
  const [file, setFile] = useState('');
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: 'abioduncsc@gmail.com',
      mobile: '',
      address: '',
    },
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || '' });
      console.log(values);
    },
  });

  /** Formik doesn't does not support file upload so we need to create the handler */
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="container mx-auto ">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div
          className={styles.glass}
          style={{ width: '50%', paddingTop: '.2em' }}
        >
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Profile</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              You can update the details.
            </span>
          </div>
          {/*  */}
          <form onSubmit={formik.handleSubmit} className="py-1">
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img
                  src={file || avatar}
                  alt="avatar"
                  className={styles.profile_img}
                />
              </label>
              <input
                type="file"
                onChange={onUpload}
                id="profile"
                name="profile"
              />
            </div>

            <div className="textbox flex flex-col items-center gap-6 ">
              <div className="name flex lg:w-3/4 lg:gap-10">
                <input
                  {...formik.getFieldProps('firstName')}
                  className={styles.textbox}
                  type="text"
                  placeholder="FirstName"
                />
                <input
                  {...formik.getFieldProps('lastName')}
                  className={styles.textbox}
                  type="text"
                  placeholder="LastName"
                />
              </div>
              <div className="name flex lg:w-3/4 lg:gap-10">
                <input
                  {...formik.getFieldProps('mobile')}
                  className={styles.textbox}
                  type="text"
                  placeholder="Mobile No."
                />
                <input
                  {...formik.getFieldProps('email')}
                  className={styles.textbox}
                  type="text"
                  placeholder="Email*"
                />
              </div>
              <input
                {...formik.getFieldProps('address')}
                className={styles.textbox}
                type="text"
                placeholder="Address"
              />
              <button type="submit" className={styles.btn}>
                Update
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Come back later{' '}
                <Link className="text-red-500" to="/">
                  Loginout
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
