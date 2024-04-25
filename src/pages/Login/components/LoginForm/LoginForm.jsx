import React, { useState } from "react";
import { LoginFormStyle } from "./LoginForm.styled";
import { NavLink, useNavigate } from "react-router-dom";
import { Input } from "../../../../components/Input/Input";
import { ButtonForm } from "../../../../components/ButtonForm/ButtonForm";
import axios from "axios";
import { getApiLink } from "../../../../api/getApiLink";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../redux/toolkitSlice";
import setCookie from "../../../../functions/setCookie";
import { toast } from "react-toastify";
import { LoginFormSoc } from "./LoginFormSoc/LoginFormSoc";

export const LoginForm = () => {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const rememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const submitForm = (evt) => {
    evt.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    axios.post(getApiLink(`/api/auth/login?email=${email}&password=${pass}`))
      .then(({ data }) => {        
        const token = data.access_token;
        const expires = rememberMe ? null : {expires: 1};
        
        setCookie("token", token, expires);
        
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        axios.get(getApiLink("/api/user/me"))
        .then(({ data }) => {
          console.log("user-data", data);
          dispatch(setUser(data));
          navigate("/map");
        })
        .catch((error) => {
          console.error("Failed to fetch user data:", error);
          navigate('/login');
        });
        resetForm();
      })
      .catch((error) => {
        toast.error(error?.response?.data?.detail);
        console.log(error);
      });
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[a-zA-Z0-9\-_.]+\.[a-z]{2,6}$/;
    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      setError(
        <span className="error__massage">
          Please enter a valid email address
        </span>
      );
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setEmail("");
    setPass("");
    setRememberMe(false);
  };

  return (
    <LoginFormStyle onSubmit={submitForm}>
      <div className="form__inner">
        <Input
          type={"email"}
          label={"Email Address"}
          inputValue={setEmail}
          placeholder={"Enter your Email"}
          validate={true}
          error={error}
        />

        <Input
          type={"password"}
          label={"Password"}
          inputValue={setPass}
          placeholder={"Enter your Password"}
        />
      </div>
      <div className="form__input__check">
        <div className="form__input__check_in">
          <label htmlFor="t-1">
            Remember me
            <input
              type="checkbox"
              id="t-1"
              checked={rememberMe}
              onChange={rememberMeChange}
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <path
                  d="M8.75 2.75L3.59375 8L1.25 5.61364"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </label>
        </div>
        <NavLink to={"/restore-password"} type="button" className="forgot">
          Forgot Password?
        </NavLink>
      </div>
      <div className="form__input__buttons">
        {/* disabled={disabled} */}
        <ButtonForm buttonTxt={"Log In"} isFill={true} />

        <NavLink className="navlink" to={"/sign-up"}>
          <ButtonForm buttonTxt={"Sign Up"} isFill={false} />
        </NavLink>
      </div>
      
      <LoginFormSoc/>

    </LoginFormStyle>
  );
};
