const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 px-10">
      <img src="/logo.png" alt="logo" />
      <ul className="flex gap-10 ">
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="flex items-center gap-5">
        <select className="text-black">
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button className="bg-green-700 px-3 rounded-md cursor-pointer">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
