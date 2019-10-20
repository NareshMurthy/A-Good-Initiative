import React from "react";
import "./styles/App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Common/Footer/Footer";

function App() {
  return (
    <div>
      <div>
        <Dashboard></Dashboard>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
