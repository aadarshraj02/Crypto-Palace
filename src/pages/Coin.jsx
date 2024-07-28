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
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`,
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
      <div className="coin">
        <div className="coinName">
          <img src={coinData.image.large} alt="" />
          <p>
            <b>
              {coinData.name} ({coinData.symbol.toUpperCase()})
            </b>
          </p>
        </div>
        <div className="coinChart">
          <LineChart historicalData={historicalData} />
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
