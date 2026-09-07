import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Things from "./pages/Things";
import AddThing from "./pages/AddThing";
import Thing from "./pages/Thing";
import EditThing from "./pages/EditThing";

import "./styles/app.css";
import "./styles/navbar.css";
import "./styles/home.css";
import "./styles/things.css";
import "./styles/thing.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/things"
          element={<Things />}
        />

        <Route
          path="/things/add"
          element={<AddThing />}
        />

        <Route
          path="/things/:thingId/edit"
          element={<EditThing />}
        />

        <Route
          path="/things/:thingId"
          element={<Thing />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;