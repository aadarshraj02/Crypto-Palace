const Navbar = () => {
  return (
    <div>
      <img src="/logo.png" alt="logo" />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div>
        <select>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Sign up
          <img src="/arrow_icon.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
