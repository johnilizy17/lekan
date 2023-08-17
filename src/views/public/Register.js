import React, { useState } from "react";
import { Link } from "react-router-dom";

// ** Image
import logo from "../../assets/logo.png";

// ** Styles
import styles from "../../styles/Username.module.css";

// ** Third Party
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

// ** Components
import { resetPasswordValidation } from "../../helpers/validate";

// ** Helpers
import { convertToBase64 } from "../../helpers/convert";

const Register = () => {
  const [file, setFile] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "abioduncsc@gmail.com",
      username: "example@123",
      password: "admin@123",
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
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

      <div className="flex justify-center flex-col items-center h-screen">
        <div className="profile flex justify-center py-4">
          <img src={logo} alt="avatar" className={styles.profile_img} />
        </div>
        <div className="glass register" style={{}}>
          <div className="title flex flex-col items-center">
            <h4 className="header-4 font-bold">Register</h4>
          </div>
          {/*  */}
          <form onSubmit={formik.handleSubmit} className="py-1">
            <div className="profile flex justify-center py-4">
              <input
                type="file"
                onChange={onUpload}
                id="profile"
                name="profile"
              />
            </div>
            <div className="flex login-form">
              <div className="w-100 form-group">
                <label>Firstname</label>
                <input
                  // {...formik.getFieldProps("email")}
                  className="form-control"
                  type="text"
                  placeholder="Firstname"
                />
              </div>

              <div className="w-100 form-group">
                <label>Lastname</label>
                <input
                  // {...formik.getFieldProps("email")}
                  className="form-control"
                  type="text"
                  placeholder="Lastname"
                />
              </div>
            </div>
            <div className="flex login-form">
              <div className="w-100 form-group">
                <label>Email</label>
                <input
                  // {...formik.getFieldProps("email")}
                  className="form-control"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div className="w-100 form-group">
                <label>Phone</label>
                <input
                  // {...formik.getFieldProps("email")}
                  className="form-control"
                  type="text"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="flex login-form">
              <div className="w-100 form-group">
                <label>University</label>
                <input
                  // {...formik.getFieldProps("email")}
                  className="form-control"
                  type="text"
                  placeholder="University"
                />
              </div>

              <div className="w-100 form-group">
                <label>Course of Study</label>
                <input
                  // {...formik.getFieldProps("email")}
                  className="form-control"
                  type="text"
                  placeholder="Course of Study"
                />
              </div>
            </div>
            <div className="flex login-form">
              <div className="w-100 form-group">
                <label>State Code</label>
                <input
                  // {...formik.getFieldProps("email")}
                  className="form-control"
                  type="text"
                  placeholder="State Code"
                />
              </div>

              <div className="w-100 form-group">
                <label>State of Deployment</label>
                <input
                  // {...formik.getFieldProps("email")}
                  className="form-control"
                  type="text"
                  placeholder="State of Deployment"
                />
              </div>
            </div>
            <div className="flex login-form">
              <div className="w-100 form-group">
                <label>Year of Deployment</label>
                <input
                  // {...formik.getFieldProps("email")}
                  className="form-control"
                  type="text"
                  placeholder="Year of Deployment"
                />
              </div>

              <div className="w-100 form-group">
                <label>Batch</label>
                <input
                  // {...formik.getFieldProps("email")}
                  className="form-control"
                  type="text"
                  placeholder="Batch"
                />
              </div>
            </div>
            <div className="flex login-form">
              <div className="w-100 form-group">
                <label>Stream</label>
                <input
                  // {...formik.getFieldProps("email")}
                  className="form-control"
                  type="text"
                  placeholder="Stream"
                />
              </div>

              <div className="w-100 form-group">
                <label>Profile picture</label>
                <input
                  // {...formik.getFieldProps("email")}
                  className="form-control"
                  type="text"
                  placeholder="Profile picture"
                />
              </div>
            </div>
            <div className="flex login-form">
              <div className="w-100 form-group">
                <label>Password</label>
                <input
                  // {...formik.getFieldProps("email")}
                  className="form-control"
                  type="text"
                  placeholder="Password"
                />
              </div>

              <div className="w-100 form-group">
                <label>Confirm Password</label>
                <input
                  // {...formik.getFieldProps("email")}
                  className="form-control"
                  type="text"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className={styles.btn}>
                Let's Go
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Already Register?{" "}
                <Link className="text-red-500" to="/">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
