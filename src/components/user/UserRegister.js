import React from "react";

const UserRegister = () => {
  return (
    <>
      <div className="h-[100vh] w-full flex justify-center bg-slate-300 p-4">
        <div className="w-[400px] h-[500px] bg-slate-900 text-center rounded-md mt-40">
          <h1 className="p-5 text-3xl text-white">User Register</h1>
          <div className="flex text-left flex-col p-5 gap-2 text-black">
            <label className="text-white">Name</label>
            <input type="text" className="p-1 rounded-md" />
            <br />
            <br />
            <label className="text-white">Email</label>
            <input type="text" className="p-1 rounded-md" />
            <br />
            <br />
            <label className="text-white">Password</label>
            <input type="password" className="p-1 rounded-md" />
            <span>
              <a
                className="text-blue-400"
                href="/Users/sujaljain/Desktop/Pizza-Shop/src/Components/user/AlreadyHaveAccountLogin.js"
              >
                Already Have a Account
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRegister;
