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
      <div className="hero max-w-[600px] mx-auto my-20 flex flex-col text-center gap-8">
        <h1 className="text-[4vw] leading-none">
          Largest <br /> Crypto Marketplace
        </h1>
        <p className=" text-[#e3e3e3] leading-none text-center">
          Welcome to the world largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>
        <form className="p-2 bg-white rounded-md text-xl flex justify-between items-center gap-3">
          <input
            className="flex-1 text-lg outline-none border-none pl-2 text-black"
            type="text"
            placeholder="search crypto.."
          />
          <button
            className="bg-[#7927ff] text-white text-lg px-8 py-2 rounded-md"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div className="crypto-table max-w-[800px] m-auto rounded-md bg-[linear-gradient(rgba(84,3,255,0.15),rgba(105,2,153,0.15))]">
        <div className="table-layout grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] px-5 py-4 items-center border-b-2 border-[#3c3c3c]">
          {headings.map((heading, index) => (
            <p
              className={
                index === 3 ? "text-center" : index === 4 ? "text-right" : ""
              }
              key={index}
            >
              {heading}
            </p>
          ))}
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <div
            className="table-layout grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] px-5 py-4 items-center border-b-2 border-[#3c3c3c]"
            key={index}
          >
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="" />
              <p>{item.name + "-" + item.symbol}</p>
            </div>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p className="text-center">
              {Math.floor(item.price_change_percentage_24h * 100) / 100} %
            </p>
            <p className="text-right">
              {" "}
              {currency.symbol}
              {item.market_cap.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
