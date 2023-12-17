import React, { useState } from "react";
import Header from "../components/Header";

import { useDispatch, useSelector } from "react-redux";
import { SignUpAsync } from "../redux/Slices/SignUpSlice";



const SignUp = () => {

  const dispatch = useDispatch();

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const onSubmitHandler = (e) => {

    e.preventDefault();

    dispatch( SignUpAsync({
      email: email,
      password: password,
    }) )

    // console.log("sadfkasdjfkjadskfhask")
    // console.log(email)
    // console.log(password)

  };


  return (
    <>

      <Header />

      <div className="container mt-5">
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="signupEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              required
              onChange={(e) => setemail(e.target.value) }
              id="signupEmail"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="signUpPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              required
              id="signUpPassword"
              placeholder="Your Password"
              onChange={(e) => setpassword(e.target.value) }
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary btn-md"
            value="SignUp"
          />
        </form>
      </div>
    </>
  );
};

export default SignUp;
