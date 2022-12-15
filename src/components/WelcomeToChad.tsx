export const WelcomeToChadForm = () => {
  return (
    <div className="flex flex-col h-[700px] w-[480px] items-start px-10 py-16 bg-white welcomeChatShadow rounded-lg">
      <div className="flex items-center">
        <img src="/img/ChadLogo.svg" alt="Chad Logo" />
        <h1>Chad</h1>{" "}
      </div>
      <h1 className="font-inter font-semibold text-2xl text-mdDarkBlue-20 leading-6">
        Welcome to Chad
      </h1>
      <p className="font-inter font-normal text-sm text-mdShade-40">
        Go live in 10 minutes! Our self-service widget empowers your customers
        to manage orders and track shipments 24/7 without driving you crazy.
      </p>
      <form className="flex flex-col items-start gap-2">
        <label
          className="font-inter font-mdeium text-xs leading-4 text-mdShade-40"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="rounded w-[400px] h-[45px] bg-inputBg py-2.5 pl-[17px] pr-2.5 font-inter font-normal text-base text-mdShade-80"
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
          className="rounded w-[400px] h-[45px] bg-inputBg py-2.5 pl-[17px] pr-2.5 font-inter font-normal text-base text-mdShade-80"
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
        <input
          className="rounded w-[400px] h-[45px] bg-inputBg py-2.5 pl-[17px] pr-2.5 font-inter font-normal text-base text-mdShade-80"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
        ></input>

        <button className="rounded w-[400px] h-[43px] bg-buttonBg font-inter font-medium text-sm text-white">
          Create account
        </button>
        <span>
          Already have an account? <a href="#">Login</a>
        </span>
      </form>
    </div>
  );
};
