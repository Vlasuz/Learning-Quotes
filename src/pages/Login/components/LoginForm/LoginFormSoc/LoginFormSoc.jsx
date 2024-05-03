import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getApiLink } from '../../../../../api/getApiLink';
import { GoogleLogin } from '@react-oauth/google';
import setCookie from '../../../../../functions/setCookie';
import FacebookLogin from 'react-facebook-login';

import Apple from "../../../../../assets/img/icons/apple.svg";
import Facebook from "../../../../../assets/img/icons/facebook.svg";
import Google from "../../../../../assets/img/icons/google.svg";

export const LoginFormSoc = () => {
    const navigate = useNavigate();

    const responseFacebook = (response) => {
        SubmitAuthGoogle('facebook', response.accessToken);
    }
    const responseGoogle = (credentialResponse) => {
        SubmitAuthGoogle('google', credentialResponse.credential);
    }

    const SubmitAuthGoogle = (provider, token) => {
        axios.post(getApiLink(`/api/auth/soc_login?soc_auth=${provider}&token=${token}`))
            .then(({data}) => {
                console.log(data.access_token);
                setCookie('token', data.access_token);

                axios.defaults.headers.common["Authorization"] = `Bearer ${data.access_token}`;
                axios.get(getApiLink("/api/user/me"))
                .then(({ data }) => {
                  console.log("user-data", data);
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
                    <button>
                        <img src={Google} alt="google ic" />
                        Google
                    </button>
                    <div className="loginGoogle">
                        <GoogleLogin
                            onSuccess={responseGoogle}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />;

                    </div>
                </li>
                <li>
                    <button>
                        <img src={Facebook} alt="faceboock ic" />
                        Facebook
                    </button>
                    <div className="loginFacebook">
                        <FacebookLogin
                            appId="651671437112317"
                            autoLoad={false}
                            fields="name,email,picture"
                            onClick={() => console.log("click")}
                            callback={responseFacebook} 
                        />,
                    </div>
                </li>
                {/* <li>
                    <a href="foo">
                        <img src={Apple} alt="apple ic" />
                        Apple
                    </a>
                </li> */}
            </ul>
        </div>  
    )
}
