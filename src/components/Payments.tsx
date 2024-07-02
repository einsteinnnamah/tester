import React, { useContext, useState } from "react";
import Card from "./Card";
import { Context } from "../../context";
import Bank from "./Bank";

const Payments = () => {
  const { donation, setDonation, amount } = useContext(Context);
  const [active, setActive] = useState("One-time");
  const [paymentType, setPaymentType] = useState("Card");

  const [others, setOthers] = useState(false);
  const handleOthers = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setOthers(!others);
  };

  return (
    <div className="w-full">
      <div className="w-full ">
        <h2 className="w-full text-left py-3 text-[#323b4e] text-xl">
          Choose Amount
        </h2>
      </div>
      <div className="p-3 bg-[#f1f2f4] rounded-2xl border-[#525f7a] border-2  flex items-center justify-between gap-2">
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
        <div className="w-full flex flex-wrap justify-center">
          {amount.map(
            (
              x: {
                amount: {
                  toLocaleString: () =>
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                };
              },
              i: React.Key | null | undefined
            ) => (
              <button
                key={i}
                className="flex-grow p-4 px-6 font-bold hover:text-white text-base text-[#525f7a] rounded-lg bg-[#f1f2f4] hover:bg-blue-800 m-2"
                onClick={() => setDonation(x.amount)}
              >
                ${x.amount.toLocaleString()}
              </button>
            )
          )}
        </div>

        {!others && (
          <button
            className="p-3 w-full text-center bg-[#f1f2f4] rounded-lg text-[#525f7a] font-bold text-xl hover:bg-blue-800 hover:text-white"
            onClick={handleOthers}
          >
            Others
          </button>
        )}
        {others && (
          <div className="w-full border-b-2 border-blue-800 p-3 flex items-center justify-center gap-2">
            <span className="inline-block text-3xl text-[#525f7a] ">$</span>
            <input
              type="text"
              className="w-full outline-none text-3xl text-[#525f7a] "
              value={`${donation}`}
              onChange={(e: any) => setDonation(e.target.value)}
            />
          </div>
        )}

        <div className="flex items-center justify-between w-full ">
          <h1 className="w-full flex items-center justify-start text-sm gap-1">
            Amount:{" "}
            <span className="text-sm font-bold text-[#525f7a]">
              ${donation}
            </span>
          </h1>
          <h1 className="w-full flex items-center justify-end text-sm gap-1">
            Fees:{" "}
            <span className="text-sm font-bold text-[#525f7a]">
              ${(donation / 22).toFixed(2)}
            </span>
          </h1>
        </div>
        <div className="w-full">
          <div className="p-1 bg-[#f1f2f4] rounded-2xl border-[#525f7a] border-2 flex items-center justify-between gap-2">
            <button
              className={`w-full rounded-xl p-2 text-s ${
                paymentType === "Card"
                  ? "bg-[#525f7a] text-white"
                  : "text-[#525f7a]"
              }`}
              onClick={() => setPaymentType("Card")}
            >
              Card
            </button>
            <button
              className={`w-full rounded-xl p-2 text-s ${
                paymentType === "Pay-pal"
                  ? "bg-[#525f7a] text-white"
                  : "text-[#525f7a]"
              }`}
              onClick={() => setPaymentType("Pay-pal")}
            >
              Pay-pal
            </button>
            <button
              className={`w-full rounded-xl p-2 text-s ${
                paymentType === "Bank"
                  ? "bg-[#525f7a] text-white"
                  : "text-[#525f7a]"
              }`}
              onClick={() => setPaymentType("Bank")}
            >
              Bank
            </button>
          </div>
          <div className="w-full my-4">
            {paymentType === "Card" && (
              <>
                <Card />
              </>
            )}
            {paymentType === "Bank" && (
              <>
                <Bank />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
