import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./user/page/HomePage";
import Shop from "./user/page/Shop";
import Service from "./user/page/Service";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="homepage" element={<HomePage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="service" element={<Service />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
