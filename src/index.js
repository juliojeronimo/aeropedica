import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Airports from './routes/airports';
import Airplanes from './routes/airplanes';
import Companies from './routes/companies';
import Equipments from './routes/equipments';
import Passengers from './routes/passengers';
import Bookings from './routes/bookings';
import FlightRoutes from './routes/flightRoutes';
import Flights from './routes/flights';
import States from './routes/states';
import Countries from './routes/countries';



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/airports" element={ <Airports />} />
      <Route path="/airplanes" element={ <Airplanes />} />
      <Route path="/companies" element={ <Companies />} />
      <Route path="/countries" element={ <Countries />} />
      <Route path="/equipments" element={ <Equipments />} />
      <Route path="/bookings" element={ <Bookings />} />
      <Route path="/flight-routes" element={ <FlightRoutes />} />
      <Route path="/flights" element={ <Flights />} />
      <Route path="/states" element={ <States />} />
      <Route path="/passengers" element={ <Passengers />} />

    </Routes>
  </BrowserRouter>,
  rootElement
);