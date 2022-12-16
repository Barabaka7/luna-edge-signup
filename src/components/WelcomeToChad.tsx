import { useState } from "react";

export const WelcomeToChadForm = () => {
  const [isPassShown, setIsPassShown] = useState(false);

  return (
    <div className="flex flex-col h-[700px] w-[480px] items-start px-10 py-16 bg-white welcomeChatShadow rounded-lg">
      <div className="flex items-end">
        <img className="w-8 h-8" src="/img/ChadLogo.svg" alt="Chad Logo" />
        <h1 className="font-eudoxus text-2xl font-bold text-[#20496C] leading-6 pl-1">
          Chad
        </h1>{" "}
      </div>
      <h1 className="font-inter font-semibold text-2xl text-mdDarkBlue-20 leading-6 mt-6">
        Welcome to Chad
      </h1>
      <p className="font-inter font-normal text-sm text-mdShade-40 mt-4">
        Go live in 10 minutes! Our self-service widget empowers your customers
        to manage orders and track shipments 24/7 without driving you crazy.
      </p>
      <form className="flex flex-col items-start gap-2 mt-8">
        <label
          className="font-inter font-mdeium text-xs leading-4 text-mdShade-40"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="rounded w-[400px] h-[45px] bg-inputBg py-2.5 pl-[17px] pr-2.5 font-inter font-normal text-base text-mdShade-80 mb-6
          hover:bg-white hover:border hover:border-grey transition-all duration-300 ease-in"
          id="email"
          name="email"
          type="email"
          placeholder="megachad@trychad.com"
        ></input>

        <label
          className="font-inter font-mdeium text-xs leading-4 text-mdShade-40"
          htmlFor="name"
        >
          Your name
        </label>
        <input
          className="rounded w-[400px] h-[45px] bg-inputBg py-2.5 pl-[17px] pr-2.5 font-inter font-normal text-base text-mdShade-80 mb-6
          hover:bg-white hover:border hover:border-grey transition-all duration-300 ease-in"
          id="name"
          name="name"
          type="text"
          placeholder="Mega Chad"
        ></input>

        <label
          className="font-inter font-mdeium text-xs leading-4 text-mdShade-40"
          htmlFor="password"
        >
          Password
        </label>
        <div className="flex items-center">
          <input
            className="rounded w-[400px] h-[45px] bg-inputBg py-2.5 pl-[17px] pr-2.5 font-inter font-normal text-base text-mdShade-80
            hover:bg-white hover:border hover:border-grey transition-all duration-300 ease-in"
            id="password"
            name="password"
            type={isPassShown ? "text" : "password"}
            placeholder="Enter password"
          ></input>

          <img
            className="w-4 h-4 absolute ml-[376px] hover:cursor-pointer"
            src={isPassShown ? "/img/icon_eye-off.svg" : "/img/icon_eye.svg"}
            alt="Chad Logo"
            onClick={() => setIsPassShown(!isPassShown)}
          />
        </div>

        <button className="rounded w-[400px] h-[43px] bg-buttonBg font-inter font-medium text-sm text-white mb-4 mt-8 hover:bg-black hover:cursor-pointer transition-colors duration-200 ease-out">
          Create account
        </button>
        <span className="font-inter font-normal text-xs text-mdShade-40 self-center">
          Already have an account?
          <a href="#" className="text-buttonBg ml-1">
            Login
          </a>
        </span>
      </form>
    </div>
  );
};
