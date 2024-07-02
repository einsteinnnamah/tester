import { createContext, useState } from "react";
import React from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [donation, setDonation] = useState(0);
  const [bank, setBank] = useState({
    RoutingNo: "",
    AccountNo: "",
    CurrentAccNo: "",
  });

  const handleBank = (e) => {
    const { name, value } = e.target;

    setBank((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const amount = [
    {
      id: 0,
      amount: 24,
    },
    {
      id: 1,
      amount: 47,
    },
    {
      id: 2,
      amount: 100,
    },
    {
      id: 3,
      amount: 250,
    },
    {
      id: 4,
      amount: 500,
    },
    {
      id: 5,
      amount: 1000,
    },
    {
      id: 6,
      amount: 3300,
    },
  ];
  return (
    <Context.Provider
      value={{ donation, setDonation, amount, bank, handleBank }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
