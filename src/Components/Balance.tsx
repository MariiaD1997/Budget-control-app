import React from "react";

const Balance = () => {
  return (
    <form>
      <h4>Current balance: </h4>
      <label htmlFor="transfer">Transfer to saving account: </label>
      <input type="text" name="transfer" id="transfer" />
      <button>Transfer</button>
    </form>
  );
};

export default Balance;
