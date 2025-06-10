import Navbar from "./component/Navbar";
import Home from "./component/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecentPublishedAnimal from "./component/all_quiz/RecentPublishedAnimal";
import RecentPubliseQuizAllCard from "./component/RecentPubliseQuizAllCard/RecentPubliseQuizAllCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/recent-published/animals"
            element={<RecentPublishedAnimal />}
          />
          {/* Add more routes as needed */}
          {/* <Route path="/quiz/:id" element={<Quiz />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
