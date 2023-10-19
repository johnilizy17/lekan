import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "../../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidate } from "../../helpers/validate";
import { LoginUser } from "../../services/user-services";
import { Spinner, useToast } from "@chakra-ui/react";

const Login = () => {

  const toast = useToast()
  const [loading, setLoading] = useState(false)
  const navigation = useNavigate()
  const formik = useFormik({
    initialValues: {
      password: "",
      email: ""
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setLoading(true)
      try {
        const login = await LoginUser(values)
         localStorage.setItem("token",login.data.access_token);
        toast({ position: "top-right", title: "Login Successful", description: 'You have successfully login', status: "success", isClosable: true });
        navigation("/dashboard")
        setLoading(false)
      } catch (err) {
        setLoading(false)
        toast({ position: "top-right", title: "Login Failed", description:err.message? err.message: err.response.data.msg, status: "error", isClosable: true });
      }
      setLoading(false)
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
                {...formik.getFieldProps("email")}
                className={styles.textbox}
                type="text"
                placeholder="Email"
              />

              <input
                {...formik.getFieldProps("password")}
                className={styles.textbox}
                type="password"
                placeholder="Password"
              />

              <button type="submit" className={styles.btn}>
                {loading ? <Spinner size="md" /> : `Let's Go`}
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
