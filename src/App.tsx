import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Context from "./Context";

function App() {
  return (
    <>
      <BrowserRouter>
      <Context>
       <Navbar />
       </Context>
      </BrowserRouter>
    </>
  );
}

export default App;
