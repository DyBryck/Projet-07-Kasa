import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Footer, Header } from "./components";
import { AboutUs, Error404, Home, Logement } from "./pages";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Navigate replace to="/" />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/logement/:id" element={<Logement />} />
        <Route exact path="/error-404" element={<Error404 />} />
        <Route exact path="/*" element={<Navigate replace to="/error-404" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
