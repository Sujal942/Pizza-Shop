import React from "react";
// import { Link } from "react-router-dom";
// import AlreadyHaveAccountLogin from "./AlreadyHaveAccountLogin";

const UserRegister = () => {
  return (
    <>
      <div className="h-[100vh] w-full flex justify-center  p-4">
        <div className="w-[400px] h-[600px] bg-slate-900 text-center rounded-md mt-24">
          <h1 className="p-5 text-3xl text-white">User Register</h1>
          <div className="flex text-left flex-col p-5 gap-2 text-black">
            <label className="text-white">Name</label>
            <input type="text" className="p-1 rounded-md" />
            <br />
            <label className="text-white">Email</label>
            <input type="email" className="p-1 rounded-md" />
            <br />
            <label className="text-white">Password</label>
            <input type="password" className="p-1 rounded-md" />
            <br />
            <button className="text-white bg-green-700 p-2 rounded-md  w-fit">
              Submit
            </button>
            <br />
            {/* <Router>
              <Routes>
                <Route
                  path="/already-have-account"
                  element={<AlreadyHaveAccountLogin />}
                />
              </Routes>
              <Link
                to="/already-have-account"
                className="text-blue-400 relative"
              >
                Already Have an Account
              </Link>
            </Router> */}

            <a href="/AlreadyHaveAccountLogin" className="text-blue-500">
              Already Have an Account
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRegister;
