import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setisEmailVerify } from '../Feature/LoginHistorySlice';
import { useNavigate } from 'react-router-dom';

const PhoneEmailVerify = () => {
  const dispatch = useDispatch()
    const navigate = useNavigate()

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.phone.email/verify_email_v1.js';
    script.async = true;
    document.body.appendChild(script);

    window.phoneEmailReceiver = function(userObj) {
      const userJsonUrl = userObj.user_json_url;
      const userEmailId = userObj.user_email_id;

      dispatch(setisEmailVerify({isEmailVerified: true}))
      alert(`SUCCESS !!\nYour email id ${userEmailId} has been authenticated.`);
      navigate("/register")
      // You can submit your form here or redirect user to post login dashboard page
      // Send userJsonUrl to your backend to retrieve user info (i.e. email id) from this URL.
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="pe_verify_email" data-client-id="15536899027872043460"></div>
  );
};

export default PhoneEmailVerify;
