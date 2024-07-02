import React, { useContext, useState } from "react";
import { Context } from "../../context";

const Card = () => {
  const [cardNumber, setCardNumber] = useState("");
  const { donation, setDonation } = useContext(Context);
  const handleChange = (e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    e.preventDefault();
    setCardNumber(e.target.value);
  };
  return (
    <div className="w-full">
      <form className="w-full">
        <div className="w-full flex items-center justify-between p-3 border border-[#525f7a] rounded-lg">
          <input
            type="text"
            value={cardNumber}
            onChange={handleChange}
            className="w-full placeholder:text-xs outline-none"
            placeholder="Card Number"
          />
        </div>
        <input
          type="submit"
          value={`Donate $${donation} - once`}
          className="w-full text-base bg-[#1f2b948a] my-4 text-white rounded-lg p-3 font-bold outline-none hover:bg-[#1f2b94]"
        />
      </form>
    </div>
  );
};

export default Card;
