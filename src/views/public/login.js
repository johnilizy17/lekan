import React from "react";
import { Link } from "react-router-dom";

// ** Image
import logo from "../../assets/logo.png";

// ** Styles
import styles from "../../styles/Username.module.css";

// ** Third Party
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

// ** Components
import { usernameValidate } from "../../helpers/validate";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate: usernameValidate,
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
        <div className="glass login">
          <div className="title flex flex-col items-center">
            <div className="profile flex justify-center py-4">
              <img src={logo} alt="avatar" className={styles.profile_img} />
            </div>

            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Welcome Back
            </span>
          </div>
          {/*  */}
          <form onSubmit={formik.handleSubmit} className="py-1">
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("username")}
                className={styles.textbox}
                type="text"
                placeholder="State Code"
              />

              <input
                {...formik.getFieldProps("username")}
                className={styles.textbox}
                type="password"
                placeholder="Password"
              />

              <button type="submit" className={styles.btn}>
                Let's Go
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Not a Member{" "}
                <Link className="text-red-500" to="/register">
                  Register
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
