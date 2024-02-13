import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import Recipes from "./pages/Recipes.js";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/RecipeWeb" element={<Home />}></Route>
          <Route path="/recipes" element={<Recipes />}></Route>
        </Routes>
      </div>
    <Footer />
    </Router>
  );
}

export default App;
