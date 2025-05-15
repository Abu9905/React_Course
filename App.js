import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="heading" className="head">
    Abu shama 🚀
  </h1>
);

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1 className="heading">Namaste React Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

