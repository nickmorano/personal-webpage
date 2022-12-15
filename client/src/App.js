import React, { useState } from "react";
import axios from "axios";

const onClickButton = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_ROUTE}/api`
  );
  return response;
};

const App = () => {
  const [result, setResult] = useState(null);

  return (
    <div>
      <button
        onClick={async () => {
          const res = await onClickButton();
          setResult(res?.data.data);
        }}
      >
        Test Me
      </button>
      <div>{result && <span>{result}</span>}</div>
    </div>
  );
};

export default App;