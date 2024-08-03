import React from "react";

const BasePage = () => {
  return (
    <div className="bg-black h-screen">
      <div className="max-w-[1024px] flex items-center justify-center w-full mt-10 mx-auto h-[80vh] rounded-xl border border-gray-500">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-4xl text-white">Welcome to Next.js!</h1>
          <p className="text-xl p-5 text-slate-600">By: Lee</p>
        </div>
      </div>
    </div>
  );
};

export default BasePage;
