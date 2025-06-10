import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";/
import Navbar from "./component/Navbar";
import Home from "./component/Home/Home";
import RecentPublished from "./component/all_quiz/RecentPublished";

function App() {
  return (
    <>
      <Navbar />
      <Home />

      <RecentPublished />
    </>
  );
}

export default App;
