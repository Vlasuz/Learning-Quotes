import React from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Apple from "../../../../../assets/img/icons/apple.svg";
import Facebook from "../../../../../assets/img/icons/facebook.svg";
import Google from "../../../../../assets/img/icons/google.svg";
import Discord from "../../../../../assets/img/icons/discord.svg";
import { useDispatch } from 'react-redux';
import { setUser } from '../../../../../redux/toolkitSlice';
import { getApiLink } from '../../../../../api/getApiLink';
import { GoogleLogin } from '@react-oauth/google';

export const LoginFormSoc = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const login = useGoogleLogin({
    //     onSuccess: async (response) => {
    //         try {
    //             const res = await axios.get(
    //                 'https://www.googleapis.com/oauth2/v3/userinfo',
    //                 {
    //                     headers: {
    //                         Authorization: `Bearer ${response.access_token}`
    //                     }
    //                 }
    //             );
    //             console.log('res', res);

    //             // axios.post(getApiLink(`/api/auth/soc_login?soc_auth=google&token=${response.access_token}`))
    //             //     .then(({data}) => {
    //             //         console.log(data);
    //             //     })

    //         } catch (err) {
    //             console.error(err);
    //             navigate('/login');
    //         }
    //     }
    // });

    const SubmitAuthGoogle = (token) => {
        axios.post(getApiLink(`/api/auth/soc_login?soc_auth=google&token=${token}`))
            .then(({data}) => {
                console.log(data);
            })
            .catch(err => {
                console.error(err);
            })
    }

    


    return (
        <div className="form__input__pay">

            <h3>Continue with social network</h3>            

            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    SubmitAuthGoogle(credentialResponse.credential)
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />;

            <ul>
                <li>
                    {/* <button onClick={() => login()}> */}
                    <button>
                        <img src={Google} alt="google ic" />
                        Google
                    </button>
                </li>
                <li>
                    <a href="foo">
                        <img src={Apple} alt="apple ic" />
                        Apple
                    </a>
                </li>
                <li>
                    <a href="foo">
                        <img src={Facebook} alt="faceboock ic" />
                        Facebook
                    </a>
                </li>
                <li>
                    <a href="foo">
                        <img src={Discord} alt="discord ic" />
                        Discord
                    </a>
                </li>
            </ul>
        </div>  
    )
}
