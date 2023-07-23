// import logo from './logo.svg';
import "./App.css";
import Navbar from "./pages/Navbar";
import LoadingPage from "./pages/LoadingContainer";
import Body from "./pages/Body";
import Home from "./pages/Home";
import Changebg from "./pages/Changebg";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Home />} path="/Portfolio"/>
      <Route element={<Home />} path="/home"/>
      <Route element={<Home />} path="/"/>
      <Route element={<Navbar />} path="/navbar"/>
      <Route element={<LoadingPage />} path="/loadingpage"/>
      <Route element={<Body />} path="/body"/>
      <Route element={<Changebg />} path="/changebg"/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
