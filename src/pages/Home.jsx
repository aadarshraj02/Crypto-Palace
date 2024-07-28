import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../context/CoinContext";

const Home = () => {
  const headings = ["#", "Coins", "Price", "24H Change", "Market Cap"];

  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="pb-20 py-4">
      <div className="hero max-w-[800px] mx-auto my-10 sm:my-20 flex flex-col text-center gap-8 ">
        <h1 className=" text-xl sm:text-[4vw] leading-none font-semibold">
          Largest <br /> Crypto Marketplace
        </h1>
        <p className=" text-[#e3e3e3] leading-none text-center px-10">
          Welcome to the world largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>
        <form className="p-2 bg-white rounded-md text-xl flex flex-col sm:flex-row justify-between items-center gap-3 max-w-[80%] mx-auto">
          <input
            className="flex-1 text-lg outline-none border-none pl-2 text-black"
            type="text"
            placeholder="search crypto.."
          />
          <button
            className="bg-[#7927ff] text-white text-lg px-8 py-2 rounded-md w-full"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div className="crypto-table max-w-[1000px] m-auto rounded-md bg-[linear-gradient(rgba(84,3,255,0.15),rgba(105,2,153,0.15))] py-2">
        <div className="table-layout grid grid-cols-[0.5fr_2fr_1fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] px-5 py-4 items-center border-b-2 border-[#3c3c3c]">
          {headings.map((heading, index) => (
            <p
              className={`font-bold text-lg text-zinc-300 ${
                index === 3
                  ? "text-center hidden sm:block"
                  : index === 4
                  ? "text-right hidden md:block"
                  : "block"
              }`}
              key={index}
            >
              {heading}
            </p>
          ))}
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <div
            className="table-layout grid grid-cols-[0.5fr_2fr_1fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] px-5 py-4 items-center border-b-2 border-[#3c3c3c]"
            key={index}
          >
            <p>{item.market_cap_rank}</p>
            <div className="flex items-center gap-3">
              <img className="w-8 hidden md:block" src={item.image} alt="" />
              <p>{item.name + "-" + item.symbol}</p>
            </div>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={`text-center rounded-full py-1 hidden sm:block ${
                item.price_change_percentage_24h > 0
                  ? "bg-green-500"
                  : "bg-red-600"
              }`}
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100} %
            </p>
            <p className="text-right hidden md:block">
              {currency.symbol} {item.market_cap.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
