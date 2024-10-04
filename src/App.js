import { useState } from "react";
import "./App.css";
import Register from "./Register";
import { Instructions } from "./Instructions";

function App() {
  const [showHelp, setShowHelp] = useState(true);

  const openHelp = () => {
    setShowHelp(!showHelp);
  };

  return (
    <div>
      {showHelp && (
        <div className="w-screen h-screen fixed top-0 pt-8 left-0 z-20 bg-black bg-opacity-80 flex flex-col gap-3 items-center justify-center">
          <Instructions />
          <button
            onClick={openHelp}
            className="bg-orange-500 text-white text-sm poppins-semibold w-11/12 lg:w-1/2 rounded-full px-4 py-3 lg:px-5 lg:py-3"
          >
            Close
          </button>
        </div>
      )}
      <Register />
    </div>
  );
}

export default App;
