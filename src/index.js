import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Airplanes from './routes/airplanes'
import Passengers from "./routes/passengers";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/airplanes" element={ <Airplanes />} />
      <Route path="/passengers" element={ <Passengers />} />

    </Routes>
  </BrowserRouter>,
  rootElement
);