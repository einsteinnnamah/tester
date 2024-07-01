import React, { useState } from "react";

const Payments = () => {
  const [active, setActive] = useState("One-time");
  const [donation, setDonation] = useState(0);
  const [others, setOthers] = useState(false);
  const handleOthers = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setOthers(!others);
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
    <div className="w-full">
      <div className="w-full ">
        <h2 className="w-full text-left py-3 text-[#323b4e] text-xl">
          Choose Amount
        </h2>
      </div>
      <div className="p-3 bg-[#f1f2f4] rounded-2xl focus:border-[#525f7a] focus:border flex items-center justify-between gap-2">
        <button
          className={`w-full rounded-xl p-2 text-s ${
            active === "One-time" ? "bg-[#525f7a] text-white" : "text-[#525f7a]"
          }`}
          onClick={() => setActive("One-time")}
        >
          One-time
        </button>
        <button
          className={`w-full rounded-xl p-2 text-s ${
            active === "Monthly" ? "bg-[#525f7a] text-white" : "text-[#525f7a]"
          }`}
          onClick={() => setActive("Monthly")}
        >
          Monthly
        </button>
      </div>
      <div className="flex items-center justify-center flex-wrap w-full my-4 gap-4">
        {amount.map((x, i) => (
          <button
            key={i}
            className="p-4 px-10 font-bold hover:text-white text-base text-[#525f7a] rounded-lg bg-[#f1f2f4] hover:bg-blue-800"
            onClick={() => setDonation(x.amount)}
          >
            ${x.amount}
          </button>
        ))}
        {!others && (
          <button
            className="p-3 w-full text-center bg-[#f1f2f4] rounded-lg text-[#525f7a] font-bold text-xl hover:bg-blue-800 hover:text-white"
            onClick={handleOthers}
          >
            Others
          </button>
        )}
        {others && (
          <input
            type="text"
            className="w-full border-b-2 border-blue-800 p-3 outline-none text-2xl text-[#525f7a] "
            value={`$ ${donation}`}
            onChange={(e: any) => setDonation(e.target.value)}
          />
        )}

        <div className="flex items-center justify-between w-full ">
          <h1 className="w-full flex items-center justify-start text-sm gap-1">
            Amount:{" "}
            <span className="text-sm font-bold text-[#525f7a]">
              ${donation.toFixed(2)}
            </span>
          </h1>
          <h1 className="w-full flex items-center justify-end text-sm gap-1">
            Fees:{" "}
            <span className="text-sm font-bold text-[#525f7a]">
              ${(donation / 22).toFixed(2)}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Payments;
