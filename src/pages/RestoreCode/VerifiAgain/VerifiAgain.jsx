// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import setCookie from '../../../functions/setCookie';
// import { getApiLink } from '../../../api/getApiLink';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import getCookie from '../../../functions/getCookie';

// const formatTime = (seconds) => {
//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = seconds % 60;
//   return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
// };

// export const VerifiAgain = () => {
//   const [expiryTime, setExpiryTime] = useState(60);
//   const [sendAgainDisabled, setSendAgainDisabled] = useState(true);
//   const userEmail = getCookie('email')
//   const navigate = useNavigate;

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setExpiryTime((prevTime) => {
//         if (prevTime === 0) {
//           setSendAgainDisabled(false);
//           clearInterval(timer);
//           return 60;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleSendAgain = (evt) => {
//     evt.preventDefault();    

//     axios.post(getApiLink(`/api/user/reset_password_request?email=${userEmail}`))
//             .then(({data}) => {
//                 console.log(data);
//                 navigate('/restore-password-code')
//             })
//             .catch((err) => {
//                 console.error(err);
//                 toast.error(err?.response?.data?.detail)
//             })
//   };

//   return (
//     <div className="verification__again">
//       <p>will expire in <span>{formatTime(expiryTime)}</span></p>
//       <button onClick={handleSendAgain} disabled={!sendAgainDisabled}>Send Again</button>
//     </div>
//   );
// };



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import setCookie from '../../../functions/setCookie';
import { getApiLink } from '../../../api/getApiLink';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import getCookie from '../../../functions/getCookie';

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export const VerifiAgain = () => {
  const [expiryTime, setExpiryTime] = useState(60);
  const [sendAgainDisabled, setSendAgainDisabled] = useState(false); // Початково кнопка розблокована
  const userEmail = getCookie('email');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setExpiryTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          setSendAgainDisabled(false); // Розблокувати кнопку, коли таймер закінчується
          return 60;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSendAgain = (evt) => {
    evt.preventDefault();    

    axios.post(getApiLink(`/api/user/reset_password_request?email=${userEmail}`))
            .then(({data}) => {
                console.log(data);
                navigate('/restore-password-code');
                setSendAgainDisabled(true);
                setExpiryTime(60);
            })
            .catch((err) => {
                console.error(err);
                toast.error(err?.response?.data?.detail);
            });
  };

  return (
    <div className="verification__again">
      <p>will expire in <span>{formatTime(expiryTime)}</span></p>
      <button onClick={handleSendAgain} disabled={sendAgainDisabled}>Send Again</button>
    </div>
  );
};
