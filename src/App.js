import { useState, useEffect } from "react";
import "./App.css";

// Pages

import Intro from "./pages/Intro/Intro";
import CardTemplate from "./pages/CardTemplate/CardTemplate";

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCardTemplate(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const [showCardTemplate, setShowCardTemplate] = useState(false);

  return (
    <div className="App">
      {!showCardTemplate && <Intro />}
      {showCardTemplate && <CardTemplate />}
    </div>
  );
}

export default App;
