import ReactDOM from "react-dom";
import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";

const App = () => {
  const theme = useState("peru");
  
    return (
      <ThemeContext.Provider value={theme}>
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      ;
      {/* <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" /> */}
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
    </ThemeContext.Provider>
    );

};

ReactDOM.render(<App />, document.getElementById("root"));
