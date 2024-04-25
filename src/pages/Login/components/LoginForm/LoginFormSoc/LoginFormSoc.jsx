import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Apple from "../../../../../assets/img/icons/apple.svg";
import Facebook from "../../../../../assets/img/icons/facebook.svg";
import Google from "../../../../../assets/img/icons/google.svg";
import Discord from "../../../../../assets/img/icons/discord.svg";
import { useDispatch } from 'react-redux';
import { getApiLink } from '../../../../../api/getApiLink';
import { GoogleLogin } from '@react-oauth/google';
import setCookie from '../../../../../functions/setCookie';
import { setUser } from '../../../../../redux/toolkitSlice';

export const LoginFormSoc = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const SubmitAuthGoogle = (token) => {
        axios.post(getApiLink(`/api/auth/soc_login?soc_auth=google&token=${token}`))
            .then(({data}) => {
                console.log(data.access_token);
                setCookie('token', data.access_token);

                axios.defaults.headers.common["Authorization"] = `Bearer ${data.access_token}`;
                axios.get(getApiLink("/api/user/me"))
                .then(({ data }) => {
                  console.log("user-data", data);
                //   dispatch(setUser(data.access_token));
                //   setCookie('token', data.access_token);
                  navigate("/map");
                })
                .catch((error) => {
                  console.error("Failed to fetch user data:", error);
                  navigate('/login');
                });
            })
            .catch(err => {
                console.error(err);
            })
    }

    


    return (
        <div className="form__input__pay">

            <h3>Continue with social network</h3>            
            

            <ul>
                <li>
                    {/* <button onClick={() => login()}> */}
                    <button>
                        <img src={Google} alt="google ic" />
                        Google
                    </button>
                    <div className="loginGoogle">
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                                SubmitAuthGoogle(credentialResponse.credential)
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />;

                    </div>
                </li>
                {/* <li>
                    <a href="foo">
                        <img src={Apple} alt="apple ic" />
                        Apple
                    </a>
                </li> */}
                {/* <li>
                    <a href="foo">
                        <img src={Facebook} alt="faceboock ic" />
                        Facebook
                    </a>
                </li> */}
                {/* <li>
                    <a href="foo">
                        <img src={Discord} alt="discord ic" />
                        Discord
                    </a>
                </li> */}
            </ul>
        </div>  
    )
}
