import React, { useState } from "react";

const App = () => {
  // use state lai yesari samjhane, hamile kehi state type of things use garnu parne xa

  //number le chaiyeko number pass garxa and setNumber set those numbers.
  const [number, setNumber] = useState(0); //Any things could be passed in the useState i.e. Number, array, etc

  // To update the number, we gonna call setNumber
  return (
    <div>
      <div className="heading-div">
        <h1 className="top-heading">Making Counter App</h1>
      </div>

      {/* Navbar div  */}
      <div className="nav-div">
        <nav>
          <ul>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Channel</a>
            <a href="">Contribute</a>
          </ul>
        </nav>
      </div>

      {/* Counter code  */}

      {/* react hooks can be used to add, decrease or reset. Basically react hooks are used to */}
      <div className="counter-div">
        <h1 className="counter-value">{number}</h1>

        <button className="button" onClick={() => setNumber(number + 1)}>
          Add
        </button>

        <button className="button" onClick={() => setNumber(number - 1)}>
          Subtract
        </button>

        <button className="button" onClick={() => setNumber(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
