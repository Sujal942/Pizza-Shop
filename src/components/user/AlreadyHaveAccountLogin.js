import React from "react";

const AlreadyHaveAccountLogin = () => {
  return (
    <div>
      <>
        <div className="h-[100vh] w-full flex justify-center p-4">
          <div className="w-[400px] h-[500px] bg-slate-900 text-center rounded-md mt-40">
            <h1 className="p-5 text-3xl text-white">Have Account Login</h1>
            <div className="flex text-left flex-col p-5 gap-2 text-black">
              <label className="text-white">Email</label>
              <input type="text" className="p-1 rounded-md" />
              <br />
              <br />
              <label className="text-white">Password</label>
              <input type="password" className="p-1 rounded-md" />
              <br />
              <button className="text-white bg-green-700 p-2 rounded-md  w-fit">
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AlreadyHaveAccountLogin;
