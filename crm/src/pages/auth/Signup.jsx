const Signup = () => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="card bg-blue-500 w-96 shadow-sm">
        <div className="card-body ">
          <h2 className="card-title text-white text-3xl text-center ">SignUp</h2>
          <input autoComplete="one-time-code" type="text" placeholder="User id" className="w-full input text-white input-secondary" />
          <input autoComplete="one-time-code" type="email" placeholder="Email" className="w-full input text-white input-secondary" />
          <input autoComplete="one-time-code" type="password" placeholder="password" className="w-full input text-white input-secondary" />
          
          <details className="dropdown w-full">
            <summary className="btn m-1 text-white">User Type</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li className="text-white">
                <a>Customer</a>
              </li>
              <li className="text-white">
                <a>Engineer</a>
              </li>
            </ul>
          </details>
          
          <div className="card-actions">
            <button class="btn btn-secondary w-full">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;