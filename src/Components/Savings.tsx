import React, { useState } from "react";
import { SavingProp } from "../types/balance";

const Savings = ({ saving }: SavingProp) => {
  const [target, setTarget] = useState(0);
  const targetHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTarget(Number(event.target.value));
  };
  return (
    <div>
      <h4>Current saving: {saving}</h4>
      <form>
        <label htmlFor="target">Set target</label>
        <input
          type="number"
          name="target"
          id="target"
          onChange={targetHandler}
        />
        <button>Reset</button>
        <h4>Target: {target}</h4>
        <h4>Progress: </h4>
        <progress value={saving} max={target}></progress>
      </form>
    </div>
  );
};

export default Savings;
