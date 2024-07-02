import React, { useContext } from "react";
import { Context } from "../../context";

const Bank = () => {
  const { bank, handleBank, donation } = useContext(Context);
  return (
    <div className="w-full">
      <form className="w-full">
        <input
          type="text"
          name="RoutingNo"
          value={bank.RoutingNo}
          onChange={handleBank}
          placeholder="Routing Number"
          className="w-full placeholder:text-xs outline-none p-2 border border-[#525f7a] rounded-lg"
        />
        <div className="w-full flex items-center justify-between my-2 gap-2">
          <input
            type="text"
            name="AccountNo"
            value={bank.AccountNo}
            onChange={handleBank}
            placeholder="Account Number"
            className="w-full placeholder:text-xs outline-none p-2 border border-[#525f7a] rounded-lg"
          />
          <input
            type="text"
            name="CurrentAccNo"
            value={bank.CurrentAccNo}
            onChange={handleBank}
            placeholder="Current Account Number"
            className="w-full placeholder:text-xs outline-none p-2 border border-[#525f7a] rounded-lg"
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

export default Bank;
