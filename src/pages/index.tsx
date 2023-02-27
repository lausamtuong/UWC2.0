import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";


export default function Login() {
  return (
    <div className="grid grid-cols-2 w-screen">
      <div>
        <div className="flex py-[10px] ml-[20px] mt[34px]">
          <img src="/logo.svg" className=""></img>
          <h1 className="font-manrope text-[40px] p-[10px] font-bold">UWC 2.0</h1>
        </div>
        <div className="mx-aut ml-[180px] mt-[30px] ">
          <h1 className="text-[60px] font-bold font-poppins ">Login</h1>
          <div className="my-[20px]">
            <p className="font-manrope text-[37px] font-semibold ">
              Welcome back UWC 2.0
            </p>
            <p className="font-manrope text-nd-text-color font-regular">
              Welcome back! Please enter your details.
            </p>
          </div>
          <form className="w-[400px]">
            <div className="flex flex-col mb-[20px]">
              <label className="font-manrope block mb-[5px] text-nd-text-color font-medium text-[14px]">Email</label>
              <input
                type="email"
                className="text-[16px] font-manrope font-regular bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="test@test.com"
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="font-manrope block mb-[5px] text-nd-text-color font-medium text-[14px]">Password</label>
              <input
                type="password"
                className="text-[16px] font-manrope font-regular bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></input>
            </div>
            <div className="flex items-center mb-4 my-[10px] text-[14px] justify-between">
                <div className="flex items-center">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-manrope text-[14px]">Remember for 30 days</label>
                </div>
                <div>
                  <a className="text-[#475BE8] font-medium font-manrope text-[14px]" href="#">Forgot Password</a>
                </div>
            </div>
            <button className="my-[20px] font-manrope text-[16px] font-semibold text-center w-full bg-[#475BE8] text-[#FCFCFC] rounded-[10px] py-[10px] border-none">Login </button>
            <button className="flex items-center justify-center font-manrope text-[16px] font-semibold text-center w-full bg-[#FCFCFC] text-[#11142D] rounded-[10px] py-[10px] border-2 border-gray-200">
              <img src="/google.svg" className="mr-[10px]"/>
              <p>Login with Google</p>
            </button>
            <div className="flex justify-center mt-[30px] font-manrope text-[14px] font-thin">
              <p className="text-nd-text-color mr-[5px]">Don't have an account?</p>
              <p className="text-[#475BE8]">Sign up</p>
            </div>
          </form>
        </div>
      </div>
      <div>
        <img src="/login-img.svg" className="h-screen w-screen"></img>
      </div>
    </div>
  );
}
