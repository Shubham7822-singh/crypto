import { createContext, useEffect, useState } from "react";

export const CryptoContext = createContext();

const CryptoContextProvider = (props) => {
const [cryptoList, setCryptoList] = useState([]);
  const [filteredCryptos, setFilteredCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentCurrency, setCurrentCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  // ✅ Move this ABOVE useEffect
  const fetchCryptoData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-eWN4U7rLkm6KH4smi3kvDo42",
      },
    };

    try {
  const res = await fetch(
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currentCurrency.name}`,
  options
);



      const data = await res.json();
      setCryptoList(data);
    } catch (err) {
      console.error("Failed to fetch crypto data:", err);
    }
  };

  // ✅ This will now work because fetchCryptoData is defined above
  useEffect(() => {
    fetchCryptoData();
  }, [currentCurrency]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredCryptos(cryptoList);
    } else {
      setFilteredCryptos(
        cryptoList.filter((c) =>
          c.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [cryptoList, searchTerm]);

  const contextValue = {
    cryptoList,
    filteredCryptos,
    searchTerm,
    setSearchTerm,
    currentCurrency,
    setCurrentCurrency,
  };

  return (
    <CryptoContext.Provider value={contextValue}>
      {props.children}
    </CryptoContext.Provider>
  );
};

export default CryptoContextProvider;
