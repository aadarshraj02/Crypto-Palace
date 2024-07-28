import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();

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

  useEffect(() => {
    fetchCoinData();
  }, []);

  return <div></div>;
};

export default Coin;
