import "./App.css";
import { Drawer } from "./components/drawer/drawer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
