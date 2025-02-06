import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import EmployeeList from "../pages/EmployeeList";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employee-list" element={<EmployeeList />} />
    </Routes>
  </Router>
);

export default AppRouter;
