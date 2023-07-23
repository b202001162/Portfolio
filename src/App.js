// import logo from './logo.svg';
import "./App.css";
import Navbar from "./pages/Navbar";
import LoadingPage from "./pages/LoadingContainer";
import Body from "./pages/Body";

function App() {
  return (
    <>
      <Navbar />
      <LoadingPage />
      <Body />
    </>
  );
}

export default App;
