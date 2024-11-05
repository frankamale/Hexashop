import "./App.css";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Aboutus from "./pages/Aboutus";
import ContactUs from "./pages/ContactUs";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/contact" element={<ContactUs />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
