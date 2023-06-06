
import React, { useContext, useEffect, useRef, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { SocialLogin } from "../../Components/SocialLogin/SocialLogin";

export const Login = () => {
  const {signIn} = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true)
   const captchaRef = useRef(null);
   const navigate = useNavigate();
   const location = useLocation();
   const from = location?.state?.from?.pathname || '/';
    useEffect( ()=>{
        loadCaptchaEnginge(6); 
    },[])

    
    const handleCaptcha = (e) =>{
      // const user_captcha_value = captchaRef.current.value;
      const user_captcha_value = e.target.value;
      

      console.log(user_captcha_value)
      if (validateCaptcha(user_captcha_value)){
        alert('Captcha Matched');
        setDisabled(false)

    }

    else {
        alert('Captcha Does Not Match');
        setDisabled(true)
    }

    }

    const handleLogin = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then( result => {
          const user = result.user;
          console.log(user)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          });
          navigate(from, {replace: true})
        })
    } 
    




  return (
    <div className="">
      <Helmet>
        <title>Bistro Boss || Log In</title>
      </Helmet>
      <form onSubmit={handleLogin} className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card   md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  // ref={captchaRef}
                  onBlur={handleCaptcha}
                  placeholder="enter the captcha above"
                  className="input input-bordered"
                />
                {/* <button onClick={handleCaptcha} className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-2">Validate</button> */}
                
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="log in"
                  disabled={disabled}
                  className="btn btn-primary"
                />
        <p className="text-center"><small>New here create an  <Link to="/signUp">account</Link> </small></p>
              </div>
      <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
