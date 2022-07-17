import React, { useEffect, useState } from "react";
import { useDebounce } from "../../services/debounce";
import "./btnNext.css";

const BtnNext = () => {
  const [value, setValue] = useState("");

  const debounced = useDebounce(value);

  useEffect(() => {
    console.log(debounced);
  }, [debounced]);

  return (
    <>
      <div className="b">
        <div className="b-btn" />
      </div>
      <div className="b-input">
        <label htmlFor="input-search">Input</label>
        <input
        type="text"
          name="input-search"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        {/*         <h4>{value}</h4>
        <h4>{debounced}</h4> */}
      </div>
    </>
  );
};

export default BtnNext;
