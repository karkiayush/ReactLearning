// import React from "react";

// const Diceroller = () => {
//   return (
//     <div>
//       <div className="wrapper-div">
//         <p>Neumorphic effect in css</p>
//         <div className="nue"></div>
//       </div>
//     </div>
//   );
// };

// export default Diceroller;

import React from "react";
import "./style.css";
import { useState } from "react";
// import ReactDOM from "react-dom";

const Diceroller = () => {
  // This method refresh the dice number using the random function given by js math method and returns the randomNumber to setDiceNumber method
  const refreshDiceNumber = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNumber);
  };

  const [diceNumber, setDiceNumber] = useState(6);

  return (
    <div>
      <center>
        <img
          height={300}
          width={300}
          src={require(`./images/${diceNumber}.png`)}
          alt=""
        />
      </center>

      <button onClick={() => refreshDiceNumber()} className="roller-btn">
        Roll
      </button>
    </div>
  );
};

export default Diceroller;
