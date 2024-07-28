import { useContext } from "react";
import { CoinContext } from "../context/CoinContext";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({
          name: "usd",
          symbol: "$",
        });
        break;
      }
      case "eur": {
        setCurrency({
          name: "eur",
          symbol: "€",
        });
        break;
      }
      case "inr": {
        setCurrency({
          name: "inr",
          symbol: "₹",
        });
        break;
      }
      default: {
        setCurrency({
          name: "usd",
          symbol: "$",
        });
        break;
      }
    }
  };

  return (
    <div className="flex items-center justify-between py-4 px-10 border-['#3c3c3c'] border-b-2">
      <img src="/logo.png" alt="logo" />
      <ul className="flex gap-10 ">
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="flex items-center gap-5">
        <select
          className="px-1 py-2 rounded-md bg-transparent"
          onChange={currencyHandler}
        >
          <option className="text-black " value="usd">
            USD
          </option>
          <option className="text-black " value="eur">
            EUR
          </option>
          <option className="text-black " value="inr">
            INR
          </option>
        </select>
        <button className="bg-green-700 px-3 rounded-md cursor-pointer">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
