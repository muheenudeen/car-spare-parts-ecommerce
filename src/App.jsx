import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Shop from "./user/page/shop";
import Service from "./user/page/service";
import HomePage from "./user/page/HomePage"; 
import Style from "./user/component/outlet.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Style />}>
          <Route index element={<HomePage />} /> 
          <Route path="shop" element={<Shop />} />
          <Route path="service" element={<Service />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
