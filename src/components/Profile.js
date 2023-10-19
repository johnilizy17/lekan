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
import Layout from './Layout';
import Profile_Component from './Page/Profile_Component';

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
    <Layout>
      <Profile_Component />
    </Layout>
    );
};

export default Profile;
