import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="card bg-blue-500 w-96 shadow-sm">
        <div className="card-body ">
          <h2 className="card-title text-white text-3xl text-center ">Login</h2>
          <label htmlFor="email">Email</label>
          <input
            autoComplete="one-time-code"
            type="text"
            placeholder="Email"
            className="w-full input text-white input-secondary"
          />
          <input
            autoComplete="one-time-code"
            type="password"
            placeholder="password"
            className="w-full input text-white input-secondary"
          />

          <div className="card-actions">
            <button class="btn btn-secondary w-full">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
