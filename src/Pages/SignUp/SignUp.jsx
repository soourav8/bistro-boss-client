import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


export const SignUp = (props) => {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const {createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate()
  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
      .then(() => {
        // Profile updated!
        // ...
        reset();
        Swal.fire(
          'Sign Up successful',
          'That thing is still around?',
          'question'
        )
        navigate('/');
        //if we want to logout after login and redirect to login
        //logOut()
        // .then(()=>{
        //   navigate('/login')
        // })
        // .catch(error =>{
        //   console.log(error.message)
        // })
        
      }).catch((error) => {
        // An error occurred
        // ...
      });
    })
    .catch(error => {
      console.log(error.message)
    })
  };



  

  return (
    <div className="">
      <Helmet>
        <title>Bistro Boss || Sign Up</title>
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)} className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-5xl font-bold">Please sign up</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name",{ required: true })}
                  placeholder="name"
                  className="input input-bordered"
                />
                 {errors.name && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email",{ required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("photoURL",{ required: true })}
                  placeholder="PhotoURL"
                  className="input input-bordered"
                />
                 {errors.photoURL && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password",{ required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/})}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p className="text-red-500">Password must be less than 20 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have one uppercase one lowercase and one number one special character</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" / >
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
