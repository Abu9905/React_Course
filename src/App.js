
import React from "react";
import ReactDOM from "react-dom/client";
// Header Import
import Header from "./components/Header";
// Body Import
import Body from "./components/Body";



// === Main Container ===//
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
// === End of Main Container ===//

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
