import React, { useState } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import axios from "axios"
import logo from "../../assets/logo.png";
import styles from "../../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetPasswordValidation } from "../../helpers/validate";
import { convertToBase64 } from "../../helpers/convert";
import { RegisterUser } from "../../services/user-services";
import { Spinner, useToast } from "@chakra-ui/react";
const JWT = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI1NmFhNjk5Yy00ODRiLTQ2ODEtYmQ5ZS01MWY3MDVjNTNlMWUiLCJlbWFpbCI6ImpvaG5hYnJhaGFtdG9zaW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjFmMzZjYTMxYTM5YzEzYTkzYzgzIiwic2NvcGVkS2V5U2VjcmV0IjoiMjZiYTBjNjMxNjI2ZjFjYjhiZTExYzJiM2E5Yjc5ZWJjYzhiMDNlZmUxYmViNTZlZDY2YjIxOTFiYjA4ZTVkMiIsImlhdCI6MTY4MzI4ODU1OH0.1IHyw94S2oHsLB7Xk4_akVZubolzZaG-BgSMWuLJG_4`

const Register = () => {
  const [file, setFile] = useState("");
  const [image, setImage] = useState("")
  const [display, setDisplay] = useState(true)
  const [loading, setLoading] = useState(false)
  const router = useNavigate()
  const toast = useToast()

  const handleSubmission = async () => {
    const formData = new FormData();
    formData.append('file', image)
    const metadata = JSON.stringify({
      name: 'File name',
    });
    formData.append('pinataMetadata', metadata);

    const options = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', options);

    try {
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: JWT
        }
      });
      return res.data.IpfsHash
    } catch (error) {
    }
  };


  const formik = useFormik({
    initialValues: {
      "firstname": "",
      "lastname": "",
      "email": "",
      "password": "",
      "phone": "",
      "code": "",
      "university": "",
      "course": "",
      "state": "",
      "year": "",
      "stream": "",
      "profile": "",
      "batch": ""
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setLoading(true)
      const imageData = await handleSubmission();
      console.log(imageData)
     try{ 
      const registerFunction = await RegisterUser({...values, profile:imageData})
      toast({ position: "top-right", title: "Register Successful", description: 'You have successfully registered', status: "success", isClosable: true });
      setLoading(false)
      router("/")
     } catch(err){
      toast({ position: "top-right", title: "Register failed", description: err.response.data.msg, status: "error", isClosable: true });
      setLoading(false)
    
     }
      },
  });

  /** Formik doesn't does not support file upload so we need to create the handler */
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };


  function loadFile(event, setFieldValue) {
    document.getElementById("output");
    document.onchange = function () {
      setImage(event.target.files[0]);
      setDisplay(false)
      const advert_file = document.getElementById("output");
      advert_file.src = URL.createObjectURL(event.target.files[0]);
    }
  }


  return (
    <div className="container mx-auto ">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <input
        label="advert_file"
        type="file"
        id="advert_file"
        onChange={(event) => {
          loadFile(event);
        }}
      />
      <div className="flex justify-center flex-col items-center" style={{ padding: 40 }}>
        <div className="glass register">
          <div className="title flex flex-col items-center">
            <h4 className="header-4 font-bold">Register</h4>
          </div>
          {/*  */}
          <form onSubmit={formik.handleSubmit} className="py-1">
            <label
              for="advert_file"
            >

              <div className="profile flex justify-center py-4">
                {display && (
                  <svg
                    width="124"
                    height="102"
                    viewBox="0 0 124 102"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M110.714 0H13.2857C5.94821 0 0 6.85005 0 15.3V86.7C0 95.15 5.94821 102 13.2857 102H110.714C118.052 102 124 95.15 124 86.7V15.3C124 6.85005 118.052 0 110.714 0ZM115.143 59.0885L87.2739 26.9944C85.5446 25.0033 82.7411 25.0033 81.0119 26.9944L44.2858 69.2885L29.7024 52.494C27.9732 50.5029 25.1697 50.5029 23.4404 52.494L8.85705 69.2885V15.3C8.85705 12.4833 10.8398 10.1999 13.2857 10.1999H110.714C113.16 10.1999 115.143 12.4833 115.143 15.3V59.0885H115.143Z"
                      fill="#DADADA"
                    />
                  </svg>
                )}
                <img
                  id="output"
                  style={display ? { display: "none" } : {
                    width: "200px",
                    height: "200px",
                    borderRadius: 99,
                    objectFit: "contain"
                  }
                  }
                />

              </div>
            </label>
            <div className="flex login-form">
              <div className="w-100 form-group">
                <label>firstname</label>
                <input
                  {...formik.getFieldProps("firstname")}
                  className="form-control"
                  type="text"
                  placeholder="firstname"
                />
              </div>

              <div className="w-100 form-group">
                <label>lastname</label>
                <input
                  {...formik.getFieldProps("lastname")}
                  className="form-control"
                  type="text"
                  placeholder="lastname"
                />
              </div>
            </div>
            <div className="flex login-form">
              <div className="w-100 form-group">
                <label>Email</label>
                <input
                  {...formik.getFieldProps("email")}
                  className="form-control"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div className="w-100 form-group">
                <label>Phone</label>
                <input
                  {...formik.getFieldProps("phone")}
                  className="form-control"
                  type="text"
                  placeholder="phone"
                />
              </div>
            </div>
            <div className="flex login-form">
              <div className="w-100 form-group">
                <label>University</label>
                <input
                  {...formik.getFieldProps("university")}
                  className="form-control"
                  type="text"
                  placeholder="university"
                />
              </div>

              <div className="w-100 form-group">
                <label>Course of Study</label>
                <input
                  {...formik.getFieldProps("course")}
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
                  {...formik.getFieldProps("code")}
                  className="form-control"
                  type="text"
                  placeholder="State Code"
                />
              </div>

              <div className="w-100 form-group">
                <label>State of Deployment</label>
                <input
                  {...formik.getFieldProps("state")}
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
                  {...formik.getFieldProps("year")}
                  className="form-control"
                  type="text"
                  placeholder="Year of Deployment"
                />
              </div>

              <div className="w-100 form-group">
                <label>Batch</label>
                <input
                  {...formik.getFieldProps("batch")}
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
                  {...formik.getFieldProps("stream")}
                  className="form-control"
                  type="text"
                  placeholder="Stream"
                />
              </div>
            </div>

            <div className="flex login-form">
              <div className="w-100 form-group">
                <label>Password</label>
                <input
                  {...formik.getFieldProps("password")}
                  className="form-control"
                  type="text"
                  placeholder="Password"
                />
              </div>

              <div className="w-100 form-group">
                <label>Confirm Password</label>
                <input
                  {...formik.getFieldProps("confirm_password")}
                  className="form-control"
                  type="text"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" disabled={loading} className={styles.btn}>
               {loading? <Spinner size="md"/> : `Let's Go`}
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
