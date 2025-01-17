import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../context/CoinContext";
import LineChart from "../components/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-a9PQo7NdvpLUsJm67GwVAnmg",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((response) => response.json())
      .then((response) => setCoinData(response))
      .catch((err) => console.error(err));
  };

  const fetchHistoricalData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-a9PQo7NdvpLUsJm67GwVAnmg",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      options
    )
      .then((response) => response.json())
      .then((response) => setHistoricalData(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);

  if (coinData && historicalData) {
    return (
      <div className="coin py-5 ">
        <div className="coinName flex flex-col items-center gap-5 my-20 mx-auto mb-10 ">
          <img className="max-w-24" src={coinData.image.large} alt="" />
          <p>
            <b>
              {coinData.name} ({coinData.symbol.toUpperCase()})
            </b>
          </p>
        </div>
        <div className="coinChart max-w-[80%] mx-auto mb-10 ">
          <LineChart historicalData={historicalData} />
        </div>

        <div className="coinInfo flex flex-col p-4 items-center max-w-[80%] mx-auto gap-1 ">
          <ul className="flex gap-20">
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          <ul className="flex gap-20">
            <li>Current Price</li>
            <li>
              {currency.symbol}
              {coinData.market_data.current_price[currency.name]}
            </li>
          </ul>
          <ul className="flex gap-20">
            <li>Market Cap</li>
            <li>
              {currency.symbol}
              {coinData.market_data.market_cap[currency.name]}
            </li>
          </ul>
          <ul className="flex gap-20">
            <li>24H High</li>
            <li>
              {currency.symbol}
              {coinData.market_data.high_24h[currency.name]}
            </li>
          </ul>
          <ul className="flex gap-20">
            <li>24H Low</li>
            <li>
              {currency.symbol}
              {coinData.market_data.low_24h[currency.name]}
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner flex items-center justify-center min-h-[80vh]">
        <div className="spin w-16 h-16 flex items-center justify-center border-2 border-[#4500c6] rounded-full"></div>
      </div>
    );
  }
};

export default Coin;
